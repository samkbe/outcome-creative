"use client";
import { useState, Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { accordionItems } from "@/content/homeContent";
import { useScrollContext } from "../context/scrollBarContext";

type AccordianItemProps = {
  openIndex: number | null;
  title: string;
  secondaryTitle: string;
  subtext: string;
  isSelected: boolean;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
  index: number;
  symbolUrl: string;
  character: string[];
};

export default function Accordian() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollbar = useScrollContext();
  const ref = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0);
  const [endY, setEndY] = useState(0);
  const scrollYMotion = useMotionValue(0);

  useEffect(() => {
    if (!scrollbar) return;

    const calculatePositions = () => {
      if (!ref.current || !scrollbar) return;

      const rect = ref.current.getBoundingClientRect();

      const secRect = document.getElementById("about")?.getBoundingClientRect();

      const scrollTop = scrollbar.scrollTop;

      if (secRect) setStartY(secRect.top + scrollTop - 200);
      setEndY(rect.bottom + scrollTop - 400);
    };

    const timeoutId = setTimeout(() => calculatePositions(), 4002);

    window.addEventListener("resize", calculatePositions);

    const scrollListener = () => {
      if (scrollbar) scrollYMotion.set(scrollbar.scrollTop);
    };

    scrollbar.addListener(scrollListener);

    return () => {
      scrollbar.removeListener(scrollListener);
      window.removeEventListener("resize", calculatePositions);
      clearTimeout(timeoutId);
    };
  }, [scrollbar, scrollYMotion, ref]);

  const width = useTransform(scrollYMotion, [startY, endY], ["20%", "100%"]);

  function handleClick(index: number) {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <div ref={ref} id="services" className="md:pt-36 pt-16">
      {accordionItems.map(
        ({ title, secondaryTitle, subtext, symbolUrl, character }, index) => {
          return (
            <section
              key={title}
              onClick={() => handleClick(index)}
              className="flex flex-col w-full items-center"
            >
              <motion.div
                style={{ width }}
                className={`h-[1px] bg-black dark:bg-white self-start`}
              />
              <div className="my-7 lg:my-4 px-4 lg:px-8 flex md:flex-row flex-col relative justify-between max-w-screen-2xl w-full">
                <h3 className="uppercase font-medium text-base md:w-[40%] text-[16px] w-full">
                  {`${
                    index === openIndex ? character[1] : character[0]
                  } ${title}`}
                </h3>
                <AnimatePresence>
                  {index === openIndex && (
                    <motion.section
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden flex flex-col md:flex-row md:w-[60%]"
                    >
                      <div className="flex flex-col md:mr-14 mt-10 md:mt-0 md:w-3/5 order-2 md:order-none">
                        <h3 className="text-[24px] leading-[24px] md:text-[28px] md:leading-[28px] lg:text-4xl lg:leading-9 uppercase mb-8 w-full">
                          {secondaryTitle}
                        </h3>
                        <p className="">{subtext}</p>
                        <button
                          onClick={() => {
                            const footer = document.getElementById("footer");
                            if (footer) scrollbar?.scrollIntoView(footer);
                          }}
                          className="hover:scale-95 transition-transform mt-4 py-2 px-4 uppercase md:w-44 text-white bg-black dark:bg-white dark:text-black"
                        >
                          Work with us
                        </button>
                      </div>
                      <div className="md:w-2/5 flex items-center justify-center order-1 md:order-none mt-5 md:mt-0">
                        <img
                          className="md:max-h-[385px] dark:invert h-[360px] w-[360px] md:h-[270px] md:w-[270px] lg:h-[330px] lg:w-[330px]"
                          alt={`Symbol for ${title}`}
                          src={symbolUrl}
                        />
                      </div>
                    </motion.section>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${
                      index === openIndex ? "md:hidden" : "rotate-180"
                    } absolute right-4 lg:right-8 dark:invert transform-gpu transition ease-in-out`}
                    src="/arrow.svg"
                  />
                </AnimatePresence>
              </div>
            </section>
          );
        }
      )}
    </div>
  );
}

function AccordianItem({
  character,
  openIndex,
  title,
  isSelected,
  secondaryTitle,
  subtext,
  setOpenIndex,
  index,
  symbolUrl,
}: AccordianItemProps) {
  function handleClick() {
    if (isSelected) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section
      onClick={() => handleClick()}
      className="flex flex-col w-full items-center"
    >
      <motion.div className="w-full h-[1px] bg-black dark:bg-white" />
      <div className="my-7 lg:my-4 px-4 lg:px-8 flex md:flex-row flex-col relative justify-between max-w-screen-2xl w-full">
        <h3 className="uppercase font-medium text-base md:w-[40%] text-[16px] w-full">
          {`${isSelected ? character[1] : character[0]} ${title}`}
        </h3>
        <AnimatePresence>
          {isSelected && (
            <>
              <motion.section
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden flex flex-col md:flex-row md:w-[60%]"
              >
                <div className="flex flex-col md:mr-14 mt-10 md:mt-0 md:w-3/5 order-2 md:order-none">
                  <h3 className="text-[24px] leading-[24px] md:text-4xl md:leading-9 uppercase mb-8 w-full">
                    {secondaryTitle}
                  </h3>
                  <p className="">{subtext}</p>
                  <button className="hover:scale-95 transition-transform mt-4 py-2 px-4 uppercase md:w-44 text-white bg-black dark:bg-white dark:text-black">
                    Work with us
                  </button>
                </div>
                <div className="md:w-2/5 flex items-center justify-center order-1 md:order-none mt-5 md:mt-0">
                  <img
                    className="md:max-h-[385px] dark:invert"
                    alt={`Symbol for ${title}`}
                    src={symbolUrl}
                  />
                </div>
              </motion.section>
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`${
              isSelected
                ? "lg:hidden"
                : "rotate-180 transform-gpu transition ease-in-out"
            } absolute right-4 lg:right-8 dark:invert`}
            src="/arrow.svg"
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
