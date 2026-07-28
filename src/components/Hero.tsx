import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-luxury-gold text-lg font-medium uppercase tracking-[0.3em] mb-4">
          Bijagua de Upala, Costa Rica
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-6">
          Hotel Cataras Bijagua
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Where the jungle meets the sky — an intimate luxury eco-lodge on the
          slopes of Miravalles Volcano.
        </p>
        <Link
          href="/suites"
          className="inline-block border-2 border-luxury-gold text-luxury-gold px-10 py-3 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
        >
          Explore Suites
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
