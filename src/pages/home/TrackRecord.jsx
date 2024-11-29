import React, { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppContext } from "../../AppContextProvider";

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
  const { screenWidth, handleResize } = useContext(AppContext);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      className="grid h-screen w-full bg-black pt-24 text-[#2cd2dd] oldPhone:grid-cols-2 oldPhone:grid-rows-[2fr_repeat(3,_1fr)_2fr] oldPhone:px-5 oldPhone:pb-16 oldPhone:text-[10px] android:text-[.80rem] sm:px-10 sm:pb-24 sm:text-lg lg:grid-cols-4 lg:grid-rows-[3fr_2fr_9fr] lg:pb-9 lg:text-xl xl:text-2xl"
    >
      <div className="col-span-full flex items-center oldPhone:row-start-6 oldPhone:mt-10 oldPhone:flex oldPhone:justify-center lg:row-start-1 lg:justify-end lg:pt-0">
        <div className="w-fit overflow-hidden">
          <p ref={blind1} className="font-bold uppercase leading-none">
            Well versed developer with a designer's eye
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden oldPhone:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-2 xl:flex-col xl:justify-end">
        <div ref={blind2} className="w-fit">
          <p className="font-bold uppercase leading-none">
            Young Designer Award
          </p>
          <p className="font-bold uppercase leading-none">STI West Negros</p>
          <p className="font-bold uppercase leading-none">Hackathon 2024</p>
        </div>
      </div>
      <div className="flex overflow-hidden oldPhone:col-span-2 oldPhone:row-start-3 oldPhone:items-center oldPhone:justify-end lg:col-span-2 lg:col-start-3 lg:row-start-2 lg:justify-start lg:pl-14 xl:items-end">
        <div
          ref={blind3}
          className="w-fit overflow-hidden oldPhone:flex oldPhone:h-full oldPhone:flex-col oldPhone:justify-center"
        >
          <p className="font-bold uppercase leading-none">Assistant Web</p>
          <p className="font-bold uppercase leading-none">Developer/OJT</p>
          <p className="font-bold uppercase leading-none">at PhilBio (2024)</p>
        </div>
      </div>
      <div className="flex items-center oldPhone:col-span-2 oldPhone:justify-start lg:col-span-1 lg:row-start-3 lg:justify-center">
        <div className="w-fit overflow-hidden">
          <div ref={blind4} className="w-fit">
            {" "}
            <p className="text-end font-bold uppercase leading-none oldPhone:text-start">
              Thesis Lead Developer
            </p>{" "}
            <p className="text-end font-bold uppercase leading-none oldPhone:text-start">
              Butterfly Image
            </p>{" "}
            <p className="text-end font-bold uppercase leading-none oldPhone:text-start">
              {" "}
              Classification
            </p>{" "}
            <p className="text-end font-bold uppercase leading-none oldPhone:text-start">
              (2022-2024)
            </p>
          </div>
        </div>
      </div>
      <div className="oldPhone:col-span-2 oldPhone:flex oldPhone:justify-end lg:col-span-1 lg:col-start-2 lg:row-start-3 lg:items-start">
        <div className="w-fit overflow-hidden lg:w-fit">
          <div
            ref={blind5}
            className="oldPhone:h- w-fit oldPhone:flex oldPhone:h-full oldPhone:flex-col oldPhone:justify-center lg:h-fit"
          >
            {" "}
            <p className="font-bold uppercase leading-none oldPhone:text-end">
              Thesis Project Manager
            </p>{" "}
            <p className="font-bold uppercase leading-none oldPhone:text-end">
              Butterfly Image
            </p>{" "}
            <p className="font-bold uppercase leading-none oldPhone:text-end">
              {" "}
              Classification
            </p>{" "}
            <p className="font-bold uppercase leading-none oldPhone:text-end">
              (2022-2024)
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-end justify-end overflow-hidden oldPhone:row-start-1 oldPhone:justify-center lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-3">
        <div className="flex items-center space-x-5 oldPhone:text-3xl android:text-4xl lg:flex-col lg:items-end lg:justify-end">
          {" "}
          <div
            ref={track}
            className="bg font-bold uppercase leading-[.76] oldPhone:text-start sm:text-6xl lg:text-8xl xl:text-[10rem]"
          >
            Track
          </div>
          <div
            ref={record}
            className="font-bold uppercase leading-[.72] sm:text-6xl lg:text-8xl xl:text-[10rem]"
          >
            Record
          </div>
        </div>
        <div
          ref={recap}
          className="font-bold uppercase oldPhone:text-sm xl:text-lg"
        >
          experience highlights
        </div>
      </div>
    </div>
  );
}
