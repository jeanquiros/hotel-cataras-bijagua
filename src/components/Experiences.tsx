const experiences = [
  {
    title: "Waterfall Treks",
    desc: "Hike through primary forest to the cascades of the Bijagua River, where emerald pools invite you for a refreshing dip.",
    icon: "🌊",
  },
  {
    title: "Río Celeste",
    desc: "Witness the breathtaking sky-blue waters of Tenorio Volcano National Park, a short drive from our lodge.",
    icon: "💎",
  },
  {
    title: "Birdwatching",
    desc: "Spot toucans, motmots, and the resplendent quetzal from our trails or your private veranda.",
    icon: "🦜",
  },
  {
    title: "Farm-to-Table Dining",
    desc: "Savor authentic Costa Rican cuisine prepared with ingredients harvested from our own organic garden.",
    icon: "🍃",
  },
  {
    title: "Hot Springs",
    desc: "Unwind in natural thermal springs fed by the Miravalles Volcano, surrounded by steaming jungle.",
    icon: "♨️",
  },
  {
    title: "Sunset Yoga",
    desc: "Begin or end your day with guided yoga sessions overlooking the valley as the sun sets behind the mountains.",
    icon: "🧘",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-28 px-6 bg-luxury-charcoal text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-luxury-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Experiences
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Immerse Yourself
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="group border border-white/10 p-8 hover:border-luxury-gold/40 transition-colors duration-300"
            >
              <span className="text-3xl block mb-4">{exp.icon}</span>
              <h3 className="text-xl font-heading font-bold mb-3 text-white">
                {exp.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
