import CTASection from "@/components/views/CTASection";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Banner from "../../components/Banner";

const projects = [
  {
    id: 1,
    title: "Rooftop Wireless Antenna Installation",
    description: "Secure rooftop mounting of a wireless antenna system for improved site connectivity and signal coverage.",
    image: "/assets/images/project1.jpg",
  },
  {
    id: 2,
    title: "Network Cabinet & Structured Cabling",
    description: "Professional installation of a wall-mounted network cabinet with organized structured cabling and network equipment.",
    image: "/assets/images/project2.jpg",
  },
  {
    id: 3,
    title: "Enterprise Server Rack Deployment",
    description: "Deployment of a large, secure server rack for enterprise-grade IT infrastructure and equipment management.",
    image: "/assets/images/project3.jpg",
  },
  {
    id: 4,
    title: "Outdoor Digital Display Enclosure",
    description: "Installation of weatherproof enclosures for outdoor digital displays, ensuring durability and performance.",
    image: "/assets/images/project4.jpg",
  },
  {
    id: 5,
    title: "Data Center Power & Network Setup",
    description: "Rack-mounted power distribution and network switches for a high-availability data center environment.",
    image: "/assets/images/project5.jpg",
  },
  {
    id: 6,
    title: "Outdoor Electrical Breaker Panel",
    description: "Installation and labeling of outdoor electrical breaker panels for digital and static signage systems.",
    image: "/assets/images/project6.jpg",
  },
  {
    id: 7,
    title: "Network Cabinet Wiring (In Progress)",
    description: "Ongoing structured cabling and network switch installation for a business communications room.",
    image: "/assets/images/project7.jpg",
  },
  {
    id: 8,
    title: "Industrial Wireless Access Point Mounting",
    description: "Ceiling-mount installation of a wireless access point for robust warehouse Wi-Fi coverage.",
    image: "/assets/images/project8.jpg",
  },
  {
    id: 9,
    title: "Rooftop Antenna Array Setup",
    description: "Multi-antenna rooftop array for advanced wireless communications and site-wide connectivity.",
    image: "/assets/images/project9.jpg",
  },
  {
    id: 10,
    title: "Warehouse Network & Power Panel",
    description: "Wall-mounted network and power panels for organized, efficient warehouse IT infrastructure.",
    image: "/assets/images/project10.jpg",
  },
  {
    id: 11,
    title: "Open Frame Network Rack",
    description: "Installation of an open frame rack for easy access to network switches and structured cabling.",
    image: "/assets/images/project11.jpg",
  },
  {
    id: 12,
    title: "Antenna Close-Up & Cabling",
    description: "Close-up of a rooftop antenna with weatherproof cabling for reliable outdoor wireless performance.",
    image: "/assets/images/project12.jpg",
  },
  {
    id: 13,
    title: "Warehouse Network Mount Prep",
    description: "Preparation of a steel column and mounting plate for secure network equipment installation in a warehouse.",
    image: "/assets/images/project13.jpg",
  },
  {
    id: 14,
    title: "Warehouse Network Equipment Mount",
    description: "Mounted network equipment and patch panel for efficient warehouse IT operations.",
    image: "/assets/images/project14.jpg",
  },
  {
    id: 15,
    title: "Outdoor Digital Menu Board Installation",
    description: "Setup of outdoor digital menu boards with secure, weather-resistant enclosures for drive-thru service.",
    image: "/assets/images/project15.jpg",
  },
  {
    id: 16,
    title: "Wireless Access Point with Antennas",
    description: "Industrial wireless access point with multiple antennas for maximum coverage in large facilities.",
    image: "/assets/images/project16.jpg",
  },
  {
    id: 17,
    title: "Rooftop Antenna Array (Wide View)",
    description: "Wide view of a rooftop antenna array for site-wide wireless communications and monitoring.",
    image: "/assets/images/project17.jpg",
  },
  {
    id: 18,
    title: "Warehouse Network Panel & Conduit",
    description: "Wall-mounted network panel and conduit installation for organized industrial IT infrastructure.",
    image: "/assets/images/project18.jpg",
  },
  {
    id: 19,
    title: "Open Frame Network Rack (Populated)",
    description: "Populated open frame rack with network switches and structured cabling for business operations.",
    image: "/assets/images/project19.jpg",
  },
  {
    id: 20,
    title: "Antenna Array & Rooftop Equipment",
    description: "Rooftop antenna array and equipment for advanced wireless networking and site connectivity.",
    image: "/assets/images/project20.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="">
      {/* Hero Section */}
      <section
        className="w-full min-h-[450px] md:min-h-[550px] flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat text-center overflow-hidden"
        style={{ backgroundImage: "url(/assets/images/heroImg.png)" }}
        // data-aos="fade-up"
      >
        {/* Banner absolute at the top */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Banner className="!h-[550px]" />
        </div>
        <div
          className="relative z-30 max-w-3xl mx-auto flex flex-col items-center gap-4 pt-24 pb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold !text-white mb-2">Our Projects</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Explore our portfolio of successful IT projects, from network upgrades to cloud migrations and cybersecurity enhancements.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-5 py-16 md:py-24 md:px-12 lg:px-[144px] w-full bg-white">
        <article className="flex flex-col items-center justify-center gap-8 lg:gap-16">
          <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" data-aos="fade-up">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-neutral-50 rounded-2xl shadow p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
                data-aos="zoom-out"
                data-aos-delay={50 * idx}
              >
                <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                  <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-dark-green mb-2 text-center">{project.title}</h3>
                <p className="text-base text-para text-center">{project.description}</p>
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

      <CTASection />
    </main>
  );
}
