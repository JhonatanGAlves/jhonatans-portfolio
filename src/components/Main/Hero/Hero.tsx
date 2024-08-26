import { MutableRefObject, useContext, useRef } from "react";

import { FaFileDownload } from "react-icons/fa";
import { Button, Flex, Link, Strong, Text, Tooltip } from "@radix-ui/themes";

import { useI18n } from "../../../hooks/useI18n";
import darkBanner from "../../../assets/hero/banner-dark-portfolio.svg";
import lightBanner from "../../../assets/hero/banner-light-portfolio.svg";
import { PortfolioContext } from "../../../context/PortfolioContext";
import { ExperienceProgress } from "./ExperienceProgress";
import { mainExperiences, socialMedia } from "../../../constants/constants";
import resume from "../../../assets/jhonatan-alves-cv.pdf";

interface HeroProps {
  scrollPosition: number;
  modeDevice: "DESKTOP" | "MOBILE";
}

export const Hero = ({ scrollPosition, modeDevice }: HeroProps) => {
  const { theme } = useContext(PortfolioContext);
  const { i18n } = useI18n();
  const progressBarsRef = useRef(undefined);

  const isDesktopDevice = modeDevice === "DESKTOP";

  return (
    <Flex
      direction={isDesktopDevice ? "row" : "column"}
      justify={isDesktopDevice ? "between" : "center"}
      align="center"
      gap="12px"
      className={`${
        scrollPosition > 0 ? "pt-36" : isDesktopDevice ? "pt-44" : "pt-24"
      } pb-16`}
    >
      {!isDesktopDevice && (
        <img
          className="rounded-tl-[2.5rem] rounded-tr-xl rounded-br-[2.5rem] rounded-bl-xl"
          src={theme === "dark" ? darkBanner : lightBanner}
          alt={i18n("Image of Jhonatan Alves on the banner")}
          width={150}
          height={150}
        />
      )}
      <Flex direction="column" gap="32px">
        <Flex
          direction="column"
          gap="8px"
          className={`${isDesktopDevice ? "text-left" : "text-center"}`}
        >
          <Text
            className={`font-light ${
              isDesktopDevice ? "text-2xl" : "text-base"
            }`}
            as="span"
          >
            {i18n("Hi, I am")}
          </Text>
          <Strong
            className={`font-extrabold ${
              isDesktopDevice ? "text-6xl" : "text-5xl"
            }`}
          >
            Jhonatan Alves
          </Strong>
          <Text
            className={`font-light ${
              isDesktopDevice ? "text-2xl" : "text-base"
            }`}
            as="span"
          >
            {i18n("I'm a Full Stack Software Developer")}
          </Text>
        </Flex>
        <Flex
          justify={isDesktopDevice ? "start" : "center"}
          align="center"
          gap="8px"
        >
          {socialMedia.map((media, index) => (
            <Tooltip key={index} content={media.mediaName}>
              <Link
                key={index}
                href={media.href}
                target="_blank"
                className="text-[var(--gray-100)] dark:text-[var(--dark-gray-100)] hover:text-[var(--detail)] hover:dark:text-[var(--dark-detail)] transition-all"
              >
                <media.icon size={30} />
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Flex direction="column">
          <Text as="label">{i18n("My main experiences")}:</Text>
          <Flex
            ref={
              progressBarsRef as unknown as
                | MutableRefObject<HTMLDivElement>
                | undefined
            }
            direction="column"
            gap="4px"
            className="mt-4"
            id="hero-progress-bars"
          >
            {progressBarsRef?.current &&
              mainExperiences.map((experience, index) => (
                <ExperienceProgress
                  key={index}
                  alt={experience.alt}
                  src={experience.image}
                  size={30}
                  index={index}
                  progressBarsRef={
                    progressBarsRef as unknown as MutableRefObject<HTMLDivElement>
                  }
                />
              ))}
          </Flex>
          <Link
            href={resume}
            download="Resume - Jhonatan Alves"
            target="_blank"
          >
            <Button
              variant="outline"
              color={theme === "dark" ? "yellow" : "purple"}
              size="3"
              radius="medium"
              className={`mt-6 w-72 ${
                isDesktopDevice ? "self-start" : "self-center"
              } text-[var(--detail)] dark:text-[var(--dark-detail)] cursor-pointer`}
            >
              <FaFileDownload /> {`${i18n("Download")} CV`}
            </Button>
          </Link>
        </Flex>
      </Flex>
      {isDesktopDevice && (
        <img
          className="rounded-tl-[5.5rem] rounded-tr-xl rounded-br-[5.5rem] rounded-bl-xl"
          src={theme === "dark" ? darkBanner : lightBanner}
          alt={i18n("Image of Jhonatan Alves on the banner")}
          width={350}
          height={350}
        />
      )}
    </Flex>
  );
};
