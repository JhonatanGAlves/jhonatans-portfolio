import { Box } from "@radix-ui/themes";

import { Contact, Experiences, Hero, Projects } from "./index";

interface MainProps {
  scrollPosition: number;
  modeDevice: "DESKTOP" | "MOBILE";
  currentScreenWidth: number;
}

export const Main = ({
  scrollPosition,
  modeDevice,
  currentScreenWidth,
}: MainProps) => {
  return (
    <Box className="py-2 px-6 min-[828px]:px-8 lg:px-32 transition-all">
      <Hero scrollPosition={scrollPosition} modeDevice={modeDevice} />
      <Projects />
      <Experiences
        modeDevice={modeDevice}
        currentScreenWidth={currentScreenWidth}
      />
      <Contact modeDevice={modeDevice} />
    </Box>
  );
};
