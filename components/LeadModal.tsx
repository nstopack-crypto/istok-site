"use client";

import { useState } from "react";

type LeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (!digits) return "";

  const normalized = digits.startsWith("8")
    ? "7" + digits.slice(1)
    : digits.startsWith("7")
      ? digits
      : "7" + digits;

  const p = normalized.slice(0, 11);

  const parts = [
    p.slice(0, 1),
    p.slice(1, 4),
    p.slice(4, 7),
    p.slice(7, 9),
    p.slice(9, 11),
  ];

  let result = `+${parts[0]}`;
  if (parts[1]) result += ` (${parts[1]}`;
  if (parts[1]?.length === 3) result += `)`;
  if (parts[2]) result += ` ${parts[2]}`;
  if (parts[3]) result += `-${parts[3]}`;
  if (parts[4]) result += `-${parts[4]}`;

  return result;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-5">
      <div className="relative w-full max-w-[560px] bg-white p-6 md:p-8">
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setPhone("");
            onClose();
          }}
          className="absolute right-4 top-4 text-[24px] leading-none text-[#1e1e1e]"
          aria-label="Закрыть"
        >
          ×
        </button>

        {!isSubmitted ? (
          <>
            <h3 className="mb-4 text-[32px] font-medium leading-[1.05] tracking-[-0.03em] text-[#1e1e1e] md:text-[40px]">
              Оставить заявку
            </h3>

            <p className="mb-8 max-w-[420px] text-[16px] leading-[1.5] tracking-[-0.02em] text-[#1e1e1e]">
              Оставьте контакты, и мы свяжемся с вами, чтобы подобрать удобный
              сценарий покупки квартиры.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitted(true);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                className="h-[52px] w-full border border-[#e1e3e3] px-4 text-[16px] text-[#1e1e1e] outline-none placeholder:text-[#8e8e8e]"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                className="h-[52px] w-full border border-[#e1e3e3] px-4 text-[16px] text-[#1e1e1e] outline-none placeholder:text-[#8e8e8e]"
                required
              />

              <textarea
                name="comment"
                placeholder="Комментарий"
                rows={4}
                className="w-full border border-[#e1e3e3] px-4 py-3 text-[16px] text-[#1e1e1e] outline-none placeholder:text-[#8e8e8e]"
              />

              <button
                type="submit"
                className="h-[52px] w-full bg-[#dadfc5] text-[12px] font-semibold uppercase text-[#444] transition hover:opacity-90"
              >
                Отправить заявку
              </button>

              <p className="text-[12px] leading-[1.4] text-[#8e8e8e]">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </>
        ) : (
          <div className="py-10">
            <h3 className="mb-4 text-[32px] font-medium leading-[1.05] tracking-[-0.03em] text-[#1e1e1e] md:text-[40px]">
              Спасибо
            </h3>

            <p className="mb-8 max-w-[420px] text-[16px] leading-[1.5] tracking-[-0.02em] text-[#1e1e1e]">
              Форма пока работает в демонстрационном режиме. Следующим шагом
              подключим реальную отправку заявок.
            </p>

            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setPhone("");
                onClose();
              }}
              className="h-[52px] bg-[#1f1f1a] px-5 text-[12px] font-semibold uppercase text-white transition hover:opacity-90"
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}