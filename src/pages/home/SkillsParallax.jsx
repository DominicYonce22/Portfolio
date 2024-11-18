import React from "react";
import mmmkay from "../../assets/bg-1.jpg";
import MdCard from "../../components/MdCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function SkillsParallax() {
  useGSAP(() => {
    // Loop over each .card element and apply ScrollTrigger individually
    gsap.utils.toArray(".card:nth-child(odd)").forEach((card, index) => {
      gsap.from(card, {
        x: -500,
        opacity: 0,
        duration: 1,
        ease: "power1",
        scrollTrigger: {
          toggleActions: "restart none none none",

          start: "top top", // Start when the top of the card reaches 80% of the viewport height
          // Make sure the animation lasts long enough to finish
          trigger: card, // Use each card as the trigger
        },
      });
    });
    gsap.to(".card", {
      scrollTrigger: {
        trigger: ".container",
        start: "top top",

        onEnter: () => {
          gsap.set(".card", { opacity: 0 });
        },
      },
    });
    gsap.utils.toArray(".card:nth-child(even)").forEach((card, index) => {
      gsap.from(card, {
        x: 500,
        opacity: 0,
        duration: 1,
        ease: "power1",
        scrollTrigger: {
          toggleActions: "restart none none none",

          start: "top top", // Start when the top of the card reaches 80% of the viewport height
          // Make sure the animation lasts long enough to finish
          trigger: card, // Use each card as the trigger
        },
      });
    });
  });
  return (
    <div className="container flex w-full flex-col">
      <MdCard />
      <MdCard />
      <MdCard />
    </div>
  );
}
