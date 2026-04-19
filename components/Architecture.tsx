import Image from "next/image";

export default function Architecture() {
  return (
    <section className="bg-[#f5f3ee] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1034px] md:items-start">
          <div>
            <h2 className="max-w-[480px] text-[36px] font-medium leading-[1.05] tracking-[-0.03em] text-[#1e1e1e] md:text-[72px]">
              Архитектура
              <br />
              и дизайн
            </h2>
          </div>

          <div className="relative aspect-[1034/732] overflow-hidden bg-[#d8d1c4]">
            <Image
              src="/images/architecture.jpg"
              alt="Архитектура проекта"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0.18))]" />

            <div className="absolute right-6 top-6 bg-white/75 px-3 py-2 text-[13px] tracking-[-0.02em] text-[#1e1e1e] backdrop-blur">
              Фасады в природной палитре
            </div>

            <div className="absolute bottom-6 left-6 max-w-[420px] bg-black/35 px-4 py-3 text-[14px] leading-[1.4] tracking-[-0.02em] text-white backdrop-blur-sm">
              Невысокие дома, спокойные оттенки, мягкая геометрия и визуальная
              тишина.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1034px]">
          <div />
          <div className="max-w-[1034px]">
            <p className="text-[24px] leading-[1.35] tracking-[-0.02em] text-[#1e1e1e] md:text-[40px] md:leading-[1.2]">
              Здесь архитектура не спорит с природой, а становится её частью.
              Невысокие дома, спокойные цвета фасадов, зелёные дворы, маршруты
              для прогулок и места для отдыха — всё продумано так, чтобы жизнь
              текла спокойно и естественно.
            </p>

            <button className="mt-8 border-b border-[#1e1e1e] pb-1 text-[16px] leading-[1.3] tracking-[-0.02em] text-[#1e1e1e] transition hover:opacity-70">
              Подробнее об архитектуре
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}