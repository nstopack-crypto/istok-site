import Image from "next/image";

const cards = [
  {
    title: "Приватные пространства",
    subtitle: "для отдыха и общения",
    image: "/images/infra-1.jpg",
  },
  {
    title: "Продуманные общественные зоны",
    subtitle: "для повседневного комфорта",
    image: "/images/infra-2.jpg",
  },
  {
    title: "Эстетика загородной жизни",
    subtitle: "в современной архитектуре",
    image: "/images/infra-3.jpg",
  },
];

export default function Infrastructure() {
  return (
    <section className="bg-[#f5f3ee] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="mb-12 md:mb-16">
          <h2 className="mb-6 text-[36px] font-medium leading-[1.05] tracking-[-0.03em] text-[#1e1e1e] md:text-[72px]">
            Клубная инфраструктура
          </h2>
          <p className="max-w-[375px] text-[20px] leading-[1.3] tracking-[-0.02em] text-[#1e1e1e] md:text-[32px]">
            Каждая деталь создана для удобства резидентов, а их желания уже
            предугаданы.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <article key={index} className="group">
              <div className="relative mb-4 aspect-[506/440] overflow-hidden bg-[#d9d4ca]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.08))]" />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-1 text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] md:text-[24px]">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-[1.4] tracking-[-0.02em] text-[#8e8e8e] md:text-[16px]">
                    {card.subtitle}
                  </p>
                </div>

                <div className="pt-1 text-[14px] text-[#8e8e8e]">
                  0{index + 1}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}