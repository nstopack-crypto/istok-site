const newsItems = [
  {
    title: "Как выбрать квартиру для семейного сценария жизни",
    date: "Апрель 2026",
  },
  {
    title: "Почему малоэтажный формат становится новой городской роскошью",
    date: "Апрель 2026",
  },
  {
    title: "Архитектура, которая не спорит с природой",
    date: "Март 2026",
  },
  {
    title: "На что обратить внимание при выборе квартиры у моря",
    date: "Март 2026",
  },
];

export default function News() {
  return (
    <section className="bg-[#f5f3ee] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5">
        <h2 className="mb-12 text-[40px] font-medium leading-[1.02] tracking-[-0.04em] text-[#1e1e1e] md:mb-16 md:text-[80px]">
          Новости и полезные статьи
        </h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="border-t border-[#e1e3e3] pt-5"
            >
              <p className="mb-4 text-[12px] uppercase text-[#8e8e8e]">
                {item.date}
              </p>
              <h3 className="max-w-[600px] text-[24px] font-medium leading-[1.25] tracking-[-0.02em] text-[#1e1e1e]">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}