import { animated, useTransition } from "@react-spring/web";
import CtaButton from "../../components/CtaButton";
import { useContext, useState } from "react";
import { AppContext } from "../../AppContextProvider";

function SkillsCarousel({ skills }) {
  const { handlePrev, handleNext, transitions, idle } = useContext(AppContext);

  return (
    <div className="mb-10 h-full">
      <div className="flex items-center oldPhone:justify-center sm:justify-between">
        <CtaButton hideSm={true} onClick={handlePrev}>
          Prev
        </CtaButton>

        {transitions((style, index) => {
          return (
            <animated.div
              className="oldPhone:w-[90%] sm:w-[60%]"
              key={skills[index].title}
              style={{
                ...style,

                marginBottom: "30px",
                boxShadow: idle
                  ? "0px 0px 25px 4px rgba(44, 209, 221, 0.061)"
                  : "none",
              }}
            >
              <div className="w-full border-[1px] border-[#2cd2dd] p-8 text-[#2cd2dd]">
                <h3 className="text-bold mb-2 oldPhone:text-base">
                  {skills[index].title}
                </h3>
                <sub className="mb-11 text-gray-400 oldPhone:hidden oldPhone:text-justify android:block android:text-left android:text-[-0.125rem] android:tracking-tighter">
                  {skills[index].subTitle}
                </sub>
                <span className="mb-12 block oldPhone:text-4xl android:text-6xl sm:text-7xl">
                  <ion-icon name={skills[index].icon}></ion-icon>
                </span>

                <ul className="flex list-none flex-col gap-7">
                  {skills[index].qualities.map((q, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 font-bold uppercase oldPhone:text-[10px] sm:text-sm"
                    >
                      <span className="text-bold flex items-center oldPhone:text-xl">
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
        <CtaButton hideSm={true} onClick={handleNext}>
          Next
        </CtaButton>
      </div>

      <div className="mx-auto flex w-[90%] grid-cols-2 justify-center gap-4 pb-8">
        <button
          onClick={handlePrev}
          className="flex h-[2rem] w-[90%] items-center justify-center rounded-sm bg-[#2cd2dd] uppercase text-black sm:hidden"
        >
          previous
        </button>
        <button
          onClick={handleNext}
          className="flex h-[2rem] w-[90%] items-center justify-center rounded-sm bg-[#2cd2dd] uppercase sm:hidden"
        >
          <span>next</span>
        </button>
      </div>
    </div>
  );
}

export default SkillsCarousel;
