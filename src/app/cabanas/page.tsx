import Link from "next/link";
import { cabanas } from "@/data/cabanas";

export default function Cabanas() {
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
        <div className="wrap" style={{ maxWidth: 0, padding: 0 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: 0,
          }}>
            {cabanas.map((room) => (
              <div key={room.slug} style={{
                position: "relative",
                borderRight: "1px solid rgba(0,0,0,0.06)",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
              }}>
                <div className="photo-block" style={{ height: "300px", minHeight: 0 }}>
                  <img src={room.cover} alt={room.name} loading="lazy" referrerPolicy="no-referrer" />
                </div>
                <div style={{ padding: "24px 28px 32px" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "8px",
                  }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      fontWeight: 500,
                    }}>
                      {room.tag}
                    </span>
                    <span style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: "var(--ink)",
                      lineHeight: 1,
                    }}>
                      {room.price}
                      <span style={{ fontSize: "0.75rem", fontWeight: 300, color: "var(--text-soft-dark)" }}>/noche</span>
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.08,
                    margin: "0 0 8px",
                  }}>
                    {room.name}
                  </h3>
                  <p style={{
                    color: "var(--text-soft-dark)",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    lineHeight: "1.6",
                    margin: "0 0 6px",
                  }}>
                    {room.desc}
                  </p>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.04em",
                    color: "var(--text-soft-dark)",
                    margin: "0 0 20px",
                    opacity: 0.6,
                  }}>
                    {room.info}
                  </p>
                  <Link
                    href={`/cabanas/${room.slug}`}
                    className="btn"
                    style={{
                      display: "inline-block",
                      cursor: "pointer",
                      border: "none",
                      fontSize: "0.7rem",
                      padding: "14px 32px",
                      textDecoration: "none",
                    }}
                  >
                    Ver cabaña
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
