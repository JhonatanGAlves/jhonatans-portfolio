import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGraduationCap,
  faHouse,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { useI18n } from "../../../hooks/useI18n";

interface NavBarProps {
  theme: "dark" | "light";
}

export const NavBar = ({ theme }: NavBarProps) => {
  const [selectedNav, setSelectedNav] = useState("home");
  const { i18n } = useI18n();
  function getColorOfSelectedItem(nameItem: string): string {
    return selectedNav === nameItem
      ? "text-[var(--gray-800)] dark:text-[var(--dark-gray-800)] bg-[var(--detail)] dark:bg-[var(--dark-detail)]"
      : `text-[var(--gray-${
          theme === "dark" ? "500" : "800"
        })] bg-[var(--gray-800)] dark:bg-[var(--dark-gray-800)]`;
  }

  const navBarItemsData = [
    {
      name: "home",
      icon: faHouse,
    },
    {
      name: "projects",
      icon: faCode,
    },
    {
      name: "education",
      icon: faGraduationCap,
    },
    {
      name: "contact",
      icon: faPaperPlane,
    },
  ];

  return (
    <nav>
      <ul className={`flex items-center gap-5`}>
        {navBarItemsData.map((item) => (
          <div className={`flex flex-col items-center gap-1`}>
            <div className={`flex flex-col items-center`}>
              <span
                className={`py-0.5 px-2 ${getColorOfSelectedItem(
                  item.name
                )} rounded`}
              >
                {i18n(item.name)}
              </span>
              <div
                className={`-mt-1 w-2 h-2 rotate-45 ${getColorOfSelectedItem(
                  item.name
                )}`}
              />
            </div>
            <a
              className={`w-14 h-14 ${getColorOfSelectedItem(
                item.name
              )} flex  rounded-full`}
              key={item.name}
              href={`#${item.name}`}
              onClick={() => setSelectedNav(item.name)}
            >
              <li className="m-auto">
                <FontAwesomeIcon
                  className={`${
                    selectedNav === item.name
                      ? "text-[var(--gray-800)] dark:text-[var(--dark-gray-800)]"
                      : `text-[var(--gray-${theme === "dark" ? "500" : "800"})]`
                  }`}
                  icon={item.icon}
                  size="xl"
                />
              </li>
            </a>
          </div>
        ))}
      </ul>
    </nav>
  );
};
