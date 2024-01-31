"use client";
import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./themeContext";
import { navbarItems } from "@/content/navbarItems";

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
    { d: "M124.848 0.814453V773.814", length: 773 },
    { d: "M277.498 0.814453V773.814", length: 773 },
    { d: "M465 0.814453V773.814", length: 773 },
    { d: "M697 0.814453V773.814", length: 773 },
    { d: "M1003.3 0.814453V773.814", length: 773 },
    { d: "M1377 0.814453V773.814", length: 773 },
    { d: "M1 136.267H1377", length: 1377 },
    { d: "M1 303.871H1377", length: 1377 },
    { d: "M1 513.378H1377", length: 1377 },
    { d: "M1 773.814H1377", length: 1377 },
  ]);

  const [mobilePaths, setMobilePaths] = useState<Path[]>([
    { d: "M73.3398 1V583.649", length: 585 },
    { d: "M180.998 1V583.649", length: 585 },
    { d: "M360.996 103.098H1", length: 585 },
    { d: "M360.996 229.43H1", length: 360 },
    { d: "M360.996 387.345H1", length: 360 },
    { d: "M1 1V583.649", length: 585 },
    { d: "M1 583.649H360.996", length: 585 },
    { d: "M360.996 583.649V1", length: 585 },
    { d: "M360.996 1H1", length: 585 },
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
    <div className="h-screen md:h-[60vh] lg:h-screen px-4 pt-[67px] lg:px-8 max-w-screen-2xl md:mx-auto pb-4 relative md:pt-[96px] grid grid-cols-mobileHeroGridCols grid-rows-mobileHeroGridRows md:grid-cols-heroGridCols md:grid-rows-heroGridRows">
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
      {!mobileMenuOpen ? <Title /> : <MobileMenu />}
    </div>
  );
}

function MobileMenu() {
  return (
    <nav className="text-[36px] leading-[36px] uppercase z-10 row-start-2 mt--2">
      <ul>
        {navbarItems.map(({ text, url }) => (
          <a className="" key={url} href={url}>
            <li className="mb-8">{text}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
}

function Title() {
  const hexagonInitialX = -768;
  const polygonInitialX = 768 / 2;

  const { theme } = useTheme();

  return (
    <>
      <h1 className="absolute top-[29%] left-[32px] right-[32px] uppercase text-[9vw] leading-[7vw] 2xl:text-[145px] 2xl:leading-[145px]">
        <span className="inline w-full pl-[15%]">a bridge</span>
        <span className="inline-flex align-baseline h-[.75em] px-4">
          <motion.svg
            className="h-full w-auto dark:invert  mix-blend-difference"
            width="100%"
            height="100%"
            viewBox="0 0 114 99"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ x: hexagonInitialX, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.5 }}
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
            transition={{ duration: 2.5 }}
          >
            <path
              d="M52.5 0L105 37.8146L84.9468 99H20.0532L0 37.8146L52.5 0Z"
              fill={theme === "dark" ? "black" : "white"}
            />
          </motion.svg>
        </span>
        <span className="block right flex justify-end w-full">
          From concept
        </span>
        <span className="block">to reality.</span>
      </h1>
      <div className="absolute bottom-[16px] left-[32px] flex flex-col text-[1.5vw] leading-[1.5vw] font-[300] 2xl:text-[30px] 2xl:leading-[30px]">
        <p className="max-w-[30%] text-left pb-5">
          We are Outcome Creative. A strategic branding, design, and business
          development shop that toes the line between solving for creativity and
          growth.
        </p>
        <button className="uppercase bg-black text-white p-5 flex-shrink w-[202px] 2xl:w-[300px] border-0 dark:bg-white dark:text-black 2xl:text-[30px] 2xl:leading-[30px]">
          Work with us
        </button>
      </div>
      <img
        src="/large-arrow.svg"
        className="absolute bottom-[16px] right-[32px] dark:invert"
      />
    </>
  );
}
