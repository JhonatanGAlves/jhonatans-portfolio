import { useContext } from "react";

import { NavBar } from "./navbar/NavBar";
import SwitchLanguage from "./switches/languages/SwitchLanguage";
import { PortfolioContext } from "../../context/PortfolioContext";

export const Header = () => {
  const { theme } = useContext(PortfolioContext);

  return (
    <div className={`px-6`}>
      <header
        className={`flex justify-between items-center pt-2 pb-[2.875rem] px-32`}
      >
        <SwitchLanguage theme={theme} />
        <NavBar theme={theme} />
      </header>
    </div>
  );
};
