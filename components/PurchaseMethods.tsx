"use client";

type PurchaseMethodsProps = {
  onOpenLead?: () => void;
};

const items = [
  {
    title: "Ипотека от 4,5%",
    text: "Семейная, IT, комбо, военная и рыночная 13,9%",
  },
  {
    title: "Рассрочка 0%",
    text: "Рассрочка до конца июня 2026 года без удорожания",
  },
  {
    title: "Трейд-ин",
    text: "Обменяйте старую квартиру на новую с выгодой и комфортом",
  },
  {
    title: "100% оплата",
    text: "Без переплат, ускоренное оформление и лучшие условия покупки",
  },
];

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M4 9H14"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10 5L14 9L10 13"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PurchaseMethods({
  onOpenLead,
}: PurchaseMethodsProps) {
  return (
    <section className="bg-[#F6F6F2] pt-[20px]">
      <div className="px-[20px]">
        <h2 className="text-[56px] leading-[0.9] tracking-[-0.05em] text-[#1F1F1A] md:text-[88px]">
          Способы покупки
        </h2>

        <div className="mt-[120px] grid grid-cols-1 gap-[40px] md:grid-cols-[420px_1fr]">
          <div>
            <p className="text-[18px] font-medium leading-[1.35] text-[#1F1F1A]">
              Подберём наиболее выгодные условия покупки квартиры. Заполните
              заявку, чтобы получить персональное предложение и консультацию.
            </p>

            <button
              type="button"
              onClick={onOpenLead}
              className="mt-[30px] inline-block text-[14px] uppercase tracking-[0.04em] text-[#1F1F1A] underline underline-offset-[6px] decoration-[#CFCFBF]"
            >
              Оставить заявку
            </button>
          </div>

          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2">
            {items.map((item, i) => (
              <div
                key={i}
                className="group relative h-[240px] border border-[#E3E3DD] bg-[#F6F6F2] p-[20px] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
              >
                <h3 className="text-[32px] leading-[1.1] tracking-[-0.03em] text-[#1F1F1A]">
                  {item.title}
                </h3>

                <p className="absolute bottom-[24px] right-[24px] max-w-[240px] text-[14px] leading-[1.35] text-[#1F1F1A]">
                  {item.text}
                </p>

                <div className="absolute bottom-[24px] left-[24px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#1F1F1A] transition-transform duration-300 group-hover:scale-105">
                  <Arrow />
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