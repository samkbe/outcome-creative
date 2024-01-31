"use client";
import { useState, Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const accordionItems = [
    {
      title: "graphic design",
      secondaryTitle: "Enhance the look and feel of your brand.",
      subtext:
        "Whether you are in the throes of building a new business or are long established and looking to bring the look and feel of your brand into today, we can help. Our team of graphic designers have worked with both Fortune 500 clients and budding startups on projects such as logo design and brand books to high volume digital ads.",
      symbolUrl: "/triangle.svg",
      character: ["➀", "➊"],
    },
    {
      title: "website design & development",
      secondaryTitle: "Build a site suitable to the depth of your vision.",
      subtext:
        "A functional website is a necessary element for any successful business. Our full-stack engineers are equipped to design and build sites at all levels of complexity. Building a site while trying to run a business and manage a team can be taxing, give us a call and we’ll lighten the load.",
      symbolUrl: "/square.svg",
      character: ["➁", "➋"],
    },
    {
      title: "photo & video production",
      secondaryTitle: "WIP: Breathe life into your organization.",
      subtext:
        "Having a robust content library for both consumer facing and B2B brands has become increasingly important. Our photo and video capabilities are extensive, from basic portrait captures and event photography to complex commercial shoots.",
      symbolUrl: "/polygon.svg",
      character: ["➂", "➌"],
    },
    {
      title: "Social media & influencer strategy",
      secondaryTitle: "Develop a public presence and find your champions.",
      subtext:
        "Activations around micro and macro influencers can bring significant value, and bring your company to the forefront of social dialogue and awareness. With a young and culturally tapped in team, we can help you build an influencer focused campaign, curate, and secure the champions you need.",
      symbolUrl: "/hexagon.svg",
      character: ["➃", "➍"],
    },
    {
      title: "business development consulting",
      secondaryTitle: "Develop a robust pipeline.",
      subtext:
        "Do you find yourself so focused on the work that when a project is over you find yourself scrambling for the next client or revenue stream? Our founder has developed successful cold outreach programs built for sustained growth with a proven record of deal sizes in the 7-figures. Inquire below to schedule a complimentary 1x1 meeting.",
      symbolUrl: "/circle.svg",
      character: ["➄", "➎"],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      {accordionItems.map(
        ({ title, secondaryTitle, subtext, symbolUrl, character }, index) => {
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
              character={character}
            />
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
      <div className="w-full h-[1px] bg-black dark:bg-white" />
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
