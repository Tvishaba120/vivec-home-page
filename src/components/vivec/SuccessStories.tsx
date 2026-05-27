const photos = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
];

export function SuccessStories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-brand-green text-sm font-semibold tracking-widest mb-3 uppercase">OUR CAMPUS HAS A LOT TO OFFER FOR OUR STUDENTS</div>
          <h2 className="text-4xl md:text-5xl font-semibold uppercase" style={{ color: "#1A1A1A" }}>OUR SUCCESS STORIES</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
          <img src={photos[0]} alt="" className="col-span-1 row-span-2 w-full h-full object-cover rounded-lg" />
          <img src={photos[1]} alt="" className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg" />
          <img src={photos[2]} alt="" className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg" />
          <img src={photos[3]} alt="" className="col-span-1 row-span-2 w-full h-full object-cover rounded-lg" />
          <img src={photos[4]} alt="" className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg" />
          <img src={photos[5]} alt="" className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg" />
          <img src={photos[6]} alt="" className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg" />
          <img src={photos[7]} alt="" className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg" />
          <img src={photos[8]} alt="" className="col-span-2 row-span-1 w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
}
