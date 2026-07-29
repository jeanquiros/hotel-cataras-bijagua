"use client";

export default function Cabanas() {
  return (
    <>
      <header className="hero" style={{ height: "60vh", minHeight: "400px", alignItems: "flex-end" }}>
        <div className="hero-content" style={{ paddingBottom: "56px" }}>
          <p className="eyebrow">Alojamiento</p>
          <h1>Bungalow Familiar #1</h1>
          <p className="hero-sub">Capacidad para 6 personas · Cocina · Baño · Porche con hamaca</p>
        </div>
      </header>

      <section className="tight">
        <div className="wrap">
          <div className="gallery">
            <div className="g1">
              <img src="/images/habitacion-uno/IMG_20210523_123800.jpg" alt="Habitación 1" loading="lazy" />
            </div>
            <div className="g2">
              <img src="/images/habitacion-uno/IMG_20240411_091200.jpg" alt="Habitación 1" loading="lazy" />
            </div>
            <div className="g3">
              <img src="/images/habitacion-uno/IMG_20240411_091519.jpg" alt="Habitación 1" loading="lazy" />
            </div>
            <div className="g4">
              <img src="/images/habitacion-uno/IMG_20240411_091744.jpg" alt="Habitación 1" loading="lazy" />
            </div>
            <div className="g3" style={{ gridColumn: "span 2" }}>
              <img src="/images/habitacion-uno/IMG_9588.JPG" alt="Habitación 1" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
