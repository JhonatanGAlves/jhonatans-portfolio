import { useContext, useEffect, useState } from "react";

import { NavBar } from "./navbar/NavBar";
import SwitchLanguage from "./switches/languages/SwitchLanguage";
import { PortfolioContext } from "../../context/PortfolioContext";
import { SwitchTheme } from "./switches/themes/SwitchTheme";

export const Header = () => {
  const { theme, setTheme } = useContext(PortfolioContext);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  function handleScroll() {
    const scrollPosition = window.scrollY;
    setScrollPosition(scrollPosition);
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full px-6 fixed`}>
      <header
        className={`${
          scrollPosition > 0
            ? "pb-2 border-b border-[var(--gray-500)] dark:border-[var(--dark-gray-500)]"
            : "pb-[2.875rem]"
        } flex justify-between items-center pt-2 px-0 min-[828px]:px-8 lg:px-32 transition-all`}
      >
        <SwitchLanguage theme={theme} />
        <NavBar theme={theme} scrollPosition={scrollPosition} />
        <SwitchTheme theme={theme} setTheme={setTheme} />
      </header>
    </div>
  );
};
