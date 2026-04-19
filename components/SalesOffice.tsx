export default function SalesOffice() {
  return (
    <section className="bg-[#f5f3ee] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="border-t border-[#e1e3e3] pt-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[244px_1fr] md:gap-[283px]">
            <div>
              <p className="text-[16px] font-medium leading-[1.3] tracking-[-0.02em] text-[#8e8e8e]">
                Офис продаж
              </p>
            </div>

            <div>
              <div className="mb-12">
                <p className="mb-6 text-[48px] font-medium leading-none tracking-[-0.04em] text-[#1e1e1e] md:text-[88px]">
                  +7 4012 994 222
                </p>

                <button className="h-[40px] border border-[#1e1e1e] px-5 text-[12px] font-semibold uppercase text-[#1e1e1e] transition hover:bg-[#1e1e1e] hover:text-white">
                  Записаться на встречу
                </button>
              </div>

              <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-10">
                <div className="border-t border-[#e1e3e3] pt-3">
                  <p className="mb-2 text-[24px] font-medium leading-[1.3] tracking-[-0.02em] text-[#1e1e1e]">
                    ул. Костромская, 10, Калининград
                  </p>
                  <p className="text-[16px] text-[#8e8e8e]">Адрес</p>
                </div>

                <div className="border-t border-[#e1e3e3] pt-3">
                  <p className="mb-2 text-[24px] font-medium leading-[1.3] tracking-[-0.02em] text-[#1e1e1e]">
                    Пн–Пт: 09:00 — 19:00, Сб–Вс: 10:00 — 18:00
                  </p>
                  <p className="text-[16px] text-[#8e8e8e]">Режим работы</p>
                </div>

                <div className="border-t border-[#e1e3e3] pt-3">
                  <p className="mb-2 text-[24px] font-medium leading-[1.3] tracking-[-0.02em] text-[#1e1e1e]">
                    10:00 — 20:00
                  </p>
                  <p className="text-[16px] text-[#8e8e8e]">Принимаем звонки</p>
                </div>

                <div className="border-t border-[#e1e3e3] pt-3">
                  <div className="flex gap-4">
                    <a href="#" className="text-[16px] text-[#1e1e1e]">
                      Telegram
                    </a>
                    <a href="#" className="text-[16px] text-[#1e1e1e]">
                      VK
                    </a>
                  </div>
                  <p className="mt-2 text-[16px] text-[#8e8e8e]">
                    Социальные сети
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}