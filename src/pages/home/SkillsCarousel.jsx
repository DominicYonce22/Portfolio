import { animated, useTransition } from "@react-spring/web";
import CtaButton from "../../components/CtaButton";
import { useState } from "react";

function SkillsCarousel({ skills }) {
  const [currSlide, setCurrSlide] = useState(0);
  const [flip, setFlip] = useState(false);
  const [idle, setIdle] = useState(false);
  const transitions = useTransition([currSlide], {
    from: { opacity: 0, transform: "rotateX(0deg)" },
    enter: {
      opacity: 1,
      transform: flip ? "rotateX(360deg)" : "rotateX(0deg)",
    },
    leave: { opacity: 0, display: "none" },
    config: { duration: 1000 },
    onRest: (state) => {
      setIdle(true);
      if (state.finished && state.value === "leave") {
        // Trigger enter transition after leave finishes
        setCurrSlide((prev) => (prev + 1) % skills.length); // You can adjust to your
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
    <div className="flex items-center justify-between">
      <CtaButton
        onClick={handlePrev}
        className="h-10 w-[10%] rounded-md border-2 border-black transition-all duration-300 hover:bg-gray-300"
      >
        Prev
      </CtaButton>

      {transitions((style, index) => {
        return (
          <animated.div
            key={skills[index].title}
            style={{
              ...style,
              borderRadius: "15px",
              marginBottom: "30px",
              boxShadow: idle
                ? "0px 0px 25px 4px rgba(44, 209, 221, 0.061)"
                : "none",
              height: "30rem",
              width: "60%",
            }}
          >
            <div className="h-full w-full border-[1px] border-[#2cd2dd] p-8 text-black">
              <h3 className="text-bold mb-1 text-2xl text-white">
                {skills[index].title}
              </h3>
              <sub className="text-md mb-11 block text-gray-400">
                {skills[index].subTitle}
              </sub>
              <span className="mb-12 block text-7xl text-white">
                <ion-icon name={skills[index].icon}></ion-icon>
              </span>

              <ul className="flex list-none flex-col gap-3">
                {skills[index].qualities.map((q) => (
                  <li key={index} className="flex gap-2 text-sm text-white">
                    <span className="text-bold">
                      <ion-icon name="checkmark-circle-outline"></ion-icon>
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </animated.div>
        );
      })}
      <CtaButton onClick={handleNext}>Next</CtaButton>
    </div>
  );
}

export default SkillsCarousel;
