"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import { ThemeProvider } from "../context/themeContext";
import ScrollContext from "../context/scrollBarContext";
import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Video from "@/components/video";
import Accordian from "@/components/accordion";
import Projects from "@/components/projects";
import Logos from "@/components/logos";
import Footer from "@/components/footer";
import Scrollbar from "smooth-scrollbar";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const [scrollbar, setScrollbar] = useState<Scrollbar | null>(null);

  useEffect(() => {
    const scrollbarInstance = Scrollbar.init(document.body, {
      damping: 0.05,
    });

    const fixed = document.getElementById("navbar");

    scrollbarInstance.addListener((status) => {
      const { offset } = status;

      if (fixed) {
        fixed.style.transform = `translateY(${offset.y}px)`;
      }
    });

    setScrollbar(scrollbarInstance);

    return () => {
      if (scrollbar) scrollbar.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <ScrollContext.Provider value={scrollbar}>
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
      </ScrollContext.Provider>
    </ThemeProvider>
  );
}
