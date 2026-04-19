"use client";

import Image from "next/image";
import { useState } from "react";

type TabType = "all" | "houses" | "amenities";

type House = {
  name: string;
  top: string;
  left: string;
  title: string;
  subtitle: string;
  flats: {
    type: string;
    count: number;
    price: string;
  }[];
};

type Amenity = {
  icon: "cafe" | "shop" | "walk" | "work" | "kids" | "sport";
  top: string;
  left: string;
};

const houses: House[] = [
  {
    name: "К5",
    top: "43%",
    left: "9%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 2, price: "от 9,3 млн ₽" },
      { type: "2к", count: 2, price: "от 9,3 млн ₽" },
      { type: "3к", count: 2, price: "от 9,3 млн ₽" },
      { type: "4к", count: 2, price: "от 9,3 млн ₽" },
    ],
  },
  {
    name: "К5",
    top: "36%",
    left: "22%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 2, price: "от 9,3 млн ₽" },
      { type: "2к", count: 3, price: "от 10,1 млн ₽" },
      { type: "3к", count: 2, price: "от 12,7 млн ₽" },
      { type: "4к", count: 1, price: "от 16,2 млн ₽" },
    ],
  },
  {
    name: "К5",
    top: "29%",
    left: "40%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 4, price: "от 8,9 млн ₽" },
      { type: "2к", count: 3, price: "от 10,3 млн ₽" },
      { type: "3к", count: 2, price: "от 12,4 млн ₽" },
      { type: "4к", count: 1, price: "от 16,8 млн ₽" },
    ],
  },
  {
    name: "К5",
    top: "39%",
    left: "31%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 2, price: "от 9,1 млн ₽" },
      { type: "2к", count: 4, price: "от 10,2 млн ₽" },
      { type: "3к", count: 2, price: "от 12,1 млн ₽" },
      { type: "4к", count: 1, price: "от 15,9 млн ₽" },
    ],
  },
  {
    name: "К5",
    top: "38%",
    left: "49%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 3, price: "от 9,2 млн ₽" },
      { type: "2к", count: 3, price: "от 10,5 млн ₽" },
      { type: "3к", count: 2, price: "от 13,0 млн ₽" },
      { type: "4к", count: 1, price: "от 17,1 млн ₽" },
    ],
  },
  {
    name: "К5",
    top: "18%",
    left: "50%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 2, price: "от 9,4 млн ₽" },
      { type: "2к", count: 2, price: "от 10,8 млн ₽" },
      { type: "3к", count: 2, price: "от 13,4 млн ₽" },
      { type: "4к", count: 1, price: "от 17,3 млн ₽" },
    ],
  },
  {
    name: "К4",
    top: "24%",
    left: "61%",
    title: "Корпус 4",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 3, price: "от 9,7 млн ₽" },
      { type: "2к", count: 4, price: "от 10,9 млн ₽" },
      { type: "3к", count: 3, price: "от 13,9 млн ₽" },
      { type: "4к", count: 2, price: "от 18,2 млн ₽" },
    ],
  },
  {
    name: "К3",
    top: "31%",
    left: "72%",
    title: "Корпус 3",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 2, price: "от 9,8 млн ₽" },
      { type: "2к", count: 2, price: "от 11,2 млн ₽" },
      { type: "3к", count: 3, price: "от 14,1 млн ₽" },
      { type: "4к", count: 1, price: "от 18,6 млн ₽" },
    ],
  },
  {
    name: "К2",
    top: "39%",
    left: "80%",
    title: "Корпус 2",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 2, price: "от 9,3 млн ₽" },
      { type: "2к", count: 2, price: "от 10,7 млн ₽" },
      { type: "3к", count: 2, price: "от 13,6 млн ₽" },
      { type: "4к", count: 2, price: "от 18,4 млн ₽" },
    ],
  },
  {
    name: "К1",
    top: "44%",
    left: "90%",
    title: "Корпус 1",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 2, price: "от 9,3 млн ₽" },
      { type: "2к", count: 2, price: "от 9,3 млн ₽" },
      { type: "3к", count: 2, price: "от 9,3 млн ₽" },
      { type: "4к", count: 2, price: "от 9,3 млн ₽" },
    ],
  },
  {
    name: "К5",
    top: "49%",
    left: "61%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 3, price: "от 9,0 млн ₽" },
      { type: "2к", count: 3, price: "от 10,4 млн ₽" },
      { type: "3к", count: 2, price: "от 13,2 млн ₽" },
      { type: "4к", count: 1, price: "от 17,6 млн ₽" },
    ],
  },
  {
    name: "К5",
    top: "61%",
    left: "45%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 4, price: "от 8,8 млн ₽" },
      { type: "2к", count: 4, price: "от 10,1 млн ₽" },
      { type: "3к", count: 2, price: "от 12,8 млн ₽" },
      { type: "4к", count: 1, price: "от 16,9 млн ₽" },
    ],
  },
  {
    name: "К5",
    top: "68%",
    left: "32%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 2, price: "от 9,1 млн ₽" },
      { type: "2к", count: 3, price: "от 10,4 млн ₽" },
      { type: "3к", count: 3, price: "от 13,1 млн ₽" },
      { type: "4к", count: 1, price: "от 17,0 млн ₽" },
    ],
  },
  {
    name: "К5",
    top: "64%",
    left: "73%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 3, price: "от 9,5 млн ₽" },
      { type: "2к", count: 2, price: "от 10,9 млн ₽" },
      { type: "3к", count: 2, price: "от 13,7 млн ₽" },
      { type: "4к", count: 1, price: "от 18,1 млн ₽" },
    ],
  },
  {
    name: "К5",
    top: "73%",
    left: "82%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 2, price: "от 9,6 млн ₽" },
      { type: "2к", count: 2, price: "от 10,8 млн ₽" },
      { type: "3к", count: 2, price: "от 13,9 млн ₽" },
      { type: "4к", count: 2, price: "от 18,7 млн ₽" },
    ],
  },
  {
    name: "К5",
    top: "72%",
    left: "22%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 3, price: "от 8,9 млн ₽" },
      { type: "2к", count: 3, price: "от 10,2 млн ₽" },
      { type: "3к", count: 2, price: "от 12,9 млн ₽" },
      { type: "4к", count: 1, price: "от 16,8 млн ₽" },
    ],
  },
  {
    name: "К5",
    top: "86%",
    left: "12%",
    title: "Корпус 5",
    subtitle: "Корпус",
    flats: [
      { type: "1к", count: 2, price: "от 9,0 млн ₽" },
      { type: "2к", count: 2, price: "от 10,0 млн ₽" },
      { type: "3к", count: 2, price: "от 12,7 млн ₽" },
      { type: "4к", count: 1, price: "от 16,6 млн ₽" },
    ],
  },
];

const amenities: Amenity[] = [
  { icon: "walk", top: "32%", left: "14%" },
  { icon: "kids", top: "39%", left: "35%" },
  { icon: "work", top: "47%", left: "24%" },
  { icon: "cafe", top: "21%", left: "57%" },
  { icon: "shop", top: "32%", left: "67%" },
  { icon: "shop", top: "39%", left: "76%" },
  { icon: "cafe", top: "31%", left: "53%" },
  { icon: "cafe", top: "46%", left: "69%" },
  { icon: "cafe", top: "47%", left: "59%" },
  { icon: "walk", top: "73%", left: "63%" },
  { icon: "sport", top: "74%", left: "43%" },
  { icon: "work", top: "70%", left: "73%" },
];

function AmenityIcon({ type }: { type: Amenity["icon"] }) {
  switch (type) {
    case "cafe":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 7h8v3.5A3.5 3.5 0 0 1 7.5 14h-1A3.5 3.5 0 0 1 3 10.5V7Z" stroke="white" strokeWidth="1.5"/>
          <path d="M11 8h1.5A2.5 2.5 0 0 1 12.5 13H11" stroke="white" strokeWidth="1.5"/>
        </svg>
      );
    case "shop":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 6h12l-1 7H4L3 6Z" stroke="white" strokeWidth="1.5"/>
          <path d="M6 6V4h6v2" stroke="white" strokeWidth="1.5"/>
        </svg>
      );
    case "walk":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="4" r="2" fill="white"/>
          <path d="M7.5 14L9 10l2.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 7l2-1 1.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case "work":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="3" y="4" width="12" height="8" rx="1" stroke="white" strokeWidth="1.5"/>
          <path d="M7 14h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case "kids":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="6" cy="7" r="2" fill="white"/>
          <circle cx="12" cy="7" r="2" fill="white"/>
          <path d="M3.5 13c.8-1.7 2-2.5 3.5-2.5S9.7 11.3 10.5 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7.5 13c.8-1.7 2-2.5 3.5-2.5s2.7.8 3.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case "sport":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M6 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" stroke="white" strokeWidth="1.5"/>
          <path d="M8.2 8.3 14 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M4.2 10.5 3 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
  }
}

export default function Masterplan() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [hoveredHouse, setHoveredHouse] = useState<House | null>(houses[9]);

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

        <div className="absolute inset-0 bg-[rgba(0,0,0,0.22)]" />

        <div className="absolute left-[20px] top-[20px] z-20 flex flex-wrap gap-[6px]">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`flex h-[39px] items-center gap-2 px-5 text-[14px] font-medium uppercase tracking-[-0.02em] transition ${
              activeTab === "all"
                ? "bg-white text-[#1f1f1a]"
                : "bg-[rgba(255,255,255,0.18)] text-white backdrop-blur-[12px] hover:bg-[rgba(255,255,255,0.25)]"
            }`}
          >
            <span>★</span>
            <span>Все объекты</span>
            <span className="opacity-60">11</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("houses")}
            className={`flex h-[39px] items-center gap-2 px-5 text-[14px] font-medium uppercase tracking-[-0.02em] transition ${
              activeTab === "houses"
                ? "bg-white text-[#1f1f1a]"
                : "bg-[rgba(255,255,255,0.18)] text-white backdrop-blur-[12px] hover:bg-[rgba(255,255,255,0.25)]"
            }`}
          >
            <span>★</span>
            <span>Дома</span>
            <span className="opacity-60">3</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("amenities")}
            className={`flex h-[39px] items-center gap-2 px-5 text-[14px] font-medium uppercase tracking-[-0.02em] transition ${
              activeTab === "amenities"
                ? "bg-white text-[#1f1f1a]"
                : "bg-[rgba(255,255,255,0.18)] text-white backdrop-blur-[12px] hover:bg-[rgba(255,255,255,0.25)]"
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
              onMouseEnter={() => setHoveredHouse(house)}
              className="absolute z-10 flex h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[13px] font-medium text-[#1f1f1a] shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-all duration-200 hover:scale-[1.08] hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] active:scale-[0.95]"
              style={{ top: house.top, left: house.left }}
            >
              {house.name}
            </button>
          ))}

        {(activeTab === "all" || activeTab === "amenities") &&
          amenities.map((item, index) => (
            <div
              key={index}
              className="absolute z-10 flex h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[rgba(40,40,40,0.55)] text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] backdrop-blur-[12px] transition-all duration-200 hover:scale-[1.08] hover:bg-[rgba(40,40,40,0.75)]"
              style={{ top: item.top, left: item.left }}
            >
              <AmenityIcon type={item.icon} />
            </div>
          ))}

        {hoveredHouse && (
          <div className="absolute right-[20px] top-[84px] z-30 h-[620px] w-[940px] overflow-hidden bg-[rgba(223,223,223,0.22)] backdrop-blur-[26px]">
            <div className="flex h-full flex-col p-[42px]">
              <div className="space-y-[26px]">
                {hoveredHouse.flats.map((flat) => (
                  <div key={flat.type} className="flex items-start gap-[26px]">
                    <div className="flex h-[100px] w-[100px] items-center justify-center border border-white text-[30px] font-medium text-white">
                      {flat.type}
                    </div>

                    <div className="pt-[8px]">
                      <p className="text-[42px] font-medium leading-[1.02] tracking-[-0.03em] text-white">
                        {flat.count} квартиры
                      </p>
                      <p className="text-[42px] font-medium leading-[1.02] tracking-[-0.03em] text-white">
                        {flat.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-end justify-between">
                <div>
                  <p className="mb-4 text-[28px] font-medium text-white">
                    {hoveredHouse.title}
                  </p>
                  <h3 className="text-[88px] font-medium leading-[0.95] tracking-[-0.05em] text-white">
                    {hoveredHouse.subtitle} {hoveredHouse.name.replace("К", "")}
                  </h3>
                </div>

                <button
                  type="button"
                  className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white text-[34px] text-[#1f1f1a] transition hover:scale-105"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}