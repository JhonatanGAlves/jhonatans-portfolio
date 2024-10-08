import { useContext, useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import { FaPlus } from "react-icons/fa";

import { useI18n } from "../../../hooks/useI18n";
import {
  allCertifications,
  collegeAndPresentCertifications,
  jobExperiences,
} from "../../../constants/background";
import { PortfolioContext } from "../../../context/PortfolioContext";
import { JobCard } from "./Cards/JobCard";
import { CourseCard } from "./Cards/CourseCard";

interface ExperiencesProps {
  modeDevice: "DESKTOP" | "MOBILE";
  currentScreenWidth: number;
}

export const Experiences = ({
  modeDevice,
  currentScreenWidth,
}: ExperiencesProps) => {
  const [isShowingAllCredentials, setIsShowingAllCredentials] = useState(false);
  const [filteredAllCertifications, setFilteredAllCertifications] = useState<
    CourseTypes[]
  >([]);
  const { i18n } = useI18n();
  const { theme } = useContext(PortfolioContext);

  const isDesktopDevice = modeDevice === "DESKTOP";

  useEffect(() => {
    const sliceLimitDefault =
      currentScreenWidth > 1279 ? 9 : isDesktopDevice ? 6 : 5;
    const newSliceLimit = isShowingAllCredentials
      ? allCertifications.length - 1
      : sliceLimitDefault;

    setFilteredAllCertifications(allCertifications.slice(0, newSliceLimit));
  }, [isShowingAllCredentials, currentScreenWidth]);

  return (
    <Flex
      id="experiences"
      direction="column"
      align="center"
      gap="7"
      className="py-16 border-t border-solid border-[var(--gray-800)] dark:border-[var(--dark-gray-800)]"
    >
      <Flex direction="column" align="center" gap="8px">
        <Heading
          as="h1"
          align="center"
          size="8"
          className="text-[var(--detail)] dark:text-[var(--dark-detail)]"
        >
          {i18n("Experiences & Education")}
        </Heading>
        <Text as="span" className="max-w-[34.375rem]" align="center">
          {i18n(
            "You can check below all my education and experience that I consider relevant to my career as a software developer."
          )}
        </Text>
        <Separator
          decorative
          size="2"
          className="h-2 m-8 rounded bg-[var(--detail)] dark:bg-[var(--dark-detail)]"
        />
        <Grid columns={{ initial: "1", sm: "2" }} gap="4" width="auto">
          {jobExperiences.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </Grid>
        <Separator
          decorative
          size="2"
          className="h-2 m-8 rounded bg-[var(--detail)] dark:bg-[var(--dark-detail)]"
        />
        <Grid
          columns={{ initial: "1", sm: "2", lg: "3", xs: "4" }}
          gap="4"
          width="auto"
        >
          {collegeAndPresentCertifications.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              theme={theme}
              isDesktopDevice={isDesktopDevice}
            />
          ))}
        </Grid>
        <Separator
          decorative
          size="2"
          className="h-2 m-8 rounded bg-[var(--detail)] dark:bg-[var(--dark-detail)]"
        />
        <Grid
          position="relative"
          columns={{ initial: "1", sm: "2", lg: "3" }}
          gap="4"
          width="auto"
        >
          {filteredAllCertifications.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              theme={theme}
              isDesktopDevice={isDesktopDevice}
              onlyCertificateSection
            />
          ))}
          <Box
            hidden={isShowingAllCredentials}
            width="100%"
            height="150px"
            className="rounded-lg bg-gradient-to-t from-[var(--bg-linear-1)] dark:from-[var(--dark-bg-linear-1)]"
            position="absolute"
            bottom="0"
          />
        </Grid>
        <Button
          mt="2"
          hidden={isShowingAllCredentials}
          variant="outline"
          color={theme === "dark" ? "yellow" : "purple"}
          size="3"
          radius="medium"
          className={`cursor-pointer${isDesktopDevice ? "" : " py-8"}`}
          onClick={() => setIsShowingAllCredentials(true)}
        >
          <FaPlus /> {i18n("Show All Credentials")}
        </Button>
      </Flex>
    </Flex>
  );
};
