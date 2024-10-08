import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Flex, Link, Text } from "@radix-ui/themes";

import { useI18n } from "../../../hooks/useI18n";

interface NavBarProps {
  scrollPosition: number;
  navBarItemsData: { name: string; icon: IconDefinition }[];
}

export const NavBar = ({ scrollPosition, navBarItemsData }: NavBarProps) => {
  const [selectedNav, setSelectedNav] = useState("home");
  const [currentHover, setCurrentHover] = useState("");
  const { i18n } = useI18n();

  function getColorOfSelectedItem(nameItem: string): string {
    return selectedNav === nameItem
      ? "text-[var(--gray-800)] dark:text-[var(--dark-gray-800)] bg-[var(--detail)] dark:bg-[var(--dark-detail)]"
      : "text-[var(--dark-gray-100)] dark:text-[var(--dark-gray-100)] bg-[var(--gray-500)] dark:bg-[var(--dark-gray-800)]";
  }

  return (
    <nav>
      <ul className={`flex items-center gap-5`}>
        {navBarItemsData.map((item) => (
          <Flex
            direction="column"
            align="center"
            gap="4px"
            key={item.name}
            className={`${
              scrollPosition > 0 ? "hover:opacity-75" : ""
            } transition-all`}
            onMouseEnter={() => setCurrentHover(item.name)}
            onMouseLeave={() => setCurrentHover("")}
          >
            <Flex
              direction="column"
              align="center"
              className={`${scrollPosition > 0 ? "hidden opacity-0" : ""} ${
                selectedNav === item.name ? "h-fit" : "h-8"
              }`}
            >
              <Text
                className={`py-0.5 px-2 ${getColorOfSelectedItem(
                  item.name
                )} rounded z-10 capitalize`}
                as="span"
              >
                {i18n(item.name)}
              </Text>
              <div
                className={`${
                  selectedNav === item.name || currentHover === item.name
                    ? "-mt-1"
                    : "-mt-2.5"
                } w-2 h-2 rotate-45 ${getColorOfSelectedItem(
                  item.name
                )} transition-all`}
              />
            </Flex>
            <Link
              className={`w-14 h-14 ${getColorOfSelectedItem(
                item.name
              )} flex rounded-full`}
              href={`#${item.name}`}
              onClick={() => setSelectedNav(item.name)}
              underline="none"
            >
              <li className="m-auto">
                <FontAwesomeIcon
                  className={getColorOfSelectedItem(item.name)}
                  icon={item.icon}
                  size="xl"
                />
              </li>
            </Link>
          </Flex>
        ))}
      </ul>
    </nav>
  );
};
