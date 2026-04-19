import Image from "next/image";

const progressItems = [
  {
    title: "Монолитные работы",
    status: "Выполнено на 100%",
    image: "/images/progress-1.jpg",
  },
  {
    title: "Фасадные решения",
    status: "В процессе",
    image: "/images/progress-2.jpg",
  },
  {
    title: "Благоустройство территории",
    status: "Следующий этап",
    image: "/images/progress-3.jpg",
  },
];

export default function ConstructionProgress() {
  return (
    <section className="bg-[#f5f3ee] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-[40px] font-medium leading-[1.02] tracking-[-0.04em] text-[#1e1e1e] md:text-[80px]">
            Динамика строительства
          </h2>
          <p className="text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[#1e1e1e]">
            Сдача проекта II квартал 2028
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {progressItems.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden border border-[#e1e3e3] bg-white"
            >
              <div className="relative aspect-[507/340] bg-[#d8d2c8]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <h3 className="text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1e1e1e]">
                    {item.title}
                  </h3>
                  <span className="text-[12px] text-[#8e8e8e]">
                    0{index + 1}
                  </span>
                </div>

                <p className="text-[16px] leading-[1.5] tracking-[-0.02em] text-[#1e1e1e]">
                  {item.status}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}