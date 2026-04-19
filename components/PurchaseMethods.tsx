const methods = [
  {
    title: "Ипотека",
    text: "Подберём оптимальную ипотечную программу и поможем пройти путь от заявки до одобрения.",
  },
  {
    title: "Рассрочка",
    text: "Гибкие условия покупки для тех, кто хочет сохранить финансовую свободу на этапе строительства.",
  },
  {
    title: "100% оплата",
    text: "Простая и прозрачная схема покупки с возможностью получить индивидуальные условия.",
  },
  {
    title: "Семейные сценарии покупки",
    text: "Подберём решение для обмена, расширения или покупки квартиры для нескольких поколений семьи.",
  },
];

export default function PurchaseMethods() {
  return (
    <section
      id="purchase"
      className="bg-[#f5f3ee] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="mb-12 md:mb-16">
          <h2 className="mb-6 text-[40px] font-medium leading-[1.02] tracking-[-0.04em] text-[#1e1e1e] md:text-[80px]">
            Способы покупки
          </h2>

          <p className="max-w-[375px] text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[#1e1e1e]">
            Подберём наиболее выгодные условия покупки квартиры. Заполните
            заявку, чтобы получить персональное предложение и консультацию.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[375px_1fr] md:gap-[151px]">
          <div>
            <button className="border-b-2 border-[#dadfc5] pb-1 text-[12px] font-semibold uppercase leading-[1.15] text-[#1e1e1e] transition hover:opacity-70">
              Получить предложение
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {methods.map((item, index) => (
              <article
                key={item.title}
                className="min-h-[238px] border border-[#e1e3e3] bg-white p-5"
              >
                <div className="mb-10 flex items-start justify-between gap-4">
                  <h3 className="text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1e1e1e]">
                    {item.title}
                  </h3>
                  <span className="text-[12px] text-[#8e8e8e]">
                    0{index + 1}
                  </span>
                </div>

                <p className="max-w-[420px] text-[16px] leading-[1.5] tracking-[-0.02em] text-[#1e1e1e]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}