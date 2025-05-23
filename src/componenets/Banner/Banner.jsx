import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    // <section id="about" className="container mx-auto md:mb-10">
    //   <div className="flex flex-col-reverse lg:flex-row gap-x-16 items-center">
    //     <div className="lg:w-2/3 mx-4 lg:mx-0 text-center animate__animated animate__fadeInUp">
    //       <p className="md:text-5xl mt-6 md:mt-0 text-2xl">
    //         {" "}
    //         Hello,{" "}
    //         <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r via-lime-400 to-yellow-500 from-[#66ec97]">
    //           I&apos;m Kausar Ahmad,
    //         </span>
    //       </p>
    //       <p className="md:text-3xl text-xl md:mt-6 mt-2">Web Developer</p>
    //       <p className="mt-2 md:mt-8 text-sm md:text-lg mx-auto">
    //         I am a dedicated and passionate full-stack web developer with
    //         hands-on experience in building scalable and dynamic web
    //         applications. With a strong foundation in technologies like
    //         <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 text-base to-lime-500 ml-1">
    //           JavaScript, TypeScript,
    //         </span>{" "}
    //         React, Express.js, and MongoDB, I enjoy solving real-world problems
    //         through innovative solutions. I&apos;m always eager to expand my
    //         skills and contribute to exciting projects, applying the latest
    //         technologies to create user-friendly experiences. Let’s build
    //         something amazing together!
    //       </p>
    //     </div>
    //     <div className="rounded">
    //       <Image className="w-48 md:w-64 lg:w-80 xl:w-96 h-auto rounded-lg" src={'/images/front.png'} alt="kausar-ahmad-tasin" width={400} height={500} />
    //     </div>
    //   </div>

    // </section>
    <section
      id="home"
      className="relative mx-auto scroll-mt-16 pt-4  overflow-hidden lg:h-[550px]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6DEB8D] opacity-20 rounded-full blur-[120px] z-0" />
      <div>
        <div className="lg:container lg:mx-auto mx-4 md:mb-10 pt-24 pb-10 lg:py-20">
          <div className="text-center animate__animated animate__fadeInUp">
            <h1 className="md:text-5xl lg:mt-10 md:mt-4 mt-2 text-4xl">
              {" "}
              Hello,{" "}
              <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r via-lime-300 to-lime-500 from-[#66ec97]">
                I&apos;m Kausar Ahmad Tasin,
              </span>
            </h1>
            <p className="md:text-3xl text-2xl mt-6">Web Developer</p>
            <p className="mt-8 lg:w-4/5 text-lg mx-auto">
              I am a dedicated and passionate full-stack web developer with
              hands-on experience in building scalable and dynamic web
              applications. With a strong foundation in technologies like
              <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 text-lg to-lime-500 ml-1">
                JavaScript, TypeScript,
              </span>{" "}
              React, Express.js, and MongoDB, I enjoy solving real-world
              problems through innovative solutions. I&apos;m always eager to
              expand my skills and contribute to exciting projects, applying the
              latest technologies to create user-friendly experiences. Let’s
              build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
