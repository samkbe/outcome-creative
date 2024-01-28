import "./globals.css";
import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Video from "@/components/video";
import Accordian from "@/components/accordion";
import Projects from "@/components/projects";
import Logos from "@/components/logos";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Video />
      <Accordian />
      <Projects />
      <Logos />
    </>
  );
}
