import Link from "next/link";
import Image from "next/image";
import Dot from "@/public/dotted.svg";
const page = () => {
  return (
    <main className="pb-16 w-full h-full relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#7E2D64] to-[#B12A97]"></div>
      <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
      <Image
        src={Dot}
        alt="Icon"
        className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[450px] md:h-[450px] translate-x-[40%] -translate-y-[20%] -z-10 scale-x-[-1] scale-y-[-1]"
      />
      <Image
        src={Dot}
        alt="Icon"
        className="absolute bottom-0 left-0 w-[500x] h-[500px] md:w-[450px] md:h-[450px] -translate-x-[30%] translate-y-[30%] -z-10  "
      />
      <div className="p-10 md:p-16 lg:p-20 lg:px-32">
        <h1 className="pb-4 text-center bg-gradient-to-b from-white via-[#FFAFDF] to-white text-transparent bg-clip-text font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-20" data-aos="fade-up">
          Ketentuan Umum BCC
        </h1>
        <div className="text-xs md:text-sm lg:text-base flex flex-col space-y-2 text-white/90 leading-relaxed text-shadow-lg/20 p-6 relative bg-gradient-to-bl from-[#BA46AB] to-[#4C174F] rounded-2xl border border-white/20" data-aos="zoom-out">
          <p>
            1. Tim (kelompok) beranggotakan 2-3 orang mahasiswa aktif program
            Diploma/S1 di Indonesia. Setiap anggota tim dapat berasal dari
            universitas yang sama maupun berbeda.
          </p>
          <p>
            2. Setiap anggota tim harus memiliki Kartu Tanda Mahasiswa (KTM)
            yang akan dikumpulkan melalui form registrasi.
          </p>
          <p>
            3. Setiap peserta tidak diperbolehkan berada pada lebih dari 1 tim pada 
            BCC INFEST 2025.
          </p>
          <p>
            4. Anggota dalam tim tidak boleh digantikan oleh siapa pun dengan
            alasan apa pun.
          </p>
          <p>5. 1 tim hanya boleh mengirimkan 1 karya pada BCC INFEST 2025.</p>
          <p>
            6. Peserta wajib melengkapi semua dokumen yang dibutuhkan untuk
            registrasi.
          </p>
          <p>
            7. Peserta wajib melakukan registrasi dan membayar biaya pendaftaran
            sesuai mekanisme pendaftaran.
          </p>
          <p>
            8. Peserta wajib mengikuti akun Instagram @infest.bdg untuk mendapatkan 
            informasi mengenai perlombaan.
          </p>
          <p>
            9. Peserta wajib mem-posting twibbon yang disediakan oleh panitia
            sebagai syarat registrasi.
          </p>
          <p>
            10. Peserta wajib membagikan poster lomba pada story akun instagram
            masing-masing dan men-tag @infest.bdg sebagai syarat registrasi.
          </p>
          <p>
            11. Peserta wajib menandai 3 teman pada kolom komentar di postingan
            poster yang ada di akun Instagram @infest.bdg.
          </p>
          <p>
            12. Peserta tidak diperbolehkan menuliskan nama institusi asal
            peserta pada karya yang dibuat.
          </p>
          <p>
            13. Peserta tidak diperbolehkan untuk menyebarkan case perusahaan 
            kepada pihak eksternal yang tidak mengikuti perlombaan Business 
            Case Competition ini.
          </p>
          <p>
            14. Karya yang dikirimkan oleh peserta merupakan karya orisinal yang
            belum pernah dipublikasikan di media atau platform manapun.
          </p>
          <p>
            15. Seluruh peserta berhak mengikuti pre-event yang telah difasilitasi
            oleh panitia.
          </p>
          <p>
            16. Peserta wajib mengikuti ketentuan panitia dan keputusan panitia
            tidak dapat diganggu gugat.
          </p>
        </div>
        <div className="flex justify-between mt-5">
          <Link
            href="/daftar"
            className="hover:scale-105 duration-300 transition-all text-xs sm:text-sm md:text-base text-center bg-gradient-to-r from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-3 sm:px-6 py-2 sm:py-3"
          >
            Kembali
          </Link>
          <Link
            href="https://bit.ly/BCCGuidebookINFEST25"
            className="hover:scale-105 duration-300 transition-all text-xs sm:text-sm md:text-base text-center bg-gradient-to-r from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-3 sm:px-6 py-2 sm:py-3"
          >
            Guidebook
          </Link>
          <Link
            href="https://bit.ly/RegistBCCINFEST2025"
            className="hover:scale-105 duration-300 transition-all text-xs sm:text-sm md:text-base text-center bg-gradient-to-r from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-3 sm:px-6 py-2 sm:py-3"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
