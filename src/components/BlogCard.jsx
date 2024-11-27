import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { AppContext } from "../AppContextProvider";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  const imageRef = useRef(null);
  const { setSelected } = useContext(AppContext);
  const navigate = useNavigate();
  function selectBlog(blog) {
    setSelected(blog);
    navigate(`/blog/${blog.id}`); // Dynamically build the path with blog.id
  }
  useGSAP(() => {
    const handleImageMouseEnter = () => {
      gsap.to(imageRef.current, { scale: 1.1, duration: 0.3 });
    };
    const handleImageMouseLeave = () => {
      gsap.to(imageRef.current, { scale: 1, duration: 0.3 });
    };
    imageRef.current.addEventListener("mouseenter", handleImageMouseEnter);
    imageRef.current.addEventListener("mouseleave", handleImageMouseLeave);
  });
  return (
    <div
      key={blog.id}
      className="border border-[#2cd2dd] px-5 text-sm oldPhone:py-5 android:py-3"
      onClick={() => {
        setSelected(blog);
      }}
    >
      <img
        ref={imageRef}
        onClick={() => selectBlog(blog)}
        src={blog.image.link}
        className="mb-3 h-[13rem] w-full"
        alt={blog.image.alt}
      />
      <div className="flex flex-col justify-between oldPhone:gap-7 sm:gap-2">
        <h4 className="font-bold oldPhone:text-sm android:text-base">
          {blog.title}
        </h4>
        <p className="mb-2 self-start oldPhone:text-[12px] oldPhone:leading-6 sm:text-sm">
          {blog.excerpt}
        </p>
        <p className="text-xs font-light">{blog.date}</p>
      </div>
    </div>
  );
}
