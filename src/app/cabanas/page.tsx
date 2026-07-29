"use client";

import { useState } from "react";

const rooms = [
  {
    id: 1,
    name: "Bungalow Familiar #1",
    desc: "Capacidad para 6 personas · Cocina · Baño · Porche con hamaca",
    cover: "/images/habitacion-uno/IMG_20210523_123800.jpg",
    images: [
      "/images/habitacion-uno/IMG_20210523_123800.jpg",
      "/images/habitacion-uno/IMG_20240411_091200.jpg",
      "/images/habitacion-uno/IMG_20240411_091519.jpg",
      "/images/habitacion-uno/IMG_20240411_091744.jpg",
      "/images/habitacion-uno/IMG_9588.JPG",
    ],
  },
];

export default function Cabanas() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <header className="hero" style={{ height: "50vh", minHeight: "350px", alignItems: "flex-end" }}>
        <div className="hero-content" style={{ paddingBottom: "56px" }}>
          <p className="eyebrow">Alojamiento</p>
          <h1>Seis bungalows, un solo bosque</h1>
          <p className="hero-sub">Cada uno pensado para la calma: materiales de la zona, vistas al bosque y la distancia justa para que el único sonido sea el del río.</p>
        </div>
      </header>

      <section className="tight">
        <div className="wrap" style={{ maxWidth: "800px", margin: "0 auto" }}>
          {rooms.map((room) => (
            <div key={room.id}>
              <div className="photo-block" style={{ height: "420px", minHeight: 0 }}>
                <img src={room.cover} alt={room.name} loading="lazy" referrerPolicy="no-referrer" />
              </div>

              <div style={{ padding: "28px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.08 }}>{room.name}</p>
                  <p style={{ color: "var(--text-soft-dark)", fontSize: "0.88rem", fontWeight: 300, marginTop: "4px" }}>{room.desc}</p>
                </div>
                <button
                  onClick={() => setOpen(open === room.id ? null : room.id)}
                  className="btn"
                  style={{ cursor: "pointer", border: "none", fontSize: "0.7rem", padding: "14px 32px" }}
                >
                  {open === room.id ? "Cerrar" : "Ver cabaña"}
                </button>
              </div>

              {open === room.id && (
                <div style={{ paddingBottom: "48px" }}>
                  <div className="gallery" style={{ marginTop: "12px" }}>
                    {room.images.map((src, i) => (
                      <div key={i} className={i === 0 ? "g1" : i === 1 ? "g2" : i === 2 ? "g3" : i === 3 ? "g4" : "g3"} style={i === 4 ? { gridColumn: "span 2" } : {}}>
                        <img src={src} alt={`${room.name} - ${i + 1}`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <p style={{ color: "var(--text-soft-dark)", fontSize: "0.95rem", fontWeight: 300, lineHeight: "1.7", marginTop: "24px" }}>
                    Este bungalow familiar tiene capacidad para hasta 6 personas, con cocina equipada, baño privado, agua caliente y un porche con hamaca con vista al jardín. Ropa de cama, toallas y café de la casa incluidos. Ideal para familias o grupos pequeños que buscan tranquilidad en la montaña.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
