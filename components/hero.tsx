"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./themeContext";

type Path = {
  d: string;
  length: number;
};

export default function Hero({ loading }: { loading: boolean }) {
  const [containerWidth, setContainerWidth] = useState(0);

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

  const svgRef = useRef<SVGSVGElement>(null);

  const updatePathData = () => {
    if (svgRef.current) {
      setContainerWidth(svgRef.current.clientWidth);

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
    <div className="md:h-[100vh] px-4 lg:px-8 max-w-screen-2xl mx-auto md:pb-4 relative md:pt-[96px] grid grid-cols-heroGridCols grid-rows-heroGridRows">
      <svg
        className="absolute top-0 left-0 right-0 px-4 lg:px-8 md:pb-4 md:pt-[96px]"
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
              stroke-miterlimit="10"
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
      <Title containerWidth={containerWidth} />
    </div>
  );
}

function Title({ containerWidth }: { containerWidth: number }) {
  const hexagonInitialX = -768;
  const polygonInitialX = 768 / 2;

  const { theme } = useTheme();

  return (
    <>
      <h1 className="absolute top-[28%] left-[32px] right-[32px] uppercase text-[9vw] leading-[7vw] 2xl:text-[145px] 2xl:leading-[145px]">
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
      <div className="absolute bottom-[16px] left-[32px] flex flex-col text-[22px] leading-[22px] font-[300]">
        <p className="max-w-[448px] text-left pb-5">
          We are Outcome Creative. A strategic branding, design, and business
          development shop that toes the line between solving for creativity and
          growth.
        </p>
        <button className="uppercase bg-black text-white p-5 flex-shrink w-[202px] border-0 dark:bg-white dark:text-black">
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
