"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Advantages from "../components/Advantages";
import Masterplan from "../components/Masterplan";
import Infrastructure from "../components/Infrastructure";
import Architecture from "../components/Architecture";
import Location from "../components/Location";
import MapSection from "../components/MapSection";
import DesignerApproved from "../components/DesignerApproved";
import Layouts from "../components/Layouts";
import Landscaping from "../components/Landscaping";
import Lifestyle from "../components/Lifestyle";
import PurchaseMethods from "../components/PurchaseMethods";
import ConstructionProgress from "../components/ConstructionProgress";
import News from "../components/News";
import SalesOffice from "../components/SalesOffice";
import Footer from "../components/Footer";
import LeadModal from "../components/LeadModal";

export default function HomePage() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);

  return (
    <main id="top" className="min-h-screen bg-[#f5f3ee] text-[#1f1f1a]">
      <Hero />
      <Intro />
      <Advantages />
      <Masterplan />
      <Infrastructure />
      <Architecture />
      <Location />
      <MapSection />
      <DesignerApproved />
      <Layouts />
      <Landscaping />
      <Lifestyle />
      <PurchaseMethods onOpenLead={() => setIsLeadOpen(true)} />
      <ConstructionProgress />
      <News />
      <SalesOffice />
      <Footer />

      <button
        type="button"
        onClick={() => setIsLeadOpen(true)}
        className="fixed bottom-5 right-5 z-50 h-[52px] bg-[#1f1f1a] px-5 text-[12px] font-semibold uppercase text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition hover:opacity-90"
      >
        Оставить заявку
      </button>

      <LeadModal
        isOpen={isLeadOpen}
        onClose={() => setIsLeadOpen(false)}
      />
    </main>
  );
}