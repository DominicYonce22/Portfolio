import { Link } from "react-router-dom";
import Icon from "./Icon";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="grid bg-black text-[#2cd2dd] android:grid-cols-1 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-5 sm:px-16 sm:py-14 sm:text-sm md:grid-cols-3 lg:grid-cols-3">
      <ul className="flex-col gap-1 text-[10px] oldPhone:hidden oldPhone:text-[8px] sm:flex sm:text-[9px] md:gap-2 md:text-sm">
        <li className="street">Prk. Riverside, Sum-ag</li>
        <li className="province">Negros Occidental, Bacolod City</li>
        <li className="zip">6100</li>
      </ul>

      <ul className="list-footer flex-col gap-1 oldPhone:hidden oldPhone:text-[8px] sm:flex sm:text-[9px] md:gap-2 md:text-sm">
        <li className="flex items-center gap-2">
          <Icon>
            <ion-icon name="mail-outline"></ion-icon>{" "}
          </Icon>
          <span>dominijisumbonafe@gmail.com</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon>
            <ion-icon name="logo-facebook"></ion-icon>{" "}
          </Icon>
          <span>Dominic Dimsum</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon>
            <ion-icon name="phone-portrait-outline"></ion-icon>{" "}
          </Icon>
          <span>09588677546657</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon>
            <ion-icon name="phone-portrait-outline"></ion-icon>{" "}
          </Icon>
          <span>09588677546657</span>
        </li>
      </ul>
      <div className="items-center justify-end oldPhone:hidden sm:flex">
        <a
          href="/Resume.pdf"
          className="flex justify-center gap-2 rounded-sm bg-[#2cd2dd] px-3 py-2 text-xs font-semibold uppercase text-black hover:bg-[#23a8b1] oldPhone:px-2 oldPhone:py-1 oldPhone:tracking-[.55px] android:px-3 android:text-sm md:items-center md:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </div>
      <div className="col-span-full flex items-center justify-between oldPhone:px-6 android:px-0">
        <div className="flex items-center oldPhone:gap-1 android:gap-2">
          <Icon>
            <ion-icon name="logo-facebook"></ion-icon>
          </Icon>
          <Icon>
            <ion-icon name="logo-github"></ion-icon>
          </Icon>
          <Icon>
            <ion-icon name="logo-instagram"></ion-icon>
          </Icon>
          <Icon>
            <ion-icon name="logo-twitter"></ion-icon>
          </Icon>
        </div>
        <div className="logo">
          <Link className="myName" to="/">
            <Logo />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
