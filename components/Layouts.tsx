"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["1к", "2к", "3к", "4к", "5к", "6к"];

const cards = [
  {
    title: "3 комнаты, 84 м²",
    price: "23 462 300 ₽",
    image: "/images/layout-card-1.jpg",
    meta: "1 корпус, 2/4 этаж, №122",
    date: "Сдача 2 квартал 2028",
  },
  {
    title: "3 комнаты, 84 м²",
    price: "23 462 300 ₽",
    image: "/images/layout-card-2.jpg",
    meta: "1 корпус, 2/4 этаж, №122",
    date: "Сдача 2 квартал 2028",
  },
  {
    title: "3 комнаты, 84 м²",
    price: "23 462 300 ₽",
    image: "/images/layout-card-3.jpg",
    meta: "1 корпус, 2/4 этаж, №122",
    date: "Сдача 2 квартал 2028",
  },
];

export default function Layouts() {
  const [activeTab, setActiveTab] = useState("2к");

  return (
    <section className="bg-[#f5f3ee] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-[20px]">
        <div className="mb-[170px] max-w-[520px]">
          <p className="text-[20px] font-medium leading-[1.25] tracking-[-0.02em] text-[#1e1e1e] md:text-[24px]">
            В проекте представлено более 70 планировочных решений,
            рассчитанных на разные сценарии жизни.
          </p>
        </div>

        <div className="mb-8 w-full max-w-[507px] border-b border-[#d9d9d9]">
          <div className="flex items-end gap-[48px]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className="relative pb-3 text-[18px] font-medium tracking-[-0.02em] text-[#1e1e1e]"
                >
                  <span className={isActive ? "text-[#9ea17d]" : "text-[#1e1e1e]"}>
                    {tab}
                  </span>

                  {isActive && (
                    <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#c7c9a2]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={index}
              className="border border-[#dddddd] bg-[#f7f6f3]"
            >
              <div className="p-[18px]">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-[18px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1e1e1e]">
                    {card.title}
                  </h3>

                  <button
                    type="button"
                    aria-label="Добавить в избранное"
                    className="text-[26px] leading-none text-[#1e1e1e]"
                  >
                    ♡
                  </button>
                </div>

                <div className="mb-8 text-[24px] font-medium leading-none tracking-[-0.03em] text-[#1e1e1e] md:text-[28px]">
                  {card.price}
                </div>

                <div className="relative mb-8 aspect-[1.22/1] bg-white">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-8"
                  />
                </div>

                <div className="mb-3 flex items-center gap-4 text-[18px] text-[#9a9a9a]">
                  <span>♨</span>
                  <span>♟</span>
                  <span>♨</span>
                  <span>▭</span>
                </div>

                <div className="border-t border-[#d9d9d9] pt-3">
                  <p className="mb-2 text-[16px] leading-[1.4] text-[#8e8e8e]">
                    {card.meta}
                  </p>
                  <p className="text-[16px] font-medium leading-[1.4] text-[#1e1e1e]">
                    {card.date}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-[18px] text-[#8e8e8e]">03 — 04</p>

          <div className="flex items-center gap-6 text-[28px] text-[#1e1e1e]">
            <button type="button" aria-label="Назад">
              ←
            </button>
            <button type="button" aria-label="Вперёд">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}