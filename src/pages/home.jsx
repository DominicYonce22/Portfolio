import CtaButton from "../components/CtaButton";
import { skills } from "../groups/data";
import Skills from "./home/Skills";
const anchors = ["firstPage", "secondPage", "thirdPage"];
function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-home py-16 sm:py-24">
        <div className="mx-auto w-[90%] rounded-3xl border-[1px] border-[#2cd2dd] bg-transparent px-[10%] py-[3rem] text-justify text-[2rem] tracking-tighter backdrop-blur-md oldPhone:w-[70%] oldPhone:py-6 android:w-[80%] android:rounded-2xl sm:px-[8%] md:w-[70%] md:py-16 lg:w-[55%]">
          <p className="text-center font-bold text-[#ced4da] oldPhone:text-lg sm:text-3xl">
            Hi, Im
          </p>
          <h1 className="mb-6 text-center font-bold text-[#2cd2dd] oldPhone:text-xl android:text-3xl sm:text-5xl md:mb-12 md:text-5xl lg:text-6xl xl:text-7xl">
            Dominic Bonafe
          </h1>

          <p className="mb-2 text-sm leading-normal text-[#ced4da] oldPhone:mb-10 oldPhone:text-xs oldPhone:leading-4 oldPhone:tracking-[-.5px] android:mb-12 android:text-sm android:leading-6 android:tracking-[-.85px] sm:text-base md:mb-14 md:text-xl md:leading-6 md:tracking-[-2px] lg:text-2xl">
            Hi, I am Dominic. I am a React Developer. Heres the tea i work for
            free. then see if u like it. its a trade i gain exp u gain free
            worker. Try the buttons below they make the text change.{" "}
          </p>
          <div className="flex justify-center">
            <CtaButton>Do something</CtaButton>
          </div>
        </div>
      </section>
      <div className="flex h-16 items-center justify-center bg-[#2cd1dd]">
        <span>section to show logos bling bling blings</span>
      </div>
      <Skills skills={skills} />
    </>
  );
}

export default Home;
