"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type ProgressItem = {
  title: string;
  countLabel: string;
  preview: string;
  images: string[];
};

const progressItems: ProgressItem[] = [
  {
    title: "II квартал 2026",
    countLabel: "1 видео",
    preview: "/images/progress-1-cover.jpg",
    images: [
      "/images/progress-1-1.jpg",
      "/images/progress-1-2.jpg",
      "/images/progress-1-3.jpg",
      "/images/progress-1-4.jpg",
    ],
  },
  {
    title: "II квартал 2026",
    countLabel: "1 видео",
    preview: "/images/progress-2-cover.jpg",
    images: [
      "/images/progress-2-1.jpg",
      "/images/progress-2-2.jpg",
      "/images/progress-2-3.jpg",
      "/images/progress-2-4.jpg",
    ],
  },
  {
    title: "II квартал 2026",
    countLabel: "1 видео",
    preview: "/images/progress-3-cover.jpg",
    images: [
      "/images/progress-3-1.jpg",
      "/images/progress-3-2.jpg",
      "/images/progress-3-3.jpg",
      "/images/progress-3-4.jpg",
    ],
  },
  {
    title: "I квартал 2026",
    countLabel: "1 видео",
    preview: "/images/progress-4-cover.jpg",
    images: [
      "/images/progress-4-1.jpg",
      "/images/progress-4-2.jpg",
      "/images/progress-4-3.jpg",
      "/images/progress-4-4.jpg",
    ],
  },
];

function ArrowLeftNav() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M17 11H5"
        stroke="#1F1F1A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 6L5 11L10 16"
        stroke="#1F1F1A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightNav() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M5 11H17"
        stroke="#1F1F1A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 6L17 11L12 16"
        stroke="#1F1F1A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightSmall() {
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

function ArrowLeftCircle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M19 12H5"
        stroke="#1F1F1A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 6L5 12L11 18"
        stroke="#1F1F1A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightCircle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12H19"
        stroke="#1F1F1A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6L19 12L13 18"
        stroke="#1F1F1A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path
        d="M7 7L19 19"
        stroke="#8A8A8A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M19 7L7 19"
        stroke="#8A8A8A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ConstructionProgress() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(
    null,
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isLeftSide, setIsLeftSide] = useState(true);

  const cardsPerView = 3;
  const maxSlideIndex = Math.max(0, progressItems.length - cardsPerView);

  const visibleCards = useMemo(() => {
    return progressItems.slice(slideIndex, slideIndex + cardsPerView);
  }, [slideIndex]);

  const activeGallery =
    activeGalleryIndex !== null ? progressItems[activeGalleryIndex] : null;

  const activeImage = useMemo(() => {
    if (!activeGallery) return null;
    return activeGallery.images[activeImageIndex];
  }, [activeGallery, activeImageIndex]);

  const currentFrom = String(slideIndex + 1).padStart(2, "0");
  const currentTo = String(
    Math.min(slideIndex + cardsPerView, progressItems.length),
  ).padStart(2, "0");

  const openGallery = (galleryIndex: number) => {
    setActiveGalleryIndex(galleryIndex);
    setActiveImageIndex(0);
  };

  const closeGallery = () => {
    setActiveGalleryIndex(null);
    setActiveImageIndex(0);
  };

  const showPrevImage = () => {
    if (!activeGallery) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? activeGallery.images.length - 1 : prev - 1,
    );
  };

  const showNextImage = () => {
    if (!activeGallery) return;
    setActiveImageIndex((prev) =>
      prev === activeGallery.images.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePopupMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCursorX(x);
    setCursorY(y);
    setIsLeftSide(x < rect.width / 2);
  };

  const handlePopupClick = () => {
    if (!activeGallery) return;
    if (isLeftSide) {
      showPrevImage();
    } else {
      showNextImage();
    }
  };

  return (
    <>
      <section className="bg-[#F6F6F2] pt-0">
        <div className="h-[1px] w-full bg-[#DAD7D0]" />

        <div className="w-full px-[20px] pt-[34px]">
          <div>
            <h2 className="max-w-[980px] text-[56px] font-medium leading-[0.9] tracking-[-0.06em] text-[#1F1F1A] md:text-[88px]">
              Динамика строительства
            </h2>

            <p className="mt-[22px] text-[18px] font-medium leading-[1.15] tracking-[-0.02em] text-[#1F1F1A]">
              Сдача проекта
              <br />
              II квартал 2028
            </p>
          </div>

          <div className="mt-[165px] flex items-center justify-between">
            <p className="text-[18px] leading-none text-[#8A8A8A]">
              {currentFrom} — {currentTo}
            </p>

            <div className="flex items-center gap-[20px]">
              <button
                type="button"
                onClick={() => setSlideIndex((prev) => Math.max(0, prev - 1))}
                className="transition hover:opacity-60 disabled:opacity-30"
                aria-label="Назад"
                disabled={slideIndex === 0}
              >
                <ArrowLeftNav />
              </button>
              <button
                type="button"
                onClick={() =>
                  setSlideIndex((prev) => Math.min(maxSlideIndex, prev + 1))
                }
                className="transition hover:opacity-60 disabled:opacity-30"
                aria-label="Вперёд"
                disabled={slideIndex === maxSlideIndex}
              >
                <ArrowRightNav />
              </button>
            </div>
          </div>

          <div className="mt-[28px] grid grid-cols-1 gap-[20px] md:grid-cols-3">
            {visibleCards.map((item) => {
              const realIndex = progressItems.findIndex(
                (g) =>
                  g.title === item.title &&
                  g.preview === item.preview &&
                  g.countLabel === item.countLabel,
              );

              return (
                <article
                  key={`${item.title}-${item.preview}`}
                  className="group relative h-[340px] border-l border-[#DAD7D0] pl-[18px]"
                >
                  <button
                    type="button"
                    onClick={() => openGallery(realIndex)}
                    className="block h-full w-full text-left"
                  >
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <h3 className="text-[18px] font-medium leading-[1.15] tracking-[-0.02em] text-[#1F1F1A]">
                          {item.title}
                        </h3>
                        <p className="mt-[4px] text-[18px] leading-[1.15] text-[#8A8A8A]">
                          {item.countLabel}
                        </p>
                      </div>

                      <div className="relative ml-auto h-[340px] w-[245px] overflow-hidden">
                        <Image
                          src={item.preview}
                          alt={item.title}
                          fill
                          sizes="245px"
                          className="object-cover transition duration-500 group-hover:scale-[1.02]"
                        />
                      </div>

                      <span className="absolute bottom-[12px] left-[18px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#1F1F1A] transition-transform duration-300 group-hover:scale-105">
                        <ArrowRightSmall />
                      </span>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>

          <div className="h-[340px]" />
        </div>
      </section>

      {activeGallery && activeImage && (
        <div className="fixed inset-0 z-[100] bg-[#F6F6F2]">
          <div
            className="relative h-full overflow-auto px-[20px] py-[20px] cursor-none"
            onMouseMove={handlePopupMouseMove}
            onMouseEnter={() => setCursorVisible(true)}
            onMouseLeave={() => setCursorVisible(false)}
            onClick={handlePopupClick}
          >
            <div className="w-full">
              <div className="mb-[18px] flex items-start justify-between gap-[20px]">
                <h3 className="max-w-[280px] text-[22px] font-medium leading-[1.08] tracking-[-0.03em] text-[#1F1F1A] md:text-[28px]">
                  {activeGallery.title}
                </h3>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeGallery();
                  }}
                  className="relative z-[120] -mr-[8px] -mt-[8px] flex h-[44px] w-[44px] items-center justify-center transition hover:opacity-60"
                  aria-label="Закрыть"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="mb-[24px] flex justify-center">
                <div
                  className="w-full max-w-[760px]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={activeImage}
                    alt={activeGallery.title}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div
                className="flex items-center gap-[14px] overflow-x-auto pb-[6px]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={showPrevImage}
                  className="mr-[10px] flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-full border border-[#d6d6d6] bg-transparent transition hover:border-[#bcbcbc]"
                  aria-label="Предыдущее фото"
                >
                  <ArrowLeftCircle />
                </button>

                {activeGallery.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative h-[98px] w-[180px] shrink-0 overflow-hidden border transition ${
                      index === activeImageIndex
                        ? "border-[#1F1F1A]"
                        : "border-transparent opacity-90 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${activeGallery.title} ${index + 1}`}
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {cursorVisible && (
              <div
                className="pointer-events-none absolute z-[110] hidden h-[82px] w-[82px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d6d6d6] bg-[#F6F6F2] md:flex"
                style={{
                  left: cursorX,
                  top: cursorY,
                }}
              >
                {isLeftSide ? <ArrowLeftCircle /> : <ArrowRightCircle />}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}