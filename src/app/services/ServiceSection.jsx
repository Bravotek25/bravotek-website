import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Site Surveys",
    image: "/assets/images/service8.png",
    list: [
      "Conduct on-site evaluation and assessment.",
      "Perform Wi-Fi heat map testing for coverage planning.",
      "Inspect MDF (Main Distribution Frame) and IDF (Intermediate Distribution Frame) locations.",
      "Assess IT network closet for space, ventilation, and security.",
      "Follow standardized site survey questionnaire.",
      "Capture detailed site photographs for documentation.",
      "Provide a comprehensive report outlining recommendations.",
    ],
  },
  // {
  //   id: 2,
  //   title: "Cable Runs & Testing (CAT6 and higher)",
  //   image: "/assets/images/cableruns.png",
  //   list: [
  //     "Install structured cabling (CAT6, CAT6a, CAT7).",
  //     "Perform cable certification and bandwidth testing.",
  //     "Ensure neat and secure cable pathways.",
  //     "Label and document all terminations.",
  //   ],
  // }, 
  {
    id: 3,
    title: "Wireless Access Point Installations",
    image: "/assets/images/picture6.png",
    list: [
      "Mount and position WAPs for optimal coverage.",
      "Configure SSIDs, VLANs, and security settings.",
      "Integrate WAPs into network management systems.",
      "Verify performance through post-install testing.",
    ],
  },
  // {
  //   id: 4,
  //   title: "Fiber Cabling",
  //   image: "/assets/images/fiber.png",
  //   list: [
  //     "Install single-mode and multi-mode fiber optic cables.",
  //     "Perform splicing and termination.",
  //     "Test fiber links for attenuation and loss.",
  //     "Provide fiber certification documentation.",
  //   ],
  // },
  {
    id: 5,
    title: "Rack & Stack",
    image: "/assets/images/service3.png",
    list: [
      "Assemble and install server/network racks.",
      "Mount switches, servers, and patch panels.",
      "Organize cable management within racks.",
      "Ensure correct power and airflow management.",
    ],
  },
  // {
  //   id: 6,
  //   title: "Cable Management & Rack Cleanup",
  //   image: "/assets/images/service6.png",
  //   list: [
  //     "Remove obsolete or unused cabling.",
  //     "Bundle and route cables for clarity and airflow.",
  //     "Replace damaged patch cords.",
  //     "Improve visual presentation and accessibility.",
  //   ],
  // },
  // {
  //   id: 7,
  //   title: "Server Installation",
  //   image: "/assets/images/serverinstall.png",
  //   list: [
  //     "Rack-mount physical servers securely.",
  //     "Connect power, network, and management interfaces.",
  //     "Install operating systems and baseline configuration.",
  //     "Verify system functionality and integration.",
  //   ],
  // },
  {
    id: 8,
    title: "Troubleshooting & Repairs",
    image: "/assets/images/service7.png",
    list: [
      "Diagnose hardware and network failures.",
      "Replace defective components.",
      "Perform root cause analysis.",
      "Restore systems to operational status quickly.",
    ],
  },
  {
    id: 9,
    title: "IP Camera Installs",
    image: "/assets/images/picture5.png",
    list: [
      "Plan and execute office IT refresh or relocation.",
      "Upgrade networking equipment and servers.",
      "Reconfigure workstation layouts.",
      "Minimize downtime during transitions.",
    ],
  },
  {
    id: 10,
    title: "Digital Signage & Menu Boards",
    image: "/assets/images/picture4.png",
    list: [
      "Install displays for retail and service environments.",
      "Configure content management systems.",
      "Integrate with existing network infrastructure.",
      "Schedule and update content remotely.",
    ],
  },
  // {
  //   id: 11,
  //   title: "POS (Point of Sale)",
  //   image: "/assets/images/pos.png",
  //   list: [
  //     "Install and configure POS terminals.",
  //     "Connect peripherals (printers, scanners, cash drawers).",
  //     "Set up POS software and network connectivity.",
  //     "Provide training for staff usage.",
  //   ],
  // },
];

const ServiceSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-[100px] py-10 sm:py-20 bg-background-white">
      <article className="flex flex-col items-center justify-center gap-8 lg:gap-16">
        <div className="flex flex-col items-center justify-center gap-2 w-full" data-aos="fade-up" data-aos-delay="0">
          <p className="text-base md:text-lg text-para max-w-4xl mb-8 text-center">
            Discover our full suite of IT services designed to power your business growth. From seamless wireless installations to expert
            server repairs, we deliver secure, scalable, and innovative solutions tailored to your unique needs.
          </p>
          <div className="mx-auto w-24 h-1 bg-text-green rounded-full mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="relative rounded-[30px] shadow-lg overflow-hidden group h-[350px] w-full md:w-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
              data-aos="zoom-in"
              data-aos-delay={100 * idx}
            >
              <div className="flex flex-col items-center justify-center h-full p-4 transition-opacity duration-500 ease-in-out z-10 relative group-hover:opacity-0">
                <h3 className="text-[28px] text-center !text-white font-bold leading-10 drop-shadow-lg">{service.title}</h3>
              </div>
              <div className="absolute inset-0 flex flex-col h-full p-6 bg-white/90 border border-text-green rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-20 overflow-y-auto no-scrollbar">
                <h3 className="text-xl text-gray-800 font-bold leading-10 mb-4 text-center underline">{service.title}</h3>
                {/* <div className="w-full h-[1px] bg-text-green mb-4"></div> */}
                <ul className="list-disc list-inside space-y-3 w-full text-text-black text-base font-normal leading-6">
                  {service.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://docs.google.com/presentation/d/1SH2jgKQ2z6tbEDOu04g8owhte_0NDgsy/edit?usp=drive_link&ouid=117414951563940338546&rtpof=true&sd=true" // replace with real file ID
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark-green border border-dark-green flex items-center justify-center py-3 px-6 gap-2 rounded-4xl transition-all duration-300 ease-in-out hover:bg-transparent group"
        >
          <FaCloudDownloadAlt size={24} className="text-white group-hover:text-title transition-all duration-300 ease-in-out" />
          <span className="text-base font-normal font-heading text-center leading-[24px] text-white group-hover:text-title transition-all duration-300 ease-in-out">
            Download Service Summary
          </span>
        </a>
      </article>
    </section>
  );
};

export default ServiceSection;
