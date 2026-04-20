"use client";

import Image from "next/image";
import { useState } from "react";

type NewsItem = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

const newsItems: NewsItem[] = [
  {
    title: "Комфортная среда — норма, а не опция",
    excerpt:
      "В Калининграде прошёл круглый стол, посвящённый роли частных и общественных пространств в формировании городской среды.",
    date: "24.05.2024",
    image: "/images/news-1.jpg",
  },
  {
    title: "Как меняется рынок загородной недвижимости",
    excerpt:
      "Покупатели всё чаще выбирают сценарий жизни за городом, где важны приватность, природа и продуманная инфраструктура.",
    date: "18.05.2024",
    image: "/images/news-2.jpg",
  },
  {
    title: "Планировочные решения для разных сценариев жизни",
    excerpt:
      "Разбираем, как современные форматы квартир помогают адаптировать пространство под семью, работу и личный ритм.",
    date: "12.05.2024",
    image: "/images/news-3.jpg",
  },
];

function ArrowIcon() {
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

export default function News() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeNews = activeIndex !== null ? newsItems[activeIndex] : null;

  return (
    <section className="bg-white pt-[20px]">
      <div className="w-full px-[20px]">
        <h2 className="max-w-[1320px] text-[56px] font-medium leading-[0.9] tracking-[-0.06em] text-[#1f1f1a] md:text-[88px]">
          Новости и полезные статьи
        </h2>

        <div
          className="mt-[170px] grid grid-cols-1 gap-x-[150px] md:grid-cols-[374px_1fr]"
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div>
            <div className="relative h-[374px] w-full overflow-hidden bg-transparent">
              {activeNews && (
                <div className="absolute inset-0 animate-[fadeIn_.45s_ease-out]">
                  <Image
                    src={activeNews.image}
                    alt={activeNews.title}
                    fill
                    sizes="374px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            {newsItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group border-t border-[#dfdbd4] py-[22px] text-left transition"
                >
                  <div className="grid grid-cols-1 items-start gap-x-[36px] md:grid-cols-[1.15fr_0.95fr_34px]">
                    <div>
                      <h3
                        className={`text-[28px] font-medium leading-[1.06] tracking-[-0.03em] transition-colors duration-300 ${
                          isActive ? "text-[#1f1f1a]" : "text-[#9b9b9b]"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <div>
                      <p
                        className={`max-w-[430px] text-[18px] leading-[1.32] tracking-[-0.02em] transition-colors duration-300 ${
                          isActive ? "text-[#1f1f1a]" : "text-[#9b9b9b]"
                        }`}
                      >
                        {item.excerpt}
                      </p>

                      <p
                        className={`mt-[44px] text-[18px] leading-none transition-colors duration-300 ${
                          isActive ? "text-[#8A8A8A]" : "text-[#d0d0d0]"
                        }`}
                      >
                        {item.date}
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <span
                        className={`mt-[2px] flex h-[26px] w-[26px] items-center justify-center rounded-full transition-all duration-300 ${
                          isActive ? "bg-[#DADFC5]" : "bg-[#1f1f1a]"
                        }`}
                      >
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}

            <a
              href="#"
              className="mt-[42px] inline-block text-[16px] font-medium uppercase tracking-[-0.01em] text-[#1f1f1a] underline decoration-[#2453ff] underline-offset-[6px]"
            >
              Все новости
            </a>
          </div>
        </div>

        <div className="h-[340px]" />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}