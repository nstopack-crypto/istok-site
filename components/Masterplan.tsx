const houses = [
  { name: "К1", top: "42%", left: "84%" },
  { name: "К2", top: "37%", left: "74%" },
  { name: "К3", top: "30%", left: "65%" },
  { name: "К4", top: "23%", left: "56%" },
  { name: "К5", top: "14%", left: "48%" },
  { name: "К6", top: "60%", left: "76%" },
  { name: "К7", top: "55%", left: "65%" },
  { name: "К8", top: "48%", left: "55%" },
  { name: "К9", top: "41%", left: "46%" },
  { name: "К10", top: "34%", left: "37%" },
  { name: "К11", top: "56%", left: "46%" },
  { name: "К12", top: "51%", left: "34%" },
  { name: "К13", top: "42%", left: "22%" },
  { name: "К14", top: "48%", left: "12%" },
  { name: "К15", top: "69%", left: "21%" },
  { name: "К16", top: "65%", left: "33%" },
  { name: "К17", top: "82%", left: "15%" },
];

export default function Masterplan() {
  return (
    <section className="bg-[#f5f3ee] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="relative overflow-hidden bg-[#d7d2c9]">
          <div className="relative h-[440px] w-full md:h-[732px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_30%),linear-gradient(135deg,#d8d3ca,#c8c1b4)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0.05))]" />

            <div className="absolute left-[6%] top-[9%] h-[78%] w-[82%] rounded-[999px] border border-white/25" />
            <div className="absolute left-[13%] top-[16%] h-[62%] w-[68%] rounded-[999px] border border-white/18" />

            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              <button className="rounded-full border border-[#1f1f1a]/10 bg-white px-4 py-2 text-[13px] text-[#1f1f1a] shadow-sm">
                Дома
              </button>
              <button className="rounded-full border border-[#1f1f1a]/10 bg-white/70 px-4 py-2 text-[13px] text-[#1f1f1a]">
                Инфраструктура
              </button>
              <button className="rounded-full border border-[#1f1f1a]/10 bg-white/70 px-4 py-2 text-[13px] text-[#1f1f1a]">
                Благоустройство
              </button>
            </div>

            {houses.map((house) => (
              <button
                key={house.name}
                type="button"
                className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d9d9d9] bg-white text-[12px] font-medium text-[#1f1f1a] shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition hover:scale-105"
                style={{ top: house.top, left: house.left }}
              >
                {house.name}
              </button>
            ))}

            {[
              { top: "28%", left: "52%" },
              { top: "68%", left: "70%" },
              { top: "48%", left: "31%" },
              { top: "74%", left: "60%" },
              { top: "30%", left: "16%" },
            ].map((point, index) => (
              <div
                key={index}
                className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1f1f1a] text-white shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
                style={{ top: point.top, left: point.left }}
              >
                •
              </div>
            ))}

            <div className="absolute bottom-[6%] left-[5%] text-[14px] tracking-[-0.02em] text-[#1f1f1a]">
              озеро «Чистое»
            </div>

            <div className="absolute bottom-[5%] right-[6%] text-right text-[14px] tracking-[-0.02em] text-[#1f1f1a]">
              Выезд на Московский проспект
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}