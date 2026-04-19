"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type TabType =
  | "all"
  | "sport"
  | "business"
  | "restaurants"
  | "education"
  | "airport";

type PlaceType = Exclude<TabType, "all">;

type Place = {
  type: PlaceType;
  top: string;
  left: string;
  image?: string;
};

const places: Place[] = [
  { type: "restaurants", top: "9%", left: "34%", image: "/images/map-restaurant-1.jpg" },
  { type: "restaurants", top: "16%", left: "38%", image: "/images/map-restaurant-2.jpg" },

  { type: "education", top: "23%", left: "32%" },
  { type: "education", top: "33%", left: "45%" },

  { type: "sport", top: "40%", left: "13%" },
  { type: "sport", top: "49%", left: "28%" },
  { type: "sport", top: "63%", left: "65%" },
  { type: "sport", top: "77%", left: "81%" },

  { type: "business", top: "34%", left: "31%" },
  { type: "business", top: "45%", left: "62%" },
  { type: "business", top: "63%", left: "95%" },
  { type: "business", top: "77%", left: "90%" },
  { type: "business", top: "83%", left: "27%" },
  { type: "business", top: "51%", left: "2%" },

  { type: "restaurants", top: "57%", left: "76%" },
  { type: "restaurants", top: "86%", left: "60%", image: "/images/map-restaurant-3.jpg" },

  { type: "airport", top: "39%", left: "54%" },

  { type: "sport", top: "71%", left: "8%" },
  { type: "sport", top: "92%", left: "18%" },
  { type: "sport", top: "60%", left: "35%" },

  { type: "education", top: "32%", left: "46%" },
  { type: "education", top: "58%", left: "33%" },
];

const tabs: { key: TabType; label: string; count: number }[] = [
  { key: "all", label: "Все объекты", count: 11 },
  { key: "sport", label: "Спорт", count: 3 },
  { key: "business", label: "Бизнес", count: 8 },
  { key: "restaurants", label: "Рестораны", count: 8 },
  { key: "education", label: "Образование", count: 8 },
  { key: "airport", label: "Аэропорт", count: 8 },
];

function StarIcon() {
  return <span className="text-[16px] leading-none">★</span>;
}

function SportIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M5.5 4.5L13.5 12.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 14l-3 1 1-3 7.5-7.5 2 2L7 14Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 6h12v7H3V6Z" stroke="white" strokeWidth="1.5" />
      <path d="M6 6V4h6v2" stroke="white" strokeWidth="1.5" />
      <path d="M3 9h12" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

function RestaurantIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M5 3v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 3v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 9v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 3c1.2 1.2 1.2 4.8 0 6v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2.5 7 9 4l6.5 3L9 10 2.5 7Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 8.5V12l4 2 4-2V8.5" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function AirportIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2v14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 8.5 9 10l5-1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 14l3-1 3 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ZoomPlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 4v10" stroke="#1F1F1A" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 9h10" stroke="#1F1F1A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ZoomMinusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M4 9h10" stroke="#1F1F1A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function getPlaceIcon(type: PlaceType) {
  switch (type) {
    case "sport":
      return <SportIcon />;
    case "business":
      return <BusinessIcon />;
    case "restaurants":
      return <RestaurantIcon />;
    case "education":
      return <EducationIcon />;
    case "airport":
      return <AirportIcon />;
  }
}

export default function MapSection() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [zoomLevel, setZoomLevel] = useState(1);

  const visiblePlaces = useMemo(() => {
    if (activeTab === "all") return places;
    return places.filter((place) => place.type === activeTab);
  }, [activeTab]);

  const zoomScale = Math.min(1.2, Math.max(1, zoomLevel));

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f3]">
      <div className="relative h-[720px] w-full overflow-hidden">
        <div
          className="absolute inset-0 origin-center transition-transform duration-500 ease-out"
          style={{ transform: `scale(${zoomScale})` }}
        >
          <Image
            src="/images/map-bg-v2.jpg"
            alt="Карта района"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </div>

        <div className="absolute inset-0 bg-[rgba(255,255,255,0.24)]" />

        <div className="absolute left-[20px] top-[20px] z-20 flex flex-wrap gap-[6px]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex h-[39px] items-center gap-3 px-5 text-[14px] font-medium uppercase tracking-[-0.02em] transition ${
                  isActive
                    ? "bg-[#1f1f1a] text-white"
                    : "bg-[rgba(255,255,255,0.55)] text-[#1f1f1a] backdrop-blur-[8px] hover:bg-[rgba(255,255,255,0.75)]"
                }`}
              >
                <StarIcon />
                <span>{tab.label}</span>
                <span className={isActive ? "opacity-70" : "opacity-45"}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {visiblePlaces.map((place, index) => {
          const hasPhoto = Boolean(place.image);

          return (
            <div
              key={`${place.type}-${index}`}
              className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 ${
                hasPhoto ? "h-[46px] w-[46px]" : "h-[42px] w-[42px]"
              }`}
              style={{ top: place.top, left: place.left }}
            >
              {hasPhoto ? (
                <div className="h-full w-full overflow-hidden rounded-full border border-white/70 shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
                  <Image
                    src={place.image!}
                    alt=""
                    fill
                    sizes="46px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-full border border-white/15 bg-[rgba(120,120,120,0.55)] text-white backdrop-blur-[10px] shadow-[0_8px_30px_rgba(0,0,0,0.16)]">
                  {getPlaceIcon(place.type)}
                </div>
              )}
            </div>
          );
        })}

        <div className="absolute left-[56%] top-[62%] z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center bg-[#3d3a36] px-[18px] py-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
            <div className="relative h-[28px] w-[150px]">
              <Image
                src="/images/logo-istok-map.svg"
                alt="Исток"
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>

            <div className="absolute -bottom-[12px] left-[28px] h-0 w-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#3d3a36]" />
          </div>
        </div>

        <div className="absolute right-[20px] top-[322px] z-20 flex flex-col gap-[6px]">
          <button
            type="button"
            onClick={() => setZoomLevel((prev) => Math.min(1.2, prev + 0.05))}
            className="flex h-[46px] w-[46px] items-center justify-center bg-[rgba(255,255,255,0.58)] backdrop-blur-[8px] transition hover:bg-[rgba(255,255,255,0.78)]"
            aria-label="Увеличить"
          >
            <ZoomPlusIcon />
          </button>

          <button
            type="button"
            onClick={() => setZoomLevel((prev) => Math.max(1, prev - 0.05))}
            className="flex h-[46px] w-[46px] items-center justify-center bg-[rgba(255,255,255,0.58)] backdrop-blur-[8px] transition hover:bg-[rgba(255,255,255,0.78)]"
            aria-label="Уменьшить"
          >
            <ZoomMinusIcon />
          </button>
        </div>
      </div>
    </section>
  );
}