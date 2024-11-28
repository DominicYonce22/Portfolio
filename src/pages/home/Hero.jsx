import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Hero() {
  const hiddenContent = useRef(null);
  const hoverContent = useRef(null);
  const container = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let xTo = gsap.quickTo(hiddenContent.current, "--x", {
        duration: 0.4,
        ease: "power4.out",
      }),
      yTo = gsap.quickTo(hiddenContent.current, "--y", {
        duration: 0.4,
        ease: "power4.out",
      });
    let tl = gsap.timeline({ paused: true });

    tl.to(hiddenContent.current, {
      "--size": 250,
      duration: 0.75,
      ease: "back.out(1.7)",
    });

    // Trigger forward animation on mouseenter
    hoverContent.current.addEventListener("mouseenter", () => {
      tl.restart();
    });

    // Trigger reverse animation on mouseleave
    hoverContent.current.addEventListener("mouseleave", () => {
      tl.reverse();
    });

    // Track mouse position and apply to hidden content with boundingRect
    container.current.addEventListener("mousemove", (e) => {
      let boundingRect = container.current.getBoundingClientRect(); // Get container's bounding rect

      // Calculate mouse position relative to container (no offset for centering this time)
      let relX = e.pageX - boundingRect.left;
      let relY = e.pageY - boundingRect.top;

      // Adjust for scroll position
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // We want it tighter, so no more centering for X and Y here
      let x = relX;
      let y = relY - scrollTop;

      // Update GSAP properties with the new position (closer to the mouse)
      gsap.set(hiddenContent.current, {
        autoAlpha: 1, // Ensure it's visible
        "--x": x, // Update the custom property for X
        "--y": y, // Update the custom property for Y
      });

      // Update the quickTo animations

      yTo(y);
      xTo(x);
    });

    container.current.addEventListener("mouseleave", () => {
      gsap.set(hiddenContent.current, {
        autoAlpha: 0, // Hide the content
        ease: "back.out(1.7)", // Intense ease-in-out with a back-and-forth overshoot for a "shwoop" effect
      });
    });

    container.current.addEventListener("mouseenter", () => {
      gsap.set(hiddenContent.current, {
        autoAlpha: 1, //show the mask
        ease: "back.in(1.7)", // Intense ease-in-out with a back-and-forth overshoot for a "shwoop" effect
      });
    });
  });

  return (
    <section
      ref={container}
      className="relative h-screen bg-black py-16 sm:py-24"
    >
      <div className="h-full bg-black py-[3rem] text-justify text-[2rem] tracking-tighter backdrop-blur-md oldPhone:mx-auto oldPhone:w-[90%] oldPhone:py-6 md:py-16">
        <div ref={hoverContent}>
          <p className="text-center font-bold text-[#ced4da] oldPhone:text-lg sm:text-3xl">
            Hi, Im
          </p>
          <h1 className="mb-6 text-center font-bold uppercase text-[#2cd2dd] oldPhone:mb-10 oldPhone:text-4xl android:px-7 android:text-[2.8rem] android:tracking-wider md:mb-12 md:text-6xl lg:mb-20 lg:text-[90px] xl:text-9xl">
            Dominic Bonafe
          </h1>

          <p className="android:text-md bg mb-2 w-full text-sm leading-normal text-[#ced4da] oldPhone:mb-10 oldPhone:break-all oldPhone:px-8 oldPhone:text-sm oldPhone:leading-[2.2] oldPhone:tracking-[0.5px] oldPhone:[word-spacing:0.8px] android:mb-16 android:font-bold android:leading-7 android:tracking-tight sm:px-[8%] sm:text-lg sm:leading-8 md:mb-14 md:text-xl md:font-normal md:leading-10 md:tracking-[-2px] lg:px-32 lg:text-2xl lg:font-normal lg:leading-[45px] lg:tracking-[-3px]">
            I'm a<span className="text-[#2cd2dd]"> Frontend Developer</span> and
            a recent graduate (Class of 2024) with a BSCS from STI-WNU. I'm a
            front-end developer with strong experience in the React framework,
            passionate about building sleek, responsive user interfaces. With a
            solid foundation in web development, I focus on turning complex
            ideas into seamless experiences.
          </p>
        </div>
      </div>
      <div
        ref={hiddenContent}
        style={{
          visibility: "hidden",
          "--x": "0px",
          "--y": "0px",
          "--size": "10px",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(circle at var(--x) var(--y), black var(--size), transparent 0)",
        }}
        className="absolute bottom-0 left-0 right-0 top-0 mx-auto h-full bg-gradient-to-b from-[#d5f6f8] to-[#2cd2dd] text-justify text-[2rem] tracking-tighter backdrop-blur-md oldPhone:py-[86px] sm:py-[120px] md:py-[160px]"
      >
        <div className="oldPhone:mx-auto oldPhone:w-[90%]">
          <p className="text-center font-bold text-[#23a8b1] oldPhone:text-lg sm:text-3xl">
            Hi, Im
          </p>
          <h1 className="mb-6 text-center font-bold uppercase text-[#16696f] oldPhone:mb-10 oldPhone:text-4xl android:px-7 android:text-[2.8rem] android:tracking-wider md:mb-12 md:text-6xl lg:mb-20 lg:text-[90px] xl:text-9xl">
            Dominic Bonafe
          </h1>

          <p className="android:text-md bg mb-2 w-full text-sm leading-normal text-black oldPhone:mb-10 oldPhone:break-all oldPhone:px-8 oldPhone:text-sm oldPhone:leading-[2.2] oldPhone:tracking-[0.5px] oldPhone:[word-spacing:0.8px] android:mb-16 android:font-bold android:leading-7 android:tracking-tight sm:px-[8%] sm:text-lg sm:leading-8 md:mb-14 md:text-xl md:font-normal md:leading-10 md:tracking-[-2px] lg:px-32 lg:text-2xl lg:font-normal lg:leading-[45px] lg:tracking-[-3px]">
            I'm a<span className="text-white"> Frontend Developer</span> and a
            recent graduate (Class of 2024) with a BSCS from STI-WNU. I'm a
            front-end developer with strong experience in the React framework,
            passionate about building sleek, responsive user interfaces. With a
            solid foundation in web development, I focus on turning complex
            ideas into seamless experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
