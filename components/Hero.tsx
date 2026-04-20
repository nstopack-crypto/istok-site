"use client";

import { useEffect, useMemo, useState } from "react";

const ROOM_TABS = ["Ст", "1к", "2к", "3к"];

const PRICE_MIN = 14500000;
const PRICE_MAX = 45000000;
const STEP = 100000;

const promoSlides = [
  {
    id: 1,
    text: "Рассрочка с ПВ в 30% на 24 месяца до 24.03.2026",
  },
  {
    id: 2,
    text: "Семейная ипотека на квартиры в проекте Исток",
  },
  {
    id: 3,
    text: "Выберите квартиру в Зеленоградске с выгодными условиями покупки",
  },
];

function formatPriceLabel(value: number) {
  const mln = value / 1000000;
  return `от ${mln.toFixed(1).replace(".", ",")} млн ₽`;
}

function ArrowRightIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[42px] w-[42px]"
    >
      <circle cx="21" cy="21" r="20.5" stroke="white" />
      <path
        d="M15 21H27M27 21L22 16M27 21L22 26"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BurgerIcon() {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-7"
    >
      <path d="M1 1H27" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M1 10H27" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M1 19H27" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function HeroSection() {
  const [activeRoom, setActiveRoom] = useState("2к");
  const [minValue, setMinValue] = useState(22100000);
  const [maxValue, setMaxValue] = useState(41300000);
  const [activeSlide, setActiveSlide] = useState(0);

  const minPercent = useMemo(
    () => ((minValue - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100,
    [minValue]
  );

  const maxPercent = useMemo(
    () => ((maxValue - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100,
    [maxValue]
  );

  const handleMinChange = (value: number) => {
    setMinValue(Math.min(value, maxValue - STEP));
  };

  const handleMaxChange = (value: number) => {
    setMaxValue(Math.max(value, minValue + STEP));
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % promoSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % promoSlides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Жилой комплекс Исток"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/20" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col px-[20px] pt-[20px]">
        <header className="flex items-start justify-between gap-6">
          <img
            src="/logo-istok.svg"
            alt="Исток"
            className="h-[60px] w-auto md:h-[140px]"
          />

          <div className="hidden flex-1 justify-center xl:flex">
            <nav className="flex items-center gap-[52px] pt-[10px]">
              <a
                href="#about"
                className="text-[14px] font-[600] uppercase tracking-[-0.02em] text-white/95 transition-opacity hover:opacity-70"
              >
                О проекте
              </a>
              <a
                href="#apartments"
                className="text-[14px] font-[600] uppercase tracking-[-0.02em] text-white/95 transition-opacity hover:opacity-70"
              >
                Квартиры
              </a>
              <a
                href="#purchase"
                className="text-[14px] font-[600] uppercase tracking-[-0.02em] text-white/95 transition-opacity hover:opacity-70"
              >
                Способы покупки
              </a>
              <a
                href="#contacts"
                className="text-[14px] font-[600] uppercase tracking-[-0.02em] text-white/95 transition-opacity hover:opacity-70"
              >
                Контакты
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-[24px]">
            <a
              href="tel:+74012994222"
              className="hidden text-[14px] font-[600] tracking-[-0.02em] text-white/95 transition-opacity hover:opacity-70 md:block"
            >
              +7 4012 994 222
            </a>

            <button
              type="button"
              aria-label="Открыть меню"
              className="inline-flex h-[30px] w-[30px] items-center justify-center"
            >
              <BurgerIcon />
            </button>
          </div>
        </header>

        <div className="flex-1" />

        <div className="-mx-[20px] flex flex-col items-start justify-end xl:flex-row xl:items-end xl:justify-between">
          <div className="w-full max-w-[1200px] bg-[rgba(74,59,44,0.42)] backdrop-blur-[18px]">
            <div className="px-[28px] pt-[18px] pb-[20px]">
              <div className="mb-[14px] flex flex-wrap items-center gap-x-[18px] gap-y-[8px] text-[13px] font-[600] uppercase tracking-[-0.02em] text-white/95 md:text-[14px]">
                <span>Сдача проекта II квартал 2028</span>
                <span className="text-white/60">/</span>
                <span>Зеленоградск</span>
                <span className="text-white/60">/</span>
                <span>Комфорт-класс</span>
              </div>

              <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-[446px_392px_250px] lg:items-stretch">
                <div className="grid h-[82px] grid-cols-4 border border-white/70">
                  {ROOM_TABS.map((tab) => {
                    const isActive = tab === activeRoom;

                    return (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveRoom(tab)}
                        className={`relative flex items-center justify-center text-[18px] font-[500] tracking-[-0.03em] transition ${
                          isActive ? "text-white" : "text-white/75 hover:text-white"
                        }`}
                      >
                        {tab}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#d7d0ae]" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex h-[82px] flex-col justify-between border border-white/70 px-[22px] pt-[16px] pb-[14px]">
                  <div className="flex items-center justify-between gap-[16px]">
                    <span className="text-[18px] font-[500] tracking-[-0.03em] text-white">
                      {formatPriceLabel(minValue)}
                    </span>
                    <span className="text-white/60">|</span>
                    <span className="text-[18px] font-[500] tracking-[-0.03em] text-white">
                      {formatPriceLabel(maxValue)}
                    </span>
                  </div>

                  <div className="relative h-[18px]">
                    <div className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 bg-white/45" />
                    <div
                      className="absolute top-1/2 h-[2px] -translate-y-1/2 bg-[#d7d0ae]"
                      style={{
                        left: `${minPercent}%`,
                        width: `${Math.max(maxPercent - minPercent, 0)}%`,
                      }}
                    />

                    <input
                      type="range"
                      min={PRICE_MIN}
                      max={PRICE_MAX}
                      step={STEP}
                      value={minValue}
                      onChange={(e) => handleMinChange(Number(e.target.value))}
                      className="hero-range absolute inset-0 h-full w-full appearance-none bg-transparent"
                    />

                    <input
                      type="range"
                      min={PRICE_MIN}
                      max={PRICE_MAX}
                      step={STEP}
                      value={maxValue}
                      onChange={(e) => handleMaxChange(Number(e.target.value))}
                      className="hero-range absolute inset-0 h-full w-full appearance-none bg-transparent"
                    />

                    <div
                      className="pointer-events-none absolute top-1/2 h-[16px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-white"
                      style={{ left: `${minPercent}%` }}
                    />
                    <div
                      className="pointer-events-none absolute top-1/2 h-[16px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-white"
                      style={{ left: `${maxPercent}%` }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="flex h-[82px] items-center justify-center bg-[#d6d4c5] px-[20px] text-center text-[18px] font-[500] tracking-[-0.03em] text-[#26231f] transition hover:bg-[#e1dfd0]"
                >
                  Показать 25 квартир
                </button>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[520px] px-[20px] pb-[22px] pt-[18px] xl:ml-[28px] xl:max-w-[500px] xl:px-0">
            <div className="flex items-center justify-between gap-[16px]">
              <div className="min-h-[92px] max-w-[320px]">
                <p className="text-[18px] font-[500] leading-[1.15] tracking-[-0.03em] text-white transition-opacity duration-500">
                  {promoSlides[activeSlide].text}
                </p>
              </div>

              <button
                type="button"
                aria-label="Следующая акция"
                onClick={goToNextSlide}
                className="shrink-0 transition-opacity hover:opacity-70"
              >
                <ArrowRightIcon />
              </button>
            </div>

            <div className="mt-[18px] flex items-center gap-[10px]">
              {promoSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Перейти к акции ${index + 1}`}
                  className={`block h-[2px] transition-all duration-300 ${
                    index === activeSlide
                      ? "w-[64px] bg-white"
                      : "w-[64px] bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-range {
          pointer-events: none;
        }

        .hero-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 0;
          background: transparent;
          cursor: pointer;
          pointer-events: auto;
        }

        .hero-range::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border: 0;
          border-radius: 0;
          background: transparent;
          cursor: pointer;
          pointer-events: auto;
        }

        .hero-range::-webkit-slider-runnable-track {
          background: transparent;
        }

        .hero-range::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </section>
  );
}