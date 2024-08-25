import { SetStateAction } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "@radix-ui/themes";

import { useI18n } from "../../../../hooks/useI18n";

interface SwitchThemeProps {
  theme: "dark" | "light";
  setTheme: (value: SetStateAction<"dark" | "light">) => void;
  iconPosition?: "left" | "right";
  isMobileMenu?: boolean;
}

export const SwitchTheme = ({
  theme,
  setTheme,
  iconPosition = "right",
  isMobileMenu,
}: SwitchThemeProps) => {
  const { i18n } = useI18n();

  return (
    <Flex align="center" gap="12px" className={`${isMobileMenu ? "mt-1" : ""}`}>
      <Flex align="center" gap="8px" className={`h-full`}>
        {iconPosition === "left" && (
          <FontAwesomeIcon
            className={`text-[var(--detail)] dark:text-[var(--dark-detail)] ${
              isMobileMenu ? "text-xl" : "text-[2.125rem]"
            }`}
            icon={theme === "dark" ? faMoon : faSun}
          />
        )}
        <button
          className={`${
            theme === "dark"
              ? "text-[var(--detail)] dark:text-[var(--dark-detail)]"
              : "text-[var(--gray-100)] dark:text-[var(--dark-gray-100)] hover:text-[var(--gray-200)] hover:dark:text-[var(--dark-gray-200)]"
          } ${iconPosition === "left" ? "ml-[10px]" : ""} transition-all`}
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
      </Flex>
      {iconPosition === "right" && (
        <FontAwesomeIcon
          className={`text-[var(--detail)] dark:text-[var(--dark-detail)] ${
            isMobileMenu ? "text-xl" : "text-[2.125rem]"
          }`}
          icon={theme === "dark" ? faMoon : faSun}
        />
      )}
    </Flex>
  );
};
