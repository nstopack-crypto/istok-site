"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type LifestyleCard = {
  title: string;
  countLabel: string;
  image: string;
  cardHeight?: number;
};

const cards: LifestyleCard[] = [
  {
    title: "Квартиры с антресолями",
    countLabel: "8 предложений",
    image: "/images/lifestyle-1.jpg",
    cardHeight: 373,
  },
  {
    title: "Комфортные студии",
    countLabel: "8 предложений",
    image: "/images/lifestyle-2.jpg",
    cardHeight: 500,
  },
  {
    title: "Мастер-спальни",
    countLabel: "8 фото",
    image: "/images/lifestyle-3.jpg",
    cardHeight: 373,
  },
  {
    title: "Семейные квартиры",
    countLabel: "8 предложений",
    image: "/images/lifestyle-4.jpg",
    cardHeight: 373,
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

function ArrowRightSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M4 9H14"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10 5L14 9L10 13"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Lifestyle() {
  const [slideIndex, setSlideIndex] = useState(0);

  const cardsPerView = 3;
  const maxSlideIndex = Math.max(0, cards.length - cardsPerView);

  const visibleCards = useMemo(() => {
    return cards.slice(slideIndex, slideIndex + cardsPerView);
  }, [slideIndex]);

  const currentFrom = String(slideIndex + 1).padStart(2, "0");
  const currentTo = String(
    Math.min(slideIndex + cardsPerView, cards.length),
  ).padStart(2, "0");

  const showPrevCards = () => {
    setSlideIndex((prev) => Math.max(0, prev - 1));
  };

  const showNextCards = () => {
    setSlideIndex((prev) => Math.min(maxSlideIndex, prev + 1));
  };

  return (
    <section className="bg-white pt-[20px]">
      <div className="w-full px-[20px]">
        <div className="grid grid-cols-1 gap-x-[40px] md:grid-cols-[1fr_596px]">
          <div>
            <h2 className="max-w-[980px] text-[56px] font-medium leading-[0.9] tracking-[-0.06em] text-[#1f1f1a] md:text-[88px]">
              Пространства для жизни
            </h2>
          </div>

          <div className="pt-[42px]">
            <p className="max-w-[596px] text-[18px] font-medium leading-[1.15] tracking-[-0.02em] text-[#1f1f1a]">
              В проекте представлено более 70 планировочных решений,
              рассчитанных на разные сценарии жизни.
            </p>

            <a
              href="#"
              className="mt-[36px] inline-block text-[16px] font-medium uppercase tracking-[-0.01em] text-[#1f1f1a] underline decoration-[#cfd3b3] underline-offset-[6px]"
            >
              Выбрать квартиру
            </a>
          </div>
        </div>

        <div className="mb-[24px] mt-[170px] flex items-center justify-between">
          <p className="text-[18px] leading-none text-[#8A8A8A]">
            {currentFrom} — {currentTo}
          </p>

          <div className="flex items-center gap-[20px]">
            <button
              type="button"
              onClick={showPrevCards}
              className="transition hover:opacity-60 disabled:opacity-30"
              aria-label="Назад"
              disabled={slideIndex === 0}
            >
              <ArrowLeftNav />
            </button>
            <button
              type="button"
              onClick={showNextCards}
              className="transition hover:opacity-60 disabled:opacity-30"
              aria-label="Вперёд"
              disabled={slideIndex === maxSlideIndex}
            >
              <ArrowRightNav />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-x-[20px] gap-y-[32px] md:grid-cols-[1fr_1fr_1fr]">
          {visibleCards.map((card) => (
            <article key={card.title}>
              <button
                type="button"
                className="group block w-full text-left"
              >
                <div
                  className="relative mb-[14px] w-full overflow-hidden bg-[#f2efe9]"
                  style={{ height: card.cardHeight ?? 373 }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex items-start justify-between gap-[16px]">
                  <div>
                    <h3 className="text-[18px] font-medium leading-[1.18] tracking-[-0.02em] text-[#1f1f1a]">
                      {card.title}
                    </h3>
                    <p className="mt-[2px] text-[18px] leading-[1.18] text-[#8A8A8A]">
                      {card.countLabel}
                    </p>
                  </div>

                  <span className="mt-[2px] flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#1f1f1a] transition group-hover:scale-105">
                    <ArrowRightSmall />
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>

        <div className="h-[180px]" />
      </div>
    </section>
  );
}