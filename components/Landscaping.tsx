"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const slides = [
  {
    image: "/images/landscaping-1.jpg",
    counter: "02 — 03",
    text: "Концепция благоустройства строится на идее природного парка. На территории квартала появятся прогулочные маршруты, зелёные дворы, зоны отдыха, детские и спортивные площадки, общественные пространства и тихие уголки для отдыха.",
    title: "Зелёные насаждения",
  },
  {
    image: "/images/landscaping-2.jpg",
    counter: "03 — 03",
    text: "Дворы без машин, продуманные маршруты и сценарии отдыха формируют спокойную среду, где комфортно жить, гулять и проводить время на открытом воздухе.",
    title: "Природный парк",
  },
  {
    image: "/images/landscaping-3.jpg",
    counter: "01 — 03",
    text: "Озеленение, малые архитектурные формы и мягкое зонирование работают как единая система, делая территорию квартала живой и выразительной.",
    title: "Маршруты и зоны отдыха",
  },
];

export default function Landscaping() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLeftSide, setIsLeftSide] = useState(true);

  const activeSlide = slides[activeIndex];

  const nextIndex = useMemo(() => {
    return (activeIndex + 1) % slides.length;
  }, [activeIndex]);

  const prevIndex = useMemo(() => {
    return (activeIndex - 1 + slides.length) % slides.length;
  }, [activeIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setIsLeftSide(x < rect.width / 2);
  };

  const handleClick = () => {
    if (isLeftSide) {
      setActiveIndex(prevIndex);
    } else {
      setActiveIndex(nextIndex);
    }
  };

  return (
    <section
      className="relative h-screen min-h-[732px] w-full overflow-hidden bg-[#efebe4]"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <div className="absolute inset-0">
        <Image
          src={activeSlide.image}
          alt={activeSlide.title}
          fill
          sizes="100vw"
          className="object-cover transition-opacity duration-500"
          priority={false}
        />
      </div>

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.18)]" />

      <div className="relative z-10 h-full w-full px-[20px]">
        <div className="h-full w-full">
          <div className="flex h-full flex-col justify-between py-[20px]">
            <h2 className="max-w-[1050px] text-[48px] font-medium leading-[0.95] tracking-[-0.04em] text-white md:text-[76px]">
              Благоустройство и озеленение
            </h2>

            <div className="flex items-center justify-between pb-[36px]">
              <div className="flex-1">
                <button
                  type="button"
                  aria-label={isLeftSide ? "Предыдущий слайд" : "Следующий слайд"}
                  className="flex h-[82px] w-[82px] items-center justify-center rounded-full border border-white text-[34px] text-white transition hover:bg-white/10"
                >
                  {isLeftSide ? "←" : "→"}
                </button>
              </div>

              <div
                className="w-full max-w-[508px] overflow-hidden bg-[rgba(223,223,223,0.28)] p-5 backdrop-blur-[24px] md:p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-8 flex items-start justify-between gap-6">
                  <p className="text-[18px] font-medium leading-none text-white">
                    {activeSlide.counter}
                  </p>

                  <p className="max-w-[248px] text-[16px] font-medium leading-[1.35] tracking-[-0.02em] text-white">
                    {activeSlide.text}
                  </p>
                </div>

                <h3 className="max-w-[360px] text-[40px] font-medium leading-[0.98] tracking-[-0.03em] text-white md:text-[52px]">
                  {activeSlide.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}