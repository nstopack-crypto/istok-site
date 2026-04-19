import Image from "next/image";

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
  return (
    <section className="bg-[#efebe4]">
      <div className="mx-auto max-w-[1600px] px-0">
        <div className="relative min-h-[980px] overflow-hidden md:min-h-[1048px]">
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

          <div className="absolute inset-0 bg-[rgba(0,0,0,0.06)]" />

          <div className="relative z-10 mx-auto max-w-[1600px] px-5 pb-16 pt-16 md:pb-[120px] md:pt-[140px]">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[412px_930px] md:gap-[82px]">
              <div className="flex items-end md:min-h-[708px]">
                <h2 className="max-w-[360px] text-[48px] font-medium leading-[0.98] tracking-[-0.04em] text-white md:text-[64px]">
                  Одобрено
                  <br />
                  дизайнерами
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {cards.map((card, index) => (
                  <article
                    key={index}
                    className="relative min-h-[280px] overflow-hidden bg-[rgba(223,223,223,0.28)] backdrop-blur-[22px] md:min-h-[315px]"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6">
                      <h3 className="max-w-[360px] text-[28px] font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-[32px]">
                        {card.title}
                      </h3>

                      <div className="flex justify-end">
                        <p className="max-w-[250px] text-[16px] leading-[1.35] tracking-[-0.02em] text-white/95">
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