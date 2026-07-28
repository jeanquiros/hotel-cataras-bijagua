import Link from "next/link";
import { notFound } from "next/navigation";
import { cabanas } from "@/data/cabanas";
import { ArrowLeft, Wifi, Wind, Coffee, Shield, Tv, Bath, Snowflake, Martini } from "lucide-react";
import ReservaForm from "@/components/ReservaForm";

const amenityIcons: Record<string, React.ReactNode> = {
  "Cama King-size": <Wind size={18} />,
  "Cama King-size con dosel": <Wind size={18} />,
  "Cama Queen-size": <Wind size={18} />,
  "Terraza privada": <Wind size={18} />,
  "Ducha interior-exterior": <Bath size={18} />,
  "Ducha de lluvia": <Bath size={18} />,
  WiFi: <Wifi size={18} />,
  "Aire acondicionado": <Snowflake size={18} />,
  Minibar: <Martini size={18} />,
  "Mini bar": <Martini size={18} />,
  "Café artesanal": <Coffee size={18} />,
  "Ropa de cama premium": <Wind size={18} />,
  TV: <Tv size={18} />,
  "Caja fuerte": <Shield size={18} />,
  "Piscina de inmersión": <Bath size={18} />,
  Hamaca: <Wind size={18} />,
  "Baño al aire libre": <Bath size={18} />,
  Cafetera: <Coffee size={18} />,
  "Productos de bienvenida": <Coffee size={18} />,
  "Ventilador de techo": <Wind size={18} />,
  Mosquitero: <Wind size={18} />,
  "Secador de pelo": <Wind size={18} />,
  "Bata y pantuflas": <Wind size={18} />,
  "Servicio de bienvenida": <Coffee size={18} />,
  "Vista al dosel": <Wind size={18} />,
  "Tina de hidromasaje": <Bath size={18} />,
};

export function generateStaticParams() {
  return cabanas.map((c) => ({ slug: c.slug }));
}

export default async function CabanaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cabana = cabanas.find((c) => c.slug === slug);
  if (!cabana) notFound();

  const numericPrice = parseInt(cabana.price.replace("$", ""));

  return (
    <main className="bg-white">
      <div className="relative h-[55vh] md:h-[65vh] bg-cover bg-center" style={{ backgroundImage: `url('${cabana.image}')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute top-6 left-6 z-10">
          <Link href="/cabanas" className="flex items-center gap-2 text-white/70 hover:text-white text-sm uppercase tracking-widest transition-colors">
            <ArrowLeft size={16} /> Volver
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
                  <div key={i}
                    className={`bg-cover bg-center rounded-sm ${i === 0 ? "col-span-2 aspect-[16/7]" : "aspect-square"}`}
                    style={{ backgroundImage: `url('${src}')` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-luxury-warm p-8 sticky top-28">
              <h3 className="font-heading text-lg font-bold text-luxury-charcoal mb-5">Amenidades</h3>
              <ul className="space-y-4">
                {cabana.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="text-luxury-gold shrink-0">{amenityIcons[a] || <Wind size={18} />}</span>
                    {a}
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <h4 className="font-heading text-base font-bold text-luxury-charcoal mb-3">Características</h4>
                <div className="flex flex-wrap gap-2">
                  {cabana.features.map((f) => (
                    <span key={f} className="text-xs bg-white px-3 py-1.5 text-gray-600 border border-gray-200">{f}</span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Precio por noche</p>
                <p className="font-heading text-3xl font-bold text-luxury-gold">${numericPrice}</p>
              </div>

              <a
                href="#reserva"
                className="mt-6 block w-full text-center bg-luxury-gold text-white px-6 py-3 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold-dark transition-all duration-300"
              >
                Reservar — ${numericPrice}
              </a>
            </div>
          </div>
        </div>

        <ReservaForm cabanaName={cabana.name} cabanaPrice={cabana.price} />
      </div>
    </main>
  );
}
