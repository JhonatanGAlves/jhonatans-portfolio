import { Flex } from "@radix-ui/themes";

import useFlag from "../../../../hooks/useFlag";
import { useI18n } from "../../../../hooks/useI18n";

interface SwitchLanguageProps {
  theme: "dark" | "light";
  isMobileMenu?: boolean;
}

export default function SwitchLanguage({
  theme,
  isMobileMenu,
}: SwitchLanguageProps) {
  const { language, setLanguage, i18n } = useI18n();
  const { flag } = useFlag(language, theme);

  return (
    <Flex align="center" gap="12px">
      <img
        src={flag}
        alt="Image flag from language mode"
        width={isMobileMenu ? 20 : 40}
        height={isMobileMenu ? 20 : 40}
      />
      <Flex align="center" gap="8px" className={`h-full`}>
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
      </Flex>
    </Flex>
  );
}
