"use client";

const advantages = [
  {
    title: "Малоэтажность и приватность",
    text: "Камерные дома до 4 этажей формируют спокойную и уютную среду без ощущения плотной городской застройки.",
  },
  {
    title: "Среда для жизни",
    text: "Дворы без машин, прогулочные маршруты, общественные пространства, места для отдыха, спорта и встреч — всё, что нужно для повседневной жизни рядом с домом.",
  },
  {
    title: "Продуманные планировки",
    text: "Квартиры под разные сценарии жизни: кухни-гостиные, мастер-спальни, гардеробные, террасы, квартиры с видом на природу.",
  },
  {
    title: "Природа рядом",
    text: "Лес, тишина, чистый воздух и близость к морю — редкое сочетание, которое позволяет жить в спокойствии, не отказываясь от городской инфраструктуры.",
  },
];

export default function Intro() {
  return (
    <section className="bg-white pt-[20px]">
      <div className="w-full px-[20px]">
        <div className="max-w-[980px]">
          <h2 className="text-[40px] font-medium leading-[1.02] tracking-[-0.05em] text-[#1F1F1A] md:text-[58px]">
            Здесь соединяются тишина загородной жизни, современная архитектура
            и продуманная среда — пространство, где можно замедлиться,
            выдохнуть, проводить больше времени с семьёй и чувствовать
            настоящий ритм жизни.
          </h2>
        </div>

        <div className="mt-[150px] md:mt-[175px]">
          <p className="mb-[10px] text-[16px] font-medium leading-[1.1] tracking-[-0.02em] text-[#9B9B9B]">
            Преимущества проекта
          </p>

          <div className="flex flex-col">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-x-[20px] border-t border-[#E5E1DA] py-[18px] md:grid-cols-[520px_1fr]"
              >
                <div>
                  <h3 className="text-[32px] font-medium leading-[1.06] tracking-[-0.04em] text-[#1F1F1A]">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-[720px] text-[18px] leading-[1.38] tracking-[-0.02em] text-[#1F1F1A]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[340px]" />
      </div>
    </section>
  );
}