import { useTransition } from "@react-spring/web";
import { createContext, useState } from "react";
import { skills } from "./groups/data";
export const CarouselContext = createContext();

export default function CarouselProvider({ children }) {
  const [currSlide, setCurrSlide] = useState(0);
  const [flip, setFlip] = useState(false);
  const [idle, setIdle] = useState(false);
  // const transitions = useTransition([currSlide], {
  //   from: { opacity: 0, transform: "rotateX(0deg)" },
  //   enter: {
  //     opacity: 1,
  //     transform: flip ? "rotateX(360deg)" : "rotateX(0deg)",
  //   },
  //   leave: { opacity: 0, display: "none" },
  //   config: { duration: 1000 },
  //   onRest: (state) => {
  //     setIdle(true);
  //     if (state.finished && state.value === "leave") {
  //       // Trigger enter transition after leave finishes
  //       setCurrSlide((prev) => (prev + 1) % skills.length); // You can adjust to your
  //     }
  //   },
  // });
  const transitions = useTransition([currSlide], {
    from: { opacity: 0, transform: "translateX(-100%)" }, // Start from left off-screen
    enter: {
      duration: 0.2,
      opacity: 1,
      transform: "translateX(0)", // Move to its original position
    },
    leave: { opacity: 0, transform: "translateX(100%)", display: "none" }, // Move off-screen to the right
    config: { duration: 1000 },
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
    <CarouselContext.Provider
      value={{ handlePrev, handleNext, transitions, idle }}
    >
      {children}
    </CarouselContext.Provider>
  );
}
