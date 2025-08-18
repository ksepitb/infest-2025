import Image from "next/image";
import Element from "@/public/element.svg";
import EventCarousel from "./Carousel";
import { eventCards } from "@/data/event";
import Bubble from "@/public/bubble1.svg";
import Bubble2 from "@/public/bubble2.svg";
const MainInfo = () => {
  return (
    <section id="main-section">
      <div className="relative h-full w-full isolate overflow-hidden">
        <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
        <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#280068] to-[#5002BD]"></div>
        <Image
          src={Bubble}
          alt="Icon"
          className="absolute top-[15%] -left-[5%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] -translate-x-[20%] -z-10"
          data-aos="fade-right"
        />
        <Image
          src={Bubble2}
          alt="Icon"
          className="absolute top-[40%] sm:top-[30%] md:top-[15%] right-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] translate-x-[40%] -z-10"
          data-aos="fade-left"
        />
        {/* <p className="text-xs xs:text-sm md:text-base text-white text-center">
          Sponsored by
        </p>
        <div className="flex gap-10 justify-center mt-4 md:mt-8">
          <h1 className="font-black md:text-3xl text-white">SPONSOR</h1>
          <h1 className="font-black md:text-3xl text-white">SPONSOR</h1>
          <h1 className="font-black md:text-3xl text-white">SPONSOR</h1>
        </div> */}
        <Image
          src={Element}
          alt="Element"
          className="absolute top-1/3 left-1/2 z-[-5] h-auto w-[170%] md:w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-40"
        />
        <div className="p-10 md:p-16 lg:p-20 lg:px-32">
          <h1
            className="text-white font-bold text-3xl md:text-5xl lg:text-6xl mt-20"
            data-aos="fade-up"
          >
            What is{" "}
            <span className="bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text">
              INFEST?
            </span>
          </h1>
          <div className="grid lg:grid-cols-2 mt-5 gap-7">
            <p
              className="text-xs md:text-sm lg:text-base flex items-center text-white/90 leading-relaxed text-shadow-lg/20 p-6 relative bg-gradient-to-bl from-[#996ACD] to-[#491C7C] rounded-2xl border border-white/20"
              data-aos="fade-right"
            >
              <span>
                {" "}
                <span className="font-[800] text-[#FFEED2]">INFEST atau Investment Festival </span>{" "}
                adalah acara tahunan yang diselenggarakan oleh{" "}
                <span className="font-[800] text-[#FFEED2]">KSEP ITB</span>{" "}
                dengan tujuan memberikan edukasi mengenai investasi dan pasar
                modal kepada mahasiswa dan masyarakat sekitar. Dimeriahkan
                dengan lomba equity research competition{" "}
                <span className="font-[800] text-[#FFEED2]">(ERC)</span>,
                business case competition{" "}
                <span className="font-[800] text-[#FFEED2]">(BCC)</span>, dan{" "}
                <span className="font-[800] text-[#FFEED2]">
                  talkshow/seminar
                </span>{" "}
                yang menjadi acara utama.
              </span>
            </p>

            <p
              className="text-xs md:text-sm lg:text-base flex items-center text-white/90 leading-relaxed text-shadow-lg/20 p-6 relative bg-gradient-to-bl from-[#C18EFC] to-[#782DCD] rounded-2xl border border-white/20"
              data-aos="fade-left"
            >
              <span>
                {" "}
                  INFEST 2025 mengangkat grand theme 
                <span className="font-[800] text-[#FFEED2]"> “Navigating the Future: Smart Investment in the Times of Changes”. </span>
                  
                  Melalui tema ini, INFEST 2025 mengajak peserta untuk
                   mengeksplorasi strategi investasi yang tepat di tengah ketidakpastian, 
                   serta membentuk pola pikir yang resilien dan proaktif dalam menghadapi 
                   perubahan. Mulai dari pemanfaatan teknologi seperti Artificial Intelligence 
                   dalam pengambilan keputusan investasi, hingga cara berpikir yang tepat saat 
                   menghadapi krisis ekonomi dan dinamika pasar modal di masa sulit.
              </span>
            </p>
          </div>

          <h1
            className="mb-8 mt-16 md:mt-24 lg:mt-30 text-3xl md:text-5xl lg:text-6xl w-fit font-bold text-white mx-auto bg-gradient-to-b from-purple-900/70 to-fuchsia-800/70 rounded-full shadow-[inset_0px_10px_18.799999237060547px_0px_rgba(166,143,194,1.00)] px-4 py-2 sm:py-3 md:px-6 items-center"
            data-aos="zoom-in"
          >
            Our{" "}
            <span className="bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text">
              Events
            </span>
          </h1>
          <EventCarousel cards={eventCards} buttons={true}/>
        </div>
      </div>
    </section>
  );
};

export default MainInfo;
