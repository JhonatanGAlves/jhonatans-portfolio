import { Flex, Link, Text } from "@radix-ui/themes";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      justify="center"
      align="center"
      width="100%"
      height="3.125rem"
      className="bg-[var(--gray-800)] dark:bg-[var(--dark-gray-800)]"
    >
      <Text as="span" mr="1">
        &copy;
      </Text>
      <Text as="span" size="2">
        Copyright {currentYear}{" "}
        <Link
          weight="bold"
          href="https://www.linkedin.com/in/jhonatan-alves-11b28015b/"
          target="_blank"
          className="decoration-[var(--gray-100)] dark:decoration-[var(--dark-gray-100)] text-[var(--gray-100)] dark:text-[var(--dark-gray-100)] transition-all "
        >
          Jhonatan Alves
        </Link>
      </Text>
    </Flex>
  );
};
