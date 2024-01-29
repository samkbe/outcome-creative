export default function Logos() {
  const logos = [
    "/lexus-logo.svg",
    "/red-bull-logo.svg",
    "/kirin-ichiban-logo.svg",
    "/samsung-logo.svg",
  ];

  return (
    <div className="flex px-4 lg:px-8 pt-28 flex-col md:flex-row md:flex-wrap md:pb-44 max-w-screen-2xl mx-auto dark:text-white dark:bg-black">
      <h2 className="sub-heading pb-14 md:w-full md:order-1 md:max-w-[1144px]">
        companies we are proud to have collaborated with over the years.
      </h2>
      <div className="flex flex-col md:flex-row md:order-3 gap-4 md:w-full">
        {logos.map((logoUrl, index) => (
          <div
            key={logoUrl}
            className={`h-40 border-t border-black dark:border-white flex place-content-center md:flex-col md:px-10 md:w-1/4 ${
              index === logos.length - 1 &&
              "border-b mb-14 md:mb-0 md:border-b-0"
            }`}
          >
            <img className="md:h-[30px] dark:invert" src={logoUrl} />
          </div>
        ))}
      </div>
      <div className="md:w-full md:order-2 flex md:justify-end md:pb-24">
        <p className="text-[18px] md:max-w-[442px]">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.” <br /> – Someone at Samsung
        </p>
      </div>
    </div>
  );
}
