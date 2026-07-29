"use client";

import Link from "next/link";
import { cabanas } from "@/data/cabanas";
import { FadeUp, StaggerContainer, StaggerItem } from "./Animations";

export default function CabanasDetail() {
  return (
    <section className="py-24 px-6 bg-luxury-warm">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
              Cabañas
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal">
              Elige tu espacio
            </h2>
            <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
          </div>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {cabanas.map((c) => (
            <StaggerItem key={c.slug}>
              <Link href={`/cabanas/${c.slug}`} className="group block">
                <div className="bg-white shadow-sm transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl group-hover:border-luxury-gold border border-transparent">
                  <div
                    className="aspect-[4/3] bg-cover bg-center"
                    style={{ backgroundImage: `url('${c.image}')` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-heading font-bold text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-500">{c.name}</h3>
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
                    <span className="inline-block w-full text-center border-2 border-luxury-gold text-luxury-gold px-6 py-2 text-sm font-medium uppercase tracking-widest group-hover:bg-luxury-gold group-hover:text-white transition-all duration-300">
                      Ver detalles
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
