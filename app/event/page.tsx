import EventCarousel from "@/components/Carousel"
import { lastYearHighlights } from "@/data/event"
import Jessica from "@/public/JessicaFrame.png"
import Ratih from "@/public/RatihFrame.png"
import Image from "next/image"
import Bubble from "@/public/pink-bubble.svg"
import Ornamen from "@/public/ornament5.svg"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Ajaib from "@/public/ajaib2.png"
import CountdownSection from "@/components/LaunchCountdown"

const countdownEnd = new Date("2025-08-21T00:00:00");

const page = () => {
  return (
    <div className="relative min-h-screen h-full w-full isolate overflow-hidden">
      <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#360677] to-[#4E02B7]"></div>
      <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
      <Image
        src={Bubble || "/placeholder.svg"}
        alt="Icon"
        className="opacity-60 absolute -z-10 w-1/2 lg:w-1/3 max-w-md h-auto top-[30%] right-0 -translate-y-1/2 translate-x-[30%]"
        data-aos="fade-down-left"
      />
      <Image
        src={Bubble || "/placeholder.svg"}
        alt="Icon"
        className="opacity-60 absolute -z-10 w-1/2 lg:w-1/3 max-w-md h-auto top-[10%] left-0 -translate-y-1/2 -translate-x-[60%]"
        data-aos="fade-down-right"
      />
      <Image
        src={Ornamen || "/placeholder.svg"}
        alt="Icon"
        className="opacity-80 md:opacity-50 absolute -z-10 h-auto top-[68%] md:top-3/5 left-1/2 -translate-y-1/2 -translate-x-1/2 w-screen max-w-none"
      />

      <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 py-10 md:py-16 lg:py-20">
        <div className="text-center space-y-4 mt-12 md:mt-20 mb-8 md:mb-16">
          <h1
            className="bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            Investment Workshop
          </h1>
          <h2
            className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            INFEST 2025 Pre-Event
          </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 lg:space-y-20">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <div className="w-full lg:w-2/3 order-2 lg:order-1" data-aos="fade-right">
              <div className="bg-gradient-to-bl from-[#C18EFC] to-[#782DCD] rounded-2xl border border-white/20 p-6 md:p-8 lg:p-10">
                <div className="space-y-4">
                  <h3 className="font-bold text-xl md:text-2xl text-[#FFEED2] leading-tight">
                    Mastering the Written Pitch Deck: From Concept to Clarity                  </h3>
                  <p className="text-white font-bold">💡 Perfect for beginners & aspiring business case competitors.</p>
                  <p className="text-white">
                    Behind every great Pitch Deck is a strong analysis. In this 
                    session, we’ll dive deep into the key principles of building 
                    an effective pitch deck. Learn how to structure your narrative, 
                    design visually engaging slides, and communicate your ideas in
                    a way that captures attention and inspires action.
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex-1">
                        <p className="font-bold text-white text-base md:text-lg">Jessica Margareth</p>
                        <p className="text-white/90 text-sm">1st Winner of Joint Convex 2023 BCC</p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 border border-white/20">
                          <span className="text-white font-semibold text-sm whitespace-nowrap">
                            Day 1 - Aug 23rd 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 order-1 lg:order-2 flex justify-center" data-aos="fade-left">
              <div className="relative">
                <Image
                  src={Jessica || "/placeholder.svg"}
                  alt="Jessica Margareth"
                  width={280}
                  height={280}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-white/20 shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <div className="w-full lg:w-1/3 order-1 flex justify-center" data-aos="fade-right">
              <div className="relative">
                <Image
                  src={Ratih || "/placeholder.svg"}
                  alt="Ratih Mustikoningsih"
                  width={280}
                  height={280}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-white/20 shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3 order-2" data-aos="fade-left">
              <div className="bg-gradient-to-bl from-[#C18EFC] to-[#782DCD] rounded-2xl border border-white/20 p-6 md:p-8 lg:p-10">
                <div className="space-y-4">
                  <h3 className="font-bold text-xl md:text-2xl text-[#FFEED2] leading-tight">
                    INFEST X AJAIB - Equity Research Mastery: Turning Complex Analysis into Clear, Convincing Solutions
                  </h3>
                  <p className="text-white font-bold italic">
                    Struggling to turn your research into a compelling investment thesis?
                  </p>
                  <p className="text-white">
                    This session will sharpen your ability to process complex data and craft high-impact equity research
                    reports. Learn how to analyze like a pro and present your insights with clarity and conviction —
                    skills essential for ERC, internships, and careers in investment.
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex-1 flex items-center gap-3">
                        <div>
                          <p className="font-bold text-white text-base md:text-lg">Ratih Mustikoningsih</p>
                          <p className="text-white/90 text-sm">Financial Expert at Ajaib Sekuritas Asia</p>
                        </div>
                        <Image
                          src={Ajaib || "/placeholder.svg"}
                          alt="Ajaib Logo"
                          width={110}
                          height={80}
                          className="h-10 object-cover rounded-[200px]"
                        />
                      </div>
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 border border-white/20">
                          <span className="text-white font-semibold text-sm whitespace-nowrap">
                            Day 2 - Aug 24th 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-8 md:py-12" data-aos="zoom-in">
          <div className="bg-gradient-to-br from-[#E7E0EE] to-[#9A8FA5] rounded-2xl border border-white/20 p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-black font-bold text-2xl md:text-3xl mb-6">Workshop Pricing</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-black">
                <thead>
                  <tr className="border-b-2 border-black/20">
                    <th className="text-center font-bold text-lg md:text-xl py-3 px-2">Plan</th>
                    <th className="text-center font-bold text-lg md:text-xl py-3 px-2">1 Person</th>
                    <th className="text-center font-bold text-lg md:text-xl py-3 px-2">2 People</th>
                    <th className="text-center font-bold text-lg md:text-xl py-3 px-2">3 People</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/10">
                    <td className="font-semibold text-base md:text-lg py-4 px-2">1 Day</td>
                    <td className="text-center font-bold text-base md:text-lg py-4 px-2">15K</td>
                    <td className="text-center font-bold text-base md:text-lg py-4 px-2">25K</td>
                    <td className="text-center font-bold text-base md:text-lg py-4 px-2">40K</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-base md:text-lg py-4 px-2">2 Days</td>
                    <td className="text-center font-bold text-base md:text-lg py-4 px-2">25K</td>
                    <td className="text-center font-bold text-base md:text-lg py-4 px-2">35K</td>
                    <td className="text-center font-bold text-base md:text-lg py-4 px-2">50K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Link
          className="mx-auto w-fit text-sm md:text-base bg-gradient-to-r mb-16 from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-6 py-2 sm:py-3 flex items-center gap-3"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          href="https://bit.ly/PreEventINFEST2025"
        >
          Register before 21 Aug!
          <ArrowRight className="text-[#2F016D] w-4 md:w-5" />
        </Link>

        <p
          className="mb-5 md:mb-10 text-center pb-4 bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl mt-28"
          data-aos="zoom-in-up"
        >
          Countdown
        </p>
        <div className="max-w-[600px] w-[90%] mx-auto" data-aos="fade-up">
          <CountdownSection countdownEndDate={countdownEnd}/>
        </div>

        <div className="text-center mt-24 md:mt-32 lg:mt-40 space-y-4">
          <h1
            className="bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            data-aos="fade-down"
          >
            Main Event
          </h1>
          <p
            className="font-medium italic text-white text-sm sm:text-base md:text-lg"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Coming Soon
          </p>
        </div>

        <div className="mt-24 md:mt-32 lg:mt-40">
          <h1
            className="pb-10 text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            data-aos="zoom-in"
          >
            Last Year's{" "}
            <span className="bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text">
              Highlights
            </span>
          </h1>
          <EventCarousel cards={lastYearHighlights} buttons={false} />
        </div>
      </div>
    </div>
  )
}

export default page
