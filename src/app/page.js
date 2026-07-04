import ClientsSection from "./components/clientSection";
import Hero from "./components/hero";
import LuxuryLeadSection from "./components/bnn";
import AIIntegratedSection from "./components/faq";
import LuxuryContactSection from "./components/contactSection";
import LuxuryCardsSection from "./components/threeBox";
import Header from "./components/header";
import HeaderWhite from "./components/headerWhite";

export default function Home() {
  return (
    <>
      {/* <VisionSection /> */}
      <main suppressHydrationWarning={true}>
        <HeaderWhite />
        <Hero />
        <ClientsSection />
        <LuxuryLeadSection />
        <LuxuryCardsSection />
        <AIIntegratedSection />
        <LuxuryContactSection />
      </main>
    </>
  );
}
