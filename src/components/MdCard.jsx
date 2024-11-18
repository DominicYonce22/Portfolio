import React from "react";
import mmmkay from "../assets/bg-1.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
export default function MdCard() {
  return (
    <div className="card flex w-full flex-col items-center justify-center">
      <div
        className="relative h-80 w-full bg-no-repeat"
        style={{
          backgroundImage: `url(${mmmkay})`,
          backgroundSize: "100% auto", // Image fills width and adjusts height automatically
          backgroundPosition: "center", // Keeps it centered so nothing gets cut off
          backgroundRepeat: "no-repeat", // Prevents repeating the image
        }}
      >
        <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl font-bold text-[#2cd2dd]">
          SKILL TITLE
        </h2>
      </div>
      <div className="w-full bg-white p-10">
        <h3 className="mb-9 text-3xl font-bold text-[#2cd2dd]">HUNTY</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, dolor
          enim repudiandae consequuntur inventore, animi, harum dolore
          laudantium non sunt perspiciatis. In unde deleniti ex fugiat velit
          neque eveniet.
        </p>
      </div>
    </div>
  );
}
