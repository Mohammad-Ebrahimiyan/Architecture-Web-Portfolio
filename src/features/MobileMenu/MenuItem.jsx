import React from "react";

export default function MenuItem({ sectionId, label, onClose }) {
  const itemBase =
    "flex justify-center items-center gap-4 p-5  cursor-pointer bg-[#edf4ff] hover:bg-[#e8f1ff] rounded-xl";
  const itemWidthSmall = "w-[20rem]"; // قبلاً 18.3rem بود
  const itemWidthMedium = "sm:w-[24rem]"; // قبلاً 22rem بود
  const linkBase = "font-semibold no-underline text-[var(--title-color)]";
  const linkSizeSmall = "text-[1.5rem]"; // قبلاً 1.3rem بود
  const linkSizeMedium = "sm:text-[1.7rem]"; // قبلاً 1.5rem بود

  const scrollToSection = () => {
    onClose();
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li className={`${itemBase} mt-5 ${itemWidthSmall} ${itemWidthMedium}`}>
      <a
        className={`${linkBase} ${linkSizeSmall} ${linkSizeMedium}`}
        role="button"
        tabIndex={0}
        onClick={scrollToSection}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") scrollToSection();
        }}
      >
        {label}
      </a>
    </li>
  );
}
