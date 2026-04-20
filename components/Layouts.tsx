"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type LayoutTab = "1k" | "2k" | "3k" | "4k" | "5k" | "6k";

type LayoutCard = {
  id: string;
  tab: LayoutTab;
  title: string;
  price: string;
  image: string;
  building: string;
  completion: string;
};

const tabs: LayoutTab[] = ["1k", "2k", "3k", "4k", "5k", "6k"];

const cards: LayoutCard[] = [
  {
    id: "1",
    tab: "2k",
    title: "3 комнаты, 84 м²",
    price: "23 462 300 ₽",
    image: "/images/layout-1.png",
    building: "1 корпус, 2/4 этаж, №122",
    completion: "Сдача 2 квартал 2028",
  },
  {
    id: "2",
    tab: "2k",
    title: "3 комнаты, 84 м²",
    price: "23 462 300 ₽",
    image: "/images/layout-2.png",
    building: "1 корпус, 2/4 этаж, №122",
    completion: "Сдача 2 квартал 2028",
  },
  {
    id: "3",
    tab: "2k",
    title: "3 комнаты, 84 м²",
    price: "23 462 300 ₽",
    image: "/images/layout-3.png",
    building: "1 корпус, 2/4 этаж, №122",
    completion: "Сдача 2 квартал 2028",
  },
  {
    id: "4",
    tab: "3k",
    title: "4 комнаты, 102 м²",
    price: "28 940 000 ₽",
    image: "/images/layout-4.png",
    building: "2 корпус, 3/4 этаж, №208",
    completion: "Сдача 2 квартал 2028",
  },
  {
    id: "5",
    tab: "1k",
    title: "2 комнаты, 61 м²",
    price: "17 980 000 ₽",
    image: "/images/layout-5.png",
    building: "1 корпус, 1/4 этаж, №041",
    completion: "Сдача 2 квартал 2028",
  },
  {
    id: "6",
    tab: "4k",
    title: "5 комнат, 126 м²",
    price: "34 120 000 ₽",
    image: "/images/layout-6.png",
    building: "3 корпус, 4/4 этаж, №311",
    completion: "Сдача 2 квартал 2028",
  },
];

function ArrowLeftNav() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M17 11H5"
        stroke="#1F1F1A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 6L5 11L10 16"
        stroke="#1F1F1A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightNav() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M5 11H17"
        stroke="#1F1F1A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 6L17 11L12 16"
        stroke="#1F1F1A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path
        d="M13 21.2 5.8 14.5a4.8 4.8 0 0 1 6.7-6.9L13 8l.5-.4a4.8 4.8 0 0 1 6.7 6.9L13 21.2Z"
        stroke="#1F1F1A"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AmenityIcons() {
  const iconClass = "h-[18px] w-[18px] text-[#9B9B9B]";

  return (
    <div className="flex items-center gap-[10px] text-[#9B9B9B]">
      <svg className={iconClass} viewBox="0 0 18 18" fill="none">
        <path d="M4 10c1.2 0 2-1 2-2.2C6 6 5.2 5 4 5s-2 1-2 2.8c0 1.2.8 2.2 2 2.2Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7.5 12c-.5-1.2-1.5-1.8-3-1.8S2 10.8 1.5 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10 4.5h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10 8h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>

      <svg className={iconClass} viewBox="0 0 18 18" fill="none">
        <path d="M5 3v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M7 3v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M6 9v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 3c1.2 1.2 1.2 4.8 0 6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>

      <svg className={iconClass} viewBox="0 0 18 18" fill="none">
        <path d="M3 5h12v8H3V5Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 13v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 13v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>

      <svg className={iconClass} viewBox="0 0 18 18" fill="none">
        <path d="M4 4h10v8H4V4Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 14h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function Layouts() {
  const [activeTab, setActiveTab] = useState<LayoutTab>("2k");
  const [slideIndex, setSlideIndex] = useState(0);

  const filteredCards = useMemo(() => {
    return cards.filter((card) => card.tab === activeTab);
  }, [activeTab]);

  const cardsPerView = 3;
  const maxSlideIndex = Math.max(0, filteredCards.length - cardsPerView);

  const visibleCards = useMemo(() => {
    return filteredCards.slice(slideIndex, slideIndex + cardsPerView);
  }, [filteredCards, slideIndex]);

  const currentFrom = String(slideIndex + 1).padStart(2, "0");
  const currentTo = String(
    Math.min(slideIndex + cardsPerView, filteredCards.length || cardsPerView),
  ).padStart(2, "0");

  const handleTabChange = (tab: LayoutTab) => {
    setActiveTab(tab);
    setSlideIndex(0);
  };

  return (
    <section className="bg-white pt-[20px]">
      <div className="w-full px-[20px]">
        <div className="max-w-[420px]">
          <p className="text-[18px] font-medium leading-[1.15] tracking-[-0.02em] text-[#1F1F1A]">
            В проекте представлено более 70 планировочных решений,
            рассчитанных на разные сценарии жизни.
          </p>
        </div>

        <div className="mt-[170px]">
          <div className="mb-[34px] flex flex-wrap items-center gap-[34px] border-b border-[#E3DED6] pb-[14px]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`relative text-[18px] font-medium leading-none tracking-[-0.02em] transition ${
                    isActive ? "text-[#9FA46F]" : "text-[#1F1F1A]"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute left-0 top-[32px] h-[2px] w-full bg-[#D7DDB7]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">
            {visibleCards.map((card) => (
              <article
                key={card.id}
                className="group border border-[#E3DED6] bg-white p-[18px] transition-all duration-300 hover:border-[#D8D2C7] hover:shadow-[0_12px_36px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-[24px] flex items-start justify-between gap-[16px]">
                  <div>
                    <h3 className="text-[18px] font-medium leading-[1.1] tracking-[-0.02em] text-[#1F1F1A]">
                      {card.title}
                    </h3>
                    <p className="mt-[12px] text-[26px] font-medium leading-[1] tracking-[-0.04em] text-[#1F1F1A]">
                      {card.price}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="transition-transform duration-300 group-hover:scale-105"
                    aria-label="Добавить в избранное"
                  >
                    <HeartIcon />
                  </button>
                </div>

                <div className="relative mb-[20px] h-[255px] w-full overflow-hidden bg-white">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="border-t border-[#E3DED6] pt-[12px]">
                  <AmenityIcons />

                  <p className="mt-[18px] text-[16px] leading-[1.15] tracking-[-0.02em] text-[#9B9B9B]">
                    {card.building}
                  </p>

                  <p className="mt-[8px] text-[16px] font-medium leading-[1.15] tracking-[-0.02em] text-[#1F1F1A]">
                    {card.completion}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-[28px] flex items-center justify-between">
            <p className="text-[18px] leading-none text-[#8A8A8A]">
              {currentFrom} — {currentTo}
            </p>

            <div className="flex items-center gap-[20px]">
              <button
                type="button"
                onClick={() => setSlideIndex((prev) => Math.max(0, prev - 1))}
                className="transition hover:opacity-60 disabled:opacity-30"
                aria-label="Назад"
                disabled={slideIndex === 0}
              >
                <ArrowLeftNav />
              </button>

              <button
                type="button"
                onClick={() =>
                  setSlideIndex((prev) => Math.min(maxSlideIndex, prev + 1))
                }
                className="transition hover:opacity-60 disabled:opacity-30"
                aria-label="Вперёд"
                disabled={slideIndex === maxSlideIndex}
              >
                <ArrowRightNav />
              </button>
            </div>
          </div>
        </div>

        <div className="h-[340px]" />
      </div>
    </section>
  );
}