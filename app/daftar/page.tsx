import Link from "next/link";
import Image from "next/image";
import Bubble from "@/public/pink-bubble.svg";

const page = () => {
  return (
    <main className="relative h-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-[-30] h-full min-h-screen w-full bg-gradient-to-b from-[#7E2D64] to-[#B12A97]"></div>
      <div className="absolute inset-0 z-[-10] h-full min-h-screen w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
      <Image
        src={Bubble}
        alt="Icon"
        className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[450px] md:h-[450px] translate-x-[40%] -translate-y-[20%] -z-10"
        data-aos="fade-down-left"
      />
      <Image
        src={Bubble}
        alt="Icon"
        className="absolute bottom-0 left-0 w-[500x] h-[500px] md:w-[450px] md:h-[450px] -translate-x-[30%] translate-y-[30%] -z-10  "
        data-aos="fade-up-right"
      />
      <div className="p-10 md:p-16 lg:p-20 lg:px-32" data-aos="zoom-in">
        <h1 className="pb-4 text-center bg-gradient-to-b from-white via-[#FFAFDF] to-white text-transparent bg-clip-text font-bold text-4xl sm:text-7xl md:text-8xl lg:text-9xl mt-20">
          Registration
        </h1>
        <p className="text-center text-white text-shadow-lg/10 text-sm sm:text-base md:text-lg pt-8">
          Select your competition
        </p>
        <div className="grid md:grid-cols-2 gap-3 md:gap-5 pt-5">
          <Link
            href="/daftar/ketentuan/erc"
            className="hover:scale-105 duration-300 transition-all text-sm md:text-base text-center bg-gradient-to-r from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-6 py-2 sm:py-3"
          >
            Equity Research Competition
          </Link>
          <Link
            href="/daftar/ketentuan/bcc"
            className="hover:scale-105 duration-300 transition-all text-sm md:text-base text-center bg-gradient-to-r from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-6 py-2 sm:py-3"
          >
            Business Case Competition
          </Link>
          <Link
            href="https://bit.ly/PreEventINFEST2025 "
            className="hover:scale-105 md:col-span-2 md:mx-auto duration-300 transition-all text-sm md:text-base text-center bg-gradient-to-r from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-6 py-2 sm:py-3"
          >
            Pre-Event INFEST 2025
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
