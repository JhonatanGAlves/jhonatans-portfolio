import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en_us } from "./en_us";
import { pt_br } from "./pt_br";

const resources = { en_us, pt_br };

i18n.use(initReactI18next).init({
  resources,
  lng: "en_us",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
