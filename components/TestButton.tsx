import ButtonDemoShowcase, {
  GetStartedButton,
  DaftarButton,
  SeeMoreButton,
  DaftarSekarangArrowButton,
  DaftarSekarangButton,
  EquityResearchButton,
  BusinessCaseButton,
  KembaliButton,
} from "@/components/Button";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#2a145d]">
      // Untuk demo semua button (hapus di produksi):
      <ButtonDemoShowcase />
      <GetStartedButton />
      <DaftarButton />
      <SeeMoreButton />
      <DaftarSekarangArrowButton />
      <DaftarSekarangButton />
      <EquityResearchButton />
      <BusinessCaseButton />
      <KembaliButton />
        </div>
  );
}
