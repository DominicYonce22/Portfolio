import CtaButton from "../components/CtaButton";
import TrackRecord from "../components/TrackRecord";
import Testing from "../components/Testing";
import { skills } from "../groups/data";
import Skills from "./home/Skills";
const anchors = ["firstPage", "secondPage", "thirdPage"];
function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-black py-16 sm:py-24">
        <div className="w-full bg-black py-[3rem] text-justify text-[2rem] tracking-tighter backdrop-blur-md oldPhone:py-6 android:rounded-2xl md:py-16">
          <p className="text-center font-bold text-[#ced4da] oldPhone:text-lg sm:text-3xl">
            Hi, Im
          </p>
          <h1 className="mb-6 text-center font-bold uppercase text-[#2cd2dd] oldPhone:text-4xl android:px-7 android:text-[2.8rem] android:tracking-wider md:mb-12 md:text-3xl xl:text-9xl">
            Dominic Bonafe
          </h1>

          <p className="mb-2 text-sm leading-normal text-[#ced4da] oldPhone:mb-10 oldPhone:px-8 oldPhone:text-sm oldPhone:leading-6 oldPhone:tracking-[-1.5px] android:mb-16 android:leading-6 android:tracking-[-.5px] sm:px-[8%] sm:text-lg sm:leading-8 md:mb-14 md:text-xl md:leading-6 md:tracking-[-2px] lg:text-2xl">
            Hi, I am Dominic. I am a{" "}
            <span className="text-[#2cd2dd]"> Frontend Developer</span>. Heres
            the tea i work for free. then see if u like it. its a trade i gain
            exp u gain free worker. Try the buttons below they make the text
            change.{" "}
          </p>
        </div>
      </section>
      <TrackRecord />

      <Skills skills={skills} />
    </>
  );
}

export default Home;
