"use client";
import { useState, Dispatch, SetStateAction } from "react";

export default function Accordian() {
  const accordionItems = [
    {
      title: "graphic design",
      secondaryTitle: "Enhance the look and feel of your brand.",
      subtext:
        "Whether you are in the throes of building a new business or are long established and looking to bring the look and feel of your brand into today, we can help. Our team of graphic designers have worked with both Fortune 500 clients and budding startups on projects such as logo design and brand books to high volume digital ads",
    },
    {
      title: "website design & development",
      secondaryTitle: "Enhance the look and feel of your brand.",
      subtext:
        "Whether you are in the throes of building a new business or are long established and looking to bring the look and feel of your brand into today, we can help. Our team of graphic designers have worked with both Fortune 500 clients and budding startups on projects such as logo design and brand books to high volume digital ads",
    },
    {
      title: "photo & video production",
      secondaryTitle: "Enhance the look and feel of your brand.",
      subtext:
        "Whether you are in the throes of building a new business or are long established and looking to bring the look and feel of your brand into today, we can help. Our team of graphic designers have worked with both Fortune 500 clients and budding startups on projects such as logo design and brand books to high volume digital ads",
    },
    {
      title: "cocial media & influencer strategy",
      secondaryTitle: "Enhance the look and feel of your brand.",
      subtext:
        "Whether you are in the throes of building a new business or are long established and looking to bring the look and feel of your brand into today, we can help. Our team of graphic designers have worked with both Fortune 500 clients and budding startups on projects such as logo design and brand books to high volume digital ads",
    },
    {
      title: "business development consulting",
      secondaryTitle: "Enhance the look and feel of your brand.",
      subtext:
        "Whether you are in the throes of building a new business or are long established and looking to bring the look and feel of your brand into today, we can help. Our team of graphic designers have worked with both Fortune 500 clients and budding startups on projects such as logo design and brand books to high volume digital ads",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      {accordionItems.map(({ title, secondaryTitle, subtext }, index) => {
        return (
          <AccordianItem
            isSelected={index === openIndex}
            title={title}
            secondaryTitle={secondaryTitle}
            subtext={subtext}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            key={title}
          />
        );
      })}
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
};

function AccordianItem({
  openIndex,
  title,
  isSelected,
  secondaryTitle,
  subtext,
  setOpenIndex,
}: AccordianItemProps) {
  return (
    <section className="flex flex-col w-full">
      <div className="w-full h-[1px] bg-black" />
      <div className="lg:my-8 px-4 lg:px-8 flex justify-between">
        <h3 className="uppercase font-medium text-base">{title}</h3>
        <img src="/arrow.svg" />
      </div>
    </section>
  );
}
