import { useEffect, useState } from "react";
import CtaButton from "../../components/CtaButton";
import SkillsCarousel from "./SkillsCarousel";
import SkillsParallax from "./SkillsParallax";

function Skills({ skills }) {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  });

  return (
    <section className="bg-[#060e18]">
      <div className="mx-auto h-[100%] w-[90%] pt-11">
        <h2 className="mb-20 text-center text-3xl font-semibold text-[#2cd2dd]">
          Skills and Background
        </h2>
        {screenWidth > 1024 ? (
          <div className="h-full w-full text-center text-3xl text-white">
            You are at a bigger screen
          </div>
        ) : (
          <SkillsCarousel skills={skills} />
        )}
      </div>
    </section>
  );
}

export default Skills;
