import React from "react";
import Image from "next/image";
import aboutImg from "../../../public/assets/images/about.webp";

const AboutSection = () => {
  return (
    <section id="aboutSection" className="px-5 py-16 md:py-24 md:px-12 lg:px-[144px] w-full">
      <article className="container flex flex-col gap-10 items-center justify-center w-full" data-aos="fade-up">
        <div className="flex flex-col gap-2 items-center max-w-[500px] mx-auto text-center">
          {/* <span className="text-neon-green text-sm sm:text-base leading-[160%] uppercase">About</span> */}
          <h2 className="text-dark-green text-xl sm:text-2xl md:text-4xl font-bold leading-tight md:leading-[116%] capitalize">
            Who we are
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between w-full gap-10">
          <div className="flex-1 flex flex-col gap-4 items-start" data-aos="fade-up" data-aos-delay="200">
            <p className="text-neutral-800 text-sm sm:text-base font-Inter font-normal leading-relaxed md:leading-[160%] mt-4">
              BRAVOTEK is your strategic partner in building secure, scalable, and future-ready technology infrastructure. We empower
              businesses with end-to-end IT consulting, smart cabling, and advanced networking solutions. Our mission is to simplify your
              technology challenges so you can focus on growth.
              <br /> <br />
              From small businesses to large enterprises, we deliver tailored solutions that keep you connected, secure, and efficient. Our
              team of certified experts leverages the latest technologies to design, implement, and support robust IT environments. Whether
              you need a new network setup, an infrastructure upgrade, or ongoing support, BRAVOTEK is committed to your success.
            </p>

            <div className="flex items-start justify-start flex-wrap gap-8 mt-8" data-aos="fade-up" data-aos-delay="400">
              <div className="flex flex-col items-start gap-3  max-w-[145px]">
                <h3 className="text-neutral-1000 text-2xl md:text-4xl font-DmSerif font-bold leading-tight md:leading-[116%] capitalize">
                  124+
                </h3>
                <p className="text-primary-500 text-base font-Inter font-normal leading-[150%]  capitalize">
                  successful clients
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 max-w-[145px]">
                <h3 className="text-neutral-1000 text-2xl md:text-4xl font-DmSerif font-bold leading-tight md:leading-[116%] capitalize">
                  99%
                </h3>
                <p className="text-primary-500 text-base font-Inter font-normal leading-[150%]  capitalize">client satisfaction rate</p>
              </div>

              <div className="flex flex-col items-start gap-3 max-w-[145px]">
                <h3 className="text-neutral-1000 text-2xl md:text-4xl font-DmSerif font-bold leading-tight md:leading-[116%] capitalize">
                  100%
                </h3>
                <p className="text-primary-500 text-base font-Inter font-normal leading-[150%]  capitalize">
                  solutions customized for your business
                </p>
              </div>
            </div>
          </div>

          <figure
            className="flex-1 w-full max-w-md md:max-w-none relative rounded-xl overflow-hidden transition-all duration-300 ease-in-out"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <Image
              src={aboutImg}
              alt="about"
              decoding="async"
              className="w-full h-[300px] md:h-auto object-contain rounded-2xl transition-transform duration-500 ease-in-out hover:scale-101"
            />
          </figure>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
