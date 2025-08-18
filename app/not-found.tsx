"use client"

import Link from "next/link"
import Image from "next/image"
import Bubble from "@/public/pink-bubble.svg"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="relative h-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-[-30] h-full min-h-screen w-full bg-gradient-to-b from-[#7E2D64] to-[#B12A97]"></div>
      <div className="absolute inset-0 z-[-10] h-full min-h-screen w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>

      <Image
        src={Bubble || "/placeholder.svg"}
        alt="Icon"
        className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[450px] md:h-[450px] translate-x-[40%] -translate-y-[20%] -z-10"
        data-aos="fade-down-left"
      />
      <Image
        src={Bubble || "/placeholder.svg"}
        alt="Icon"
        className="absolute bottom-0 left-0 w-[500px] h-[500px] md:w-[450px] md:h-[450px] -translate-x-[30%] translate-y-[30%] -z-10"
        data-aos="fade-up-right"
      />

      <div className="p-10 md:p-16 lg:p-20 lg:px-32 text-center" data-aos="zoom-in">
        <div className="mb-6">
          <h1 className="bg-gradient-to-b from-white via-[#FFAFDF] to-white text-transparent bg-clip-text font-bold text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <h2 className="pb-4 text-center bg-gradient-to-b from-white via-[#FFAFDF] to-white text-transparent bg-clip-text font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          Page Not Found
        </h2>

        <p className="text-center text-white/90 text-shadow-lg/10 text-sm sm:text-base md:text-lg pt-4 pb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-5">
          <Link
            href="/"
            className="hover:scale-105 duration-300 transition-all text-sm md:text-base text-center bg-gradient-to-r from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-6 py-2 sm:py-3 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="hover:scale-105 duration-300 transition-all text-sm md:text-base text-center bg-white/10 border border-white/20 rounded-full text-white font-[600] px-6 py-2 sm:py-3 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

      </div>
    </main>
  )
}
