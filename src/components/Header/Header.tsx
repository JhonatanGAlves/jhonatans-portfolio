import { useContext } from "react";

import {
  faCode,
  faGraduationCap,
  faHouse,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { NavBar } from "./navbar/NavBar";
import SwitchLanguage from "./switches/languages/SwitchLanguage";
import { PortfolioContext } from "../../context/PortfolioContext";
import { SwitchTheme } from "./switches/themes/SwitchTheme";
import { SandwichMenu } from "./mobile/SandwichMenu";

interface HeaderProps {
  scrollPosition: number;
  modeDevice: "DESKTOP" | "MOBILE";
}

export const Header = ({ scrollPosition, modeDevice }: HeaderProps) => {
  const { theme, setTheme } = useContext(PortfolioContext);

  const navBarItemsData = [
    {
      name: "home",
      icon: faHouse,
    },
    {
      name: "projects",
      icon: faCode,
    },
    {
      name: "education",
      icon: faGraduationCap,
    },
    {
      name: "contact",
      icon: faPaperPlane,
    },
  ];

  return (
    <div className={`w-full fixed top-0 z-10`}>
      <header
        className={`flex ${
          modeDevice === "DESKTOP"
            ? "justify-between items-center"
            : "justify-end"
        } border-b border-[var(--gray-600)] dark:border-[var(--dark-gray-800)] py-2 px-6 min-[828px]:px-8 lg:px-32 transition-all bg-[var(--bg-linear-1)] dark:bg-[var(--dark-bg-linear-1)]`}
      >
        {modeDevice === "DESKTOP" ? (
          <>
            <SwitchLanguage theme={theme} />
            <NavBar
              navBarItemsData={navBarItemsData}
              scrollPosition={scrollPosition}
            />
            <SwitchTheme theme={theme} setTheme={setTheme} />
          </>
        ) : (
          <SandwichMenu
            navBarItemsData={navBarItemsData}
            theme={theme}
            setTheme={setTheme}
          />
        )}
      </header>
    </div>
  );
};
