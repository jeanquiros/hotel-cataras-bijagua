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
              A luxury eco-lodge on the slopes of Miravalles Volcano. Where
              nature meets comfort.
            </p>
          </div>

          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["About", "Suites", "Experiences", "Gallery", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-luxury-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-4">
              Follow Us
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
