export default function Footer() {
  return (
    <footer id="contacts" className="bg-[#1f1f1a] text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-14 md:py-20">
        <div className="mb-14 grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_2fr]">
          <div className="text-[32px] font-semibold uppercase tracking-[0.12em]">
            ист<span className="text-[#dadfc5]">Ø</span>к
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-4 text-[14px] uppercase tracking-[0.04em] text-white/80">
              <a href="#about" className="block transition hover:text-white">
                О проекте
              </a>
              <a
                href="#apartments"
                className="block transition hover:text-white"
              >
                Квартиры
              </a>
              <a href="#purchase" className="block transition hover:text-white">
                Способы покупки
              </a>
              <a href="#contacts" className="block transition hover:text-white">
                Контакты
              </a>
            </div>

            <div className="space-y-4 text-[14px] text-white/80">
              <p>Калининград, ул. Костромская, 10</p>
              <p>Пн–Пт: 09:00 — 19:00, Сб–Вс: 10:00 — 18:00</p>
              <p>Звонки принимаются с 10:00 до 20:00</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <p className="mb-3 text-[14px] text-white/50">Телефон</p>
          <a
            href="tel:+74012994222"
            className="text-[36px] font-medium leading-none tracking-[-0.03em] md:text-[72px]"
          >
            +7 4012 994 222
          </a>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[12px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© ГК РАСЦВЕТ, 2026</p>
          <div className="flex flex-col gap-3 md:flex-row md:gap-8">
            <a href="#" className="transition hover:text-white/80">
              Согласие на получение рекламных рассылок
            </a>
            <a href="#" className="transition hover:text-white/80">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}