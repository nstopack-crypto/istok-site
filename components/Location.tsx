"use client";

import Image from "next/image";

const destinations = [
  {
    title: "Калининград",
    time: "30",
    image: "/images/location-kaliningrad.jpg",
  },
  {
    title: "Зеленоградск",
    time: "8",
    image: "/images/location-zelenogradsk.jpg",
  },
  {
    title: "Аэропорт",
    time: "16",
    image: "/images/location-airport.jpg",
  },
  {
    title: "Куршская коса",
    time: "13",
    image: "/images/location-kosa.jpg",
  },
];

export default function Location() {
  return (
    <section className="bg-[#f5f3ee] pt-[20px]">
      <div className="w-full px-[20px]">
        <h2 className="max-w-[1360px] text-[56px] font-medium leading-[0.9] tracking-[-0.06em] text-[#1f1f1a] md:text-[88px]">
          Гармония природы и городской жизни
        </h2>

        <div className="mt-[170px] grid grid-cols-1 gap-x-[66px] md:grid-cols-[394px_1fr]">
          <div>
            <p className="max-w-[336px] text-[18px] font-medium leading-[1.18] tracking-[-0.02em] text-[#1f1f1a]">
              Независимый от городских пробок и шума, проект даёт возможность
              быстро попасть в любую точку Калининградской области.
            </p>

            <a
              href="#"
              className="mt-[58px] inline-block text-[16px] font-medium uppercase tracking-[-0.01em] text-[#1f1f1a] underline decoration-[#cfd3b3] underline-offset-[6px]"
            >
              Выбрать квартиру
            </a>
          </div>

          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
            {destinations.map((item) => (
              <article
                key={item.title}
                className="relative h-[330px] overflow-hidden border border-[#dedad3] bg-[#f7f5f1] p-[18px]"
              >
                <h3 className="text-[24px] font-medium leading-[1] tracking-[-0.03em] text-[#1f1f1a]">
                  {item.title}
                </h3>

                <div className="absolute bottom-[18px] left-[18px] flex items-end gap-[16px]">
                  <div className="text-[76px] font-medium leading-[0.9] tracking-[-0.06em] text-[#1f1f1a]">
                    {item.time}
                  </div>
                  <div className="pb-[10px] text-[18px] font-medium leading-[1.05] tracking-[-0.02em] text-[#1f1f1a]">
                    мин
                    <br />
                    на авто
                  </div>
                </div>

                <div className="absolute bottom-[18px] right-[18px] h-[160px] w-[214px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="214px"
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="h-[500px]" />
      </div>
    </section>
  );
}