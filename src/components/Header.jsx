import { useEffect, useState } from "react";

import HeaderLink from "./HeaderLink";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      window.innerWidth >= 1024 && setOpenMenu(false);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="relative justify-center px-14 py-9 oldPhone:px-7 oldPhone:py-3 lg:flex">
      <menu
        className={`${openMenu ? "top-[25%] border-[1px] border-[#2cd2dd]" : "top-[-100vw]"} absolute right-[5%] z-50 rounded-xl bg-inherit px-3 py-4 md:static md:rounded-none md:border-none md:bg-transparent md:p-0`}
      >
        <div className="flex flex-col items-end gap-3 md:flex-row md:items-center md:justify-center md:gap-24">
          <li>
            <HeaderLink openMenu={openMenu} text="About Me" path="/" />
          </li>
          <li>
            <HeaderLink openMenu={openMenu} text="Portfolio" path="portfolio" />
          </li>
          <li>
            <HeaderLink openMenu={openMenu} text="Blog" path="blog" />
          </li>
        </div>
      </menu>

      <span
        onClick={() => setOpenMenu(!openMenu)}
        className="text-3xl text-[#2cd2dd] hover:text-[#23a8b1] md:hidden"
      >
        <ion-icon
          name={!openMenu ? "menu-outline" : "close-outline"}
        ></ion-icon>
      </span>
    </header>
  );
}

export default Header;
