const experiencias = [
  { title: "Cataratas", icon: "🌊" },
  { title: "Río Celeste", icon: "💎" },
  { title: "Aves", icon: "🦜" },
  { title: "Comida", icon: "🍃" },
  { title: "Aguas Termales", icon: "♨️" },
  { title: "Yoga", icon: "🧘" },
];

const fotos = [
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562771409-1a2b23f0e8f3?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1949&auto=format&fit=crop",
];

export default function ExperienciasGallery() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Experiencias
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal">
            Vive la naturaleza
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16">
          {experiencias.map((e) => (
            <div key={e.title} className="text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-luxury-warm flex items-center justify-center text-2xl group-hover:bg-luxury-gold/20 transition-colors">
                {e.icon}
              </div>
              <p className="text-xs text-gray-600 mt-2 font-medium">{e.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-14">
          <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Galería
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal">
            Momentos
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {fotos.map((src, i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-cover bg-center hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
