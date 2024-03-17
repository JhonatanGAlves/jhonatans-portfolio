import { SetStateAction, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

type LanguageType = "en_us" | "pt_br";

type useI18nTypes = {
  language: LanguageType;
  setLanguage: (value: SetStateAction<LanguageType>) => void;
  i18n: TFunction<"translation", undefined>;
};

export const useI18n = (): useI18nTypes => {
  const languageFromStorage = (localStorage.getItem("language") ??
    "en_us") as LanguageType;
  const [language, setLanguage] = useState(languageFromStorage);
  const { t: i18n, i18n: i18next } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language]);

  return { language, setLanguage, i18n };
};
