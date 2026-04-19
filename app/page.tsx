import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Advantages from "../components/Advantages";
import Masterplan from "../components/Masterplan";
import Infrastructure from "../components/Infrastructure";
import Architecture from "../components/Architecture";
import Location from "../components/Location";
import Lifestyle from "../components/Lifestyle";
import PurchaseMethods from "../components/PurchaseMethods";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#1f1f1a]">
      <Hero />
      <Intro />
      <Advantages />
      <Masterplan />
      <Infrastructure />
      <Architecture />
      <Location />
      <Lifestyle />
      <PurchaseMethods />
      <Footer />
    </main>
  );
}