import React from "react";
import { projects } from "../../groups/projects";
import { useGSAP } from "@gsap/react";
import PortfolioCard from "../../components/PortfolioCard";

export default function Portfolio() {
  return (
    <div className="mx-auto mb-28 w-[80%] text-center text-[#2cd2dd]">
      <header className="mb-32 mt-24 flex flex-col uppercase">
        <h1 className="text-8xl font-bold">My Projects</h1>
        <sub className="text-lg font-semibold leading-3">
          latest works gallery
        </sub>
      </header>
      <div className="grid grid-cols-3 gap-20">
        {projects.map((proj, i) => (
          <PortfolioCard proj={proj} key={i} />
        ))}
      </div>
    </div>
  );
}
