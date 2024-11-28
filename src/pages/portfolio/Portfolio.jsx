import React from "react";
import { projects } from "../../groups/projects";

import PortfolioCard from "../../components/PortfolioCard";

export default function Portfolio() {
  return (
    <div className="mx-auto mb-28 w-[80%] text-center text-[#2cd2dd]">
      <header className="flex flex-col uppercase oldPhone:mb-[4rem] oldPhone:mt-[2rem] md:mb-32 md:mt-24">
        <h1 className="font-bold oldPhone:text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
          My Projects
        </h1>
        <sub className="font-semibold leading-3 oldPhone:text-lg">
          latest works gallery
        </sub>
      </header>
      <div className="grid gap-20 oldPhone:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <PortfolioCard proj={proj} key={i} />
        ))}
      </div>
    </div>
  );
}
