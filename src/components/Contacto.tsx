"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "./Animations";

export default function Contacto() {
  return (
    <section className="py-24 px-6 bg-luxury-warm">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
              Contacto
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-charcoal">
              Contáctanos
            </h2>
            <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SlideLeft>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Estamos ubicados 15 km al noroeste del Parque Nacional Volcán Tenorio, en las faldas del volcán Miravalles, Bijagua de Upala.
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
                className="inline-block border-2 border-luxury-gold text-luxury-gold px-8 py-2.5 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold hover:text-white transition-all duration-300"
              >
                Google Maps
              </a>
            </div>
          </SlideLeft>

          <SlideRight>
            <div className="aspect-[4/3] rounded-sm shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.579358153899!2d-85.08402768457912!3d10.727545060394528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e8f1b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sCataratas%20Bijagua%20Lodge!5e0!3m2!1sen!2scr!4v1!4m1!1s0x8f9e8f1b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Cataratas Bijagua Lodge"
                className="w-full h-full"
              />
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
