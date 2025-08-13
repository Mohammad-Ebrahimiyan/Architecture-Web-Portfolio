import React, { useState } from "react";
import MobileMenu from "../MobileMenu";
import { MENU_ITEMS } from "../../data/HeroSection";
import MenuIcon from "../../icons/MenuIcon";
import Button from "../../components/ui/Button";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  return (
    <>
      {isMobileMenuOpen && (
        <MobileMenu
          onClose={toggleMobileMenu}
          className={
            isMobileMenuOpen
              ? "mobile-container activein"
              : "mobile-container activeout"
          }
        />
      )}

      <nav className="w-full h-[4.5rem] bg-white flex items-center justify-center relative lg:justify-between ">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 lg:hidden">
          <motion.div
            whileHover={{ y: -3 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              className="flex items-center justify-center cursor-pointer w-10 h-10"
            >
              <MenuIcon className="w-10 h-10" />
            </Button>
          </motion.div>
        </div>

        <h2 className="text-[1.2rem] font-bold text-[var(--title-color)] pl-2">
          Arquitecta Mariana
        </h2>

        <div className="hidden lg:flex items-center">
          <ul className="flex pr-2">
            {MENU_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <Button
                  onClick={() => {
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-[var(--title-color)] cursor-pointer hover:bg-[#e8f1ff]"
                >
                  {label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="relative z-10 w-full">
        <img
          className="hero-bg object-cover w-full contrast-[90%] max-w-full 
               h-[57rem] md:h-[57rem] sm:h-[40rem]"
          src="/assets/backgroundsmall1.jpg"
          srcSet="/assets/mediumbackground.jpg 602w, /assets/largebackground1.jpg 1025w"
          sizes="(max-width: 602px) 100vw, (max-width: 1024px) 100vw, 100vw"
          alt="Construction Building"
          loading="lazy"
        />

        <h1
          className="absolute top-1/2 left-1/2 text-[2.5rem] font-bold text-center text-[#313131] 
               -translate-x-[49%] -translate-y-[250%] 
               md:-translate-y-[240%] 
               sm:-translate-x-1/2 sm:-translate-y-[150%] sm:text-[1.5rem] sm:px-4"
        >
          Building the Future of Your Project
        </h1>
      </section>

      <style>{`
        /* default (matches original base) */

        .hero-bg { height: 57rem; object-fit:cover;}
        .hero-first-title { transform: translate(-49%, -250%); }

        /* <= 1024px: background height 52rem, title translate -240% */
        @media (max-width: 1024px) {
          .hero-bg { height: 57rem; }
          .hero-first-title { transform: translate(-49%, -240%); }
        }
       @media (max-width: 602px) {
  .hero-bg { 
    height: 40rem;
  }
  .hero-first-title {
    transform: translate(-50%, -150%);
    font-size: 1.5rem; 
    padding: 0 1rem;   
  }
}

      `}</style>
    </>
  );
}
