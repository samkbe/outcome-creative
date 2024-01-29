"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Path {
  d: string;
  length: number;
}

export default function Hero() {
  const draw = {
    hidden: (length: number) => ({
      strokeDasharray: length,
      strokeDashoffset: length,
      stroke: "#D7D7D7",
    }),
    visible: (length: number, index: number) => ({
      strokeDashoffset: 0,
      strokeDasharray: length,
      stroke: "#D7D7D7",
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
      const newPaths = paths.map((path, index) => {
        const svgPath = svgRef.current?.querySelectorAll("path")[index];
        return svgPath ? { ...path, length: svgPath.getTotalLength() } : path;
      });
      setPaths(newPaths);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      updatePathData();
    }, 1000);

    window.addEventListener("resize", updatePathData);

    return () => {
      window.removeEventListener("resize", updatePathData);
    };
  }, []);

  return (
    <div className="md:h-aboveFold-md px-4 lg:px-8 max-w-screen-2xl mx-auto md:pb-4 relative">
      <svg
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
      <Title />
    </div>
  );
}

function Title() {
  return (
    <>
      <h1 className="absolute top-[19%] left-[32px] right-[32px] uppercase text-[9vw] leading-[7vw] 2xl:text-[145px] 2xl:leading-[145px]">
        <span className="inline w-full pl-[15%]">a bridge</span>
        <span className="inline-block align-baseline h-[.75em] px-4">
          <img className="h-full w-auto" src="/favicon.svg" />
        </span>
        <span className="block right flex justify-end w-full">
          From concept
        </span>
        <span className="block">to reality.</span>
      </h1>
      <div className="absolute bottom-[16px] left-[32px] flex flex-col text-[22px] leading-[22px] font-[300]">
        <p className="max-w-[448px] text-left pb-5">
          Branding, content, and websites that go beyond creativity to solve
          actual business problems and resonate with your audience to drive
          brand engagement.
        </p>
        <button className="uppercase bg-black text-white p-5 flex-shrink w-[202px] border-0">
          Work with us
        </button>
      </div>
      <img
        src="/large-arrow.svg"
        className="absolute bottom-[16px] right-[32px]"
      />
    </>
  );
}
