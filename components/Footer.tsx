export default function Footer() {
  return (
    <footer id="contacts" className="bg-[#1f1f1a] text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-5">
        <div className="min-h-[616px]">
          <div className="border-b border-white/10 pb-[140px] pt-0">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[139px_375px_375px_24px] md:items-start md:gap-x-[152px]">
              <div className="h-[38px] w-[139px]">
                <img
                  src="/logo-istok.svg"
                  alt="Исток"
                  className="h-full w-full object-contain object-left"
                />
              </div>

              <div className="space-y-[15px] pt-[10px] text-[14px] uppercase tracking-[0.04em] text-white/80 leading-none">
                <a href="#about" className="block transition hover:text-white">
                  О проекте
                </a>
                <a
                  href="#apartments"
                  className="block transition hover:text-white"
                >
                  Квартиры
                </a>
                <a
                  href="#purchase"
                  className="block transition hover:text-white"
                >
                  Способы покупки
                </a>
                <a href="#contacts" className="block transition hover:text-white">
                  Контакты
                </a>
                <a href="#" className="block transition hover:text-white">
                  Новости
                </a>
              </div>

              <div className="space-y-[15px] pt-[10px] text-[14px] uppercase tracking-[0.04em] text-white/80 leading-none">
                <a href="#" className="block transition hover:text-white">
                  Благоустройство
                </a>
                <a href="#" className="block transition hover:text-white">
                  Подъезды
                </a>
                <a href="#" className="block transition hover:text-white">
                  Клубная инфраструктура
                </a>
                <a href="#" className="block transition hover:text-white">
                  Тур по комплексу
                </a>
                <a href="#" className="block transition hover:text-white">
                  Документы
                </a>
              </div>

              <a
                href="#top"
                className="hidden h-6 w-6 items-start justify-start text-[20px] leading-none text-white/80 transition hover:text-white md:flex"
                aria-label="Наверх"
              >
                ↑
              </a>
            </div>
          </div>

          <div className="pt-[140px]">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[279px_903px] md:gap-x-[247px]">
              <div>
                <p className="mb-[158px] max-w-[279px] text-[32px] leading-[1.2] tracking-[-0.02em] text-white/90">
                  Калининград, ул. Костромская, 10,
                </p>

                <div className="flex items-center gap-4 text-[16px] text-white/80">
                  <a href="#" className="transition hover:text-white">
                    Telegram
                  </a>
                  <a href="#" className="transition hover:text-white">
                    VK
                  </a>
                  <a href="#" className="transition hover:text-white">
                    YouTube
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Rutube
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-[40px] md:grid-cols-[375px_375px] md:gap-x-[153px]">
                <div>
                  <p className="mb-2 text-[21px] leading-none text-white/50">
                    Офис
                  </p>
                  <p className="text-[21px] leading-[1.35] text-white/90">
                    Пн–Пт: 10:00 — 20:00,
                    <br />
                    Сб–Вс: 10:00 — 18:00
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-[21px] leading-none text-white/50">
                    Телефон
                  </p>
                  <a
                    href="tel:+74012994222"
                    className="text-[21px] leading-[1.35] text-white/90 transition hover:text-white"
                  >
                    + 7 4012 994 222
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-[21px] leading-none text-white/50">
                    Отдел продаж
                  </p>
                  <p className="text-[21px] leading-[1.35] text-white/90">
                    Пн–Пт: 09:00 — 19:00,
                    <br />
                    Сб–Вс: 10:00 — 18:00
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-[21px] leading-none text-white/50">
                    Звонки принимаются
                  </p>
                  <p className="text-[21px] leading-[1.35] text-white/90">
                    с 10:00 до 20:00 (Мск)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[82px] border-t border-white/10 pt-[11px]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[506px_1034px] md:items-center">
              <p className="text-[14px] text-white/50">© ГК РАСЦВЕТ, 2026</p>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-[375px_508px] md:gap-x-[151px]">
                <a
                  href="#"
                  className="text-[14px] text-white/50 transition hover:text-white/80"
                >
                  Согласие на получение рекламных рассылок
                </a>

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <a
                    href="#"
                    className="text-[14px] text-white/50 transition hover:text-white/80"
                  >
                    Политика конфиденциальности
                  </a>
                  <a
                    href="#"
                    className="text-[14px] text-white/50 transition hover:text-white/80"
                  >
                    Сделано в SKY NEEX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}