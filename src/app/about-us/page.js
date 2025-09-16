"use client";
import AboutSection from "@/components/views/AboutSection";
import Image from "next/image";

import team1 from "../../../public/assets/images/team1.png";
import team2 from "../../../public/assets/images/team2.png";
import team3 from "../../../public/assets/images/team3.png";
import team4 from "../../../public/assets/images/team4.png";
import CTASection from "@/components/views/CTASection";
import Banner from "../../components/Banner";

const teams = [
  {
    id: 1,
    name: "Danny Yings",
    role: "CEO",
    image: team1,
  },
  {
    id: 2,
    name: "Matthew Dawson",
    role: "Chief Operating Officer",
    image: team2,
  },
  {
    id: 4,
    name: "Billy Walters",
    role: "Lead Network Engineer",
    image: team3,
  },
  {
    id: 3,
    name: "Jameson Delly",
    role: "Chief Technology Officer",
    image: team4,
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full min-h-[450px] md:min-h-[550px] flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat text-center overflow-hidden"
        style={{ backgroundImage: "url(/assets/images/heroImg.png)" }}
      >
        {/* <div className="absolute inset-0 bg-dark-green/70 z-0" /> */}
        {/* Banner absolute at the top */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Banner className="!h-[550px]" />
        </div>

        <div
          className="relative z-30 max-w-3xl mx-auto flex flex-col items-center gap-4 pt-24 pb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold !text-white mb-2">About BravoTek</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Empowering your business with secure, scalable, and future-ready technology solutions. Discover our story, mission, and the team
            behind BravoTek.
          </p>
        </div>
      </section>

      <AboutSection />
      {/* Our Values Section */}
      <section className="px-5 py-16 md:py-24 md:px-12 lg:px-[144px] w-full bg-neutral-100" data-aos="fade-up">
        <div className="container flex flex-col items-center text-center gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-2">Our Values</h2>
          <p className="text-base md:text-lg text-para max-w-2xl mb-8">
            At BravoTek, our values guide every project and partnership. We are committed to excellence, integrity, and innovation in all we
            do.
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-8">
            {/* Value Card 1 */}
            <div className=" bg-white rounded-xl shadow p-6 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="0">
              <span className="text-4xl text-dark-green mb-4">💡</span>
              <h3 className="text-lg font-bold text-dark-green mb-2">Innovation</h3>
              <p className="text-sm text-para">
                We embrace new technologies and creative solutions to keep our clients ahead in a rapidly evolving digital world.
              </p>
            </div>
            {/* Value Card 2 */}
            <div className=" bg-white rounded-xl shadow p-6 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="100">
              <span className="text-4xl text-dark-green mb-4">🤝</span>
              <h3 className="text-lg font-bold text-dark-green mb-2">Integrity</h3>
              <p className="text-sm text-para">
                We build trust through transparency, honesty, and accountability in every relationship and project.
              </p>
            </div>
            {/* Value Card 3 */}
            <div className=" bg-white rounded-xl shadow p-6 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
              <span className="text-4xl text-dark-green mb-4">🌟</span>
              <h3 className="text-lg font-bold text-dark-green mb-2">Excellence</h3>
              <p className="text-sm text-para">
                We deliver the highest quality solutions and services, exceeding expectations at every step.
              </p>
            </div>
            {/* Value Card 4 */}
            <div className=" bg-white rounded-xl shadow p-6 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="300">
              <span className="text-4xl text-dark-green mb-4">🛡️</span>
              <h3 className="text-lg font-bold text-dark-green mb-2">Security</h3>
              <p className="text-sm text-para">
                We prioritize the safety and security of our clients’ data and systems in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section (to be implemented) */}

      {/* <section className="px-5 py-16 md:py-24 md:px-12 lg:px-[144px] w-full bg-white" data-aos="fade-up">
        <div className="container flex flex-col items-center text-center gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-2">Meet Our Team</h2>
          <p className="text-base md:text-lg text-para max-w-2xl mb-8">
            Our team of certified experts is dedicated to delivering innovative IT solutions and exceptional service to help your business
            thrive.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
            {teams.map((team, idx) => (
              <div key={team.id} className="flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-delay={100 * idx}>
                <figure className="h-[224px] w-full rounded-lg">
                  <Image src={team.image} alt="team" loading="lazy" decoding="async" className="w-full h-full object-cover rounded-lg" />
                </figure>

                <div className="flex flex-col items-center justify-center mt-4">
                  <h3 className="text-text-black text-center text-lg font-Satoshi font-bold leading-7">{team.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <CTASection />
    </>
  );
}
