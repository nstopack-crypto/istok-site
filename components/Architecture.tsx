"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const slides = [
  {
    image: "/images/architecture-1.jpg",
    counter: "01 — 03",
    text: "Архитектура проекта строится на сочетании спокойной пластики, природной палитры и выразительных деталей, которые формируют благородный и современный образ квартала.",
    title: "Архитектура и дизайн",
  },
  {
    image: "/images/architecture-2.jpg",
    counter: "02 — 03",
    text: "Фасады, пропорции окон, ритм объёмов и материалы подобраны так, чтобы среда выглядела цельной, тихой и визуально устойчивой.",
    title: "Фасады и материалы",
  },
  {
    image: "/images/architecture-3.jpg",
    counter: "03 — 03",
    text: "Интерьеры общественных зон продолжают общую концепцию проекта: много воздуха, тактильные поверхности, мягкий свет и спокойные оттенки.",
    title: "Интерьеры и детали",
  },
];

export default function Architecture() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isLeftSide, setIsLeftSide] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const activeSlide = slides[displayIndex];

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

  const animateTo = (targetIndex: number) => {
    if (isFading) return;

    setIsFading(true);

    window.setTimeout(() => {
      setActiveIndex(targetIndex);
      setDisplayIndex(targetIndex);

      window.setTimeout(() => {
        setIsFading(false);
      }, 450);
    }, 250);
  };

  const handleClick = () => {
    if (isLeftSide) {
      animateTo(prevIndex);
    } else {
      animateTo(nextIndex);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#111111] cursor-none"
      style={{ height: 750 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
      onClick={handleClick}
    >
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-opacity duration-[700ms] ease-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={activeSlide.image}
            alt={activeSlide.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.34)]" />

      <div className="relative z-10 h-full w-full px-[20px]">
        <h2 className="max-w-[980px] pt-[20px] text-[44px] font-medium leading-[0.94] tracking-[-0.045em] text-white md:text-[72px]">
          Архитектура и дизайн
        </h2>

        <div
          className={`absolute hidden overflow-hidden bg-[rgba(223,223,223,0.22)] backdrop-blur-[24px] transition-opacity duration-[700ms] ease-out md:block ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
          style={{
            width: 507,
            height: 350,
            right: 20,
            top: 170,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-full flex-col p-5">
            <div className="mb-8 flex items-start justify-between gap-6">
              <p className="text-[18px] font-medium leading-none text-white">
                {activeSlide.counter}
              </p>

              <p className="max-w-[248px] text-[15px] font-medium leading-[1.45] tracking-[-0.02em] text-white">
                {activeSlide.text}
              </p>
            </div>

            <div className="mt-auto">
              <h3 className="max-w-[360px] text-[34px] font-medium leading-[0.98] tracking-[-0.03em] text-white">
                {activeSlide.title}
              </h3>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-[36px] left-[20px] right-[20px] transition-opacity duration-[700ms] ease-out md:hidden ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className="overflow-hidden bg-[rgba(223,223,223,0.22)] p-5 backdrop-blur-[24px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8 flex items-start justify-between gap-6">
              <p className="text-[18px] font-medium leading-none text-white">
                {activeSlide.counter}
              </p>

              <p className="max-w-[248px] text-[15px] font-medium leading-[1.45] tracking-[-0.02em] text-white">
                {activeSlide.text}
              </p>
            </div>

            <h3 className="max-w-[360px] text-[34px] font-medium leading-[0.98] tracking-[-0.03em] text-white">
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