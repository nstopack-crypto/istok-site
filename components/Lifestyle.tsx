import Image from "next/image";

const items = [
  {
    title: "Квартиры с террасами",
    subtitle: "для неспешных завтраков и тёплых вечеров",
    image: "/images/lifestyle-1.jpg",
  },
  {
    title: "Светлые кухни-гостиные",
    subtitle: "для семьи, общения и повседневного комфорта",
    image: "/images/lifestyle-2.jpg",
  },
  {
    title: "Мастер-спальни и гардеробные",
    subtitle: "для приватности и продуманного быта",
    image: "/images/lifestyle-3.jpg",
  },
];

export default function Lifestyle() {
  return (
    <section
      id="apartments"
      className="bg-[#f5f3ee] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="mb-12 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-[1fr_505px] md:items-start">
          <h2 className="max-w-[1032px] text-[40px] font-medium leading-[1.02] tracking-[-0.04em] text-[#1e1e1e] md:text-[80px]">
            Пространства для жизни
          </h2>

          <div className="pt-2">
            <p className="mb-8 text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[#1e1e1e]">
              В проекте представлено более 70 планировочных решений,
              рассчитанных на разные сценарии жизни.
            </p>

            <button className="border-b-2 border-[#dadfc5] pb-1 text-[12px] font-semibold uppercase leading-[1.15] text-[#1e1e1e] transition hover:opacity-70">
              Выбрать квартиру
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <article key={item.title} className="group">
              <div className="relative mb-4 aspect-[507/490] overflow-hidden bg-[#d8d2c8]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.1))]" />

                <div className="absolute right-4 top-4 bg-white/75 px-2 py-1 text-[12px] text-[#1e1e1e] backdrop-blur">
                  0{index + 1}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1e1e1e]">
                  {item.title}
                </h3>
                <p className="text-[16px] leading-[1.4] tracking-[-0.02em] text-[#8e8e8e]">
                  {item.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}