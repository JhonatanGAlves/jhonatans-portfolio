export function getExperienceAndWidth(
  initialDate: Date,
  progressBarsElement: HTMLDivElement
): {
  experience: number;
  progressBarValue: number;
} {
  const currentDate = new Date();
  const differenceInMilliseconds =
    currentDate.getTime() - initialDate.getTime();
  const oneYearInMilliseconds = 1000 * 60 * 60 * 24 * 365.25; // 1000 * 60 = 1 min * 60 = 1 hour * 24 = 1 day *  365.25 = 1 year, considering leap year

  const yearsOfExperience = (
    differenceInMilliseconds / oneYearInMilliseconds
  ).toFixed(2);

  const progressBarValue = (
    progressBarsElement.offsetWidth *
    (Number(yearsOfExperience) / 10)
  ).toFixed(2);

  const experienceAndProgressBarValue = {
    experience: Math.floor(Number(yearsOfExperience)),
    progressBarValue: Number(progressBarValue), // 1rem equals 16px
  };

  return experienceAndProgressBarValue;
}
