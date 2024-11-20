import { useTransition } from "@react-spring/web";
import { createContext, useState } from "react";
import { skills } from "./groups/data";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currSlide, setCurrSlide] = useState(0);
  const [flip, setFlip] = useState(false);
  const [idle, setIdle] = useState(false);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const transitions = useTransition([currSlide], {
    from: { opacity: 0, transform: "translateX(-100%)" }, // Start from left off-screen
    enter: {
      duration: 0.2,
      opacity: 1,
      transform: "translateX(0)",
    },
    leave: { opacity: 0, transform: "translateX(100%)", display: "none" }, // Move off-screen to the right
    config: { duration: 500 },
    onRest: (state) => {
      setIdle(true);
      if (state.finished && state.value === "leave") {
        // Trigger enter transition after leave finishes
        setCurrSlide((prev) => (prev + 1) % skills.length); // Adjust this logic to go to next slide
      }
    },
  });
  function handlePrev() {
    setFlip(true);
    setCurrSlide(currSlide > 0 ? currSlide - 1 : skills.length - 1);
  }
  function handleNext() {
    setFlip(true);
    setCurrSlide(currSlide < skills.length - 1 ? currSlide + 1 : 0); // Go to next slide, wrap around if at end
  }
  return (
    <AppContext.Provider
      value={{
        handlePrev,
        handleNext,
        transitions,
        idle,
        screenWidth,
        handleResize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
