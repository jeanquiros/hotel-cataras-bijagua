import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-luxury-charcoal text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Reserve Your Stay
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border border-luxury-gold/40 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-luxury-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold mb-1">Phone</h3>
                <a
                  href="tel:+50689374687"
                  className="text-gray-400 hover:text-luxury-gold transition-colors block"
                >
                  +506 8937 4687
                </a>
                <a
                  href="tel:+50685170327"
                  className="text-gray-400 hover:text-luxury-gold transition-colors block"
                >
                  +506 8517 0327
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border border-luxury-gold/40 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-luxury-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold mb-1">Email</h3>
                <a
                  href="mailto:info@cataratasbijagua.com"
                  className="text-gray-400 hover:text-luxury-gold transition-colors"
                >
                  info@cataratasbijagua.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border border-luxury-gold/40 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-luxury-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold mb-1">Address</h3>
                <p className="text-gray-400">
                  Bijagua de Upala, Alajuela
                  <br />
                  Costa Rica
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/20 px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-luxury-gold transition-colors text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-white/20 px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-luxury-gold transition-colors text-sm"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full bg-transparent border border-white/20 px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-luxury-gold transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full border-2 border-luxury-gold text-luxury-gold px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
