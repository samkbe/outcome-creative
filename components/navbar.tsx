"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/outcome-creative-logo.svg";

export default function NavBar({ loading }: { loading: boolean }) {
  const [theme, setTheme] = useState<string>(
    window.localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const navbarItems = [
    {
      text: "about",
      url: "/#about",
    },
    {
      text: "services",
      url: "/#services",
    },
    {
      text: "projects",
      url: "/#projects",
    },
  ];

  return (
    <div
      className={`w-full fixed z-50 font-medium uppercase ${
        loading ? "invisible" : "fixed"
      }`}
    >
      <nav className="px-4 lg:px-8 md:h-24 flex items-center justify-between max-w-screen-2xl mx-auto">
        <Image
          className="dark:invert"
          width={173}
          height={41}
          src={logo}
          alt="Outcome Creative Logo"
        />
        <div className="flex justify-end w-full">
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

  return <p>{time}</p>;
}
