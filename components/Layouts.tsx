"use client";

import { useMemo, useState } from "react";

type FlatType = "1k" | "2k" | "3k" | "4k" | "5k" | "6k";

type FlatCard = {
  id: number;
  type: FlatType;
  title: string;
  area: string;
  price: string;
  image: string;
  building: string;
  floor: string;
  number: string;
  delivery: string;
  features: string[];
};

const flatTypes: FlatType[] = ["1k", "2k", "3k", "4k", "5k", "6k"];

const flats: FlatCard[] = [
  {
    id: 1,
    type: "2k",
    title: "3 комнаты",
    area: "84 м²",
    price: "23 462 300 ₽",
    image: "/images/plans/plan-1.png",
    building: "1 корпус",
    floor: "2/4 этаж",
    number: "№122",
    delivery: "Сдача 2 квартал 2028",
    features: [
      "/icons/feature-1.svg",
      "/icons/feature-2.svg",
      "/icons/feature-3.svg",
      "/icons/feature-4.svg",
    ],
  },
  {
    id: 2,
    type: "2k",
    title: "3 комнаты",
    area: "84 м²",
    price: "23 462 300 ₽",
    image: "/images/plans/plan-1.png",
    building: "1 корпус",
    floor: "2/4 этаж",
    number: "№122",
    delivery: "Сдача 2 квартал 2028",
    features: [
      "/icons/feature-1.svg",
      "/icons/feature-2.svg",
      "/icons/feature-3.svg",
      "/icons/feature-4.svg",
    ],
  },
  {
    id: 3,
    type: "2k",
    title: "3 комнаты",
    area: "84 м²",
    price: "23 462 300 ₽",
    image: "/images/plans/plan-1.png",
    building: "1 корпус",
    floor: "2/4 этаж",
    number: "№122",
    delivery: "Сдача 2 квартал 2028",
    features: [
      "/icons/feature-1.svg",
      "/icons/feature-2.svg",
      "/icons/feature-3.svg",
      "/icons/feature-4.svg",
    ],
  },
];

function FavoriteButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type="button"
      aria-label="Добавить в избранное"
      onClick={() => setIsActive((prev) => !prev)}
      className="group relative flex h-8 w-8 items-center justify-center"
    >
      <img
        src={isActive ? "/icons/heart-active.svg" : "/icons/heart-default.svg"}
        alt=""
        className={`h-6 w-6 transition duration-200 ${
          !isActive ? "group-hover:opacity-0" : ""
        }`}
      />

      {!isActive && (
        <img
          src="/icons/heart-hover.svg"
          alt=""
          className="pointer-events-none absolute h-6 w-6 opacity-0 transition duration-200 group-hover:opacity-100"
        />
      )}
    </button>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      <path
        d="M18 12H6M6 12L11 7M6 12L11 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      <path
        d="M6 12H18M18 12L13 7M18 12L13 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SmallActionIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[15px] w-[15px]"
    >
      <path
        d="M7.5 3V12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M3 7.5H12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PlanningSolutionsSection() {
  const [activeType, setActiveType] = useState<FlatType>("2k");

  const filteredFlats = useMemo(() => {
    return flats.filter((flat) => flat.type === activeType);
  }, [activeType]);

  return (
    <section className="bg-[#f3f3ef] py-[56px] md:py-[72px]">
      <div className="w-full px-[20px]">
        <div className="w-full">
          <div className="mb-[110px] max-w-[430px]">
            <h2 className="text-[18px] font-[500] leading-[1.2] tracking-[-0.02em] text-[#20201c] md:text-[22px] lg:text-[24px]">
              В проекте представлено более 70 планировочных решений,
              рассчитанных на разные сценарии жизни.
            </h2>
          </div>

          <div className="mb-[34px] flex items-end justify-between gap-6">
            <div className="w-full max-w-[480px]">
              <div className="border-b border-[#d9d9d2]">
                <div className="flex items-center justify-between">
                  {flatTypes.map((type) => {
                    const isActive = activeType === type;

                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setActiveType(type)}
                        className={`relative pb-[12px] text-[15px] font-[500] leading-none tracking-[-0.02em] transition-colors md:text-[16px] ${
                          isActive
                            ? "text-[#9b9d63]"
                            : "text-[#20201c] hover:text-[#9b9d63]"
                        }`}
                      >
                        {type}
                        <span
                          className={`absolute bottom-[-1px] left-0 h-px w-full ${
                            isActive ? "bg-[#9b9d63]" : "bg-transparent"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Открыть каталог планировок"
              className="mb-[8px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center text-[#20201c] transition-opacity hover:opacity-60"
            >
              <SmallActionIcon />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-[20px] xl:grid-cols-3">
            {filteredFlats.slice(0, 3).map((flat) => (
              <article
                key={flat.id}
                className="flex min-h-[466px] flex-col border border-[#d9d9d2] bg-transparent px-[18px] pt-[18px] pb-[22px]"
              >
                <div className="mb-[10px] flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-[8px] text-[18px] font-[500] leading-[1.15] tracking-[-0.025em] text-[#20201c]">
                      {flat.title}, {flat.area}
                    </p>
                    <p className="text-[26px] font-[500] leading-none tracking-[-0.035em] text-[#20201c] md:text-[28px]">
                      {flat.price}
                    </p>
                  </div>

                  <FavoriteButton />
                </div>

                <div className="flex flex-1 items-center justify-center pt-[6px] pb-[14px]">
                  <img
                    src={flat.image}
                    alt={`${flat.title}, ${flat.area}`}
                    className="max-h-[220px] w-auto max-w-full object-contain"
                  />
                </div>

                <div className="mb-[14px] flex items-center gap-[10px]">
                  {flat.features.map((icon, index) => (
                    <img
                      key={index}
                      src={icon}
                      alt=""
                      className="h-[17px] w-[17px] object-contain opacity-60"
                    />
                  ))}
                </div>

                <div className="border-t border-[#d9d9d2] pt-[12px]">
                  <p className="mb-[6px] text-[15px] font-[400] leading-[1.25] tracking-[-0.02em] text-[#8c8c84]">
                    {flat.building}, {flat.floor}, {flat.number}
                  </p>
                  <p className="text-[17px] font-[500] leading-[1.2] tracking-[-0.025em] text-[#20201c]">
                    {flat.delivery}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-[18px] flex items-center justify-between">
            <div className="text-[17px] font-[400] leading-none tracking-[-0.02em] text-[#8c8c84]">
              03 — 04
            </div>

            <div className="flex items-center gap-[10px]">
              <button
                type="button"
                aria-label="Предыдущие карточки"
                className="inline-flex h-[28px] w-[28px] items-center justify-center text-[#20201c] transition-opacity hover:opacity-60"
              >
                <ArrowLeftIcon />
              </button>

              <button
                type="button"
                aria-label="Следующие карточки"
                className="inline-flex h-[28px] w-[28px] items-center justify-center text-[#20201c] transition-opacity hover:opacity-60"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}