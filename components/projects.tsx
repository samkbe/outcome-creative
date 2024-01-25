export default function Projects() {
  const projects = [
    {
      imageSrc: "/intersect-by-lexus.jpg",
      title: "Intersect by Lexus",
      symbols: ["/triangle.svg", "/polygon.svg", "/hexagon.svg"],
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      imageSrc: "/ayr-wellness.jpg",
      title: "Ayr Wellness",
      symbols: ["/polygon.svg", "/hexagon.svg"],
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      imageSrc: "/intersect-by-lexus.jpg",
      title: "Intersect by Lexus",
      symbols: ["/triangle.svg", "/polygon.svg", "/hexagon.svg"],
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      imageSrc: "/infosum.jpg",
      title: "Infosum",
      symbols: ["/triangle.svg", "/polygon.svg"],
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <div className="max-w-screen-2xl flex flex-col w-full items-center mx-auto">
      <div className="flex flex-col px-4 lg:px-8 lg:flex-row lg:justify-between lg:pr-14 lg:pb-14 w-full">
        <h2 className="sub-heading pb-2 tracking-[-2px]">Projects</h2>
        <p className="lg:mw-[320px]">
          From fast expanding companies to Fortune 50’s
        </p>
      </div>
      <div className="overflow-x-hidden w-full max-w-screen-2xl">
        <div className="flex flex-row animate-scroll w-[3120px] box-border">
          {[...projects, ...projects].map(
            ({ imageSrc, title, symbols, bodyText }) => (
              <div key={title} className="px-2 w-[390px] box-border">
                <img className="w-full h-auto" src={imageSrc} />
                <p className="pb-2 uppercase font-medium">
                  {symbols.map((symbol) => (
                    <span
                      className="inline-block align-baseline h-[.75em] w-auto pr-1"
                      key={symbol}
                    >
                      <img className="h-full w-auto" src={symbol} />
                    </span>
                  ))}
                  {title}
                </p>
                <p>{bodyText}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
