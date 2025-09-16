import { FaPhoneAlt } from "react-icons/fa";
import ServiceSection from "./ServiceSection";
import Banner from "../../components/Banner";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}

      <section
        className="w-full min-h-[450px] md:min-h-[550px] flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat text-center overflow-hidden"
        style={{ backgroundImage: "url(/assets/images/serviceImg.webp)" }}
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold !text-white mb-2">Our Services</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Discover our range of IT solutions designed to empower your business with security, scalability, and innovation.
          </p>
        </div>
      </section>

      <ServiceSection />

      {/* Why Choose Us Section */}
      <section className="px-5 py-16 md:py-24 md:px-12 lg:px-[144px] w-full bg-neutral-100" data-aos="fade-up">
        <div className="container flex flex-col items-center text-center gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-2">Why Partner With BravoTek?</h2>
          <p className="text-base md:text-lg text-para max-w-2xl mb-8">
            Choosing an IT partner is about more than just technology — it’s about trust, reliability, and a shared vision for growth. At
            BravoTek, we see ourselves as an extension of your team, working side-by-side to protect your data, strengthen your systems, and
            keep your business moving forward with confidence.
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-8">
            {/* Feature Card 1 */}
            <div className="w-full md:w-72 bg-white rounded-xl shadow p-6 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="0">
              <span className="text-4xl text-dark-green mb-4">🔒</span>
              <h3 className="text-lg font-bold text-dark-green mb-2">Security First</h3>
              <p className="text-sm text-para">
                Your peace of mind is our priority. We safeguard your business with proven security measures, proactive threat detection,
                and best-in-class compliance standards.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div
              className="w-full md:w-72 bg-white rounded-xl shadow p-6 flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <span className="text-4xl text-dark-green mb-4">⚡</span>
              <h3 className="text-lg font-bold text-dark-green mb-2">Fast & Reliable</h3>
              <p className="text-sm text-para">
                Downtime isn’t an option. Our infrastructure and support processes are built to deliver rapid response times and consistent
                performance — so you can stay focused on running your business.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div
              className="w-full md:w-72 bg-white rounded-xl shadow p-6 flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <span className="text-4xl text-dark-green mb-4">🛠️</span>
              <h3 className="text-lg font-bold text-dark-green mb-2">Human Support</h3>
              <p className="text-sm text-para">
                Behind every system is a real person who cares. Our certified specialists are approachable, responsive, and dedicated to
                finding the right solutions for your unique challenges.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div
              className="w-full md:w-72 bg-white rounded-xl shadow p-6 flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <span className="text-4xl text-dark-green mb-4">💡</span>
              <h3 className="text-lg font-bold text-dark-green mb-2">Forward-Thinking</h3>
              <p className="text-sm text-para">
                We don’t just fix today’s problems — we help you prepare for tomorrow’s opportunities with scalable, future-ready solutions
                designed to grow alongside your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <CTASection /> */}
      <section className="relative bg-dark-green flex justify-center items-center px-5 py-16 md:py-24 md:px-12 lg:px-[144px] w-full overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-green  pointer-events-none z-0" />
        <div className="relative max-w-3xl w-full mx-auto flex flex-col items-center text-center gap-6 z-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-2">Ready to Get a Quote?</h2>
          <p className="text-lg md:text-xl text-[#fafafa] mb-6">
            Let BravoTek provide you with a tailored IT solution. Reach out today for a free, no-obligation quote for your business needs.
          </p>
          <a
            href="/contact-us"
            className="bg-white border border-white flex items-center justify-center py-3 px-6 gap-2 rounded-4xl transition-all duration-300 ease-in-out hover:bg-transparent group cursor-pointer"
          >
            <FaPhoneAlt size={20} className="text-dark-green group-hover:text-white" />
            <span className="text-base font-normal font-heading text-center leading-[24px] text-dark-green group-hover:text-white transition-all duration-300 ease-in-out">
              Get a Quotation
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
