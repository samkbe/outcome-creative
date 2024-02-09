import { projects } from "../content/homeContent";

export default function Projects() {
  return (
    <div
      id="projects"
      className="max-w-screen-2xl flex flex-col w-full items-center mx-auto"
    >
      <div className="flex flex-col px-4 lg:px-8 lg:flex-row lg:justify-between mt-32 mb-16 md:mb-0 md:mt-52 md:pb-10 w-full">
        <h2 className="main-heading pb-2 tracking-[-2px]">Projects</h2>
        <p className="md:max-w-[320px] md:text-[22px] md:mt-2">
          From Fortune 500’s to startups, we’re curious about industries and
          companies of all shapes and sizes.
        </p>
      </div>
      <div className="overflow-x-hidden w-full max-w-screen-2xl">
        <div className="flex flex-row animate-scroll w-[2400px] md:w-[3120px] box-border">
          {[...projects, ...projects].map(
            ({ imageSrc, title, symbols, bodyText }, index) => (
              <div
                key={title + index}
                className="px-2 w-[300px] md:w-[390px] box-border"
              >
                <div className="relative mb-2 md:mb-5">
                  <img alt={title} className="w-full h-auto" src={imageSrc} />
                  <div className="absolute inset-0 bg-gradient-to-t from-tan to-10%" />
                </div>
                <p className="mb-1 md:mb-2 uppercase font-medium">
                  {symbols.map((symbol) => (
                    <span
                      className="inline-block align-baseline h-[.75em] w-auto pr-1"
                      key={symbol}
                    >
                      <img
                        alt="service symbol"
                        className="h-full w-auto dark:invert"
                        src={symbol}
                      />
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
