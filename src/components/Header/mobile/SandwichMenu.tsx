import { SetStateAction } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faBars } from "@fortawesome/free-solid-svg-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "@radix-ui/themes";

import { useI18n } from "../../../hooks/useI18n";
import SwitchLanguage from "../switches/languages/SwitchLanguage";
import { SwitchTheme } from "../switches/themes/SwitchTheme";

interface SandwichMenuProps {
  navBarItemsData: { name: string; icon: IconDefinition }[];
  theme: "dark" | "light";
  setTheme: (value: SetStateAction<"dark" | "light">) => void;
}

export const SandwichMenu = ({
  navBarItemsData,
  theme,
  setTheme,
}: SandwichMenuProps) => {
  const { i18n } = useI18n();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="relative outline-none">
        <FontAwesomeIcon
          className="text-[var(--detail)] dark:text-[var(--dark-detail)] text-[2.125rem]"
          icon={faBars}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="absolute top-0 -right-[15px] w-44 p-4 rounded capitalize bg-[var(--gray-600)] dark:bg-[var(--dark-gray-800)] shadow-lg">
        {navBarItemsData.map((item, index) => (
          <Link
            key={index}
            href={item.name}
            underline="none"
            className="text-[var(--gray-100)] dark:text-[var(--dark-gray-100)]"
          >
            <DropdownMenu.Item className="outline-none font-medium hover:cursor-pointer hover:text-[var(--detail)] hover:dark:text-[var(--dark-detail)]">
              {i18n(item.name)}
            </DropdownMenu.Item>
          </Link>
        ))}
        <div className="h-px my-3 bg-[var(--gray-500)] dark:bg-[var(--dark-gray-500)]" />
        <SwitchLanguage theme={theme} isMobileMenu />
        <SwitchTheme
          theme={theme}
          setTheme={setTheme}
          iconPosition="left"
          isMobileMenu
        />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
