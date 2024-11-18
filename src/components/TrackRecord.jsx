import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TrackRecord() {
  const scrollEl = useRef(null);
  const blind1 = useRef(null);
  const blind2 = useRef(null);
  const blind3 = useRef(null);
  const blind4 = useRef(null);
  const blind5 = useRef(null);
  const track = useRef(null);
  const record = useRef(null);
  const recap = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    gsap.set(
      [
        blind1.current,
        blind2.current,
        blind3.current,
        blind4.current,
        blind5.current,
      ],
      { y: "100%" },
    );
    gsap.set([track.current, record.current], {
      x: "100%",
      opacity: 0,
    });
    gsap.set([recap.current], {
      y: "100%",
      opacity: 0,
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scrollEl.current,
        start: "top top",
        end: "+=150%",

        pin: true,
        scrub: 2,
      },
    });
    timeline.to([track.current, record.current], {
      x: "0%",
      opacity: 1,
      duration: 2,
    });
    timeline.to([recap.current], {
      y: "0%",
      opacity: 1,
      duration: 1.5,
    });
    timeline.to(blind1.current, {
      y: "0%",
      duration: 1,
    });
    timeline.to(blind2.current, {
      y: "0%",
      duration: 1,
    });
    timeline.to(blind3.current, {
      y: "0%",
      duration: 1,
    });
    timeline.to(blind4.current, {
      y: "0%",
      duration: 1,
    });
    timeline.to(blind5.current, {
      y: "0%",
      duration: 5,
    });
  });

  return (
    <div
      ref={scrollEl}
      className="grid h-screen w-full grid-cols-4 grid-rows-[3fr_2fr_9fr] bg-black px-10 pb-9 text-[#2cd2dd]"
    >
      <div className="col-span-full flex items-center justify-end">
        <div className="w-fit overflow-hidden">
          <p ref={blind1} className="text-2xl font-bold uppercase leading-none">
            Well versed developer with a designer's eye
          </p>
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-end overflow-hidden">
        <div ref={blind2} className="w-fit">
          <p className="text-2xl font-bold uppercase leading-none">
            Young Designer Award
          </p>
          <p className="text-2xl font-bold uppercase leading-none">
            STI West Negros
          </p>
          <p className="text-2xl font-bold uppercase leading-none">
            Hackathon 2024
          </p>
        </div>
      </div>
      <div className="col-span-2 flex items-end overflow-hidden">
        <div ref={blind3} className="w-fit overflow-hidden">
          <p className="text-2xl font-bold uppercase leading-none">
            Assistant Web
          </p>
          <p className="text-2xl font-bold uppercase leading-none">
            Developer/OJT
          </p>
          <p className="text-2xl font-bold uppercase leading-none">
            at PhilBio (2024)
          </p>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <div className="w-fit overflow-hidden">
          <div ref={blind4} className="w-fit">
            {" "}
            <p className="text-end text-2xl font-bold uppercase leading-none">
              Thesis Lead Developer
            </p>{" "}
            <p className="text-end text-2xl font-bold uppercase leading-none">
              Butterfly Image
            </p>{" "}
            <p className="text-end text-2xl font-bold uppercase leading-none">
              {" "}
              Classification
            </p>{" "}
            <p className="text-end text-2xl font-bold uppercase leading-none">
              (2022-2024)
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="w-fit overflow-hidden">
          <div ref={blind5} className="w-fit">
            {" "}
            <p className="text-2xl font-bold uppercase leading-none">
              Thesis Project Manager
            </p>{" "}
            <p className="text-2xl font-bold uppercase leading-none">
              Butterfly Image
            </p>{" "}
            <p className="text-2xl font-bold uppercase leading-none">
              {" "}
              Classification
            </p>{" "}
            <p className="text-2xl font-bold uppercase leading-none">
              (2022-2024)
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-end justify-end overflow-hidden">
        <div
          ref={track}
          className="text-[10rem] font-bold uppercase leading-[.76]"
        >
          Track
        </div>
        <div
          ref={record}
          className="text-[10rem] font-bold uppercase leading-[.72]"
        >
          Record
        </div>
        <div ref={recap} className="text-lg font-bold uppercase">
          experience highlights
        </div>
      </div>
    </div>
  );
}
