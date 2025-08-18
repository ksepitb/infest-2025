import React from "react";
import { ArrowRight } from "lucide-react";
import Ornamen from "@/public/ornament1.svg";
import Image from "next/image";
import LongOrnamen from "@/public/ornament4.svg";
import BoxComponent from "@/components/Box";
import Dashboard from "@/components/Dashboard";


const Page = () => {

  return (
    <main className="relative h-full min-h-screen w-full isolate overflow-hidden">
      <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#3E047F] to-[#AD198C]"></div>
      <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
      <Image
        src={Ornamen}
        alt="Icon"
        className="opacity-60 absolute -z-10 w-1/2 lg:w-1/3 max-w-md h-auto top-[30%] right-0 -translate-y-1/2 translate-x-[30%]  scale-x-[-1]"
        data-aos="fade-right"
      />
      <Image
        src={Ornamen}
        alt="Icon"
        className="opacity-60 absolute -z-10 w-1/2 lg:w-1/3 max-w-md h-auto top-[10%] left-0 -translate-y-1/2 -translate-x-[30%]"
        data-aos="fade-right"
      />
      <div className="p-10 md:p-16 lg:p-20 lg:px-32 flex flex-col items-center">
      <Dashboard />
      </div>
    </main>
  );
};

export default Page;
