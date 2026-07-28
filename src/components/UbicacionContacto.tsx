import { Phone, Mail, MapPin } from "lucide-react";

export default function UbicacionContacto() {
  return (
    <section className="py-24 px-6 bg-luxury-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Ubicación & Contacto
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal">
            Encuéntranos
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
          A 15 km del Parque Nacional Volcán Tenorio, en las faldas del volcán Miravalles, Bijagua de Upala.
            </p>
            <p className="text-gray-600 text-sm mb-6">
              Aeropuerto LIR: 2.5 horas · Río Celeste: 20 min
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone size={16} className="text-luxury-gold shrink-0" />
                <div>
                  <a href="tel:+50689374687" className="hover:text-luxury-gold transition-colors">+506 8937 4687</a>
                  <span className="mx-2">·</span>
                  <a href="tel:+50685170327" className="hover:text-luxury-gold transition-colors">+506 8517 0327</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={16} className="text-luxury-gold shrink-0" />
                <a href="mailto:info@cataratasbijagua.com" className="hover:text-luxury-gold transition-colors">
                  info@cataratasbijagua.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={16} className="text-luxury-gold shrink-0" />
                <span>Bijagua de Upala, Alajuela, Costa Rica</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/maps?q=10.727545055632,-85.081838989258"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-luxury-gold text-luxury-gold px-8 py-2.5 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
            >
              Google Maps
            </a>
          </div>

          <div
            className="aspect-[4/3] bg-cover bg-center rounded-sm shadow-lg"
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
