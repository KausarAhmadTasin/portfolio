import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 w-full">
      <div className="px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Kausar Ahmad Tasin. All rights
          reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Designed & Developed by Kausar Ahmad Tasin
        </p>
        <div className="mt-4">
          <a
            href="mailto:kausar.ahmad.tasin01@gmail.com"
            className="text-green-500 hover:underline px-3"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/kausar-ahmad-tasin/"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:underline px-3"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/KausarAhmadTasin"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:underline px-3"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
