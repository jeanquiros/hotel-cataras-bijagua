import Link from "next/link";
import { cabanas } from "@/data/cabanas";

export default function CabanasDetail() {
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
          {cabanas.map((c) => (
            <div key={c.slug} className="bg-white shadow-sm">
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
                <Link
                  href={`/cabanas/${c.slug}`}
                  className="inline-block w-full text-center border-2 border-luxury-gold text-luxury-gold px-6 py-2 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
