const photos = [
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562771409-1a2b23f0e8f3?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1545299730-57e20f5e4d9c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1949&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal leading-tight">
            Moments at Cataras Bijagua
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-sm"
            >
              <div
                className="bg-cover bg-center w-full hover:scale-105 transition-transform duration-700 ease-out"
                style={{
                  backgroundImage: `url('${src}')`,
                  aspectRatio: i % 3 === 0 ? "3/4" : "4/3",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
