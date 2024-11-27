import React, { useContext, useRef } from "react";
import { AppContext } from "../../AppContextProvider";
import { useNavigate } from "react-router-dom";

import BlogCard from "../../components/BlogCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function BlogsLayout() {
  const { blogs, setSelected } = useContext(AppContext);
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  function handleSelectBlog(blog) {
    setSelected(blog);
    navigate(`/blog/${blog.id}`); // Dynamically build the path with blog.id
  }
  useGSAP(() => {
    const handleImageMouseEnter = () => {
      gsap.to(buttonRef.current, { scale: 1.1, duration: 0.3 });
      console.log("hovered");
    };
    const handleImageMouseLeave = () => {
      gsap.to(buttonRef.current, { scale: 1, duration: 0.3 });
    };
    buttonRef.current.addEventListener("mouseenter", handleImageMouseEnter);
    buttonRef.current.addEventListener("mouseleave", handleImageMouseLeave);
  });
  return (
    <div className="mx-auto mb-28 w-[80%] text-[#2cd2dd]">
      <div className="mb-11 pb-11">
        <h1 className="font-bold uppercase oldPhone:mb-4 oldPhone:mt-2 oldPhone:text-3xl sm:mb-10 sm:mt-[5.25rem] sm:text-6xl md:mt-[8.25rem] xl:mb-32 xl:mt-24 xl:text-center xl:text-8xl">
          Blogs
        </h1>
        <div className="grid grid-cols-[2fr_1fr] border-b border-[#2cd2dd] oldPhone:mb-16 oldPhone:gap-8 oldPhone:pb-16 md:grid-rows-[1fr_auto] md:gap-16 lg:grid-rows-[1fr_4fr] lg:pb-16 xl:mb-10 xl:grid-rows-[1fr_2fr] xl:pb-10">
          <div className="col-start-1 flex oldPhone:col-span-2 oldPhone:col-start-1 oldPhone:row-start-2 oldPhone:justify-center android:row-start-2 android:row-end-3 md:col-span-1 md:row-span-2 lg:justify-start xl:row-start-1 xl:row-end-3">
            <img
              className="object-contain"
              src={blogs[0].image.link}
              alt={blogs[0].image.alt}
            />
          </div>

          <h3 className="col-span-2 flex flex-col justify-center uppercase oldPhone:col-start-1 oldPhone:row-start-1 oldPhone:mb-8 oldPhone:text-[14px] android:mb-0 sm:text-[24px] md:row-span-1 md:row-start-1 md:text-[27px] lg:text-3xl xl:col-start-2 xl:text-4xl">
            <p className="mb-2 oldPhone:text-[12.5px] oldPhone:font-bold android:text-lg android:font-normal lg:text-3xl">
              {blogs[0].title}
            </p>
            <p className="font-light oldPhone:text-[11px] android:text-[.75rem] sm:text-lg lg:text-xl">{`Author: ${blogs[0].author.name}`}</p>
          </h3>
          <div className="col-start-2 flex oldPhone:col-span-2 oldPhone:col-start-1 oldPhone:row-start-3 oldPhone:flex-col oldPhone:justify-between oldPhone:gap-7 oldPhone:text-[13px] oldPhone:text-sm android:col-span-2 android:col-start-1 android:row-start-3 android:flex-row android:text-xs sm:flex-col sm:gap-0 sm:text-sm md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-2 lg:text-lg">
            <p className="leading-relaxed android:w-[80%] sm:mb-7 sm:w-auto sm:leading-loose md:my-auto xl:my-0">
              {blogs[0].excerpt}
            </p>

            <button
              ref={buttonRef}
              onClick={() => handleSelectBlog(blogs[0])}
              className="my-auto flex items-center gap-2 bg-[#2cd2dd] px-2 py-1 text-black oldPhone:mx-auto oldPhone:h-8 oldPhone:w-[41%] android:w-[8.5rem] android:justify-center sm:w-fit sm:self-start md:ml-0"
            >
              <p>Read blog</p>
              <span className="flex items-center">
                <ion-icon name="navigate"></ion-icon>
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-8 oldPhone:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
