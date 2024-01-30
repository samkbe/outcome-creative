export default function Projects() {
  const projects = [
    {
      imageSrc: "/intersect-by-lexus.jpg",
      title: "Intersect by Lexus",
      symbols: ["/triangle.svg", "/polygon.svg", "/hexagon.svg"],
      bodyText:
        "Developing and executing a digital and influencer strategy for Lexus’ Michelin rated hospitality space.",
    },
    {
      imageSrc: "/ayr-wellness.jpg",
      title: "Ayr Wellness",
      symbols: ["/triangle.svg", "/polygon.svg", "/hexagon.svg", "/square.svg"],
      bodyText:
        "Building a cohesive parent brand after a cannabis acquisition spree.",
    },
    {
      imageSrc: "/infosum.jpg",
      title: "Infosum",
      symbols: ["/triangle.svg", "/hexagon.svg"],
      bodyText:
        "Refining a rapidly growing tech brand prior to a successful series b round.",
    },
  ];

  return (
    <div className="max-w-screen-2xl flex flex-col w-full items-center mx-auto">
      <div className="flex flex-col px-4 lg:px-8 lg:flex-row lg:justify-between mt-32 mb-16 md:mb-0 md:mt-52 md:pb-10 w-full">
        <h2 className="main-heading pb-2 tracking-[-2px]">Projects</h2>
        <p className="md:max-w-[320px] md:text-[22px] md:mt-2">
          From Fortune 500’s to startups, we’re curious about industries and
          companies of all shapes and sizes.
        </p>
      </div>
      <div className="overflow-x-hidden w-full max-w-screen-2xl">
        <div className="flex flex-row animate-scroll w-[1800px] md:w-[2340px] box-border">
          {[...projects, ...projects].map(
            ({ imageSrc, title, symbols, bodyText }, index) => (
              <div
                key={title + index}
                className="px-2 w-[300px] md:w-[390px] box-border"
              >
                <div className="relative mb-2 md:mb-5">
                  <img className="w-full h-auto" src={imageSrc} />
                  <div className="absolute inset-0 bg-gradient-to-t from-tan to-10% " />
                </div>
                <p className="mb-1 md:mb-2 uppercase font-medium">
                  {symbols.map((symbol) => (
                    <span
                      className="inline-block align-baseline h-[.75em] w-auto pr-1"
                      key={symbol}
                    >
                      <img className="h-full w-auto dark:invert" src={symbol} />
                    </span>
                  ))}
                  {title}
                </p>
                <p className="pr-5 text-base">{bodyText}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
