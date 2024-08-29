import { Footer, Header, Main } from "./components/index";
import { useScreenStatus } from "./hooks/useScreenStatus";

export const App = () => {
  const { scrollPosition, modeDevice, currentScreenWidth } = useScreenStatus();

  return (
    <div className="font-sans text-[var(--gray-100)] dark:text-[var(--dark-gray-100)] bg-gradient-to-b from-[var(--bg-linear-1)] dark:from-[var(--dark-bg-linear-1)] to-[var(--bg-linear-2)] dark:to-[var(--dark-bg-linear-2)]">
      <Header scrollPosition={scrollPosition} modeDevice={modeDevice} />
      <Main
        scrollPosition={scrollPosition}
        modeDevice={modeDevice}
        currentScreenWidth={currentScreenWidth}
      />
      <Footer />
    </div>
  );
};
