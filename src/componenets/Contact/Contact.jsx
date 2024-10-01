import React from "react";
import Title from "../shared/Titile/Title";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:container mx-auto">
      <Title>Contact Me</Title>
      <div className="max-w-7xl mt-14 bg-[#1E293B] py-8 rounded-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-lg text-gray-300 space-y-4">
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
              className="text-green-400 hover:underline"
              target="_blank"
            >
              Kausar Ahmad Tasin
            </a>
          </p>
          <p>
            Location: <span className="text-green-400">Bogura, Bangladesh</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
