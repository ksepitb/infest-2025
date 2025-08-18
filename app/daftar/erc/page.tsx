import CompetitionForm from "@/components/CompetitionForm";

const page = () => {
  return (
    <main className="py-32 relative flex flex-col items-center justify-center h-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-[-30] h-full min-h-screen w-full bg-gradient-to-b from-[#360677] to-[#4E02B7]"></div>
      <div className="absolute inset-0 z-[-10] h-full min-h-screen w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
      <CompetitionForm competitionType="ERC" />
    </main>
  );
};

export default page;
