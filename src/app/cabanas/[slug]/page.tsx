import Link from "next/link";
import { notFound } from "next/navigation";
import { cabanas } from "@/data/cabanas";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return cabanas.map((c) => ({ slug: c.slug }));
}

export default async function CabanaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cabana = cabanas.find((c) => c.slug === slug);
  if (!cabana) notFound();

  return (
    <main className="bg-white">
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url('${cabana.image}')` }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-6 left-6 z-10">
          <Link href="/cabanas" className="flex items-center gap-2 text-white/80 hover:text-white text-sm uppercase tracking-widest transition-colors">
            <ArrowLeft size={16} /> Volver
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-luxury-gold text-sm uppercase tracking-[0.25em] mb-2">Cabaña</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">{cabana.name}</h1>
          <p className="text-luxury-gold font-heading text-2xl mt-2">{cabana.price} / noche</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-gray-700 leading-relaxed text-lg mb-10">{cabana.fullDesc}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {cabana.images.map((src, i) => (
            <div key={i} className="aspect-[4/3] bg-cover bg-center rounded-sm" style={{ backgroundImage: `url('${src}')` }} />
          ))}
        </div>

        <div className="border-t border-gray-100 pt-8">
          <h3 className="font-heading text-xl font-bold text-luxury-charcoal mb-4">Amenidades</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {cabana.amenities.map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-luxury-gold">•</span> {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/ubicacion"
            className="inline-block border-2 border-luxury-gold text-luxury-gold px-10 py-3 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
          >
            Consultar disponibilidad
          </Link>
        </div>
      </div>
    </main>
  );
}
