import React from "react";

const Banner = () => {
  return (
    <section id="about" className="container mx-auto md:mb-10">
      <div>
        <div className="text-center animate__animated animate__fadeInUp">
          <p className="md:text-5xl mt-10 md:mt-0 text-4xl">
            {" "}
            Hello,{" "}
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r via-lime-400 to-yellow-500 from-[#66ec97]">
              I&apos;m Kausar Ahmad,
            </span>
          </p>
          <p className="md:text-3xl text-2xl mt-6">Web Developer</p>
          <p className="mt-8 w-4/5 text-lg mx-auto">
            I am a dedicated and passionate full-stack web developer with
            hands-on experience in building scalable and dynamic web
            applications. With a strong foundation in technologies like
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 text-lg to-lime-500 ml-1">
              JavaScript, TypeScript,
            </span>{" "}
            React, Express.js, and MongoDB, I enjoy solving real-world problems
            through innovative solutions. I&apos;m always eager to expand my
            skills and contribute to exciting projects, applying the latest
            technologies to create user-friendly experiences. Let’s build
            something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
