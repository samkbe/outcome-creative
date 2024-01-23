import "./globals.css";
import styles from "./page.module.css";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <h1 className="font-aeonik font-[400] text-xl">
        Hello World, My name is Sam!
      </h1>
      <div>Hello</div>
    </main>
  );
}
