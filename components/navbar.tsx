"use client";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useTheme } from "../context/themeContext";
import { navbarItems } from "@/content/homeContent";
import { useScrollContext } from "../context/scrollBarContext";

type HamburgerMenuProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};
interface NavBarProps extends HamburgerMenuProps {
  loading: boolean;
}

export default function NavBar({
  loading,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavBarProps) {
  const { theme, toggleTheme } = useTheme();
  const scrollbar = useScrollContext();

  return (
    <div
      id="navbar"
      className={`w-full fixed z-50 font-medium uppercase ${
        loading ? "invisible" : "fixed"
      }`}
    >
      <nav className="px-4 md:px-8 h-[64px] md:h-24 flex items-center justify-between max-w-screen-2xl mx-auto">
        <img
          className="z-10 cursor-pointer dark:invert h-[27px] w-[113px] md:w-[173px] md:h-[41px]"
          src="/outcome-creative-logo.svg"
          alt="Outcome Creative Logo"
          onClick={() => scrollbar?.scrollTo(0, 0)}
        />
        <div className="hidden md:flex justify-end w-full mr-4">
          <ul className="flex gap-10">
            {navbarItems.map(({ url, text }) => (
              <NavItem key={url} url={url} text={text} />
            ))}
          </ul>
        </div>
        <div className="flex w-1/3 justify-end">
          <NycTime />
          <div
            onClick={() => toggleTheme()}
            className="cursor-pointer pr-4 md:pr-0 md:ml-4 flex items-center justify-center"
          >
            <img
              className="w-auto h-[1.25em] md:h-[1em]"
              src={
                theme === "light"
                  ? "/dark-mode-icon.svg"
                  : "/light-mode-icon.svg"
              }
            />
          </div>
          <HamburgerMenu
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ url, text }: { url: string; text: string }) {
  const scrollbar = useScrollContext();

  return (
    <li
      onClick={() => {
        const element = document.getElementById(url);
        if (element) scrollbar?.scrollIntoView(element);
      }}
      className="group overflow-hidden relative cursor-pointer inline-block"
    >
      <div className="whitespace-nowrap text-[18px] leading-[18px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
        {text}
      </div>
      <div className="whitespace-nowrap text-[18px] leading-[20px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full absolute top-[18px] left-0">
        {text}
      </div>
    </li>
  );
}

function HamburgerMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
}: HamburgerMenuProps) {
  const genericHamburgerLine = `h-[2px] w-[47px] bg-black dark:bg-white transition-all ease transform duration-300`;

  return (
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden flex flex-col h-12 w-12 rounded justify-center items-center"
    >
      <div
        className={`${genericHamburgerLine} ${
          mobileMenuOpen ? "rotate-45 translate-y-[7px] w-[40px]" : ""
        }`}
      />
      <div
        className={`${genericHamburgerLine} mt-2 ${
          mobileMenuOpen ? "-rotate-45 -translate-y-[4px] w-[40px]" : ""
        }`}
      />
    </button>
  );
}

function NycTime() {
  const [time, setTime] = useState<string>(
    `NYC, ${new Date().toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })}`
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const timeNow = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(`NYC, ${timeNow}`);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return <p className="hidden md:block text-[18px]">{time}</p>;
}
