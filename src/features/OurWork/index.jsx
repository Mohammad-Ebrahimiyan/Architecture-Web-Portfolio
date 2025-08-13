import React, { useContext, useRef, useEffect } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { swiperSettings } from "./swiperConfig";
import ProjectCard from "./ProjectCard";

export default function OurWork() {
  const { projects } = useContext(ProjectsContext);
  const swiperRef = useRef(null);
  const list = Array.isArray(projects) ? projects : [];

  useEffect(() => {
    if (swiperRef.current?.update) {
      setTimeout(() => {
        try {
          swiperRef.current.update();
          swiperRef.current.pagination?.update();
        } catch (e) {
          console.warn("Swiper update failed:", e);
        }
      }, 50);
    }
  }, [projects]);

  return (
    <section id="our-work" className="mt-24 lg:mt-28 px-4">
      <h1 className="mt-20 text-2xl lg:text-3xl font-extrabold tracking-tight text-[var(--title-color)]">
        Our Work
      </h1>

      <div className="flex flex-col items-center justify-center">
        <h2 className="mt-10 text-center font-bold text-xl lg:text-2xl">
          Completed Projects
        </h2>
        <p className="mt-6 mb-12 max-w-4xl lg:text-lg text-[var(--text-color)] leading-8 text-center">
          Over the years, we have completed a wide range of projects, including
          residential buildings, office spaces and more.
        </p>
      </div>

      <div className="w-full max-w-[1200px] mx-auto pb-12">
        <Swiper
          {...swiperSettings}
          key={list.length}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper py-5"
        >
          {list.length > 0 ? (
            list.map((project) => (
              <SwiperSlide key={project.id} className="flex pb-5 mb-8">
                <ProjectCard
                  project={project}
                  onImageLoad={() =>
                    swiperRef.current?.update &&
                    setTimeout(() => swiperRef.current.update(), 30)
                  }
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="p-8 text-center w-full">No projects yet</div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </section>
  );
}
