import { useEffect, useState } from "react";

import usaDarkFlag from "../assets/flags/usa-dark-flag.svg";
import usaLightFlag from "../assets/flags/usa-light-flag.svg";
import brazilDarkFlag from "../assets/flags/brazil-dark-flag.svg";
import brazilLightFlag from "../assets/flags/brazil-light-flag.svg";

interface UseFlagProps {
  flag: string;
}

export default function useFlag(
  language: "en_us" | "pt_br",
  theme: "dark" | "light"
): UseFlagProps {
  const [flag, setFlag] = useState<string>("");

  useEffect(() => {
    const isEnglishLanguage = language === "en_us";
    if (theme === "dark") {
      setFlag(isEnglishLanguage ? usaDarkFlag : brazilDarkFlag);
      return;
    }
    setFlag(isEnglishLanguage ? usaLightFlag : brazilLightFlag);
  }, [theme, language]);

  return { flag };
}
