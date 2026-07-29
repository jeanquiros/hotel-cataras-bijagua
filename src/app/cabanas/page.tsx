"use client";

const rooms = [
  {
    id: 1,
    name: "Bungalow Familiar #1",
    desc: "Capacidad para 6 personas · Cocina · Baño · Porche con hamaca",
    images: [
      "/images/habitacion-uno/IMG_20210523_123800.jpg",
      "/images/habitacion-uno/IMG_20240411_091200.jpg",
      "/images/habitacion-uno/IMG_20240411_091519.jpg",
      "/images/habitacion-uno/IMG_20240411_091744.jpg",
      "/images/habitacion-uno/IMG_9588.JPG",
    ],
  },
  {
    id: 2,
    name: "Bungalow Familiar #2",
    desc: "Capacidad para 6 personas · Cocina · Baño · Porche",
    image: "https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_3_1643215265.jpg",
  },
  {
    id: 3,
    name: "Bungalow Doble #1",
    desc: "Capacidad para 4 personas · Cocina · Baño · Vista al jardín",
    image: "https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_11_1643215853.jpg",
  },
  {
    id: 4,
    name: "Bungalow Doble #2",
    desc: "Capacidad para 4 personas · Cocina · Baño · Vista al bosque",
    image: "https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_10_1643215838.jpg",
  },
  {
    id: 5,
    name: "Bungalow Matrimonial #1",
    desc: "Capacidad para 2 personas · Cocina · Baño · Porche privado",
    image: "https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_6_1643215561._1643215561.jpg",
  },
  {
    id: 6,
    name: "Bungalow Matrimonial #2",
    desc: "Capacidad para 2 personas · Cocina · Baño · Vista al volcán",
    image: "https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_8_1643215759._1643215759.jpg",
  },
];

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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {rooms.map((room) => (
              <div key={room.id} className="photo-block" style={{ height: "auto", minHeight: 0, background: "none" }}>
                <div style={{ height: "260px", overflow: "hidden", background: "#233229" }}>
                  <img
                    src={room.images ? room.images[0] : room.image}
                    alt={room.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.95)" }}
                  />
                </div>
                <div style={{ padding: "20px 0 0" }}>
                  <p className="eyebrow" style={{ marginBottom: "6px", fontSize: "0.6rem", gap: 0 }}>Bungalow 0{room.id}</p>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.08, marginBottom: "6px" }}>{room.name}</h3>
                  <p style={{ color: "var(--text-soft-dark)", fontSize: "0.88rem", fontWeight: 300 }}>{room.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
