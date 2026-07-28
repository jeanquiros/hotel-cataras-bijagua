"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const cabanas = [
  {
    name: "Volcano Suite",
    price: "$320",
    desc: "Vistas panorámicas al volcán Miravalles, terraza privada, cama king-size y ducha de lluvia interior-exterior.",
    features: ["Cama King-size", "Terraza privada", "Ducha interior-exterior", "WiFi"],
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
    fullDesc:
      "Esta suite ofrece una experiencia única con vistas ininterrumpidas al volcán Miravalles. La terraza privada cuenta con una piscina de inmersión y hamacas. El baño interior-exterior combina una ducha de lluvia con un jardín privado. Incluye minibar, café artesanal de la región y ropa de cama de algodón egipcio.",
    amenities: ["Piscina de inmersión", "Ducha de lluvia", "Minibar", "Café artesanal", "Ropa de cama premium", "Aire acondicionado", "TV", "Caja fuerte"],
  },
  {
    name: "Rainforest Bungalow",
    price: "$260",
    desc: "Rodeado de árboles centenarios, ventanales de piso a techo, hamaca en el porche y baño al aire libre.",
    features: ["Ventanales piso a techo", "Hamaca", "Baño al aire libre", "Mini bar"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    fullDesc:
      "Sumergido en el bosque, este bungalow te conecta con la naturaleza sin sacrificar el confort. Los ventanales de piso a techo enmarcan la selva. El porche con hamaca es perfecto para la siesta. El baño al aire libre te permite bañarte bajo el cielo estrellado. Incluye cafetera y productos de bienvenida.",
    amenities: ["Hamaca", "Baño al aire libre", "Cafetera", "Productos de bienvenida", "Ventilador de techo", "Cama Queen-size", "Mosquitero", "Secador de pelo"],
  },
  {
    name: "Celeste Suite",
    price: "$380",
    desc: "Inspirada en el color legendario del río, tina de hidromasaje con vista al dosel y amenidades premium.",
    features: ["Tina de hidromasaje", "Vista al dosel", "Amenidades premium", "Aire acondicionado"],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
    fullDesc:
      "Nuestra suite más exclusiva, decorada en tonos aqua que evocan el Río Celeste. La tina de hidromasaje frente al ventanal ofrece vistas al dosel del bosque. Incluye amenities de lujo, bata y pantuflas, y un servicio de bienvenida con frutas frescas y vino. La cama king-size con dosel completa la experiencia.",
    amenities: ["Tina de hidromasaje", "Vista al dosel", "Bata y pantuflas", "Servicio de bienvenida", "Cama King-size con dosel", "Aire acondicionado", "TV", "Mini bar"],
  },
];

export default function CabanasDetail() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-luxury-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Cabañas
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal">
            Elige tu espacio
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cabanas.map((c, i) => (
            <div key={c.name} className="bg-white shadow-sm">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url('${c.image}')` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-luxury-charcoal">{c.name}</h3>
                  <span className="text-luxury-gold font-heading text-lg font-bold">{c.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.desc}</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {c.features.map((f) => (
                    <li key={f} className="text-xs bg-luxury-warm px-3 py-1 text-gray-600">
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex items-center gap-2 text-luxury-gold text-sm font-medium uppercase tracking-widest hover:text-luxury-gold-dark transition-colors"
                >
                  {expanded === i ? "Ocultar detalles" : "Ver detalles"}
                  {expanded === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {expanded === i && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.fullDesc}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Amenidades</p>
                    <ul className="grid grid-cols-2 gap-1">
                      {c.amenities.map((a) => (
                        <li key={a} className="text-xs text-gray-600 flex items-center gap-1.5">
                          <span className="text-luxury-gold">•</span> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
