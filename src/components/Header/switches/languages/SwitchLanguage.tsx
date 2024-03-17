import { useContext } from "react";

import useFlag from "../../../../hooks/useFlag";
import { PortfolioContext } from "../../../../context/PortfolioContext";
import { useI18n } from "../../../../hooks/useI18n";

export default function SwitchLanguage() {
  const { theme } = useContext(PortfolioContext);
  const { language, setLanguage, i18n } = useI18n();
  const { flag } = useFlag(language, theme);

  return (
    <div className={`flex items-center gap-3`}>
      <img
        src={flag}
        alt="Image flag from language mode"
        width={40}
        height={40}
      />
      <div className={`flex items-center gap-2 h-full`}>
        <button
          className={`${
            language === "en_us"
              ? "text-[var(--detail)] dark:text-[var(--dark-detail)]"
              : "text-[var(--gray-100)] dark:text-[var(--dark-gray-100)] hover:text-[var(--gray-200)] hover:dark:text-[var(--dark-gray-200)]"
          } uppercase`}
          onClick={() => setLanguage("en_us")}
        >
          {i18n("en")}
        </button>
        <div className="w-px h-7 rounded bg-[var(--gray-500)] dark:bg-[var(--dark-gray-500)]" />
        <button
          className={`${
            language === "pt_br"
              ? "text-[var(--detail)] dark:text-[var(--dark-detail)]"
              : "text-[var(--gray-100)] dark:text-[var(--dark-gray-100)] hover:text-[var(--gray-200)] hover:dark:text-[var(--dark-gray-200)]"
          } uppercase transition-all`}
          onClick={() => setLanguage("pt_br")}
        >
          pt
        </button>
      </div>
    </div>
  );
}
