import Link from "next/link";
import { cabanas } from "@/data/cabanas";

export default function Cabanas() {
  return (
    <>
      <header className="hero" style={{ height: "45vh", minHeight: "350px", alignItems: "flex-end" }}>
        <div className="hero-content" style={{ paddingBottom: "56px" }}>
          <p className="eyebrow">Alojamiento</p>
          <h1>Bungalows en el bosque</h1>
          <p className="hero-sub">Seis espacios independientes, cada uno con su propia hamaca y vista a la montaña. La tranquilidad se respira aquí.</p>
        </div>
      </header>

      <section className="tight" style={{ paddingTop: "72px" }}>
        <div className="wrap" style={{ maxWidth: 0, padding: 0 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: 0,
          }}>
            {cabanas.map((room) => (
              <div key={room.slug} style={{
                borderRight: "1px solid var(--line-light)",
                borderBottom: "1px solid var(--line-light)",
                background: "#fff",
                transition: "all 0.4s ease",
              }}
              className="room-card">
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div className="photo-block" style={{ height: "320px", minHeight: 0 }}>
                    <img
                      src={room.cover}
                      alt={room.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      style={{ transition: "transform 0.6s ease" }}
                      className="room-card-img"
                    />
                  </div>
                  <span style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    background: "var(--gold-soft)",
                    padding: "6px 14px",
                    fontWeight: 500,
                  }}>
                    {room.tag}
                  </span>
                  <span style={{
                    position: "absolute",
                    bottom: "16px",
                    right: "16px",
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "#fff",
                    background: "rgba(15, 26, 22, 0.7)",
                    backdropFilter: "blur(6px)",
                    padding: "8px 18px 10px",
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}>
                    {room.price}
                    <span style={{ fontSize: "0.65rem", fontWeight: 300, opacity: 0.7 }}>/noche</span>
                  </span>
                </div>
                <div style={{ padding: "28px 28px 36px" }}>
                  <h3 style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.08,
                    margin: "0 0 10px",
                    color: "var(--ink)",
                  }}>
                    {room.name}
                  </h3>
                  <p style={{
                    color: "var(--text-soft-dark)",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    lineHeight: "1.7",
                    margin: "0 0 18px",
                  }}>
                    {room.desc}
                  </p>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.04em",
                    color: "var(--text-soft-dark)",
                    opacity: 0.6,
                    marginBottom: "22px",
                    paddingTop: "18px",
                    borderTop: "1px solid var(--line-light)",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    <span>{room.info}</span>
                  </div>
                  <Link
                    href={`/cabanas/${room.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--gold)",
                      paddingBottom: "4px",
                      transition: "all 0.25s ease",
                    }}
                    className="room-link"
                  >
                    Ver cabaña
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .room-card:hover .room-card-img {
          transform: scale(1.05);
        }
        .room-card {
          transition: all 0.4s ease;
        }
        .room-card:hover {
          background: var(--ivory);
        }
        .room-link:hover {
          color: var(--ink) !important;
          border-color: var(--ink) !important;
          gap: 12px !important;
        }
      `}</style>
    </>
  );
}
