import Image from "next/image";
import logo from "../public/outcome-creative-logo.svg";

export default function NavBar() {
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
    <div className="w-full">
      <nav className="px-4 lg:px-8 lg:h-24 flex items-center justify-between max-w-screen-2xl mx-auto">
        <Image width={173} height={41} src={logo} alt="Outcome Creative Logo" />
        <div className="flex">
          <ul className="flex">
            {navbarItems.map(({ url, text }) => (
              <NavItem key={url} url={url} text={text} />
            ))}
          </ul>
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
