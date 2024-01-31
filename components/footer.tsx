"use client";
import { useTheme } from "../context/themeContext";

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

  const mobilePaths = [
    { d: "M73.3398 1V583.649", length: 585 },
    { d: "M180.998 1V583.649", length: 585 },
    { d: "M360.996 103.098H1", length: 585 },
    { d: "M360.996 229.43H1", length: 360 },
    { d: "M360.996 387.345H1", length: 360 },
    { d: "M1 1V583.649", length: 585 },
    { d: "M1 583.649H360.996", length: 585 },
    { d: "M360.996 583.649V1", length: 585 },
    { d: "M360.996 1H1", length: 585 },
  ];

  const { theme } = useTheme();

  return (
    <div className="h-aboveFold md:h-aboveFold-md px-4 lg:px-8 max-w-screen-2xl mx-auto grid grid-cols-mobileHeroGridCols grid-rows-mobileHeroGridRows md:grid-cols-heroGridCols md:grid-rows-heroGridRows pb-4 relative">
      <div className="z-50 col-start-1 row-start-1 col-end-4 font-medium uppercase text-[24px] md:text-[2vw] md:leading-[1.75vw] 2xl:text-[36px] 2xl:leading-[36px]">
        connect with us today.
      </div>
      <div className="col-start-1 col-end-4 row-start-2 md:row-span-1 md:row-end-3 md:col-start-3 my-auto md:pl-10 uppercase text-[30px] leading-[30px] md:text-[5vw] md:leading-[4.5vw] 2xl:text-[80px] 2xl:leading-[80px] z-10">
        contact@
        <br />
        outcomecreative.com
      </div>
      <div className="col-start-1 row-start-3 md:row-start-4 col-end-3 flex flex-col underline font-medium text-[14px] uppercase my-auto md:my-0 z-10 md:mt-[-8px]">
        <a>
          <p>instagram ↗</p>
        </a>
        <a>
          <p>twitter ↗</p>
        </a>
      </div>
      <div className="col-start-2 row-start-4 pl-[8vw] flex flex-col"></div>
      <img
        src="/large-arrow.svg"
        className="absolute h-[35px] w-[35px] md:h-auto md:w-auto bottom-[18px] md:bottom-[16px] right-[16px] lg:right-[32px] rotate-180 dark:invert"
      />
      <svg
        className="absolute inset-0 px-4 lg:px-8 md:pb-4 hidden md:block"
        width="100%"
        height="100%"
        viewBox="0 0 1378 775"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {paths.map(({ d }) => (
          <path
            d={d}
            key={d}
            stroke={theme === "dark" ? "#313131" : "#D7D7D7"}
          />
        ))}
      </svg>
      <svg
        className="md:hidden absolute inset-0 px-4 pb-4"
        width="100%"
        height="100%"
        viewBox="0 0 362 585"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {mobilePaths.map(({ d }) => {
          return (
            <path
              d={d}
              key={d}
              stroke={theme === "dark" ? "#313131" : "#D7D7D7"}
            />
          );
        })}
      </svg>
      <div className="absolute bottom-[16px] left-[16px] lg:left-[32px] text-[14px] uppercase max-w-[150px] md:max-w-[60%] md:w-[60%] md:flex md:justify-between ">
        <p className="font-medium underline">privacy policy</p>
        <p className="font-light">Copyright © 2024 OUTCOME CREATIVE</p>
      </div>
    </div>
  );
}
