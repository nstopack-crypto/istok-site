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
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

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
    const y = e.clientY - rect.top;

    setCursorX(x);
    setCursorY(y);
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
      className="relative h-screen min-h-[732px] w-full overflow-hidden bg-[#efebe4] cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
      onClick={handleClick}
    >
      <div className="absolute inset-0">
        <Image
          src={activeSlide.image}
          alt={activeSlide.title}
          fill
          sizes="100vw"
          className="object-cover transition-opacity duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.18)]" />

      <div className="relative z-10 h-full w-full px-[20px]">
        <h2 className="pt-[20px] text-[48px] font-medium leading-[0.95] tracking-[-0.04em] text-white md:max-w-[1050px] md:text-[76px]">
          Благоустройство и озеленение
        </h2>

        {/* Desktop card with fixed size and position */}
        <div
          className="absolute hidden overflow-hidden bg-[rgba(223,223,223,0.28)] backdrop-blur-[24px] md:block"
          style={{
            width: 507,
            height: 350,
            left: 1075,
            top: 170,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full p-5">
            <div className="mb-8 flex items-start justify-between gap-6">
              <p className="text-[18px] font-medium leading-none text-white">
                {activeSlide.counter}
              </p>

              <p className="max-w-[248px] text-[16px] font-medium leading-[1.35] tracking-[-0.02em] text-white">
                {activeSlide.text}
              </p>
            </div>

            <div className="flex h-[calc(100%-64px)] items-end">
              <h3 className="max-w-[360px] text-[40px] font-medium leading-[0.98] tracking-[-0.03em] text-white md:text-[52px]">
                {activeSlide.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Mobile card */}
        <div className="absolute bottom-[36px] left-[20px] right-[20px] md:hidden">
          <div
            className="overflow-hidden bg-[rgba(223,223,223,0.28)] p-5 backdrop-blur-[24px]"
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

            <h3 className="max-w-[360px] text-[40px] font-medium leading-[0.98] tracking-[-0.03em] text-white">
              {activeSlide.title}
            </h3>
          </div>
        </div>
      </div>

      {cursorVisible && (
        <div
          className="pointer-events-none absolute z-20 hidden h-[82px] w-[82px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white text-[34px] text-white md:flex"
          style={{
            left: cursorX,
            top: cursorY,
          }}
        >
          {isLeftSide ? "←" : "→"}
        </div>
      )}
    </section>
  );
}