"use client";
import React from "react";
import Image from "next/image";
import partner1 from "../../../public/assets/images/cisco.png";
import partner2 from "../../../public/assets/images/Juniper.svg";
import partner3 from "../../../public/assets/images/MikroTik.png";
import partner4 from "../../../public/assets/images/arista.png";
import partner5 from "../../../public/assets/images/ubi.png";
const PartnerSection = () => {
  return (
    <section id="partnerSection" className="bg-neutral-100 px-5 py-16 md:px-12 lg:px-[144px] w-full overflow-hidden">
      <article className="container flex items-center justify-center w-full">
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 items-center justify-center md:gap-8 md:animate-none animate-marquee" data-aos="zoom-in">
            <Image src={partner1} alt="partner 1" className="w-full h-[200px] object-contain aspect-square rounded-2xl" />
            <Image src={partner2} alt="partner 2" className="w-full h-[200px] object-contain aspect-square rounded-2xl" />
            <Image src={partner3} alt="partner 5" className="w-full h-[200px] object-contain aspect-square rounded-2xl" />
            <Image src={partner4} alt="partner 5" className="w-full h-[200px] object-contain aspect-square rounded-2xl" />
            <Image src={partner5} alt="partner 5" className="w-full h-[200px] object-contain aspect-square rounded-2xl" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default PartnerSection;
