"use client";

import Image from "next/image";

const destinations = [
  {
    title: "Московский проспект",
    time: "2",
    image: "/images/location-kaliningrad.jpg",
    featured: true,
  },
  {
    title: "Центр города",
    time: "15",
    image: "/images/location-zelenogradsk.jpg",
  },
  {
    title: "Аэропорт",
    time: "15",
    image: "/images/location-airport.jpg",
  },
  {
    title: "Балтийское море",
    time: "15",
    image: "/images/location-kosa.jpg",
  },
];

export default function Location() {
  return (
    <section className="bg-[#f5f3ee] pt-[20px]">
      <div className="w-full px-[20px]">
        <h2 className="w-full max-w-none text-[56px] font-medium leading-[0.9] tracking-[-0.06em] text-[#1f1f1a] md:text-[88px]">
          Гармония природы и городской жизни
        </h2>

        <div className="mt-[170px] grid grid-cols-1 gap-x-[66px] md:grid-cols-[394px_1fr]">
          <div>
            <p className="max-w-[336px] text-[18px] font-medium leading-[1.18] tracking-[-0.02em] text-[#1f1f1a]">
              Независимый от городских пробок и шума, проект даёт возможность
              быстро попасть в любую точку города по Московскому проспекту.
            </p>

            <a
              href="#"
              className="mt-[58px] inline-block text-[16px] font-medium uppercase tracking-[-0.01em] text-[#1f1f1a] underline decoration-[#8fa0ff] underline-offset-[6px]"
            >
              Выбрать квартиру
            </a>
          </div>

          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
            {destinations.map((item) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden border border-[#dedad3] bg-[#f7f5f1] p-[18px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#bfbab1] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] ${
                  item.featured ? "h-[330px]" : "h-[330px]"
                }`}
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="scale-[0.42] object-cover object-bottom-right opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-black/32" />
                </div>

                <div className="relative z-10 h-full transition-colors duration-500">
                  <h3 className="text-[24px] font-medium leading-[1] tracking-[-0.03em] text-[#1f1f1a] transition-colors duration-500 group-hover:text-white">
                    {item.title}
                  </h3>

                  <div className="absolute bottom-[18px] left-[18px] flex items-end gap-[16px] transition-colors duration-500">
                    <div className="text-[76px] font-medium leading-[0.9] tracking-[-0.06em] text-[#1f1f1a] transition-colors duration-500 group-hover:text-white">
                      {item.time}
                    </div>
                    <div className="pb-[10px] text-[18px] font-medium leading-[1.05] tracking-[-0.02em] text-[#1f1f1a] transition-colors duration-500 group-hover:text-white">
                      мин
                      <br />
                      на авто
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="h-[340px]" />
      </div>
    </section>
  );
}