"use client";

export default function Experiencias() {
  return (
    <>
      <header className="hero" style={{ height: "60vh", minHeight: "400px", alignItems: "flex-end" }}>
        <div className="hero-content" style={{ paddingBottom: "56px" }}>
          <p className="eyebrow">Experiencias</p>
          <h1>Sendero & naturaleza</h1>
          <p className="hero-sub">El bosque es nuestro vecino. Sal a caminar, bañarte en una poza o sentarte a observar aves.</p>
        </div>
      </header>

      <section className="tight">
        <div className="wrap lede">
          <div>
            <p className="eyebrow">Sendero</p>
            <h2>4.7 km · Cataratas Bijagua</h2>
          </div>
          <div>
            <p>El sendero privado del lodge baja desde la propiedad hasta las cataratas Bijagua, una caída de agua de aproximadamente 15 m rodeada de bosque secundario.</p>
            <p>El recorrido es de dificultad moderada baja, con tres miradores, dos puentes colgantes y varias pozas donde detenerse a nadar. Se hace en 2–3 horas ida y vuelta, y se puede ir sin guía.</p>
            <p>Recomendamos salir temprano, llevar repelente, agua y zapatos cerrados. En temporada verde el sendero está en su máximo esplendor.</p>
          </div>
        </div>
      </section>

      <section className="tight" style={{ paddingTop: 0 }}>
        <div className="gallery" style={{ gridAutoRows: "260px" }}>
          <div className="g1">
            <img src="/images/sendero/sendero-1.jpg" alt="Sendero hacia las cataratas" loading="lazy" />
          </div>
          <div className="g2">
            <img src="/images/sendero/sendero-2.jpg" alt="Sendero hacia las cataratas" loading="lazy" />
          </div>
          <div className="g3">
            <img src="/images/sendero/sendero-3.jpg" alt="Sendero hacia las cataratas" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
