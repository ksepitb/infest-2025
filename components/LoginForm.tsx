import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Ornament1 from "@/public/ornament1.svg";
import Ornament2 from "@/public/ornament2.svg";
import Logo from "@/public/logo-ksepp.png";
import { ArrowRight } from "lucide-react";

const LoginForm = () =>  {
  return (
    <div className="relative h-screen w-full isolate overflow-hidden">
         <div className="relative h-screen w-full isolate overflow-hidden">
        <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#3B007D] to-[#280068]"></div>
        <Image
          src={Ornament1}
          alt="Icon"
          className="opacity-40 lg:opacity-100 absolute z-[-20] w-1/2 lg:w-1/3 h-auto top-1/3 left-0 -translate-y-1/2 -translate-x-[30%] "
          data-aos="fade-right"
        />
        <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center text-white p-4">
          <h1
            className="z-20 bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-5xl fit-content mb-5 p-3"
            data-aos="zoom-in"
            >
            Login
          </h1>
          <div className="w-full max-w-2xl mx-auto bg-[#240046]/80 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl text-center animate-fade-in" data-aos="fade-up">
            <form className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/90 mb-2 text-left"
                    >
                    Nama Kelompok <span className="text-red-400">*</span>
                  </label> 
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white/90 mb-2 text-left"
                    >
                    Nama Kelompok <span className="text-red-400">*</span>
                  </label> 
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                </div>
                <SubmitButton />
            </form>
          </div>
        </div>
      </div> 
    </div>
  )
}

const SubmitButton = () => {
  return (
  <button
    type="button"
    className="flex mx-auto items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
  >
    Login
    <ArrowRight size={16} />
  </button>
  )
}

export default LoginForm;