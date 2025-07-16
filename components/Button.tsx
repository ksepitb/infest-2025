import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export function GetStartedButton({ onClick }: ButtonProps) {
  return (
    <button
      className="px-9 py-3 rounded-full bg-gradient-to-r from-[#e3e3ee] to-[#a084e8] text-[#2a145d] text-xl md:text-2xl font-semibold shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-4"
      style={{ boxShadow: "0 0 40px 0 #6c2bd7" }}
      onClick={onClick}
    >
      Get Started
      <span className="ml-2 text-2xl md:text-3xl">&#8594;</span>
    </button>
  );
}

export function DaftarButton({ onClick }: ButtonProps) {
  return (
    <button
      className="px-9 py-3 rounded-full bg-gradient-to-r from-[#e3e3ee] to-[#a084e8] text-[#2a145d] text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-200"
      style={{ boxShadow: "0 0 16px 0 #6c2bd7" }}
      onClick={onClick}
    >
      Daftar
    </button>
  );
}

export function SeeMoreButton({ onClick }: ButtonProps) {
  return (
    <button
      className="px-9 py-3 rounded-full bg-gradient-to-r from-[#e3e3ee] to-[#a084e8] text-[#2a145d] text-base font-semibold shadow-lg hover:scale-105 transition-all duration-200"
      style={{ boxShadow: "0 0 18px 0 #6c2bd7" }}
      onClick={onClick}
    >
      See More
    </button>
  );
}

export function DaftarSekarangArrowButton({ onClick }: ButtonProps) {
  return (
    <button
      className="px-9 py-3 rounded-full bg-gradient-to-r from-[#e3e3ee] to-[#a084e8] text-[#2a145d] text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-3"
      style={{ boxShadow: "0 0 24px 0 #6c2bd7" }}
      onClick={onClick}
    >
      Daftar Sekarang
      <span className="ml-2 text-xl">&#8594;</span>
    </button>
  );
}

export function DaftarSekarangButton({ onClick }: ButtonProps) {
  return (
    <button
      className="px-9 py-3 rounded-full bg-gradient-to-r from-[#e3e3ee] to-[#a084e8] text-[#2a145d] text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-200"
      style={{ boxShadow: "0 0 24px 0 #6c2bd7" }}
      onClick={onClick}
    >
      Daftar Sekarang
    </button>
  );
}

export function EquityResearchButton({ onClick }: ButtonProps) {
  return (
    <button
      className="px-9 py-3 rounded-full bg-gradient-to-r from-[#e3e3ee] to-[#a084e8] text-[#2a145d] text-base md:text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-200"
      style={{ boxShadow: "0 0 28px 0 #8375d5" }}
      onClick={onClick}
    >
      Equity Research Competition
    </button>
  );
}

export function BusinessCaseButton({ onClick }: ButtonProps) {
  return (
    <button
      className="px-9 py-3 rounded-full bg-gradient-to-r from-[#e3e3ee] to-[#a084e8] text-[#2a145d] text-base md:text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-200"
      style={{ boxShadow: "0 0 28px 0 #8375d5" }}
      onClick={onClick}
    >
      Business Case Competition
    </button>
  );
}

export function KembaliButton({ onClick }: ButtonProps) {
  return (
    <button
      className="px-9 py-3 rounded-full bg-gradient-to-r from-[#e3e3ee] to-[#a084e8] text-[#2a145d] text-base font-semibold shadow-lg hover:scale-105 transition-all duration-200"
      style={{ boxShadow: "0 0 16px 0 #6c2bd7" }}
      onClick={onClick}
    >
      Kembali
    </button>
  );
}

export default function ButtonDemoShowcase() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-10 items-center justify-center bg-gradient-to-b from-[#220052] to-[#951882] py-12">
      <div className="flex gap-4 flex-wrap justify-center">
        <GetStartedButton />
        <DaftarButton />
        <SeeMoreButton />
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        <DaftarSekarangArrowButton />
        <DaftarSekarangButton />
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        <EquityResearchButton />
        <BusinessCaseButton />
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        <KembaliButton />
      </div>
    </div>
  );
}
