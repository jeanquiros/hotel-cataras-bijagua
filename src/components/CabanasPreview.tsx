"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "./Animations";

const preview = [
  {
    name: "Volcano Suite",
    price: "$320",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Rainforest Bungalow",
    price: "$260",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Celeste Suite",
    price: "$380",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function CabanasPreview() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
              Cabañas
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal">
              Nuestras Cabañas
            </h2>
            <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
          </div>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {preview.map((b) => (
            <StaggerItem key={b.name}>
              <Link href="/cabanas" className="group relative overflow-hidden block">
                <div
                  className="aspect-[4/5] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${b.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-heading text-xl font-bold">{b.name}</h3>
                  <p className="text-luxury-gold text-sm mt-1">{b.price} / noche</p>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="border-2 border-white text-white px-6 py-2 text-sm font-medium uppercase tracking-widest hover:bg-white hover:text-luxury-charcoal transition-colors">
                    Ver detalles
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/cabanas"
              className="inline-block border-2 border-luxury-gold text-luxury-gold px-8 py-2.5 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold hover:text-white transition-all duration-300"
            >
              Ver todos
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
