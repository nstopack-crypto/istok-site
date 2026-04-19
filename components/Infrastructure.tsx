"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryItem = {
  title: string;
  countLabel: string;
  preview: string;
  images: string[];
};

const galleries: GalleryItem[] = [
  {
    title: "Комната для йоги и танцев",
    countLabel: "8 фото",
    preview: "/images/infra-yoga-cover.jpg",
    images: [
      "/images/infra-yoga-1.jpg",
      "/images/infra-yoga-2.jpg",
      "/images/infra-yoga-3.jpg",
      "/images/infra-yoga-4.jpg",
      "/images/infra-yoga-5.jpg",
      "/images/infra-yoga-6.jpg",
      "/images/infra-yoga-7.jpg",
      "/images/infra-yoga-8.jpg",
    ],
  },
  {
    title: "Коворкинг и конференц-зал",
    countLabel: "8 фото",
    preview: "/images/infra-coworking-cover.jpg",
    images: [
      "/images/infra-coworking-1.jpg",
      "/images/infra-coworking-2.jpg",
      "/images/infra-coworking-3.jpg",
      "/images/infra-coworking-4.jpg",
      "/images/infra-coworking-5.jpg",
      "/images/infra-coworking-6.jpg",
      "/images/infra-coworking-7.jpg",
      "/images/infra-coworking-8.jpg",
    ],
  },
  {
    title: "Комната матери и ребенка",
    countLabel: "8 фото",
    preview: "/images/infra-mother-cover.jpg",
    images: [
      "/images/infra-mother-1.jpg",
      "/images/infra-mother-2.jpg",
      "/images/infra-mother-3.jpg",
      "/images/infra-mother-4.jpg",
      "/images/infra-mother-5.jpg",
      "/images/infra-mother-6.jpg",
      "/images/infra-mother-7.jpg",
      "/images/infra-mother-8.jpg",
    ],
  },
  {
    title: "Лобби и гостевая зона",
    countLabel: "8 фото",
    preview: "/images/infra-lobby-cover.jpg",
    images: [
      "/images/infra-lobby-1.jpg",
      "/images/infra-lobby-2.jpg",
      "/images/infra-lobby-3.jpg",
      "/images/infra-lobby-4.jpg",
      "/images/infra-lobby-5.jpg",
      "/images/infra-lobby-6.jpg",
      "/images/infra-lobby-7.jpg",
      "/images/infra-lobby-8.jpg",
    ],
  },
];

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

export default function Infrastructure() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(
    null,
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const cardsPerView = 3;
  const maxSlideIndex = Math.max(0, galleries.length - cardsPerView);

  const visibleCards = useMemo(() => {
    return galleries.slice(slideIndex, slideIndex + cardsPerView);
  }, [slideIndex]);

  const activeGallery =
    activeGalleryIndex !== null ? galleries[activeGalleryIndex] : null;

  const activeImage = useMemo(() => {
    if (!activeGallery) return null;
    return activeGallery.images[activeImageIndex];
  }, [activeGallery, activeImageIndex]);

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

  const showPrevCards = () => {
    setSlideIndex((prev) => Math.max(0, prev - 1));
  };

  const showNextCards = () => {
    setSlideIndex((prev) => Math.min(maxSlideIndex, prev + 1));
  };

  const currentFrom = String(slideIndex + 1).padStart(2, "0");
  const currentTo = String(
    Math.min(slideIndex + cardsPerView, galleries.length),
  ).padStart(2, "0");

  return (
    <>
      <section className="bg-[#f5f3ee] py-[20px] md:py-[24px]">
        <div className="w-full px-[20px]">
          <div className="mb-[150px] md:mb-[190px]">
            <h2 className="max-w-[980px] text-[54px] font-medium leading-[0.92] tracking-[-0.06em] text-[#1f1f1a] md:text-[88px]">
              Клубная инфраструктура
            </h2>

            <p className="mt-[22px] max-w-[360px] text-[16px] font-medium leading-[1.25] tracking-[-0.02em] text-[#1f1f1a] md:text-[18px]">
              Каждая деталь создана для удобства резидентов, а их желания уже
              предугаданы.
            </p>
          </div>

          <div className="mb-[28px] flex items-center justify-between">
            <p className="text-[18px] leading-none text-[#8A8A8A]">
              {currentFrom} — {currentTo}
            </p>

            <div className="flex items-center gap-[20px]">
              <button
                type="button"
                onClick={showPrevCards}
                className="transition hover:opacity-60 disabled:opacity-30"
                aria-label="Назад"
                disabled={slideIndex === 0}
              >
                <ArrowLeftNav />
              </button>
              <button
                type="button"
                onClick={showNextCards}
                className="transition hover:opacity-60 disabled:opacity-30"
                aria-label="Вперёд"
                disabled={slideIndex === maxSlideIndex}
              >
                <ArrowRightNav />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-[20px] gap-y-[32px] md:grid-cols-[1fr_1fr_1fr]">
            {visibleCards.map((gallery) => {
              const realIndex = galleries.findIndex((g) => g.title === gallery.title);

              return (
                <article key={gallery.title}>
                  <button
                    type="button"
                    onClick={() => openGallery(realIndex)}
                    className="group block w-full text-left"
                  >
                    <div className="relative mb-[14px] aspect-[506/373] w-full overflow-hidden bg-[#e8e3dc]">
                      <Image
                        src={gallery.preview}
                        alt={gallery.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="flex items-start justify-between gap-[16px]">
                      <div>
                        <h3 className="text-[18px] font-medium leading-[1.18] tracking-[-0.02em] text-[#1f1f1a]">
                          {gallery.title}
                        </h3>
                        <p className="mt-[4px] text-[18px] leading-[1.18] text-[#8A8A8A]">
                          {gallery.countLabel}
                        </p>
                      </div>

                      <span className="mt-[2px] flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#1f1f1a] transition group-hover:scale-105">
                        <ArrowRightSmall />
                      </span>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>

          <div className="ml-auto mt-[140px] max-w-[1080px] md:mt-[170px]">
            <p className="max-w-[1080px] text-[34px] font-medium leading-[1.02] tracking-[-0.05em] text-[#1f1f1a] md:text-[62px]">
              Здесь архитектура не спорит с природой, а становится её частью.
              Невысокие дома, спокойные цвета фасадов, зелёные дворы, маршруты
              для прогулок и места для отдыха — всё продумано так, чтобы жизнь
              текла спокойно и естественно.
            </p>

            <a
              href="#"
              className="mt-[30px] inline-block text-[16px] font-medium uppercase tracking-[-0.01em] text-[#1f1f1a] underline decoration-[#cfd3b3] underline-offset-[6px]"
            >
              3D-тур по лобби
            </a>
          </div>
        </div>
      </section>

      {activeGallery && activeImage && (
        <div className="fixed inset-0 z-[100] bg-[#f5f3ee]">
          <div className="h-full overflow-auto px-[20px] py-[20px]">
            <div className="w-full">
              <div className="mb-[20px] flex items-start justify-between gap-[20px]">
                <h3 className="max-w-[220px] text-[22px] font-medium leading-[1.08] tracking-[-0.03em] text-[#1f1f1a] md:text-[28px]">
                  {activeGallery.title}
                </h3>

                <button
                  type="button"
                  onClick={closeGallery}
                  className="transition hover:opacity-60"
                  aria-label="Закрыть"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="mb-[28px] flex justify-center">
                <div className="relative aspect-[640/720] w-full max-w-[640px] overflow-hidden bg-[#ebe6df] md:max-w-[760px]">
                  <Image
                    src={activeImage}
                    alt={activeGallery.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 760px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center gap-[14px] overflow-x-auto pb-[6px]">
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
                        ? "border-[#1f1f1a]"
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
          </div>
        </div>
      )}
    </>
  );
}