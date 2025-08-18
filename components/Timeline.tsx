"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  position: "top" | "bottom";
}

const timelineData: TimelineEvent[] = [
  { id: 1, title: "ERC Registration", date: "20 Juli - 1 Agustus 2025", position: "top" },
  {
    id: 2,
    title: "BCC Registration",
    date: "2-15 Agustus 2025",
    position: "bottom",
  },
  { id: 3, title: "Pengerjaan Paper ERC", date: "9 - 31 Agustus 2025", position: "top" },
  {
    id: 4,
    title: "Preliminary Round BCC",
    date: "25 Agustus - 3 September 2025",
    position: "bottom",
  },
  {
    id: 5,
    title: "Pre-Event",
    date: "23 Agustus 2025",
    position: "top",
  },
  { id: 6, title: "Pengumuman Finalis ERC", date: "15 September 2025", position: "bottom" },
  { id: 7, title: "Pengumuman Finalis BCC", date: "18 September 2025", position: "top" },
  { id: 8, title: "Main Event INFEST 2025", date: "4 Oktober 2025", position: "bottom" },
  { id: 9, title: "Presentasi ERC & BCC", date: "4 Oktober 2025", position: "top" },
];

const Timeline: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const handleScroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full" data-aos="fade-up" data-aos-duration="3000">
      <div className="relative mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-8 md:gap-16 px-8 py-12 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`.timeline-scroll::-webkit-scrollbar { display: none; }`}</style>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/30 -translate-y-1/2"></div>

          {timelineData.map((event, index) => (
            <div key={event.id} className="relative flex-shrink-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg shadow-white"></div>
              <div
                className={`text-center items-center flex flex-col justify-center w-32 h-fit md:w-48 md:h-24 p-4 bg-gradient-to-r from-zinc-300 to-violet-300 rounded-2xl shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)]
                  ${event.position === "top" ? "mb-32" : "mt-32"}`}
              >
                <h3 className="text-sm md:text-base font-bold text-[#31026F]">
                  {event.title}
                </h3>
                <p className="text-xs md:text-sm text-[#31026F]">
                  {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => handleScroll(-300)}
          className="absolute top-1/2 left-0 -translate-y-1/2 z-20 text-white p-2 bg-[#240046]/50 rounded-full hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={() => handleScroll(300)}
          className="absolute top-1/2 right-0 -translate-y-1/2 z-20 text-white p-2 bg-[#240046]/50 rounded-full hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Timeline;
