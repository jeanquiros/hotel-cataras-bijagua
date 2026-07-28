const suites = [
  {
    name: "Volcano Suite",
    desc: "Expansive views of Miravalles Volcano, private terrace with plunge pool, king-size bed, and an indoor-outdoor rain shower.",
    price: "$320",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Rainforest Bungalow",
    desc: "Nestled among ancient trees, this bungalow features floor-to-ceiling windows, a hammock-strewn veranda, and an open-air garden bath.",
    price: "$260",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Celeste Suite",
    desc: "Inspired by the river&apos;s legendary color — soft aqua tones, a soaking tub overlooking the canopy, and premium amenities.",
    price: "$380",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function Suites() {
  return (
    <section id="suites" className="py-28 px-6 bg-luxury-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Accommodations
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal leading-tight">
            Our Suites & Bungalows
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {suites.map((suite) => (
            <div
              key={suite.name}
              className="group bg-white shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url('${suite.image}')` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-luxury-charcoal">
                    {suite.name}
                  </h3>
                  <span className="text-luxury-gold font-heading text-lg font-bold">
                    {suite.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {suite.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-block text-sm font-medium uppercase tracking-widest text-luxury-gold border-b border-luxury-gold pb-0.5 hover:text-luxury-gold-dark transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
