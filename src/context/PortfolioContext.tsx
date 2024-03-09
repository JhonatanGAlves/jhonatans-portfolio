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

  function handleThemeChange(theme: ThemeTypes) {
    if (theme === "dark") {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", "dark");
      return;
    }
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  useEffect(() => {
    handleThemeChange(theme);
  }, [theme]);

  const values = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <PortfolioContext.Provider value={values}>
      {children}
    </PortfolioContext.Provider>
  );
}
