// src/components/AboutUs/index.jsx
import React from "react";
import { cards } from "../../data/AboutUs";

export default function AboutUs() {
  return (
    <section id="about-us" className="mt-10 lg:mt-20 px-4">
      {/* Headings & paragraphs */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="mt-12 ml-4 text-[2rem] font-bold tracking-[-0.8px] text-[var(--title-color)]">Vision</h2>
        <p className="max-w-[1200px] mt-8 mb-12 ml-4 font-normal leading-8 text-[var(--text-color)] text-base sm:text-[1.3rem] lg:text-[1.4rem] text-left lg:text-center">
          Our vision is to be leaders in the design and development of innovative and sustainable architectural projects, improving the quality of life in our communities and leaving a lasting legacy in the built environment.
        </p>

        <h2 className="mt-12 ml-4 text-[2rem] font-bold tracking-[-0.8px] text-[var(--title-color)]">Mission</h2>
        <p className="max-w-[1200px] mt-8 mb-12 ml-4 font-normal leading-8 text-[var(--text-color)] text-base sm:text-[1.3rem] lg:text-[1.4rem] text-left lg:text-center">
          Our mission is to provide high-quality architectural solutions that integrate creativity, functionality, and sustainability, meeting the needs and expectations of our clients and contributing to responsible urban development.
        </p>

        <h2 className="mt-12 ml-4 text-[2rem] font-bold tracking-[-0.8px] text-[var(--title-color)]">Goals</h2>
        <div className="max-w-[1200px] mt-8 mb-12 ml-4 font-normal leading-12 text-[var(--text-color)] text-base sm:text-[1.3rem] lg:text-[1.4rem] text-left lg:text-center">
          <p>Create architectural projects that stand out for their innovative design and respect for the environment.</p>
          <p>Maintain a high standard of quality at every stage of the design and construction process.</p>
          <p>Strengthen relationships with our clients through transparent communication and personalized service.</p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-start lg:items-center gap-3 p-4 bg-[var(--background-cards-color)] border border-[#D1DBE8] rounded-[1rem] w-full sm:max-w-[15rem] lg:max-w-[18rem] min-h-[15rem] mx-auto"
          >
            {/* Icon sizes: base (≤640): 1.25rem, sm..lg: 1.75rem, lg+: 1.8rem */}
            <span className="inline-flex items-center justify-center [&>svg]:!w-5 [&>svg]:!h-5 sm:[&>svg]:!w-7 sm:[&>svg]:!h-7 lg:[&>svg]:!w-[1.8rem] lg:[&>svg]:!h-[1.8rem] [&>svg]:!text-[var(--subtitle-cards-color)]">
            <card.Icon />
          </span>

            <p className="font-bold text-left lg:text-center text-base sm:text-[1.2rem] text-[var(--subtitle-cards-color)]\">
              {card.title}
            </p>
            <p className="text-[1rem] sm:text-[1.1rem] leading-[21px] text-left lg:text-center text-[var(--text-color)]\">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
