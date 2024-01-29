"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const paths = [
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
  ];

  const [pathColor, setPathColor] = useState<string>();

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setPathColor("#313131");
    } else {
      setPathColor("#D7D7D7");
    }
  }, []);

  return (
    <div className="md:h-aboveFold-md px-4 lg:px-8 max-w-screen-2xl mx-auto md:pb-4 relative grid grid-cols-heroGridCols grid-rows-heroGridRows md:pb-4">
      <div className="z-50 col-start-1 row-start-1 col-end-4 font-medium uppercase text-[2vw] leading-[1.75vw] 2xl:text-[36px] 2xl:leading-[36px]">
        transform your vision into reality with us.
      </div>
      <div className="row-span-1 row-end-3 col-start-3 my-auto pl-10 uppercase text-[5vw] leading-[4.5vw] 2xl:text-[80px] 2xl:leading-[80px] z-10">
        contact@
        <br />
        outcomecreative.com
      </div>
      <div className="col-start-1 row-start-4 col-end-3 flex flex-col underline font-medium text-[14px] uppercase pt-1 z-10">
        <a>
          <p>instagram ↗</p>
        </a>
        <a>
          <p>twitter ↗</p>
        </a>
      </div>
      <div className="col-start-2 row-start-4 pl-[8vw] flex flex-col">
        {/* <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p> */}
      </div>
      <img
        src="/large-arrow.svg"
        className="absolute md:bottom-[16px] right-[32px] rotate-180 dark:invert"
      />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1378 775"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 right-0 px-4 lg:px-8 md:pb-4"
      >
        {paths.map(({ d }) => (
          <path d={d} key={d} stroke={pathColor} />
        ))}
      </svg>
      <p className="absolute md:bottom-[16px] left-[32px] underline font-medium text-[14px] uppercase">
        privacy policy
      </p>
      <p className="absolute md:bottom-[16px] left-[30%] underline font-light text-[14px] ">
        Copyright © 2024 OUTCOME CREATIVE
      </p>
    </div>
  );
}
