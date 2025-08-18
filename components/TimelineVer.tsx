import { TimelineEvent, TimelineProps } from "@/types";
import React from "react";


const timelineData: TimelineEvent[] = [
  { id: 1, title: "BCC Registration", date: "5-13 Juli 2025" },
  { id: 2, title: "ERC Registration", date: "14-22 Juli 2025" },
  { id: 3, title: "Workshop Day 1", date: "28 Juli 2025" },
  { id: 4, title: "Workshop Day 2", date: "4 Agustus 2025" },
  { id: 5, title: "Technical Meeting", date: "11 Agustus 2025" },
  { id: 6, title: "Grand Final", date: "18 Agustus 2025" },
  { id: 7, title: "Seminar Puncak", date: "25 Agustus 2025" },
];

const TimelineVer: React.FC<TimelineProps> = ({timelineData}) => {
  return (
    <div className="w-full" data-aos="fade-up" data-aos-duration="3000">
      {/* Container utama untuk timeline */}
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Garis vertikal di tengah */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/30 -translate-x-1/2"></div>

        {/* Kontainer untuk semua item acara */}
        <div className="space-y-16">
          {timelineData.map((event, index) => (
            <div key={event.id} className="relative w-full">
              {/* Titik di garis waktu */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full shadow-lg shadow-white/50"></div>

              {/* Kontainer untuk kartu, menggunakan flexbox untuk memposisikan */}
              <div
                className={`w-1/2 flex
                  ${
                    index % 2 === 0
                      ? "justify-end pr-8 md:pr-12"
                      : "ml-auto pl-8 md:pl-12"
                  }`}
              >
                {/* Kartu acara */}
                <div
                  className={`w-fit max-w-xs text-center flex flex-col justify-center p-3 md:px-7 md:py-4 bg-gradient-to-r from-zinc-300/80 to-violet-300/80 rounded-2xl shadow-[0px_4px_22.1px_0px_rgba(255,255,255,0.5)]
                      ${
                        index % 2 === 0
                          ? "text-right items-end"
                          : "text-left items-start"
                      }`}
                >
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#31026F]">
                    {event.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#31026F]">
                    {event.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineVer;
