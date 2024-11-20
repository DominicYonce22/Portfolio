import { useEffect, useState } from "react";
import CtaButton from "./CtaButton";
import Logo from "./Logo";
import RegularButton from "./RegularButton";
// --FONT SIZE SYSTEM (px)
//     10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

// --SPACING SYSTEM (px)
//         2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
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
    <header className="relative justify-center bg-black px-14 py-9 oldPhone:px-7 oldPhone:py-3 lg:flex">
      <menu
        className={`${openMenu ? "top-[25%] border-[1px] border-[#2cd2dd]" : "top-[-100vw]"} absolute right-[5%] z-50 rounded-xl bg-inherit px-3 py-4 lg:static lg:rounded-none lg:border-none lg:bg-transparent lg:px-0 lg:py-0`}
      >
        <div className="flex flex-col items-end gap-3 lg:flex-row lg:items-center lg:gap-24 lg:pt-3">
          <li>
            <RegularButton openMenu={openMenu} text="Portfolio" />
          </li>
          <li>
            <RegularButton openMenu={openMenu} text="Blog" />
          </li>
          <li>
            <RegularButton openMenu={openMenu} text="Another" />
          </li>
        </div>
      </menu>
      <span
        onClick={() => setOpenMenu(!openMenu)}
        className="text-3xl text-[#2cd2dd] hover:text-[#23a8b1] lg:hidden"
      >
        <ion-icon
          name={!openMenu ? "menu-outline" : "close-outline"}
        ></ion-icon>
      </span>
    </header>
  );
}

export default Header;
