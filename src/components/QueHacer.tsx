"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./Animations";

const actividades = [
  {
    titulo: "Sendero Cataratas Bijagua",
    desc: "Caminata de ida y vuelta de 4.7 km hasta una impresionante cascada de aguas cristalinas. Dificultad moderada, aproximadamente 2 horas.",
    nivel: "Moderado",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    titulo: "Río Celeste",
    desc: "A solo 20 minutos, el Parque Nacional Volcán Tenorio alberga el legendario río de aguas turquesas, uno de los más bellos del mundo.",
    nivel: "Fácil",
    image:
      "https://images.unsplash.com/photo-1562771409-1a2b23f0e8f3?q=80&w=1974&auto=format&fit=crop",
  },
  {
    titulo: "Observación de Aves",
    desc: "Descubrí tucanes, motmots y el resplandeciente quetzal en nuestros senderos o desde la comodidad de tu terraza.",
    nivel: "Fácil",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
  },
  {
    titulo: "Caminata Nocturna",
    desc: "Explorá el bosque bajo las estrellas. Descubrí la fauna nocturna, ranas de colores y el sonido de la selva viva.",
    nivel: "Moderado",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1949&auto=format&fit=crop",
  },
];

const fotos = [
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562771409-1a2b23f0e8f3?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1949&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526778548025-fa2f459b5fe5?q=80&w=2066&auto=format&fit=crop",
];

export default function QueHacer() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
              Qué hacer
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal">
              Actividades y Aventuras
            </h2>
            <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
          </div>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-20">
          {actividades.map((a) => (
            <StaggerItem key={a.titulo}>
              <div className="flex gap-5 group">
                <div
                  className="w-32 h-32 shrink-0 bg-cover bg-center rounded-sm"
                  style={{ backgroundImage: `url('${a.image}')` }}
                />
                <div>
                  <h3 className="font-heading text-lg font-bold text-luxury-charcoal mb-1">{a.titulo}</h3>
                  <span className="text-xs text-luxury-gold uppercase tracking-wider">{a.nivel}</span>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">{a.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp>
          <div className="text-center mb-10">
            <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
              Galería
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal">
              Fotos del Lugar
            </h2>
            <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
