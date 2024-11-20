import CtaButton from "../components/CtaButton";
import TrackRecord from "./home/TrackRecord";
import Testing from "../components/Testing";
import { skills } from "../groups/data";
import Skills from "./home/Skills";
import Hero from "./home/Hero";
const anchors = ["firstPage", "secondPage", "thirdPage"];
function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      <TrackRecord />
      <Skills skills={skills} />
    </>
  );
}

export default Home;
