"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "BravoTek transformed our office network. Their team was professional, fast, and ensured zero downtime during our upgrade. Highly recommended for any business looking to scale securely.",
    name: "Sarah Johnson",
    title: "IT Manager, FinEdge Solutions",
  },
  {
    quote:
      "We needed a reliable partner for our new branch rollout. BravoTek delivered seamless cabling and network setup, and their ongoing support is top-notch.",
    name: "Michael Lee",
    title: "Operations Director, Urban Realty",
  },
  {
    quote:
      "The BravoTek team made our transition to a modern, secure infrastructure effortless. Their expertise in both consulting and implementation is unmatched.",
    name: "Priya Patel",
    title: "CEO, HealthFirst Clinics",
  },
  {
    quote: "From consultation to installation, BravoTek exceeded our expectations. Our network is faster, safer, and ready for the future.",
    name: "David Kim",
    title: "CTO, Nova Manufacturing",
  },
  {
    quote:
      "We trust BravoTek for all our IT needs. Their smart cabling solutions and proactive support have been a game changer for our business.",
    name: "Emily Carter",
    title: "General Manager, GreenLeaf Hotels",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonialSection" className="px-5 py-16 md:py-24 md:px-12 lg:px-[144px] w-full bg-neutral-100">
      <article className="flex flex-col gap-10 items-center justify-center w-full  overflow-hidden" data-aos="fade-up">
        <div className="flex flex-col gap-4 items-center max-w-[500px] mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
          {/* <span className="text-neon-green text-sm sm:text-base leading-[160%] uppercase">Testimonials</span> */}
          <h2 className="text-dark-green text-xl sm:text-2xl md:text-4xl font-bold leading-tight md:leading-[116%] capitalize">
            What our customers say about us
          </h2>
        </div>

        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </article>
    </section>
  );
};

export default TestimonialSection;
