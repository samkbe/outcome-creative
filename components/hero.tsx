"use client";
import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/themeContext";
import { navbarItems } from "@/content/homeContent";
import { useScrollContext } from "../context/scrollBarContext";

type Path = {
  d: string;
  length: number;
};

type HamburgerMenuProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};
interface HeroProps extends HamburgerMenuProps {
  loading: boolean;
}

export default function Hero({ loading, mobileMenuOpen }: HeroProps) {
  const { theme } = useTheme();

  const draw = {
    hidden: (length: number) => ({
      strokeDasharray: length,
      strokeDashoffset: length,
    }),
    visible: (length: number, index: number) => ({
      strokeDashoffset: 0,
      strokeDasharray: length,
      transition: { duration: 2 + index / 2 },
    }),
  };

  const [paths, setPaths] = useState<Path[]>([
    { d: "M1 0.814453H1377", length: 1377 },
    { d: "M1 0.814453V773.814", length: 773 },
    { d: "M123.93 0.814453V773.814", length: 773 },
    { d: "M275.40 0.814453V773.814", length: 773 },
    { d: "M468.18 0.814453V773.814", length: 773 },
    { d: "M702.27 0.814453V773.814", length: 773 },
    { d: "M1005.21 0.814453V773.814", length: 773 },
    { d: "M1377 0.814453V773.814", length: 773 },
    { d: "M1 139.29H1377", length: 1377 },
    { d: "M1 309.53H1377", length: 1377 },
    { d: "M1 518.46H1377", length: 1377 },
    { d: "M1 773.814H1377", length: 1377 },
  ]);

  const [mobilePaths, setMobilePaths] = useState<Path[]>([
    { d: "M1 1V583.649", length: 585 },
    { d: "M75.81 1V583.649", length: 585 },
    { d: "M187.72 1V583.649", length: 585 },
    { d: "M360.996 1V583.649", length: 585 },
    { d: "M1 1H360.996", length: 360.996 }, // Corrected for left to right animation
    { d: "M1 105.06H360.996", length: 360 },
    { d: "M1 233.46H360.996", length: 360 },
    { d: "M1 391.04H360.996", length: 360 },
    { d: "M1 583.649H360.996", length: 585 },
  ]);

  const svgRef = useRef<SVGSVGElement>(null);
  const mobileSvgRef = useRef<SVGSVGElement>(null);

  const updatePathData = () => {
    if (svgRef.current) {
      const newPaths = paths.map((path, index) => {
        const svgPath = svgRef.current?.querySelectorAll("path")[index];
        return svgPath ? { ...path, length: svgPath.getTotalLength() } : path;
      });
      setPaths(newPaths);
    }
  };

  useEffect(() => {
    updatePathData();

    window.addEventListener("resize", updatePathData);

    return () => {
      window.removeEventListener("resize", updatePathData);
    };
  }, []);

  return (
    <div
      id="header"
      className="h-[100dvh] md:h-[80vh] lg:h-screen px-4 pt-[67px] lg:px-8 max-w-screen-2xl md:mx-auto pb-4 relative md:pt-[96px] grid grid-cols-mobileHeroGridCols grid-rows-mobileHeroGridRows md:grid-cols-heroGridCols md:grid-rows-heroGridRows"
    >
      <svg
        className="md:hidden pt-[67px] absolute top-0 left-0 right-0 px-4 pb-4"
        ref={mobileSvgRef}
        width="100%"
        height="100%"
        viewBox="0 0 362 585"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {mobilePaths.map((path, index) => {
          return (
            <motion.path
              stroke={theme === "dark" ? "#313131" : "#D7D7D7"}
              key={index}
              d={path.d}
              strokeMiterlimit="10"
              variants={{
                hidden: draw.hidden(path.length),
                visible: draw.visible(path.length, index),
              }}
              initial="hidden"
              animate="visible"
            />
          );
        })}
      </svg>

      <svg
        className="absolute top-0 left-0 right-0 px-8 pb-4 pt-[96px] hidden md:block"
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1378 775"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {paths.map((path, index) => {
          return (
            <motion.path
              stroke={theme === "dark" ? "#313131" : "#D7D7D7"}
              key={index}
              d={path.d}
              strokeMiterlimit="10"
              variants={{
                hidden: draw.hidden(path.length),
                visible: draw.visible(path.length, index),
              }}
              initial="hidden"
              animate="visible"
            />
          );
        })}
      </svg>
      <Title mobileMenuOpen={mobileMenuOpen} loading={loading} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
    </div>
  );
}

function MobileMenu({ mobileMenuOpen }: { mobileMenuOpen: boolean }) {
  const scrollbar = useScrollContext();

  return (
    <nav
      className={`${
        !mobileMenuOpen && "hidden opacity-0"
      } text-[36px] leading-[36px] uppercase z-10 row-start-2 mt--2 md:hidden opacity-100 transition-opacity duration-300 ease-in-out`}
    >
      <ul>
        {navbarItems.map(({ text, url }) => (
          <li
            key={text}
            onClick={() => {
              const element = document.getElementById(url);
              if (element) scrollbar?.scrollIntoView(element);
            }}
            className="mb-8"
          >
            {text}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Title({
  mobileMenuOpen,
  loading,
}: {
  mobileMenuOpen: boolean;
  loading: boolean;
}) {
  const hexagonInitialX = -768;
  const polygonInitialX = 768 / 2;

  const { theme } = useTheme();

  const [percentValue, setPercentValue] = useState(0);

  const scrollbar = useScrollContext();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentValue((currentPercent) => {
        const nextPercent = currentPercent + 1;
        if (nextPercent >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return nextPercent;
      });
    }, 40);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1
        className={`${
          mobileMenuOpen && "hidden"
        } absolute top-[27%] md:top-[29%] left-[16px] right-[16px] md:left-[32px] md:right-[32px] uppercase text-[40px] leading-[40px] md:text-[9vw] md:leading-[7vw] 2xl:text-[145px] 2xl:leading-[145px]`}
      >
        <motion.span
          className={`${
            loading ? "invisible opacity-0" : "visible opacity-100"
          } inline w-full md:pl-[15%] transition-opacity duration-300`}
        >
          a bridge
        </motion.span>
        <span className="inline-flex align-baseline h-[.75em] px-1 md:px-4">
          <motion.svg
            className="h-full w-auto dark:invert  mix-blend-difference"
            width="100%"
            height="100%"
            viewBox="0 0 114 99"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ x: hexagonInitialX, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3.9 }}
          >
            <path
              d="M113.324 49.5L85.0742 99L28.5742 99L0.324232 49.5L28.5742 -3.70454e-06L85.0742 -1.23485e-06L113.324 49.5Z"
              fill={theme === "dark" ? "black" : "white"}
            />
          </motion.svg>
          <motion.svg
            className="h-full w-auto dark:invert ml-[-22%] mix-blend-difference"
            width="100%"
            height="100%"
            viewBox="0 0 114 99"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ x: polygonInitialX, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3.9 }}
          >
            <path
              d="M52.5 0L105 37.8146L84.9468 99H20.0532L0 37.8146L52.5 0Z"
              fill={theme === "dark" ? "black" : "white"}
            />
          </motion.svg>
        </span>
        {!loading && (
          <>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="block right flex md:justify-end w-full"
            >
              From concept
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="block flex justify-end w-full md:justify-start"
            >
              to reality.
            </motion.span>
          </>
        )}
      </h1>
      {!loading ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute bottom-[16px] left-[16px] md:left-[32px] flex flex-col text-[16px] md:text-[1.5vw] md:leading-[1.5vw] font-[300] 2xl:text-[30px] 2xl:leading-[30px]"
          >
            <p className="max-w-[50%] md:max-w-[30%] text-left pb-5">
              We are Outcome Creative. A strategic branding, design, and
              business development shop that toes the line between solving for
              creativity and growth.
            </p>
            <button
              onClick={() => {
                const footer = document.getElementById("footer");
                if (footer) scrollbar?.scrollIntoView(footer);
              }}
              className="hover:scale-95 transition-transform uppercase bg-black text-white p-5 flex-shrink w-[202px] 2xl:w-[300px] border-0 dark:bg-white dark:text-black 2xl:text-[30px] 2xl:leading-[30px]"
            >
              Work with us
            </button>
          </motion.div>
          <img
            alt="arrow-icon"
            onClick={() => {
              const footer = document.getElementById("footer");
              if (footer) scrollbar?.scrollIntoView(footer);
            }}
            src="/large-arrow.svg"
            className="cursor-pointer hover:scale-95 transition-transform h-[35px] w-auto md:h-auto absolute bottom-[16px] right-[16px] md:right-[32px] dark:invert"
          />
        </>
      ) : (
        <>
          <p
            className={`${
              loading ? "animate-pulse" : ""
            } text-[36px] leading-[36px] uppercase absolute bottom-[16px] left-[16px] md:left-[32px]`}
          >
            loading...
          </p>
          <p className="text-[36px] leading-[36px] uppercase absolute bottom-[16px] right-[16px] md:right-[32px]">
            {percentValue}%
          </p>
        </>
      )}
    </>
  );
}
