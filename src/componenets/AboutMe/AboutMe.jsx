"use client";
import Image from "next/image";
import Title from "../shared/Titile/Title";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AboutMe = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div id="aboutMe" className="container mx-auto lg:mt-16 mt-12">
      <Title>About Me</Title>
      <div className="flex flex-col lg:flex-row gap-x-20 gap-y-8 items-center justify-center mt-5 lg:mt-16">
        <div className="">
          <Carousel
            plugins={[plugin.current]}
            className="lg:w-full mx-auto max-w-[70%] lg:max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="gap-4 px-5">
              <Image
                className="rounded-lg"
                src={"/images/nodejs.png"}
                width={300}
                height={500}
                alt="kausar-ahmad-tasin"
              />{" "}
              <Image
                className="rounded-lg"
                src={"/images/front.png"}
                width={300}
                height={500}
                alt="kausar-ahmad-tasin"
              />
              <Image
                className="rounded-lg"
                src={"/images/back.png"}
                width={300}
                height={500}
                alt="kausar-ahmad-tasin"
              />
              <Image
                className="rounded-lg"
                src={"/images/front2.png"}
                width={300}
                height={500}
                alt="kausar-ahmad-tasin"
              />
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </Carousel>
        </div>
        <div className="lg:w-2/3 w-full px-4 lg:px-0">
          <p>
            <span className="block">
              I’m <span className="text-[#66ec97]">Kausar Ahmad Tasin</span>, a{" "}
              <span className="text-[#66ec97]">problem-solver at heart</span>{" "}
              and a{" "}
              <span className="text-[#66ec97]">Full-Stack Web Developer</span>{" "}
              by craft. My fascination with web technologies goes beyond just
              writing code— I thrive on{" "}
              <span className="text-[#66ec97]">
                engineering seamless digital experiences
              </span>{" "}
              that blend functionality with aesthetics.
            </span>
            <br />
            <span className="block">
              With a span foundation in the{" "}
              <span className="text-[#66ec97]">MERN stack</span>, I specialize
              in building applications that are not only{" "}
              <span className="text-[#66ec97]">scalable</span> but also{" "}
              <span className="text-[#66ec97]">intuitive</span>. My approach to
              development is simple: understand the problem,{" "}
              <span className="text-[#66ec97]">
                architect the best solution
              </span>
              , and refine it until it feels effortless for the user.
            </span>
            <br />I believe great applications don’t just work—they{" "}
            <span>flow</span>. I’m always exploring the evolving landscape of
            web technologies, finding smarter ways to{" "}
            <span className="text-[#66ec97]">optimize performance</span>,{" "}
            <span className="text-[#66ec97]">improve user engagement</span>, and{" "}
            <span className="text-[#66ec97]">enhance maintainability</span>.
            <span className="block mt-5">
              <span className="text-[#66ec97]">
                Collaboration fuels my creativity
              </span>
              , and I enjoy working with teams that push boundaries and turn
              ambitious ideas into reality.
            </span>
            <br />
            If you’re looking for someone who{" "}
            <span className="text-[#66ec97]">codes with purpose</span> and{" "}
            <span className="text-[#66ec97]">thinks beyond conventions</span>,
            let’s build something remarkable together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
