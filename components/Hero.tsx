"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Ornament1 from "@/public/ornament1.svg";
import Ornament2 from "@/public/ornament2.svg";
import Logo from "@/public/logo-ksepp.png";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <section>
      <div className="relative h-screen w-full isolate overflow-hidden">
        <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#3B007D] to-[#280068]"></div>
        <Image
          src={Ornament1}
          alt="Icon"
          className="opacity-40 lg:opacity-100 absolute z-[-20] w-1/2 lg:w-1/3 h-auto top-1/3 left-0 -translate-y-1/2 -translate-x-[30%] "
          data-aos="fade-right"
        />
        <Image
          src={Ornament2}
          alt="Icon"
          className="opacity-60 lg:opacity-100 absolute z-[-20] w-1/2 lg:w-1/3 max-w-md h-auto top-3/4 md:top-1/2 right-0 -translate-y-1/2 translate-x-[30%]"
          data-aos="fade-left"
        />
        <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center text-white p-4">
          <p
            className="mb-5 text-xs md:text-base flex gap-3 bg-gradient-to-b from-purple-900/70 to-fuchsia-800/70 rounded-full shadow-[inset_0px_10px_18.799999237060547px_0px_rgba(166,143,194,1.00)] px-4 py-2 sm:py-3 md:px-6 items-center"
            data-aos="fade-down"
          >
            <Image src={Logo} alt="Logo" className="w-5 md:w-6" />
            KSEP ITB Presents
          </p>

          <h1
            className="z-20 bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-5xl xs:text-7xl md:text-9xl "
            data-aos="zoom-in"
          >
            INFEST 2025
          </h1>

          <p
            className="font-[500] italic text-sm sm:text-base md:text-xl mb-20"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {" "}
            Investment Festival
          </p>

          <a
            className="text-sm md:text-base bg-gradient-to-r from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-6 py-2 sm:py-3 flex items-center gap-3 animate-float delay-2000"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" href="#main-section"
          >
            Get Started
            <ArrowRight className="text-[#2F016D] w-4 md:w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
