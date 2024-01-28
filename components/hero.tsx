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
      strokeDashoffset: length, // Set to the same as the dasharray length
      stroke: "#D7D7D7",
    }),
    visible: (length: number) => ({
      strokeDashoffset: 0,
      strokeDasharray: length,
      stroke: "#D7D7D7",
      transition: { duration: 5.3 },
    }),
  };

  const [paths, setPaths] = useState<Path[]>([
    {
      d: "M124.848 0.814453V773.814",
      length: 773,
    },
    {
      d: "M277.498 0.814453V773.814",
      length: 773,
    },
    {
      d: "M465 0.814453V773.814",
      length: 773,
    },
    {
      d: "M697 0.814453V773.814",
      length: 773,
    },
    {
      d: "M1003.3 0.814453V773.814",
      length: 773,
    },
    {
      d: "M1377 136.267H1",
      length: 1377,
    },
    {
      d: "M1377 303.871H1",
      length: 1377,
    },
    {
      d: "M1377 513.378H1",
      length: 1377,
    },
    {
      d: "M1 0.814453H1377",
      length: 1377,
    },
    {
      d: "M1 773.814H1377",
      length: 1377,
    },
    {
      d: "M1 0.814453V773.814",
      length: 773,
    },
    {
      d: "M1377 0.814453V773.814",
      length: 773,
    },
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

    // updatePathData();

    window.addEventListener("resize", updatePathData);

    return () => {
      window.removeEventListener("resize", updatePathData);
    };
  }, []);

  return (
    <div className="md:h-aboveFold-md px-4 lg:px-8 max-w-screen-2xl mx-auto md:pb-4">
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
                visible: draw.visible(path.length),
              }}
              initial="hidden"
              animate="visible"
            />
          );
        })}
      </svg>
    </div>
  );
}
