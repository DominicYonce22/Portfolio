// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap/gsap-core";

// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useRef } from "react";

// export default function Testing() {
//   const mask = useRef(null);
//   const hoverArea = useRef(null);
//   const testing = useRef(null);
//   gsap.registerPlugin(ScrollTrigger);
//   useGSAP(() => {
//     let xTo = gsap.quickTo(mask.current, "--x", { duration: 0.4 }),
//       yTo = gsap.quickTo(mask.current, "--y", { duration: 0.4 });

//     testing.current.addEventListener("mousemove", (e) => {
//       xTo(e.pageX);
//       yTo(e.pageY);

//       console.log(
//         "Target X (Mouse):",
//         e.pageX,
//         "Animating To:",
//         mask.current.style.getPropertyValue("--x"),
//       );
//     });

//     return () => {
//       // hoverArea.current.removeEventListener("mouseenter", () => {});
//       // hoverArea.current.removeEventListener("mouseleave", () => {});
//       testing.current.removeEventListener("mousemove", () => {});
//     };
//   });
//   return (
//     <section ref={testing} className="relative h-screen w-screen bg-black">
//       <div className="mx-auto flex h-full w-full items-center justify-center bg-white text-2xl font-bold text-[#2cd2dd]">
//         <p className="bg-pink-600" ref={hoverArea}>
//           This is a drill. remain calm
//         </p>
//       </div>

//       <div
//         ref={mask}
//         style={{
//           // visibility: "hidden",
//           "--x": "0px",
//           "--y": "0px",
//           "--size": "5px",
//           pointerEvents: "none",
//         }}
//         className="absolute bottom-0 left-0 right-0 top-0 mx-auto flex h-full w-[90%] items-center justify-center bg-white text-7xl font-bold text-[#2cd2dd]"
//       >
//         This is the mask. ohh chile
//       </div>
//     </section>
//   );
// }

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

    return () => {
      hoverContent.current.removeEventListener("mouseenter", () => {});
      hoverContent.current.removeEventListener("mouseleave", () => {});
      container.current.removeEventListener("mousemove", () => {});
    };
  });

  return (
    <section
      ref={container}
      className="relative h-screen bg-black py-16 sm:py-24"
    >
      <div className="h-full w-full bg-black py-[3rem] text-justify text-[2rem] tracking-tighter backdrop-blur-md oldPhone:py-6 android:rounded-2xl md:py-16">
        <p className="text-center font-bold text-[#ced4da] oldPhone:text-lg sm:text-3xl">
          Hi, Im
        </p>
        <h1 className="mb-6 text-center font-bold uppercase text-[#2cd2dd] oldPhone:text-4xl android:px-7 android:text-[2.8rem] android:tracking-wider md:mb-12 md:text-3xl xl:text-9xl">
          Dominic Bonafe
        </h1>

        <p
          ref={hoverContent}
          className="mb-2 text-sm leading-normal text-[#ced4da] oldPhone:mb-10 oldPhone:px-8 oldPhone:text-sm oldPhone:leading-6 oldPhone:tracking-[-1.5px] android:mb-16 android:leading-6 android:tracking-[-.5px] sm:px-[8%] sm:text-lg sm:leading-8 md:mb-14 md:text-xl md:leading-6 md:tracking-[-2px] lg:px-32 lg:text-2xl"
        >
          Hi, I am Dominic. I am a{" "}
          <span className="text-[#2cd2dd]"> Frontend Developer</span>. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Minima, incidunt
          alias aliquid ratione blanditiis quasi, nulla aspernatur dignissimos
          veritatis consequuntur libero? Reiciendis reprehenderit suscipit,
          tempora placeat explicabo architecto perspiciatis illum!
        </p>
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
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gradient-to-b from-[#d5f6f8] to-[#2cd2dd] text-justify text-[2rem] tracking-tighter backdrop-blur-md oldPhone:py-6 android:rounded-2xl md:py-40"
      >
        <p className="text-center font-bold text-[#1f939b] oldPhone:text-lg sm:text-3xl">
          Hi, Im
        </p>
        <h1 className="mb-6 text-center font-bold uppercase text-[#0d3f42] oldPhone:text-4xl android:px-7 android:text-[2.8rem] android:tracking-wider md:mb-12 md:text-3xl xl:text-9xl">
          Dominic Bonafe
        </h1>

        <p className="mb-2 text-sm leading-normal text-black oldPhone:mb-10 oldPhone:px-8 oldPhone:text-sm oldPhone:leading-6 oldPhone:tracking-[-1.5px] android:mb-16 android:leading-6 android:tracking-[-.5px] sm:px-[8%] sm:text-lg sm:leading-8 md:mb-14 md:text-xl md:leading-6 md:tracking-[-2px] lg:px-32 lg:text-2xl">
          Hi, I am Dominic. I am a{" "}
          <span className="text-white"> Frontend Developer</span>. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Illum veritatis ratione,
          odio quas fugit explicabo maiores, exercitationem, earum hic iusto
          velit. Ad earum, incidunt odio itaque temporibus saepe ipsa
          recusandae?
        </p>
      </div>
    </section>
  );
}
