"use client";

export default function Cabanas() {
  return (
    <>
      <header className="hero" style={{ height: "60vh", minHeight: "400px", alignItems: "flex-end" }}>
        <div className="hero-content" style={{ paddingBottom: "56px" }}>
          <p className="eyebrow">Alojamiento</p>
          <h1>Seis bungalows, un solo bosque</h1>
          <p className="hero-sub">Cada uno pensado para la calma: materiales de la zona, vistas al bosque y la distancia justa para que el único sonido sea el del río.</p>
        </div>
      </header>

      <section className="tight">
        <div className="wrap">
          <div className="gallery" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={i <= 2 ? "g2" : "g3"} style={{ minHeight: "240px" }}>
                <img
                  src="https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_3_1643215265.jpg"
                  alt={`Bungalow ${i}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
