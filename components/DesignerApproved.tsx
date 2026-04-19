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

export default function DesignerApproved() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 0.95;
      const end = -rect.height * 0.15;
      const current = rect.top;

      const raw = (start - current) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));

      setProgress(clamped);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const topRowY = 90 - progress * 120;
  const bottomRowY = 160 - progress * 180;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#efebe4]"
    >
      <div className="relative h-screen min-h-[732px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/designer-bg.jpg"
            alt="Одобрено дизайнерами"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[rgba(0,0,0,0.08)]" />

        <div className="relative z-10 h-full px-[20px]">
          <div className="mx-auto h-full max-w-[1600px]">
            <div className="grid h-full grid-cols-1 md:grid-cols-[380px_1fr] md:gap-[92px]">
              <div className="flex items-end pb-[64px] md:pb-[78px]">
                <h2 className="max-w-[340px] text-[48px] font-medium leading-[0.98] tracking-[-0.04em] text-white md:text-[64px]">
                  Одобрено
                  <br />
                  дизайнерами
                </h2>
              </div>

              <div className="relative hidden md:block">
                <div
                  className="absolute left-0 top-[120px] grid w-full grid-cols-2 gap-5 will-change-transform"
                  style={{ transform: `translateY(${topRowY}px)` }}
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
                  className="absolute left-0 top-[455px] grid w-full grid-cols-2 gap-5 will-change-transform"
                  style={{ transform: `translateY(${bottomRowY}px)` }}
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