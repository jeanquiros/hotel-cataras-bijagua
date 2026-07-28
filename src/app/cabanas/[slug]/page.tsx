import Link from "next/link";
import { notFound } from "next/navigation";
import { cabanas } from "@/data/cabanas";
import { ArrowLeft, Wifi, Wind, Coffee, Shield, Tv, Bath, Snowflake, Martini } from "lucide-react";

const amenityIcons: Record<string, React.ReactNode> = {
  "Cama King-size": <Wind size={16} />,
  "Cama King-size con dosel": <Wind size={16} />,
  "Cama Queen-size": <Wind size={16} />,
  "Terraza privada": <Wind size={16} />,
  "Ducha interior-exterior": <Bath size={16} />,
  "Ducha de lluvia": <Bath size={16} />,
  WiFi: <Wifi size={16} />,
  "Aire acondicionado": <Snowflake size={16} />,
  Minibar: <Martini size={16} />,
  "Mini bar": <Martini size={16} />,
  "Café artesanal": <Coffee size={16} />,
  "Ropa de cama premium": <Wind size={16} />,
  TV: <Tv size={16} />,
  "Caja fuerte": <Shield size={16} />,
  "Piscina de inmersión": <Bath size={16} />,
  Hamaca: <Wind size={16} />,
  "Baño al aire libre": <Bath size={16} />,
  Cafetera: <Coffee size={16} />,
  "Productos de bienvenida": <Coffee size={16} />,
  "Ventilador de techo": <Wind size={16} />,
  Mosquitero: <Wind size={16} />,
  "Secador de pelo": <Wind size={16} />,
  "Bata y pantuflas": <Wind size={16} />,
  "Servicio de bienvenida": <Coffee size={16} />,
  "Vista al dosel": <Wind size={16} />,
  "Tina de hidromasaje": <Bath size={16} />,
};

export function generateStaticParams() {
  return cabanas.map((c) => ({ slug: c.slug }));
}

export default async function CabanaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cabana = cabanas.find((c) => c.slug === slug);
  if (!cabana) notFound();

  return (
    <main className="bg-white">
      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url('${cabana.image}')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute top-6 left-6 z-10">
          <Link href="/cabanas" className="flex items-center gap-2 text-white/70 hover:text-white text-sm uppercase tracking-widest transition-colors">
            <ArrowLeft size={16} /> Volver a cabañas
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-6 pb-12">
          <p className="text-luxury-gold text-sm uppercase tracking-[0.25em] mb-3">Cabaña</p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white">{cabana.name}</h1>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-luxury-gold font-heading text-3xl font-bold">{cabana.price}</span>
            <span className="text-white/60 text-sm">/ noche</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-luxury-charcoal mb-4">Acerca de esta cabaña</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{cabana.fullDesc}</p>

            <div className="mt-10">
              <h3 className="font-heading text-xl font-bold text-luxury-charcoal mb-5">Galería</h3>
              <div className="grid grid-cols-2 gap-3">
                {cabana.images.map((src, i) => (
                  <div
                    key={i}
                    className={`bg-cover bg-center rounded-sm ${i === 0 ? "col-span-2 aspect-[16/7]" : "aspect-square"}`}
                    style={{ backgroundImage: `url('${src}')` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-luxury-warm p-8 sticky top-28">
              <h3 className="font-heading text-xl font-bold text-luxury-charcoal mb-6">Amenidades</h3>
              <ul className="space-y-4">
                {cabana.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="text-luxury-gold shrink-0">{amenityIcons[a] || <Wind size={16} />}</span>
                    {a}
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 mt-8 pt-6">
                <h4 className="font-heading text-base font-bold text-luxury-charcoal mb-3">Características</h4>
                <div className="flex flex-wrap gap-2">
                  {cabana.features.map((f) => (
                    <span key={f} className="text-xs bg-white px-3 py-1.5 text-gray-600 border border-gray-200">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/ubicacion"
                  className="block w-full text-center border-2 border-luxury-gold text-luxury-gold px-6 py-3 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
                >
                  Consultar disponibilidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
