import Image from "next/image";
import { FaServer, FaShieldAlt, FaCloud, FaTools } from "react-icons/fa";

const services = [
  {
    icon: <FaTools className="text-3xl text-white mb-3" />,
    title: "IT Support & Services",
    description: "Comprehensive IT support, troubleshooting, and managed services to keep your business running smoothly and securely.",
    bgImage: "/assets/images/service1.png",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-white mb-3" />,
    title: "Cyber Security Services",
    description: "Protect your data and systems with advanced cybersecurity solutions, monitoring, and proactive threat prevention.",
    bgImage: "/assets/images/service2.png",
  },
  {
    icon: <FaCloud className="text-3xl text-white mb-3" />,
    title: "Cloud & Server Services",
    description: "Seamless cloud integration, server setup, and management for scalable, future-ready infrastructure.",
    bgImage: "/assets/images/service3.png",
  },
  {
    icon: <FaServer className="text-3xl text-white mb-3" />,
    title: "Effective Management",
    description: "Strategic IT management and consulting to optimize your technology investments and drive business growth.",
    bgImage: "/assets/images/service4.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-[144px]">
      <div className="container flex flex-col items-center text-center gap-6" data-aos="fade-up">
        {/* <span className="text-neon-green text-sm sm:text-base leading-[160%] uppercase">Our Services</span> */}
        <h2 className="text-3xl md:text-4xl font-bold text-title mb-2">What We Offer</h2>
        <p className="text-base md:text-lg text-para max-w-2xl mb-8">
          BravoTek delivers end-to-end IT solutions to empower your business. Explore our core services designed for security, scalability,
          and efficiency.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full mt-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="relative rounded-2xl overflow-hidden h-[320px] flex items-center justify-center group shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={100 * idx}
            >
              {/* Background Image */}
              <Image
                src={service.bgImage}
                alt={service.title}
                fill
                className="object-cover w-full h-full absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-500"
                priority={idx === 0}
              />
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/70 transition-colors duration-300" /> */}
              {/* Content */}
              <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
                {service.icon}
                <h3 className="text-xl font-bold !text-white mb-2 drop-shadow-lg">{service.title}</h3>
                <p className="text-base text-white drop-shadow-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
