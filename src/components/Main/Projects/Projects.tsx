import {
  Avatar,
  Box,
  Flex,
  Grid,
  Heading,
  HoverCard,
  Link,
  Text,
} from "@radix-ui/themes";

import { useI18n } from "../../../hooks/useI18n";
import { ProjectCard } from "./ProjectCard";
import { MY_PROJECTS } from "../../../mock/mock";
import imageProfile from "../../../assets/image-profile.jpg";

export const Projects = () => {
  const { i18n } = useI18n();

  return (
    <Flex
      id="projects"
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
          {i18n("My Projects")}
        </Heading>
        <Text as="span" className="max-w-[34.375rem]" align="center">
          {i18n(
            "All the projects bellow are Open Source and you can find the code for each project on my"
          )}{" "}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link
                href="https://github.com/JhonatanGAlves"
                target="_blank"
                weight="bold"
                className="text-[var(--gray-100)] dark:text-[var(--dark-gray-100)] decoration-[var(--gray-100)] dark:decoration-[var(--dark-gray-100)] transition-all"
              >
                {i18n("GitHub profile")}
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content maxWidth="300px">
              <Flex gap="4">
                <Avatar
                  size="3"
                  fallback="R"
                  radius="full"
                  src={imageProfile}
                />
                <Box>
                  <Heading size="3" as="h3">
                    Jhonatan Alves
                  </Heading>
                  <Text as="div" size="2" color="gray" mb="2">
                    @JhonatanGAlves
                  </Text>
                  <Text as="div" size="2">
                    {`👨‍💻 ${i18n(
                      "I'm 28 years old and Full Stack Software Developer"
                    )}`}
                    <br />
                    {`🎓 ${i18n(
                      "Graduated in Systems Analysis and Development"
                    )}`}
                    <br />
                    {`🎮 ${i18n("GAMER")}`}
                    <br />
                  </Text>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>
          .
        </Text>
      </Flex>
      <Grid columns={{ initial: "1", sm: "3", lg: "4" }} gap="4" width="auto">
        {MY_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Flex>
  );
};
