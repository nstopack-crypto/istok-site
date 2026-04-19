"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Оптимальная геометрия",
    text: "Помещения без лишних коридоров и «мертвых зон» — пространство используется рационально и работает на комфорт.",
  },
  {
    title: "Гибкость перепланировки",
    text: "Минимум несущих стен и продуманная инженерия позволяют реализовать интерьер без ограничений и доп. расходов.",
  },
  {
    title: "Прогнозируемый бюджет ремонта",
    text: "Планировки исключают сложные конструктивные решения, что снижает затраты на отделку и повышает управляемость проекта.",
  },
  {
    title: "Правильный свет и ориентация",
    text: "Окна, инсоляция и линии обзора построены так, чтобы интерьер выглядел просторнее, светлее и естественно уютнее.",
  },
];

function clamp(value: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}

function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) {
  const progress = clamp((value - inMin) / (inMax - inMin));
  return outMin + (outMax - outMin) * progress;
}

export default function DesignerApproved() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalScrollable = rect.height - viewportHeight;
      const passed = -rect.top;
      const rawProgress = totalScrollable > 0 ? passed / totalScrollable : 0;

      setProgress(clamp(rawProgress));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const titleOpacity = mapRange(progress, 0.0, 0.12, 0, 1);
  const titleY = mapRange(progress, 0.0, 0.12, 40, 0);

  const overlayDarkness = mapRange(progress, 0.12, 0.55, 0.08, 0.26);

  const cardsOpacity = mapRange(progress, 0.15, 0.28, 0, 1);

  const topRowY = mapRange(progress, 0.18, 0.78, 180, -120);
  const bottomRowY = mapRange(progress, 0.18, 0.78, 280, -180);

  const holdOpacity = mapRange(progress, 0.75, 0.92, 1, 1);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#efebe4]"
      style={{ height: "260vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/designer-bg.jpg"
            alt="Одобрено дизайнерами"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </div>

        <div
          className="absolute inset-0 bg-black transition-[background-color] duration-150"
          style={{
            backgroundColor: `rgba(0,0,0,${overlayDarkness})`,
          }}
        />

        <div className="relative z-10 h-full px-[20px]">
          <div className="mx-auto h-full max-w-[1600px]">
            <div className="grid h-full grid-cols-1 md:grid-cols-[380px_1fr] md:gap-[92px]">
              <div className="flex items-end pb-[72px] md:pb-[84px]">
                <h2
                  className="max-w-[340px] text-[48px] font-medium leading-[0.98] tracking-[-0.04em] text-white md:text-[64px] transition-[transform,opacity] duration-300"
                  style={{
                    opacity: titleOpacity,
                    transform: `translateY(${titleY}px)`,
                  }}
                >
                  Одобрено
                  <br />
                  дизайнерами
                </h2>
              </div>

              <div className="relative hidden md:block">
                <div
                  className="absolute left-0 top-[120px] grid w-full grid-cols-2 gap-5"
                  style={{
                    opacity: cardsOpacity * holdOpacity,
                    transform: `translateY(${topRowY}px)`,
                  }}
                >
                  {cards.slice(0, 2).map((card, index) => (
                    <article
                      key={index}
                      className="relative h-[315px] overflow-hidden bg-[rgba(223,223,223,0.28)] backdrop-blur-[24px]"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]" />

                      <div className="relative z-10 flex h-full flex-col justify-between p-5">
                        <h3 className="max-w-[360px] text-[32px] font-medium leading-[1.05] tracking-[-0.03em] text-white">
                          {card.title}
                        </h3>

                        <div className="flex justify-end">
                          <p className="max-w-[248px] text-[16px] leading-[1.35] tracking-[-0.02em] text-white/95">
                            {card.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div
                  className="absolute left-0 top-[455px] grid w-full grid-cols-2 gap-5"
                  style={{
                    opacity: cardsOpacity * holdOpacity,
                    transform: `translateY(${bottomRowY}px)`,
                  }}
                >
                  {cards.slice(2, 4).map((card, index) => (
                    <article
                      key={index}
                      className="relative h-[315px] overflow-hidden bg-[rgba(223,223,223,0.28)] backdrop-blur-[24px]"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]" />

                      <div className="relative z-10 flex h-full flex-col justify-between p-5">
                        <h3 className="max-w-[360px] text-[32px] font-medium leading-[1.05] tracking-[-0.03em] text-white">
                          {card.title}
                        </h3>

                        <div className="flex justify-end">
                          <p className="max-w-[248px] text-[16px] leading-[1.35] tracking-[-0.02em] text-white/95">
                            {card.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 py-10 md:hidden">
                {cards.map((card, index) => (
                  <article
                    key={index}
                    className="relative min-h-[240px] overflow-hidden bg-[rgba(223,223,223,0.28)] backdrop-blur-[22px]"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-5">
                      <h3 className="max-w-[360px] text-[28px] font-medium leading-[1.05] tracking-[-0.03em] text-white">
                        {card.title}
                      </h3>

                      <div className="flex justify-end">
                        <p className="max-w-[248px] text-[16px] leading-[1.35] tracking-[-0.02em] text-white/95">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}