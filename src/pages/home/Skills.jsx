import { useEffect, useState } from "react";

import SkillsCarousel from "./SkillsCarousel";

import SkillsHover from "./SkillsHover";
function Skills({ skills }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Handle Resize Event to update state
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth); // Update screenWidth on resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="bg-black">
      <div className="oldphone:w-[90%] h-[100%] oldPhone:mx-auto oldPhone:w-[90%] md:flex md:w-full md:flex-col md:items-center">
        <h2 className="py-10 text-center text-4xl font-bold uppercase text-[#2cd2dd] oldPhone:mb-5 oldPhone:text-4xl android:text-5xl md:hidden">
          Skills
        </h2>

        {screenWidth > 768 ? (
          <SkillsHover />
        ) : (
          <SkillsCarousel skills={skills} />
        )}
      </div>
    </section>
  );
}

export default Skills;
