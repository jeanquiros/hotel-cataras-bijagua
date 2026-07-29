import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-heading font-bold text-luxury-gold mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold text-luxury-charcoal mb-4">Página no encontrada</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          La página que buscas no existe o fue movida. Volvé al inicio para encontrar tu cabaña ideal.
        </p>
        <Link
          href="/"
          className="inline-block border-2 border-luxury-gold text-luxury-gold px-8 py-2.5 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold hover:text-white transition-all duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
