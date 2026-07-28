export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal leading-tight mb-6">
            A Sanctuary in the Heart of Nature
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mb-6" />
          <p className="text-gray-600 leading-relaxed mb-4">
            Nestled on the slopes of the Miravalles Volcano, just twenty
            minutes from the legendary Tenorio Volcano National Park and the
            turquoise waters of Río Celeste, Hotel Cataras Bijagua offers an
            unparalleled escape into Costa Rica&apos;s wild beauty.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Born in 2004 from a family vision, our lodge is built on the
            principles of sustainable ecotourism. Every detail — from our
            handcrafted cabins to our farm-to-table restaurant — reflects a
            deep reverence for the land and its traditions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We invite you to disconnect from the ordinary and reconnect with
            what truly matters.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-cover bg-center rounded-sm" 
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1562771409-1b2e3f9d5f5a?q=80&w=1974&auto=format&fit=crop')",
            }}
          />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-luxury-gold hidden md:block" />
        </div>
      </div>
    </section>
  );
}
