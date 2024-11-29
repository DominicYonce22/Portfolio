import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function PortfolioCard({ proj }) {
  const image = useRef(null);
  const linksContainer = useRef(null);

  useGSAP(() => {
    const imageElement = image.current;
    const links = linksContainer.current.querySelectorAll("a");

    const handleImageMouseEnter = () => {
      gsap.to(imageElement, { scale: 1.1, duration: 0.3 });
    };

    const handleImageMouseLeave = () => {
      gsap.to(imageElement, { scale: 1, duration: 0.3 });
    };

    const handleLinkMouseEnter = (e) => {
      gsap.to(e.target, { scale: 1.5, duration: 0.3 });
    };

    const handleLinkMouseLeave = (e) => {
      gsap.to(e.target, { scale: 1, duration: 0.3 });
    };

    imageElement.addEventListener("mouseenter", handleImageMouseEnter);
    imageElement.addEventListener("mouseleave", handleImageMouseLeave);

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkMouseEnter);
      link.addEventListener("mouseleave", handleLinkMouseLeave);
    });
  });

  return (
    <div className="flex w-full flex-col justify-between gap-4 border border-[#2cd2dd] p-4 lg:gap-8">
      <img className="h-[40]" src={proj.image} ref={image} />
      <div className="flex h-[50%] flex-col oldPhone:justify-center lg:justify-between">
        <h3 className="text-left font-bold uppercase oldPhone:mb-3 oldPhone:text-xl lg:mb-0 lg:pt-5 lg:text-xl xl:text-2xl">
          {proj.name}
        </h3>
        <p className="text-left text-base font-medium leading-relaxed oldPhone:text-xs oldPhone:leading-[2] sm:mb-4 md:mb-0 lg:text-sm">
          {proj.description}
        </p>
      </div>
      <div
        className="flex h-[10%] items-center gap-2 bg-[#2cd2dd] px-3 text-black"
        ref={linksContainer} // Attach the ref to the links container
      >
        <h3 className="text-lg font-bold uppercase">links:</h3>
        {proj.links.map((link) => (
          <a
            key={link.type}
            href={link.link} // Using standard <a> tag for external link
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <span className="flex items-center text-2xl font-bold">
              <ion-icon name={link.icon}></ion-icon>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
