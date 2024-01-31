"use client";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useTheme } from "../context/themeContext";
import { navbarItems } from "@/content/navbarItems";
import Image from "next/image";
import logo from "../public/outcome-creative-logo.svg";

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

  return (
    <div
      id="navbar"
      className={`w-full fixed z-50 font-medium uppercase ${
        loading ? "invisible" : "fixed"
      }`}
    >
      <nav className="px-4 lg:px-8 h-[64px] md:h-24 flex items-center justify-between max-w-screen-2xl mx-auto">
        <Image
          className="dark:invert"
          width={173}
          height={41}
          src={logo}
          alt="Outcome Creative Logo"
        />
        <div className="hidden md:flex justify-end w-full">
          <ul className="flex gap-10">
            {navbarItems.map(({ url, text }) => (
              <NavItem key={url} url={url} text={text} />
            ))}
          </ul>
        </div>
        <div className="flex w-1/4 justify-end">
          <NycTime />
          <div
            onClick={() => toggleTheme()}
            className="cursor-pointer ml-4 flex items-center"
          >
            <img
              className="w-auto h-[1em]"
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
  return (
    <a href={url}>
      <li>{text}</li>
    </a>
  );
}

function HamburgerMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
}: HamburgerMenuProps) {
  const genericHamburgerLine = `h-[6px] md:h-[7px] w-[44px] md:w-[52px] my-[3px] bg-black transition ease transform duration-300`;

  return (
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="lg:hidden flex flex-col h-12 w-12 rounded justify-center items-center -mb-3"
    >
      <div
        className={`${genericHamburgerLine} ${
          mobileMenuOpen
            ? "rotate-45 translate-y-[12px] md:translate-y-[14px]"
            : ""
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          mobileMenuOpen
            ? "-rotate-45 -translate-y-[12px] md:-translate-y-[13px]"
            : ""
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

  return <p className="hidden md:block">{time}</p>;
}
