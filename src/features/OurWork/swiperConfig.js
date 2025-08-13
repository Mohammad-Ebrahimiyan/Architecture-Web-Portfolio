import { Pagination } from "swiper/modules";

export const swiperSettings = {
  modules: [Pagination],
  pagination: { clickable: true, dynamicBullets: true },
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  },
};
