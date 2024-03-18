import { SetStateAction } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { useI18n } from "../../../../hooks/useI18n";

interface SwitchThemeProps {
  theme: "dark" | "light";
  setTheme: (value: SetStateAction<"dark" | "light">) => void;
}

export const SwitchTheme = ({ theme, setTheme }: SwitchThemeProps) => {
  const { i18n } = useI18n();

  return (
    <div className={`flex items-center gap-3`}>
      <div className={`flex items-center gap-2 h-full`}>
        <button
          className={`${
            theme === "dark"
              ? "text-[var(--detail)] dark:text-[var(--dark-detail)]"
              : "text-[var(--gray-100)] dark:text-[var(--dark-gray-100)] hover:text-[var(--gray-200)] hover:dark:text-[var(--dark-gray-200)]"
          } transition-all`}
          onClick={() => setTheme("dark")}
        >
          {i18n("dark")}
        </button>
        <div className="w-px h-7 rounded bg-[var(--gray-500)] dark:bg-[var(--dark-gray-500)]" />
        <button
          className={`${
            theme === "light"
              ? "text-[var(--detail)] dark:text-[var(--dark-detail)]"
              : "text-[var(--gray-100)] dark:text-[var(--dark-gray-100)] hover:text-[var(--gray-200)] hover:dark:text-[var(--dark-gray-200)]"
          } transition-all`}
          onClick={() => setTheme("light")}
        >
          {i18n("light")}
        </button>
      </div>
      <FontAwesomeIcon
        className={`text-[var(--detail)] dark:text-[var(--dark-detail)] text-[2.125rem]`}
        icon={theme === "dark" ? faMoon : faSun}
      />
    </div>
  );
};
