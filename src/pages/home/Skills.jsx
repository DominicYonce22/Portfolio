import { useEffect, useState } from "react";
import CtaButton from "../../components/CtaButton";
import SkillsCarousel from "./SkillsCarousel";
import SkillsParallax from "./SkillsParallax";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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

  // useGSAP(() => {
  //   const textWrapper = document.querySelector(".text-wrapper");
  //   const contentWidth = textWrapper.scrollWidth;
  //   const viewportWidth = window.innerWidth;
  //   const dynamicDuration = Math.ceil(contentWidth / viewportWidth) * 8;

  //   // Manually track the movement by using gsap with repeat set to -1
  //   gsap.to(".text-wrapper", {
  //     x: `-${contentWidth}px`, // Move all the way to the left
  //     duration: dynamicDuration, // Control the speed based on content width
  //     ease: "none", // Keep the movement consistent
  //     repeat: -1, // Make it repeat indefinitely
  //     onUpdate: () => {
  //       // Reset position manually when animation completes
  //       if (
  //         parseFloat(gsap.getProperty(".text-wrapper", "x")) <= -contentWidth
  //       ) {
  //         gsap.set(".text-wrapper", { x: viewportWidth });
  //       }
  //     },
  //   });
  // });

  return (
    <section className="bg-[#060e18]">
      <div className="oldphone:w-[90%] h-[100%] pt-11 oldPhone:mx-auto oldPhone:w-[90%] md:flex md:w-full md:flex-col md:items-center">
        <div className="relative w-full overflow-hidden">
          {/* <div className="text-wrapper flex max-w-max">
            <h2 className="mb-20 whitespace-nowrap bg-[#2cd2dd] pr-8 text-center font-semibold uppercase text-black oldPhone:text-xl android:text-8xl">
              Skills and Background
            </h2>
            <h2 className="mb-20 whitespace-nowrap bg-[#2cd2dd] pr-8 text-center font-semibold uppercase text-black oldPhone:text-xl android:text-8xl">
              Skills and Background
            </h2>
            <h2 className="mb-20 whitespace-nowrap bg-[#2cd2dd] pr-8 text-center font-semibold uppercase text-black oldPhone:text-xl android:text-8xl">
              Skills and Background
            </h2>

            <h2 className="mb-20 whitespace-nowrap bg-[#2cd2dd] text-center font-semibold uppercase text-black oldPhone:text-xl android:text-8xl">
              Skills and Background
            </h2>
          </div> */}
        </div>
        {screenWidth > 768 ? (
          <SkillsParallax />
        ) : (
          <SkillsCarousel skills={skills} />
        )}
      </div>
    </section>
  );
}

export default Skills;
