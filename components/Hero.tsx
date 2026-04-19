import Header from "./Header";

const apartmentTypes = ["Ст", "1к", "2к", "3к"];

export default function Hero() {
  return (
    <section className="relative min-h-[732px] overflow-hidden bg-[#7c816d] text-white">
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10">
        <Header />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.18))]" />

      <div className="relative z-10 mx-auto flex min-h-[732px] max-w-[1600px] flex-col justify-end px-4 pb-0 md:px-5">
        <div className="mb-5 ml-auto hidden w-[375px] self-end md:block">
          <div className="mb-6 flex items-start justify-between gap-6">
            <div className="max-w-[302px] text-[16px] leading-[1.3] tracking-[-0.02em] text-white">
              <p>Рассрочка с ПВ в 30% на 24 месяца</p>
              <p>до 24.03.2026</p>
            </div>

            <button className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
              →
            </button>
          </div>

          <div className="flex gap-[5px]">
            <div className="h-[2px] flex-1 bg-[#dadfc5]" />
            <div className="h-[2px] flex-1 bg-white" />
            <div className="h-[2px] flex-1 bg-white" />
            <div className="h-[2px] flex-1 bg-white" />
          </div>
        </div>

        <div className="w-full max-w-[1009px] bg-[rgba(114,114,114,0.32)] p-4 backdrop-blur-[16px] md:p-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold uppercase leading-[1.15] text-white">
              <span>сдача проекта II квартал 2028</span>
              <span>/</span>
              <span>Зеленоградск</span>
              <span>/</span>
              <span>комфорт-класс</span>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="w-full border border-[#e1e3e3] md:w-[374px]">
                <div className="flex text-center text-[16px] font-medium tracking-[-0.02em]">
                  {apartmentTypes.map((item, index) => (
                    <button
                      key={item}
                      className={`flex-1 py-[9px] ${
                        index === 1 ? "text-[#dadfc5]" : "text-white"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="flex">
                  <div className="h-[2px] flex-1 bg-white/0" />
                  <div className="h-[2px] flex-1 bg-[#dadfc5]" />
                  <div className="h-[2px] flex-1 bg-white/0" />
                  <div className="h-[2px] flex-1 bg-white/0" />
                </div>
              </div>

              <div className="w-full border border-[#e1e3e3] px-5 py-[9px] md:w-[374px]">
                <div className="mb-2 flex items-center text-[16px] font-medium tracking-[-0.02em] text-white">
                  <span className="flex-1">от 14,5 млн ₽</span>
                  <span className="mx-2 h-[10px] w-px border-r border-white" />
                  <span className="flex-1 text-right">от 14,5 млн ₽</span>
                </div>

                <div className="flex items-center">
                  <div className="h-[8px] w-[2px] bg-white" />
                  <div className="h-[2px] flex-1 bg-white" />
                  <div className="h-[8px] w-[2px] bg-white" />
                </div>
              </div>

              <button className="h-[42px] bg-[#dadfc5] px-5 text-[12px] font-semibold uppercase text-[#444] md:min-w-[181px]">
                Показать 25 квартир
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}