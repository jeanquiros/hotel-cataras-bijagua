export default function Location() {
  return (
    <section id="location" className="py-28 px-6 bg-luxury-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Location
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal leading-tight">
            Find Your Way
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are located 15 km northwest of Tenorio Volcano National Park,
              on the slopes of Miravalles Volcano in Bijagua de Upala, Alajuela.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold mt-1">✈</span>
                <span>
                  <strong className="text-luxury-charcoal">Airport:</strong> 2.5
                  hours from Daniel Oduber Quirós International Airport (LIR)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold mt-1">🏔</span>
                <span>
                  <strong className="text-luxury-charcoal">Río Celeste:</strong>{" "}
                  20 minutes by car
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold mt-1">🌋</span>
                <span>
                  <strong className="text-luxury-charcoal">
                    Miravalles Volcano:
                  </strong>{" "}
                  Adjacent to the park boundary
                </span>
              </li>
            </ul>
            <a
              href="https://maps.google.com/maps?q=10.727545055632,-85.081838989258"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 border-2 border-luxury-gold text-luxury-gold px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="aspect-square bg-cover bg-center rounded-sm shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1526778548025-fa2f459b5fe5?q=80&w=2066&auto=format&fit=crop')",
            }}
          />
        </div>
      </div>
    </section>
  );
}
