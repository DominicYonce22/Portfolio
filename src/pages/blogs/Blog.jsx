import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../AppContextProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Blog() {
  const { selected } = useContext(AppContext);
  const { date, title, image, author, content } = selected;
  const navigate = useNavigate();

  return (
    <div className="mx-auto mb-24 w-[80%] font-bold text-[#2cd2dd] oldPhone:pt-4 sm:pt-16">
      <header className="oldPhone:mb-[1rem] android:mb-[2rem] sm:mb-20">
        <h3 className="mb-3 oldPhone:text-[.65rem] android:text-base">
          {date}
        </h3>
        <h1 className="text-left font-bold uppercase oldPhone:text-[.80rem] android:text-[.85rem] sm:text-[1.5rem] lg:text-[2.5rem] lg:[word-spacing:-1rem] xl:text-6xl">
          {title}
        </h1>
      </header>
      <div className="col-span-1 col-start-1 w-full oldPhone:mb-[3rem] android:mb-[6rem] sm:mb-[5rem]">
        <img className="w-full" src={image?.link} alt={title} />
      </div>

      <div className="grid grid-cols-[1fr_4fr] grid-rows-[1fr_auto] oldPhone:mb-9 oldPhone:gap-x-7 oldPhone:gap-y-8 android:mb-14 android:gap-y-11 lg:grid-cols-[auto_1fr] lg:gap-x-14">
        <div className="col-span-1 col-start-1 mb-5 flex items-center overflow-hidden rounded-full oldPhone:h-[3rem] oldPhone:w-[3rem] android:h-[4rem] android:w-[4rem] sm:h-[5rem] sm:w-[5rem]">
          <img
            onMouseEnter={() => console.log("hovered")}
            src={author?.imageUrl}
            className="scale-[1.5]"
            alt="image of author"
          />
        </div>
        <div className="lg:row-start-2">
          <p className="oldPhone:text-2xl android:text-3xl">{author?.name}</p>
          <p className="oldPhone:mb-2 oldPhone:text-[10px] android:mb-5 android:text-[11px] sm:text-inherit md:mb-4 xl:mb-10">
            {author?.fakeTitle}
          </p>
          <div className="flex gap-4 md:flex-row xl:flex-col">
            <span className="android:text-2xl sm:text-4xl">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
            <span className="android:text-2xl sm:text-4xl">
              <ion-icon name="logo-github"></ion-icon>
            </span>
            <span className="android:text-2xl sm:text-4xl">
              <ion-icon name="logo-facebook"></ion-icon>
            </span>
          </div>
        </div>

        <div className="sm:px-none col-span-2 row-start-2 font-medium text-[#2cd2dd] oldPhone:text-xs oldPhone:leading-[2rem] android:px-4 sm:text-base sm:leading-[3rem] lg:row-span-2 lg:row-start-1 lg:self-center lg:text-lg lg:leading-[2.75rem] lg:tracking-wide">
          {content}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="flex items-center justify-center gap-2 bg-[#2cd2dd] px-3 py-1 text-black oldPhone:text-xs sm:text-base"
          onClick={() => navigate("/blog")}
        >
          <span className="flex items-center justify-center font-bold oldPhone:text-2xl sm:text-4xl">
            <ion-icon name="arrow-back-circle"></ion-icon>
          </span>
          Go back to articles
        </button>
      </div>
    </div>
  );
}
