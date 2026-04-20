"use client";

function TelegramIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path
        d="M28.7 8.2 24.8 27c-.3 1.3-1.1 1.6-2.2 1l-6.1-4.5-2.9 2.8c-.3.3-.6.6-1.2.6l.4-6.3 11.5-10.4c.5-.5-.1-.7-.8-.2l-14.2 9-6.1-1.9c-1.3-.4-1.4-1.3.3-2L27 6c1.1-.4 2 .3 1.7 2.2Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function VkIcon() {
  return (
    <svg width="42" height="25" viewBox="0 0 42 25" fill="none">
      <path
        d="M1.9 1.2C2.2.8 2.6.6 3.2.6h4.1c.3 0 .6.1.8.3.2.2.4.4.5.7 1 2.5 2 4.7 3.1 6.6 1.1 1.9 1.9 2.9 2.4 2.9.2 0 .4-.1.5-.4.1-.3.2-.7.2-1.4V2.2c0-.5.2-.9.5-1.2.3-.3.7-.4 1.2-.4h6.4c.4 0 .8.1 1 .4.2.2.3.5.3.9v10.2c0 .3 0 .6.1.7.1.2.2.2.4.2.3 0 .8-.4 1.6-1.3.8-.8 1.7-2 2.8-3.5 1.1-1.5 2.1-3.2 3.1-5 .2-.4.4-.7.7-.9.3-.2.6-.3 1-.3h4.1c.6 0 1 .2 1.2.5.2.4.2.8 0 1.4-.3 1-.9 2.1-1.7 3.4-.8 1.3-1.7 2.5-2.6 3.7-.9 1.2-1.4 1.9-1.4 2.2 0 .2.1.5.4.8.3.3.7.7 1.3 1.2.6.5 1.1 1 1.5 1.4 1.8 1.7 3.1 3.2 3.9 4.4.2.3.3.6.3 1 0 .4-.2.7-.5 1-.3.3-.7.4-1.2.4h-4.6c-.7 0-1.4-.2-2-.7-.7-.5-1.4-1.1-2.1-1.9-.7-.8-1.3-1.4-1.8-1.9-.5-.5-.9-.7-1.2-.7-.3 0-.6.1-.8.4-.2.3-.3.7-.3 1.3v2.5c0 .5-.2.9-.5 1.2-.3.3-.7.4-1.2.4h-2.9c-2.2 0-4.3-.5-6.2-1.5-1.9-1-3.6-2.4-5.1-4.2-1.5-1.8-2.8-3.7-3.9-5.9C2.5 9.6 1.5 7.3.8 5 .6 4.4.6 4 .9 3.6Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default function Contacts() {
  return (
    <section className="bg-[#FFFFFF] pt-0">
      <div className="h-[1px] w-full bg-[#DAD7D0]" />

      <div className="w-full px-[20px] pt-[18px]">
        <p className="text-[16px] font-medium leading-[1.1] tracking-[-0.02em] text-[#8A8A8A]">
          Офис продаж
        </p>

        <div className="mt-[6px] ml-[527px] max-w-[1033px]">
          <h2 className="text-[56px] font-medium leading-[0.88] tracking-[-0.06em] text-[#1F1F1A] md:text-[88px]">
            + 7 4012 994 222
          </h2>

          <button
            type="button"
            className="mt-[34px] inline-flex h-[40px] items-center justify-center border border-[#DAD7D0] px-[20px] text-[14px] font-medium uppercase tracking-[-0.01em] text-[#1F1F1A] transition hover:bg-white"
          >
            Записаться на встречу
          </button>

          <div className="mt-[120px]">
            <div className="grid grid-cols-[506px_1fr] gap-x-[20px] border-t border-[#DAD7D0] py-[24px]">
              <div>
                <p className="text-[22px] font-medium leading-[1.1] tracking-[-0.03em] text-[#1F1F1A]">
                  ул. Костромская, 10, Калининград
                </p>
              </div>
              <div>
                <p className="text-[16px] leading-[1.2] tracking-[-0.02em] text-[#1F1F1A]">
                  Адрес
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[506px_1fr] gap-x-[20px] border-t border-[#DAD7D0] py-[24px]">
              <div>
                <p className="text-[22px] font-medium leading-[1.1] tracking-[-0.03em] text-[#1F1F1A]">
                  Пн–Пт: 09:00 — 19:00, Сб–Вс: 10:00 — 18:00
                </p>
              </div>
              <div>
                <p className="text-[16px] leading-[1.2] tracking-[-0.02em] text-[#1F1F1A]">
                  Режим работы
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[506px_1fr] gap-x-[20px] border-t border-[#DAD7D0] py-[24px]">
              <div>
                <p className="text-[22px] font-medium leading-[1.1] tracking-[-0.03em] text-[#1F1F1A]">
                  10:00 — 20:00
                </p>
              </div>
              <div>
                <p className="text-[16px] leading-[1.2] tracking-[-0.02em] text-[#1F1F1A]">
                  Принимаем звонки
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[62px] flex items-center gap-[18px]">
            <a
              href="#"
              aria-label="Telegram"
              className="transition hover:opacity-70"
            >
              <TelegramIcon />
            </a>

            <a
              href="#"
              aria-label="VK"
              className="transition hover:opacity-70"
            >
              <VkIcon />
            </a>
          </div>
        </div>

        <div className="h-[180px]" />
      </div>
    </section>
  );
}