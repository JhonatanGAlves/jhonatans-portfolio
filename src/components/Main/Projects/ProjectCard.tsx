import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Inset,
  Link,
  Text,
} from "@radix-ui/themes";
import { FaAngleRight, FaCalendarAlt, FaNodeJs, FaReact } from "react-icons/fa";
import moment from "moment";

import { useI18n } from "../../../hooks/useI18n";

interface ProjectCardProps {
  project: ProjectsTypes;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { i18n, language } = useI18n();
  moment.locale(language);

  return (
    <Box>
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={project.image}
            alt={`${language === "pt_br" ? "Imagem do app " : ""}${
              project.name
            }${language === "en_us" ? " app image" : ""}`}
            className="w-full h-36 bg-[var(--gray-5)] block object-cover"
          />
        </Inset>
        <Flex
          direction="column"
          justify="between"
          gap="4"
          className="h-[14.875rem]"
        >
          <Flex direction="column" gap="1">
            <Text as="span" size="5" weight="bold">
              {project.name}
            </Text>
            <Text as="p" size="1" truncate title={project.description}>
              {project.description}
            </Text>
          </Flex>
          <Flex direction="column" justify="end" gap="4">
            <Flex direction="column" gap="2">
              <Text as="label" size="2" weight="bold">
                {i18n("Technologies")}
              </Text>
              <Flex gap="2">
                {Object.keys(project.mainTools).map((tool, index) => {
                  const { color, borderColor } = project.mainTools[tool];

                  return (
                    <Badge
                      key={index}
                      variant="surface"
                      color={borderColor}
                      className={`${color}`}
                    >
                      {tool === "React" && <FaReact />}
                      {tool === "Node" && <FaNodeJs />}
                      {tool}
                    </Badge>
                  );
                })}
              </Flex>
              <Flex align="center" className="rounded-full overflow-hidden">
                {Object.keys(project.tools).map((tool, index) => {
                  const { color, percentage } = project.tools[tool];

                  return (
                    <Flex
                      key={index}
                      width={`${percentage}%`}
                      height="4px"
                      className={`${color}`}
                    />
                  );
                })}
              </Flex>
              <Grid columns="auto auto" gap="2" width="100%">
                {Object.keys(project.tools).map((tool, index) => {
                  const { color, percentage } = project.tools[tool];

                  return (
                    <Flex key={index} align="center" gap="1">
                      <Box
                        as="span"
                        width="8px"
                        height="8px"
                        className={`rounded-full ${color}`}
                      />
                      <Text as="span" size="1">
                        {tool}
                      </Text>
                      <Text
                        as="span"
                        size="1"
                        className="text-[var(--gray-500)] dark:text-[var(--dark-gray-500)]"
                      >
                        {percentage}%
                      </Text>
                    </Flex>
                  );
                })}
              </Grid>
            </Flex>
            <Flex align="center" justify="between">
              <Flex align="center" justify="between" gap="2">
                <FaCalendarAlt />
                <Text as="span" size="1">
                  {moment(project.createdAt).format("LL")}
                </Text>
              </Flex>
              <Link href={project.url} target="_blank">
                <Button
                  size="1"
                  radius="medium"
                  variant="solid"
                  className="text-[var(--dark-gray-100)] dark:text-[var(--gray-100)] bg-[var(--detail)] dark:bg-[var(--dark-detail)] hover:opacity-75 transition-all cursor-pointer"
                >
                  {i18n("View")}
                  <FaAngleRight />
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
};
