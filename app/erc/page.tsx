import { ArrowRight } from "lucide-react";
import TimelineVer from "@/components/TimelineVer";
import Countdown from "@/components/Countdown";
import { FAQItemData, PrizepoolData, PrizeItem, TimelineEvent } from "@/types";
import FAQSection from "@/components/FAQSection";
import Ornamen from "@/public/ornament2.svg";
import Image from "next/image";
import LongOrnamen from "@/public/ornament3.svg";
import CountdownSection from "@/components/LaunchCountdown";
import BoxComponent from "@/components/Box";
import Prizepool from "@/components/Prizepool";
import Link from "next/link";

const faqData: FAQItemData[] = [
  {
    value: "faq-1",
    question:
      "Apakah peserta dapat mengikuti Equity Research Competition dan Business Case Competition sekaligus?",
    answer: "Ya, peserta diperbolehkan mengikuti 2 lomba sekaligus.",
  },
  {
    value: "faq-2",
    question:
      "Apakah tim dapat memilih salah satu dari 3 pilihan emiten yang disediakan secara bebas?",
    answer: "Ya, tim dapat memilih salah satu emiten secara bebas.",
  },
  {
    value: "faq-3",
    question: "Apakah dari pihak penyelenggara menyediakan biaya transport?",
    answer:
      "Biaya transportasi sepenuhnya ditanggung oleh peserta. Pihak penyelenggara tidak menyediakan biaya akomodasi untuk peserta di lokasi final karena hadiah yang ditawarkan sudah sesuai.",
  },
  {
    value: "faq-4",
    question: "Apakah seluruh peserta akan mendapatkan sertifikat?",
    answer:
      "Ya, semua peserta akan mendapatkannya. Sertifikat akan dikirimkan melalui e-mail ketua kelompok.",
  },
  {
    value: "faq-5",
    question: "Di mana lokasi pelaksanaan kedua lomba?",
    answer:
      "Equity Research Competition dan Business Case Competition akan dilaksanakan secara online untuk babak penyisihan (dan babak kualifikasi untuk Business Case Competition). Babak final akan dilakukan secara onsite di Institut Teknologi Bandung.",
  },
  {
    value: "faq-6",
    question: "Berapa kelompok yang akan maju ke sesi final?",
    answer: "Setelah melalui sesi preliminary, akan ada 5 kelompok yang maju ke sesi final.",
  },
  {
    value: "faq-7",
    question: "Sejak kapan tim dapat mulai mengerjakan paper?",
    answer:
      "Untuk Equity Research Competition, peserta dapat langsung mengerjakan setelah melakukan pembayaran. Sedangkan, untuk Business Case Competition, peserta baru dapat mengerjakan setelah case didistribusikan pada 25 Agustus 2025.",
  },
];

const prizepoolerc: PrizepoolData[] = [
  {
    position: "Juara 1",
    prize: "Rp4.500.000,00 + e-certificate",
  },
  {
    position: "Juara 2",
    prize: "Rp2.500.000,00 + e-certificate",
  },
  {
    position: "Juara 3",
    prize: "Rp1.500.000,00 + e-certificate",
  },
];

// Mapping gradient per juara
const gradientClasses = [
  "bg-gradient-to-b from-amber-400/70 to-yellow-400/70",
  "bg-gradient-to-b from-zinc-400/70 to-gray-200/70",
  "bg-gradient-to-b from-[#C0A67B]/70 to-[#FFEED2]/70",
];
const timelineDataERC: TimelineEvent[] = [
  { id: 1, title: "Early Bird Registration", date: "20-25 Juli 2025" },
  { id: 2, title: "Normal Registration", date: "26 Juli - 1 Agustus 2025" },
  { id: 3, title: "Technical Meeting", date: "7 Agustus 2025" },
  { id: 4, title: "Pengerjaan Paper", date: "9-31 Agustus 2025" },
  { id: 5, title: "Pre-Event", date: "23 Agustus 2025" },
  { id: 6, title: "Paper Submission", date: "31 Agustus 2025" },
  { id: 7, title: "Pengumuman Finalis", date: "15 September 2025" },
  { id: 8, title: "Pengerjaan Final Deck", date: "15-29 September 2025" },
  { id: 9, title: "Mentoring (tentatif)", date: "19-24 September 2025" },
  { id: 10, title: "Pengumpulan Final Deck", date: "29 September 2025" },
  { id: 11, title: "Technical Meeting Finalis", date: "30 September 2025" },
  { id: 12, title: "Presentasi Finalis & Pengumuman Juara", date: "4 Oktober 2025" },
  { id: 13, title: "Company Visit", date: "TBA" },
]

const countdownEnd = new Date("2025-07-20T00:00:00");

const page = () => {
  return (
    <main className="relative h-full min-h-screen w-full isolate overflow-hidden">
      <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#3B007D] to-[#280068]"></div>
      <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
      <Image
        src={Ornamen}
        alt="Icon"
        className="opacity-60 absolute -z-10 w-1/2 lg:w-1/3 max-w-md h-auto top-[10%] right-0 -translate-y-1/2 translate-x-[30%]"
        data-aos="fade-left"
      />
      <Image
        src={Ornamen}
        alt="Icon"
        className="opacity-60 absolute -z-10 w-1/2 lg:w-1/3 max-w-md h-auto top-[30%] left-0 -translate-y-1/2 -translate-x-[30%] scale-x-[-1]"
        data-aos="fade-left"
      />
      <Image
        src={LongOrnamen}
        alt="Icon"
        className="opacity-40 absolute -z-10 h-auto top-3/5 left-1/2 -translate-y-1/2 -translate-x-1/2 w-screen max-w-none"
        // data-aos="fade-left"
      />
      <div className="p-10 md:p-16 lg:p-20 lg:px-32 flex flex-col items-center">
        <h1
          className="text-center pb-4 bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl md:text-5xl lg:text-6xl mt-20"
          data-aos="zoom-in-up"
        >
          Equity Research Competition
        </h1>
        <p
          className="text-xs md:text-sm lg:text-base text-white text-center text-shadow-lg/20"
          data-aos="zoom-in-up"
        >
          Equity Research Competition merupakan kompetisi yang akan menguji
          kemampuan peserta dalam melakukan{" "}
          <span className="font-[800] text-[#FFEED2]">
            analisis terhadap saham di pasar keuangan dan keterampilan investasi{" "}
          </span>
          melalui penelitian terhadap peluang investasi.
        </p>

        <Link
          className="mt-10 md:mt-16 mx-auto w-fit text-sm md:text-base bg-gradient-to-r from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-6 py-2 sm:py-3 flex items-center gap-3"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom" href="/daftar"
        >
          Daftar Sekarang
          <ArrowRight className="text-[#2F016D] w-4 md:w-5" />
        </Link>

        <p
          className="text-center pb-4 bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl mt-20 md:mt-28"
          data-aos="zoom-out"
        >
          Deskripsi
        </p>
        <BoxComponent 
          description="Equity Research Competition merupakan kompetisi yang akan menguji
          kemampuan peserta dalam melakukan analisis terhadap saham di pasar
          keuangan dan keterampilan investasi melalui penelitian terhadap
          peluang investasi. Para peserta akan diberikan waktu untuk
          menganalisis emiten dari perusahaan TBK yang telah ditentukan oleh
          panitia dan menyajikan hasil analisisnya ke dalam satu paper yang akan
          dikumpulkan dan dinilai oleh juri. Selanjutnya, 5 tim dengan poin
          tertinggi akan lanjut ke babak final untuk melakukan presentasi secara
          offline di depan para juri."
          StyleInput="w-full mx-auto lg:w-[80%] xl:w-[60%] text-xs md:text-sm lg:text-base flex items-center text-white/90 leading-relaxed text-shadow-lg/20 p-6 relative bg-gradient-to-bl from-[#C18EFC] to-[#782DCD] rounded-2xl border border-white/20"
        />
        <div className="text-white mt-24" data-aos="zoom-out">
          <p className="text-center pb-4 bg-gradient-to-b from-white via-[#FFEED2] to-white text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl">
            {" "}
            Prize Pool{" "}
          </p>
          {prizepoolerc.map((item, index) => (
            <Prizepool
              key={index}
              data={item}
              gradientClass={gradientClasses[index]}
            />
          ))}
        </div>
        <p
          className="mb-10 text-center pb-4 bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl mt-24"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Timeline
        </p>

        <TimelineVer timelineData={timelineDataERC}/>

        <p
          className="mb-5 md:mb-10 text-center pb-4 bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl mt-28"
          data-aos="zoom-in-up"
        >
          Countdown
        </p>
        <div data-aos="fade-up">
          <CountdownSection countdownEndDate={countdownEnd}/>
        </div>
        <FAQSection faqData={faqData} />
      </div>
    </main>
  );
};

export default page;
