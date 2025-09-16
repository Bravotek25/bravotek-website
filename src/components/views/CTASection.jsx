import { FaPhoneAlt } from "react-icons/fa";

export default function CTASection() {
  return (
    <section
      className="relative bg-dark-green flex justify-center items-center px-5 py-16 md:py-24 md:px-12 lg:px-[144px] w-full overflow-hidden"
      style={{
        backgroundImage: "url(/assets/images/herobg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-green opacity-80 pointer-events-none z-0" />
      <div className="relative max-w-3xl w-full mx-auto flex flex-col items-center text-center gap-6 z-10" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-2">Ready to Upgrade Your Network?</h2>
        <p className="text-lg md:text-xl text-[#fafafa] mb-6">
          Let BravoTek build a secure, scalable IT infrastructure for your business. Get in touch for a free consultation today.
        </p>
        <a
          href="/schedule-meeting"
          className="bg-white border border-white flex items-center justify-center py-3 px-6 gap-2 rounded-4xl transition-all duration-300 ease-in-out hover:bg-transparent group cursor-pointer"
        >
          <FaPhoneAlt size={20} className="text-dark-green group-hover:text-white" />
          <span className="text-base font-normal font-heading text-center leading-[24px] text-dark-green group-hover:text-white transition-all duration-300 ease-in-out">
            Schedule a Call
          </span>
        </a>
      </div>
    </section>
  );
}
