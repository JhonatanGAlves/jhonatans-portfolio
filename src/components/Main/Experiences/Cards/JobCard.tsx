import { Box, Card, Flex, Heading, Link, Text } from "@radix-ui/themes";
import moment from "moment";

import { useI18n } from "../../../../hooks/useI18n";

interface JobCardProps {
  job: JobTypes;
}

export const JobCard = ({ job }: JobCardProps) => {
  const { i18n } = useI18n();

  const startYear = job.period.start.split("/")[0];
  const endYear = job.period.end.split("/")[0];
  const exactPeriod = convertToExactPeriod(job.period);

  function convertToExactPeriod(period: {
    start: string;
    end: string;
  }): string {
    const start = moment(period.start, "YYYY/MM/DD");
    const end = moment(period.end, "YYYY/MM/DD");

    const years = end.diff(start, "years");
    start.add(years, "years");

    const months = end.diff(start, "months");

    return (
      (years ? `${years} ${i18n("year")}${years > 1 ? "s" : ""}` : "") +
      " " +
      (months ? `${months} ${i18n("month")}${months > 1 ? "s" : ""}` : "")
    );
  }

  return (
    <Card size="2">
      <Flex direction="column" gap="2">
        <Flex
          direction="column"
          align="center"
          className="relative pb-[14px] border-b border-solid border-[var(--gray-800)] dark:border-[var(--dark-gray-800)]"
        >
          <Text
            as="span"
            align="center"
            className="text-[var(--detail)] dark:text-[var(--dark-detail)]"
          >
            {`< ${job.role} />`}
          </Text>
          <Link
            href={job.site}
            target="_blank"
            className="text-[var(--gray-100)] dark:text-[var(--dark-gray-100)] decoration-[var(--gray-100)] dark:decoration-[var(--dark-gray-100)] transition-all"
          >
            <Heading as="h2" align="center">
              {job.companyName}
            </Heading>
          </Link>
          <Text
            as="label"
            align="center"
            className="text-[var(--gray-100)] dark:text-[var(--dark-gray-100)]"
          >
            {exactPeriod}
          </Text>
          <Box
            width="12px"
            height="12px"
            className="absolute -bottom-[6px] rounded-full border-[3px] border-solid border-[var(--detail)] dark:border-[var(--dark-detail)] bg-[var(--dark-gray-100)] dark:bg-[var(--gray-100)]"
          />
        </Flex>
        <Flex direction="column" align="center">
          <Text
            as="span"
            align="center"
            className="text-[var(--gray-100)] dark:text-[var(--dark-gray-100)]"
          >
            {`${startYear} ${
              job.isPresent ? `(${i18n("Present")})` : `- ${endYear}`
            }`}
          </Text>
          <Text
            as="span"
            align="center"
            weight="bold"
            className="text-[var(--gray-100)] dark:text-[var(--dark-gray-100)]"
          >
            {`(${i18n(job.locationType)})`}
          </Text>
          <Text
            as="p"
            align="center"
            size="1"
            className="mt-2 text-[var(--gray-100)] dark:text-[var(--dark-gray-100)]"
          >
            {job.description}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
