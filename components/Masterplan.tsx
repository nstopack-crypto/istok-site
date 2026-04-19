"use client";

import Image from "next/image";
import { useState } from "react";

const houses = [
  { name: "К5", top: "43%", left: "9%" },
  { name: "К5", top: "36%", left: "22%" },
  { name: "К5", top: "29%", left: "40%" },
  { name: "К5", top: "39%", left: "31%" },
  { name: "К5", top: "38%", left: "49%" },
  { name: "К5", top: "18%", left: "50%" },
  { name: "К4", top: "24%", left: "61%" },
  { name: "К3", top: "31%", left: "72%" },
  { name: "К2", top: "39%", left: "80%" },
  { name: "К1", top: "44%", left: "90%" },
  { name: "К5", top: "49%", left: "61%" },
  { name: "К5", top: "61%", left: "45%" },
  { name: "К5", top: "68%", left: "32%" },
  { name: "К5", top: "64%", left: "73%" },
  { name: "К5", top: "73%", left: "82%" },
  { name: "К5", top: "72%", left: "22%" },
  { name: "К5", top: "86%", left: "12%" },
];

const amenities = [
  { icon: "🍽", top: "21%", left: "57%" },
  { icon: "🛒", top: "32%", left: "67%" },
  { icon: "🛒", top: "39%", left: "76%" },
  { icon: "☕", top: "31%", left: "53%" },
  { icon: "☕", top: "46%", left: "69%" },
  { icon: "☕", top: "47%", left: "59%" },
  { icon: "☕", top: "74%", left: "43%" },
  { icon: "🚶", top: "73%", left: "63%" },
  { icon: "🚶", top: "32%", left: "14%" },
  { icon: "🖥", top: "70%", left: "73%" },
  { icon: "🛏", top: "47%", left: "24%" },
  { icon: "👥", top: "39%", left: "35%" },
];

export default function Masterplan() {
  const [activeTab, setActiveTab] = useState<"all" | "houses" | "amenities">(
    "all",
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f3ee]">
      <div className="relative h-[620px] w-full md:h-[730px]">
        <div className="absolute inset-0">
          <Image
            src="/images/masterplan-bg.jpg"
            alt="Генплан"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </div>

        <div className="absolute inset-0 bg-[rgba(0,0,0,0.18)]" />

        <div className="absolute left-[20px] top-[20px] z-20 flex flex-wrap gap-[6px]">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`flex h-[39px] items-center gap-2 px-5 text-[14px] font-medium uppercase tracking-[-0.02em] ${
              activeTab === "all"
                ? "bg-white text-[#1f1f1a]"
                : "bg-[rgba(255,255,255,0.18)] text-white backdrop-blur-[12px]"
            }`}
          >
            <span>★</span>
            <span>Все объекты</span>
            <span className="opacity-60">11</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("houses")}
            className={`flex h-[39px] items-center gap-2 px-5 text-[14px] font-medium uppercase tracking-[-0.02em] ${
              activeTab === "houses"
                ? "bg-white text-[#1f1f1a]"
                : "bg-[rgba(255,255,255,0.18)] text-white backdrop-blur-[12px]"
            }`}
          >
            <span>★</span>
            <span>Дома</span>
            <span className="opacity-60">3</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("amenities")}
            className={`flex h-[39px] items-center gap-2 px-5 text-[14px] font-medium uppercase tracking-[-0.02em] ${
              activeTab === "amenities"
                ? "bg-white text-[#1f1f1a]"
                : "bg-[rgba(255,255,255,0.18)] text-white backdrop-blur-[12px]"
            }`}
          >
            <span>★</span>
            <span>Amenities</span>
            <span className="opacity-60">8</span>
          </button>
        </div>

        {(activeTab === "all" || activeTab === "houses") &&
          houses.map((house, index) => (
            <button
              key={`${house.name}-${index}`}
              type="button"
              className="absolute z-10 flex h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[14px] font-medium text-[#1f1f1a] shadow-[0_2px_12px_rgba(0,0,0,0.18)] transition hover:scale-105"
              style={{ top: house.top, left: house.left }}
            >
              {house.name}
            </button>
          ))}

        {(activeTab === "all" || activeTab === "amenities") &&
          amenities.map((item, index) => (
            <div
              key={index}
              className="absolute z-10 flex h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(55,55,55,0.7)] text-[18px] text-white backdrop-blur-[8px] shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
              style={{ top: item.top, left: item.left }}
            >
              <span className="text-[18px] leading-none">{item.icon}</span>
            </div>
          ))}
      </div>
    </section>
  );
}