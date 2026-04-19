"use client";

type LeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-5">
      <div className="relative w-full max-w-[560px] bg-white p-6 md:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-[24px] leading-none text-[#1e1e1e]"
          aria-label="Закрыть"
        >
          ×
        </button>

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
            alert("Форма пока без отправки. Позже подключим получение заявок.");
            onClose();
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
            placeholder="Телефон"
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
      </div>
    </div>
  );
}