import React from "react";
import Title from "../shared/Titile/Title";

const Contact = () => {
  return (
    <section id="contact" className="py-16 scroll-mt-16 md:container mx-auto">
      <Title>Contact Me</Title>

      <div className="mt-12 flex flex-col md:flex-row gap-10 bg-[#1E293B] rounded-xl p-8 shadow-lg max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-6 text-gray-300">
          <h3 className="text-2xl font-semibold text-green-400">
            Let&apos;s Connect
          </h3>
          <p>
            Email:{" "}
            <a
              href="mailto:kausar.ahmad.tasin01@gmail.com"
              className="text-green-400 hover:underline"
            >
              kausar.ahmad.tasin01@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/kausar-ahmad-tasin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Kausar Ahmad Tasin
            </a>
          </p>
          <p>
            Location: <span className="text-green-400">Bogura, Bangladesh</span>
          </p>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/kausar.ahmad.tasin01@gmail.com"
          method="POST"
          className="md:w-1/2 space-y-6"
        >
          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_redirect"
            value="https://kausarahmadtasin-portfolio.vercel.app/thankYou"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
