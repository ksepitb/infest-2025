import FAQSection from "./FAQSection";
import Timeline from "./Timeline";
import { FAQItemData } from "@/types";
import Image from "next/image";
import Dot from "@/public/dotted.svg";
import Dot2 from "@/public/dotted2.svg";

const faqData: FAQItemData[] = [
  {
    value: "faq-1",
    question: "Kapan INFEST 2025 diselenggarakan?",
    answer:
      "Rangkaian INFEST 2025 akan berlangsung dari Juli hingga Oktober dengan Main Event pada 4 Oktober 2025 (akan diumumkan secara resmi melalui media sosial INFEST). Terdiri dari tahap pendaftaran, babak penyisihan, hingga final dan Gala Dinner.",
  },
  {
    value: "faq-2",
    question: "Kenapa sih harus ikut INFEST 2025?",
    answer: "Karena INFEST bukan cuma lomba—ini adalah ajang eksplorasi wawasan, uji kemampuan, dan bangun koneksi dengan mahasiswa berprestasi dari seluruh Indonesia! Kamu bisa belajar langsung dari kasus bisnis nyata dan dunia investasi aktual. Plus, ini portofolio keren buat karier dan CV-mu nanti!",
  },
  {
    value: "faq-3",
    question: "Apa saja benefit mengikuti kompetisi INFEST 2025?",
    answer: `- Sertifikat peserta & finalis nasional
  - Hadiah jutaan rupiah untuk pemenang
  -  Insight langsung dari praktisi industri, juri profesional, dan alumni kompetisi ternama
  - Networking dengan peserta dari seluruh Indonesia
  - Portofolio kompetitif untuk karier dan beasiswa`,
  },
  {
    value: "faq-4",
    question: "Apa saja kegiatan utama dalam INFEST 2025?",
    answer: `Tahun ini, Main Event berupa seminar akan dilaksanakan tanggal 4 Oktober 2025, INFEST 2025 juga menghadirkan dua kompetisi utama berskala nasional:
    - Business Case Competition (BCC): Ajang analisis kasus bisnis yang menantang kemampuan problem-solving, critical thinking, dan strategi bisnis peserta.
    - Equity Research Competition: Kompetisi penyusunan laporan riset saham yang menekankan analisis fundamental dan rekomendasi investasi berdasarkan data riil pasar modal.`
  },
  {
    value: "faq-5",
    question: "Apakah lomba INFEST 2025 diselenggarakan secara online atau offline?",
    answer:
    "Beberapa tahap lomba diselenggarakan secara online (seperti penyisihan), sementara tahap final dan awarding direncanakan berlangsung secara offline di Institut Teknologi Bandung."
}, {
    value: "faq-6",
    question: "Siapa saja speaker di INFEST 2025?",
    answer:
    "Nantikan pembicara-pembicara inspiratif dari berbagai latar belakang—mulai dari praktisi industri, profesional pasar modal, konsultan bisnis, hingga alumni berprestasi! Daftar lengkap speaker akan diumumkan secara bertahap di media sosial @infest.bdg. Stay tuned karena kamu gak mau ketinggalan yang satu ini!"
}];

const TimelineSec = () => {
  return (
    <section>
      <div className="relative h-fit w-full isolate overflow-hidden">
        <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
        <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#5002BD] to-[#5E0584]"></div>
        <Image
          src={Dot}
          alt="Icon"
          className="absolute top-[10%] left-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] -translate-x-[20%] z-0"
        />
        <Image
          src={Dot}
          alt="Icon"
          className="absolute bottom-[-10%] left-0 w-[700px] h-[700px] md:w-[550px] md:h-[550px] -translate-x-[10%] z-0"
        />
        <Image
          src={Dot2}
          alt="Icon"
          className="absolute top-[30%] right-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] translate-x-[40%] z-0"
        />
        <div className="p-10 md:p-16 lg:p-20 lg:px-32">
          <h1
            className="text-right bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl md:text-5xl lg:text-6xl mt-20"
            data-aos="fade-up-left"
          >
            Timeline
          </h1>
          <Timeline />
          <FAQSection faqData={faqData} />
        </div>
      </div>
    </section>
  );
};

export default TimelineSec;
