import CrmFurutre from "@/components/CrmFurutre";
import CtaSection from "@/components/CtaSection";
import Hero from "@/components/Hero";
import Tokengate from "@/components/Tokengate";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start ">
      <Hero />
      <CrmFurutre />
      <Tokengate />
      <CtaSection />
    </div>
  );
}
