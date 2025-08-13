import React from "react";
import { MENU_ITEMS } from "../../data/HeroSection";
import MenuItem from "./MenuItem";
import CloseIcon from "../../icons/CloseIcon";
export default function MobileMenu({ className = "", onClose }) {
  const hasActiveIn = /\bactivein\b/.test(className);
  const hasActiveOut = /\bactiveout\b/.test(className);

  const base = "fixed w-full h-full bg-[#f6faff] z-20";
  const animClasses = hasActiveIn
    ? "transform translate-x-0 transition-transform duration-500 ease-in-out"
    : hasActiveOut
    ? "transform -translate-x-full transition-transform duration-500 ease-in-out"
    : "transform translate-x-0";

  const navClass = `${base} ${animClasses} ${className}`.trim();
  const listBase =
    "list-none p-0 m-0 flex flex-col justify-center items-center h-full overflow-x-auto overflow-y-hidden w-full gap-8";

  return (
    <nav className={navClass}>

      <CloseIcon
        onClick={onClose}
        className="absolute top-4 left-4 w-8 h-8 sm:w-12 sm:h-12 p-1 bg-white rounded-full shadow-md z-50"
      />
      <ul className={listBase}>
        {MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.id}
            sectionId={item.id}
            label={item.label}
            onClose={onClose}
          />
        )
        )
        }
      </ul>
    </nav>
  );
}
