import { useEffect, useState } from "react";

interface UseScreenStatusProps {
  scrollPosition: number;
  currentScreenWidth: number;
  modeDevice: "DESKTOP" | "MOBILE";
}

export const useScreenStatus = (): UseScreenStatusProps => {
  const [scrollPosition, setScrollPosition] = useState<number>(window.scrollY);
  const [currentScreenWidth, setCurrentScreenWidth] = useState<number>(
    window.innerWidth
  );
  const [modeDevice, setModeDevice] = useState<"DESKTOP" | "MOBILE">(
    window.innerWidth > 767 ? "DESKTOP" : "MOBILE"
  );

  function handleScroll() {
    setScrollPosition(window.scrollY);
  }

  function handleResize() {
    setCurrentScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    if (currentScreenWidth > 767) {
      setModeDevice("DESKTOP");
      return;
    }
    setModeDevice("MOBILE");
  }, [currentScreenWidth]);

  useEffect(() => {
    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { scrollPosition, currentScreenWidth, modeDevice };
};
