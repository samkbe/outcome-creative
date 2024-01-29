"use client";
import { useState, useEffect } from "react";

import "./globals.css";
import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Video from "@/components/video";
import Accordian from "@/components/accordion";
import Projects from "@/components/projects";
import Logos from "@/components/logos";
import Footer from "@/components/footer";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-black dark:bg-black dark:text-white">
      <NavBar loading={loading} />
      <Hero loading={loading} />
      <div className={`${loading ? "invisible" : "block"}`}>
        <Video />
        <Accordian />
        <Projects />
        <Logos />
        <Footer />
      </div>
    </div>
  );
}
