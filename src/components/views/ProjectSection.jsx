"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    image: "/assets/images/project1.jpg",
  },
  {
    image: "/assets/images/project2.jpg",
  },
  {
    image: "/assets/images/project3.jpg",
  },
  {
    image: "/assets/images/project4.jpg",
  },
  {
    image: "/assets/images/project5.jpg",
  },
  {
    image: "/assets/images/project6.jpg",
  },
  {
    image: "/assets/images/project7.jpg",
  },
];

export default function ProjectCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-[144px]">
      <div className="container flex flex-col items-center text-center gap-6" data-aos="">
        {/* <span className="text-neon-green text-sm sm:text-base leading-[160%] uppercase">Our Projects</span> */}
        <h2 className="text-3xl md:text-4xl font-bold text-title mb-2">Case Studies & Success Stories</h2>
        <p className="text-base md:text-lg text-para max-w-2xl mb-8">
          Explore how BravoTek delivers secure, scalable, and innovative IT solutions for businesses across industries.
        </p>
        <div className="relative w-full">
          {/* Custom Navigation */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-dark-green text-dark-green hover:bg-dark-green hover:text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center transition-colors duration-200"
            aria-label="Previous"
          >
            <FaChevronLeft size={22} />
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-dark-green text-dark-green hover:bg-dark-green hover:text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center transition-colors duration-200"
            aria-label="Next"
          >
            <FaChevronRight size={22} />
          </button>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center h-full" data-aos="zoom-in" data-aos-delay={100 * idx}>
                  <Image
                    src={project.image}
                    alt={`Project ${idx + 1}`}
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-lg object-cover w-full h-[220px] md:h-[260px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Pagination */}
          <div className="custom-swiper-pagination flex justify-center gap-2 mt-8"></div>
        </div>
      </div>
    </section>
  );
}
