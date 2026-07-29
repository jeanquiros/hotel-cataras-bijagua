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
        <div className="wrap">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "28px",
          }}>
            {cabanas.map((room) => (
              <div key={room.slug} style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
              }}
              className="c-card">
                <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "var(--ink-2)" }}>
                  <img
                    src={room.cover}
                    alt={room.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    className="c-card-img"
                  />
                  <span style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    borderRadius: "999px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: "var(--ink)",
                    background: "var(--gold-soft)",
                    padding: "5px 14px",
                  }}>
                    {room.tag}
                  </span>
                  <span style={{
                    position: "absolute",
                    bottom: "14px",
                    right: "14px",
                    borderRadius: "14px",
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.15rem",
                    fontWeight: 500,
                    color: "#fff",
                    background: "rgba(15,26,22,0.65)",
                    backdropFilter: "blur(8px)",
                    padding: "6px 16px 8px",
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}>
                    {room.price}
                    <span style={{ fontSize: "0.6rem", fontWeight: 300, opacity: 0.7 }}>/noche</span>
                  </span>
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <h3 style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1,
                    margin: "0 0 8px",
                    color: "var(--ink)",
                  }}>
                    {room.name}
                  </h3>
                  <p style={{
                    color: "var(--text-soft-dark)",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    lineHeight: "1.65",
                    margin: "0 0 16px",
                  }}>
                    {room.desc}
                  </p>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.04em",
                    color: "var(--text-soft-dark)",
                    opacity: 0.55,
                    paddingTop: "14px",
                    borderTop: "1px solid var(--line-light)",
                    marginBottom: "18px",
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    <span>{room.info}</span>
                  </div>
                  <Link
                    href={`/cabanas/${room.slug}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      width: "100%",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "var(--gold)",
                      textDecoration: "none",
                      padding: "12px 0",
                      border: "2px solid var(--gold)",
                      borderRadius: "999px",
                      transition: "all 0.3s ease",
                    }}
                    className="c-btn"
                  >
                    Ver cabaña
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .c-card:hover {
          box-shadow: 0 20px 50px rgba(15,26,22,0.10);
          transform: translateY(-4px);
        }
        .c-card:hover .c-card-img {
          transform: scale(1.06);
        }
        .c-btn:hover {
          background: var(--gold) !important;
          color: var(--ink) !important;
        }
      `}</style>
    </>
  );
}
