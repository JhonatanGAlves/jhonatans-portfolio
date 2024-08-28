import { Box } from "@radix-ui/themes";

import { Experiences, Hero, Projects } from "./index";

interface MainProps {
  scrollPosition: number;
  modeDevice: "DESKTOP" | "MOBILE";
}

export const Main = ({ scrollPosition, modeDevice }: MainProps) => {
  return (
    <Box className="py-2 px-6 min-[828px]:px-8 lg:px-32 transition-all">
      <Hero scrollPosition={scrollPosition} modeDevice={modeDevice} />
      <Projects />
      <Experiences modeDevice={modeDevice} />
    </Box>
  );
};
