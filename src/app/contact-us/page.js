"use client";
import React, { useState, useRef } from "react";
import FAQSection from "@/components/views/FAQSection";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Banner from "../../components/Banner";

export default function ContactUsPage() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const result = await emailjs.sendForm("service_ooxtxb7", "template_5mx1shk", form.current, "ldrjfuIo0z82QYX_b");

      console.log(result.text);
      toast.success("Message sent successfully! 🎉");
      setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.log(error.text);
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <main className="">
      {/* Contact Hero Section */}
      <section
        className="w-full bg-neutral-100 pt-32 pb-16 px-5 md:px-12 lg:px-[144px] text-center relative overflow-hidden min-h-[550px] bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url(/assets/images/contactHeroImg.jpg)",
        }}
      >
        {/* Banner absolute at the top */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Banner className="!h-[550px]" />
        </div>
        <div
          className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-4 relative z-30 mt-14"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold !text-white mb-2">Contact Us</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            We’d love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to
            answer all your questions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-5 py-16 md:py-24 md:px-12 lg:px-[144px] w-full bg-white">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch w-full bg-white rounded-xl border border-neutral-200 overflow-hidden">
          {/* Left: Info */}
          <div className="flex flex-col gap-8 p-4 md:p-8 bg-neutral-50 border-r border-neutral-200 justify-center">
            <h2 className="text-4xl font-bold text-dark-green mb-2">Get in touch</h2>
            <p className="text-gray-700 text-base mb-4">
              Have a project in mind or need more information? Our team is here to help you every step of the way. Reach out to us and we’ll
              respond as soon as possible.
            </p>
            <ul className="flex flex-col gap-6 mt-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-2xl text-dark-green mt-1" />
                <span>
                  6400 Atlantic Blvd Peachtree Corners
                  <br />
                  GA 30071 Atlanta Branch
                  <br /> Head Office
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-xl text-dark-green" />
                <span>+1 (470) 377-1988</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-xl text-dark-green" />
                <span>info@bravotek.net</span>
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6 p-4 md:p-8 bg-white justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-base font-medium text-dark-green">First name</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-dark-green"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-base font-medium text-dark-green">Last name</span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-dark-green"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-base font-medium text-dark-green">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-dark-green"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-base font-medium text-dark-green">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-dark-green resize-none"
              />
            </label>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-dark-green text-white rounded-lg px-6 py-2 font-semibold cursor-pointer transition-all"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2 ">
                    <span className="spinner"></span>
                    <span className="">Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-5 pb-16 md:pb-24 md:px-12 lg:px-[144px] w-full">
        <div className="container mx-auto max-w-7xl rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="BravoTek Head Office"
            src="https://www.google.com/maps?q=30+N+Gould+Street,+Ste+R,+Sheridan,+WY+82801&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </main>
  );
}
