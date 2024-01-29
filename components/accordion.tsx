"use client";
import { useState, Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Accordian() {
  const accordionItems = [
    {
      title: "graphic design",
      secondaryTitle: "Enhance the look and feel of your brand.",
      subtext:
        "Whether you are in the throes of building a new business or are long established and looking to bring the look and feel of your brand into today, we can help. Our team of graphic designers have worked with both Fortune 500 clients and budding startups on projects such as logo design and brand books to high volume digital ads",
      symbolUrl: "/triangle.svg",
    },
    {
      title: "website design & development",
      secondaryTitle: "Enhance the look and feel of your brand.",
      subtext:
        "Whether you are in the throes of building a new business or are long established and looking to bring the look and feel of your brand into today, we can help. Our team of graphic designers have worked with both Fortune 500 clients and budding startups on projects such as logo design and brand books to high volume digital ads",
      symbolUrl: "/square.svg",
    },
    {
      title: "photo & video production",
      secondaryTitle: "Enhance the look and feel of your brand.",
      subtext:
        "Whether you are in the throes of building a new business or are long established and looking to bring the look and feel of your brand into today, we can help. Our team of graphic designers have worked with both Fortune 500 clients and budding startups on projects such as logo design and brand books to high volume digital ads",
      symbolUrl: "/polygon.svg",
    },
    {
      title: "Social media & influencer strategy",
      secondaryTitle: "Enhance the look and feel of your brand.",
      subtext:
        "Whether you are in the throes of building a new business or are long established and looking to bring the look and feel of your brand into today, we can help. Our team of graphic designers have worked with both Fortune 500 clients and budding startups on projects such as logo design and brand books to high volume digital ads",
      symbolUrl: "/hexagon.svg",
    },
    {
      title: "business development consulting",
      secondaryTitle: "Enhance the look and feel of your brand.",
      subtext:
        "Whether you are in the throes of building a new business or are long established and looking to bring the look and feel of your brand into today, we can help. Our team of graphic designers have worked with both Fortune 500 clients and budding startups on projects such as logo design and brand books to high volume digital ads",
      symbolUrl: "/circle.svg",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      {accordionItems.map(
        ({ title, secondaryTitle, subtext, symbolUrl }, index) => {
          return (
            <AccordianItem
              isSelected={index === openIndex}
              title={title}
              secondaryTitle={secondaryTitle}
              subtext={subtext}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              key={title}
              index={index}
              symbolUrl={symbolUrl}
            />
          );
        }
      )}
    </div>
  );
}

type AccordianItemProps = {
  openIndex: number | null;
  title: string;
  secondaryTitle: string;
  subtext: string;
  isSelected: boolean;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
  index: number;
  symbolUrl: string;
};

function AccordianItem({
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
      <div className="w-full h-[1px] bg-black dark:bg-white" />
      <div className="my-7 lg:my-4 px-4 lg:px-8 flex md:flex-row flex-col relative justify-between max-w-screen-2xl w-full">
        <h3 className="uppercase font-medium text-base md:w-[40%] text-[16px] w-full">
          {title}
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
                  <button className="mt-4 py-2 px-4 uppercase md:w-44 text-white bg-black dark:bg-white dark:text-black">
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
