export default function Header() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-5 text-white md:px-5">
        <div className="text-[28px] font-semibold uppercase tracking-[0.12em] md:text-[32px]">
          ист<span className="text-[#dadfc5]">Ø</span>к
        </div>

        <nav className="hidden items-center gap-10 text-[12px] font-semibold uppercase tracking-[0.04em] md:flex">
          <a href="#about" className="transition hover:opacity-80">
            О проекте
          </a>
          <a href="#apartments" className="transition hover:opacity-80">
            Квартиры
          </a>
          <a href="#purchase" className="transition hover:opacity-80">
            Способы покупки
          </a>
          <a href="#contacts" className="transition hover:opacity-80">
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="tel:+74012994222"
            className="hidden whitespace-nowrap text-[14px] font-medium uppercase md:block"
          >
            +7 4012 994 222
          </a>

          <button
            type="button"
            aria-label="Открыть меню"
            className="flex h-8 w-8 items-center justify-center border border-white/40 text-white"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}