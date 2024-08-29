import { MutableRefObject, useEffect, useState } from "react";

import { Flex, Progress, Tooltip } from "@radix-ui/themes";

import { useI18n } from "../../../hooks/useI18n";
import { getExperienceAndWidth } from "../../../utils/utils";

interface ExperienceProgressProps {
  alt: string;
  src: string;
  size: number;
  index: number;
  progressBarsRef: MutableRefObject<HTMLDivElement>;
}

export const ExperienceProgress = ({
  alt,
  src,
  size,
  index,
  progressBarsRef,
}: ExperienceProgressProps) => {
  const [widthAfterTimeout, setWidthAfterTimeout] = useState(0);
  const [experienceAndWidth, setExperienceAndWidth] = useState<{
    experience: number;
    progressBarValue: number;
  } | null>(null);

  const { i18n } = useI18n();

  useEffect(() => {
    let timerId: number | undefined = undefined;

    if (experienceAndWidth) {
      timerId = setTimeout(
        () => {
          setWidthAfterTimeout(experienceAndWidth.progressBarValue);
        },
        index === 0 ? 500 : index === 1 ? 700 : index === 2 ? 900 : 1100
      ) as unknown as number;
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [experienceAndWidth]);

  useEffect(() => {
    const howLongAndWidth = getExperienceAndWidth(
      index === 0 || index === 1
        ? new Date(2021, 4, 1)
        : index === 2
        ? new Date(2020, 11, 1)
        : new Date(2023, 5, 1),
      progressBarsRef.current
    );
    setExperienceAndWidth(howLongAndWidth);
  }, [progressBarsRef.current]);

  return (
    <Flex align="center" gap="12px">
      <Tooltip
        content={
          index === 0
            ? "React.js"
            : index === 1
            ? "TypeScript"
            : index === 2
            ? "JavaScript"
            : "Node.js"
        }
      >
        <img alt={alt} src={src} width={size} />
      </Tooltip>
      <Progress
        className="[&>*]:bg-[var(--detail)] [&>*]:dark:bg-[var(--dark-detail)] transition-all"
        value={widthAfterTimeout}
        max={progressBarsRef.current.offsetWidth}
        variant="surface"
      />
      {widthAfterTimeout !== 0 && experienceAndWidth && (
        <p>{`${experienceAndWidth.experience}+ ${i18n("year")}${
          experienceAndWidth.experience > 1 ? "s" : ""
        }`}</p>
      )}
    </Flex>
  );
};
