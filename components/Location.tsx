import Image from "next/image";

const locations = [
  {
    title: "Калининград",
    value: "30",
    note: "мин на авто",
    image: "/images/location-kaliningrad.jpg",
  },
  {
    title: "Зеленоградск",
    value: "8",
    note: "мин на авто",
    image: "/images/location-zelenogradsk.jpg",
  },
  {
    title: "Аэропорт",
    value: "16",
    note: "мин на авто",
    image: "/images/location-airport.jpg",
  },
  {
    title: "Куршская коса",
    value: "13",
    note: "мин на авто",
    image: "/images/location-kosa.jpg",
  },
];

export default function Location() {
  return (
    <section className="bg-[#f5f3ee] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5">
        <h2 className="mb-16 text-[40px] font-medium leading-[1.02] tracking-[-0.04em] text-[#1e1e1e] md:mb-24 md:text-[80px]">
          Гармония природы и городской жизни
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[375px_1fr] md:gap-[151px]">
          <div className="max-w-[375px]">
            <p className="mb-10 text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[#1e1e1e]">
              Независимый от городских пробок и шума, проект дает возможность
              быстро попасть в любую точку Калининградской области.
            </p>

            <button className="border-b-2 border-[#dadfc5] pb-1 text-[12px] font-semibold uppercase leading-[1.15] text-[#1e1e1e] transition hover:opacity-70">
              Выбрать квартиру
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {locations.map((item, index) => (
              <article
                key={item.title}
                className="relative min-h-[320px] border border-[#e1e3e3] bg-white p-5 md:min-h-[375px]"
              >
                <h3 className="mb-8 text-[24px] font-medium leading-[1.3] tracking-[-0.02em] text-[#1e1e1e]">
                  {item.title}
                </h3>

                <div className="absolute bottom-5 left-5 flex items-end gap-4">
                  <div className="text-[64px] font-medium leading-[1.05] tracking-[-0.04em] text-[#1e1e1e] md:text-[80px]">
                    {item.value}
                  </div>

                  <div className="pb-3 text-[16px] font-medium leading-[1.3] tracking-[-0.02em] text-[#1e1e1e]">
                    <p>мин</p>
                    <p>на авто</p>
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 h-[120px] w-[160px] overflow-hidden md:h-[180px] md:w-[240px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 160px, 240px"
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="absolute right-5 top-5 text-[12px] text-[#8e8e8e]">
                  0{index + 1}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}