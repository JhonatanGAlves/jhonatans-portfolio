import {
  Badge,
  Button,
  Card,
  Flex,
  Link,
  Spinner,
  Text,
} from "@radix-ui/themes";
import { FaAngleRight, FaCheckCircle, FaGraduationCap } from "react-icons/fa";

import { useI18n } from "../../../../hooks/useI18n";

interface CourseCardProps {
  course: CourseTypes;
  theme: "dark" | "light";
  isDesktopDevice: boolean;
  onlyCertificateSection?: boolean;
}

export const CourseCard = ({
  course,
  theme,
  isDesktopDevice,
  onlyCertificateSection,
}: CourseCardProps) => {
  const { i18n } = useI18n();

  const isUndergraduate =
    !onlyCertificateSection && course.type === "Undergraduate";

  return (
    <Card
      variant={isUndergraduate ? "classic" : "surface"}
      className={`${
        isUndergraduate
          ? "text-[var(--gray-100)] bg-[var(--detail)] dark:bg-[var(--dark-detail)]"
          : "bg-[var(--card-background-color)]"
      }`}
    >
      <Flex direction="column" justify="between" gap="4" height="100%">
        <Flex direction="column" gap="1">
          <Flex justify="between">
            <Text as="label" weight="bold" size="2">
              {course.period}
            </Text>
            {onlyCertificateSection ? (
              <FaCheckCircle />
            ) : (
              <Spinner loading={!isUndergraduate}>
                <FaGraduationCap className="text-[var(--gray-100)]" />
              </Spinner>
            )}
          </Flex>
          <Flex
            justify={isDesktopDevice ? "start" : "center"}
            hidden={onlyCertificateSection}
          >
            <Badge
              variant="surface"
              color={
                isUndergraduate
                  ? "gray"
                  : theme === "dark"
                  ? "yellow"
                  : "purple"
              }
              className="select-none"
            >
              {i18n(course.type as string)}
            </Badge>
          </Flex>
          <Text
            as="span"
            size="5"
            weight="bold"
            align={isDesktopDevice ? "left" : "center"}
          >
            {i18n(course.courseName)}
          </Text>
        </Flex>
        <Flex
          justify={
            onlyCertificateSection
              ? "between"
              : isDesktopDevice
              ? "start"
              : "center"
          }
        >
          <Text
            as="label"
            size="2"
            align={isDesktopDevice ? "left" : "center"}
            className=""
          >{`${i18n("by")} ${course.schoolName}`}</Text>
          <Link
            href={course.credentialLink}
            target="_blank"
            hidden={!onlyCertificateSection}
          >
            <Button
              size="1"
              radius="medium"
              variant="solid"
              className="font-semibold text-[var(--dark-gray-100)] dark:text-[var(--gray-100)] bg-[var(--detail)] dark:bg-[var(--dark-detail)] hover:opacity-75 transition-all cursor-pointer"
            >
              {i18n("Show credential")}
              <FaAngleRight />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
};
