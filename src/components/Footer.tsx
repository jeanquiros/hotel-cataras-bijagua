export default function Footer() {
  return (
    <footer className="bg-luxury-dark text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-white font-heading text-xl font-bold mb-4">
              Hotel Cataras Bijagua
            </h3>
            <p className="text-sm leading-relaxed">
              Un eco-lodge de lujo en las faldas del volcán Miravalles. Donde la naturaleza se encuentra con el confort.
            </p>
          </div>

          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-4">
              Enlaces
            </h3>
            <ul className="space-y-2 text-sm">
              {[
  { label: "Inicio", href: "/" },
  { label: "Cabañas", href: "/cabanas" },
  { label: "Experiencias", href: "/experiencias" },
  { label: "Ubicación", href: "/ubicacion" },
].map((link) => (
  <li key={link.label}>
    <a
      href={link.href}
      className="hover:text-luxury-gold transition-colors"
    >
      {link.label}
    </a>
  </li>
))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-4">
              Síguenos
            </h3>
            <div className="flex gap-4">
              <a
                href="//www.facebook.com/CataratasBijaguaLodge/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="//www.instagram.com/cataratasbijagualodge/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="//www.tripadvisor.com/Hotel_Review-g666791-d3468908-Reviews-Cataratas_Bijagua_Lodge-Bijagua_de_Upala_Province_of_Alajuela.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors text-sm"
              >
                TripAdvisor
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Hotel Cataras Bijagua. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
