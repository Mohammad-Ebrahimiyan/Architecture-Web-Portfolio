// src/components/ProjectDetails/index.jsx
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProjectsContext } from "../../context/ProjectsContext";
import BackArrow from "../../icons/BackArrow";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";


// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { projects } = useContext(ProjectsContext);
  const [project, setProject] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === parseInt(projectId));
    if (!foundProject) {
      navigate("/not-found");
    } else {
      setProject(foundProject);
    }
    window.scrollTo(0, 0);
  }, [projectId, projects, navigate]);

  if (!project) {
    return <p>Loading project details...</p>;
  }

  const mainImageHeight = windowWidth < 768 ? 300 : 400;
  const thumbnailSize = windowWidth < 768 ? 80 : 100;
  const thumbnailHeight = thumbnailSize;
  const thumbnailWidth = Math.round(thumbnailSize * 1.5); // نسبت 3:2

  return (
    <div className="flex flex-col items-center px-4 max-w-6xl mx-auto">
      <BackArrow
        className="mt-4 w-6 h-12 cursor-pointer self-start"
        onClick={() => navigate("/")}
      />

      <h2 className="mt-4 text-center text-[1.8rem] md:text-[2rem] font-bold text-[var(--title-color)]">
        {project.name}
      </h2>

      <div className="w-full max-w-4xl">
        {project.description && (
          <p className="mt-4 md:mt-6 text-center text-sm md:text-base font-normal text-[var(--subtitle-cards-color)]">
            {project.description}
          </p>
        )}
        {project.details && (
          <p className="mt-3 md:mt-4 text-center text-sm md:text-base font-normal text-[var(--subtitle-cards-color)]">
            {project.details}
          </p>
        )}
        {project.details2 && (
          <p className="mt-3 md:mt-4 text-center text-sm md:text-base font-normal text-[var(--subtitle-cards-color)]">
            {project.details2}
          </p>
        )}
        {project.details3 && (
          <p className="mt-3 md:mt-4 text-center text-sm md:text-base font-normal text-[var(--subtitle-cards-color)]">
            {project.details3}
          </p>
        )}
      </div>

      {/* Main Swiper */}
      <div className="w-full max-w-4xl mt-6 md:mt-8">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={windowWidth >= 768}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {project.images?.map((img, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
                style={{ height: `${mainImageHeight}px` }}
              >
                <img
                  src={img}
                  alt={`Project ${project.name} image ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnails */}
      <div className="w-full max-w-4xl mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={windowWidth < 768 ? 3 : 4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {project.images?.map((img, i) => (
            <SwiperSlide
              key={i}
              className="flex items-center justify-center"
              style={{
                width: `${thumbnailWidth}px`,
                height: `${thumbnailHeight}px`,
              }}
            >
              <div className="w-full h-full rounded-xl overflow-hidden border-2 border-transparent hover:border-blue-400 transition-all bg-gray-100 flex items-center justify-center">
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Call to Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-8 mb-12 flex justify-center"
      >
        <Link
          to="/contact"
          className="px-6 py-3 bg-[var(--background-button-color)] text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}
