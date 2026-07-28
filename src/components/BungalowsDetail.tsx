const bungalows = [
  {
    name: "Volcano Suite",
    price: "$320",
    desc: "Vistas panorámicas al volcán Miravalles, terraza privada, cama king-size y ducha de lluvia interior-exterior.",
    features: ["Cama King-size", "Terraza privada", "Ducha interior-exterior", "WiFi"],
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Rainforest Bungalow",
    price: "$260",
    desc: "Rodeado de árboles centenarios, ventanales de piso a techo, hamaca en el porche y baño al aire libre.",
    features: ["Ventanales piso a techo", "Hamaca", "Baño al aire libre", "Mini bar"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Celeste Suite",
    price: "$380",
    desc: "Inspirada en el color legendario del río, tina de hidromasaje con vista al dosel y amenidades premium.",
    features: ["Tina de hidromasaje", "Vista al dosel", "Amenidades premium", "Aire acondicionado"],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function BungalowsDetail() {
  return (
    <section className="py-24 px-6 bg-luxury-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Bungalows
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal">
            Elige tu espacio
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bungalows.map((b) => (
            <div key={b.name} className="bg-white shadow-sm">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url('${b.image}')` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-luxury-charcoal">{b.name}</h3>
                  <span className="text-luxury-gold font-heading text-lg font-bold">{b.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{b.desc}</p>
                <ul className="flex flex-wrap gap-2 mb-5">
                  {b.features.map((f) => (
                    <li key={f} className="text-xs bg-luxury-warm px-3 py-1 text-gray-600">
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+50689374687"
                  className="inline-block w-full text-center border-2 border-luxury-gold text-luxury-gold px-6 py-2 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
                >
                  Reservar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
