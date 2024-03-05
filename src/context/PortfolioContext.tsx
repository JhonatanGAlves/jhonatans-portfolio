import { darkMode, lightMode } from "../utils/theme";
import {
  createContext,
  ReactNode,
  useState,
  useMemo,
  SetStateAction,
  useEffect,
} from "react";

type ThemeTypes = "dark" | "light";

interface PortfolioContextProps {
  theme: ThemeTypes;
  setTheme: (value: SetStateAction<ThemeTypes>) => void;
  handleColor: (color: string) => string;
}

interface PortfolioContextProviderProps {
  children: ReactNode;
}

export const PortfolioContext = createContext({} as PortfolioContextProps);

export default function PortfolioContextProvider({
  children,
}: PortfolioContextProviderProps) {
  const getThemeFromStorage = (localStorage.getItem("theme") ??
    "dark") as ThemeTypes;
  const [theme, setTheme] = useState<ThemeTypes>(getThemeFromStorage);

  function handleColor(color: string): string {
    const mode = theme === "dark" ? darkMode : lightMode;
    const getColor = mode[color as keyof typeof mode];

    return getColor;
  }

  function handleThemeChange(theme: ThemeTypes) {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }

  useEffect(() => {
    handleThemeChange(theme);
  }, [theme]);

  const values = useMemo(() => {
    return {
      theme,
      setTheme,
      handleColor,
    };
  }, [theme]);

  return (
    <PortfolioContext.Provider value={values}>
      {children}
    </PortfolioContext.Provider>
  );
}
