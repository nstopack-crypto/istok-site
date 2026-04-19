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

export default function Advantages() {
  return (
    <section className="bg-[#f5f3ee]">
      <div className="mx-auto max-w-[1600px] px-5 pb-16 md:pb-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1032px]">
          <div />
          <div>
            <p className="mb-8 text-[16px] font-medium leading-[1.3] tracking-[-0.02em] text-[#8e8e8e]">
              Преимущества проекта
            </p>

            <div className="flex flex-col gap-10">
              {advantages.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-1 gap-5 md:grid-cols-2"
                >
                  <div className="border-t border-[rgba(195,199,200,0.5)] pt-3">
                    <h3 className="text-[24px] font-medium leading-[1.3] tracking-[-0.02em] text-[#1e1e1e]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="border-t border-[rgba(195,199,200,0.5)] pt-3">
                    <p className="text-[16px] font-normal leading-[1.5] tracking-[-0.02em] text-[#1e1e1e]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}