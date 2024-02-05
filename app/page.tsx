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
  const [loading, setLoading] = useState<boolean>(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setLoading(false);
    // }, 4000);
    // return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-black bg-white dark:bg-black dark:text-white transition-colors">
      <NavBar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        loading={loading}
      />
      <Hero
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        loading={loading}
      />
      <div id="scroll" className={`${loading ? "hidden" : "block"}`}>
        <Video />
        <Accordian />
        <Projects />
        <Logos />
        <Footer />
      </div>
    </div>
  );
}
