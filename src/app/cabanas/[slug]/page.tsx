import { notFound } from "next/navigation";
import Link from "next/link";
import { cabanas } from "@/data/cabanas";

export function generateStaticParams() {
  return cabanas.map((c) => ({ slug: c.slug }));
}

export default async function CabanaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = cabanas.find((c) => c.slug === slug);
  if (!room) notFound();

  const related = cabanas.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <header className="hero" style={{ height: "55vh", minHeight: "400px", alignItems: "flex-end" }}>
        <div className="hero-content" style={{ paddingBottom: "56px" }}>
          <p className="eyebrow">Alojamiento</p>
          <h1>{room.name}</h1>
          <p className="hero-sub">{room.desc}</p>
        </div>
      </header>

      <section className="tight" style={{ paddingTop: "48px" }}>
        <div className="wrap" style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "40px",
            paddingBottom: "28px",
            borderBottom: "1px solid var(--line-light)",
          }}>
            <div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "8px", flexWrap: "wrap" }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  background: "var(--gold-soft)",
                  padding: "4px 12px",
                  fontWeight: 500,
                }}>
                  {room.tag}
                </span>
                <span style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "var(--text-soft-dark)",
                }}>
                  {room.info}
                </span>
              </div>
              <p style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "1.6rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: 0,
                letterSpacing: "-0.01em",
              }}>
                {room.price}
                <span style={{ fontSize: "0.75rem", fontWeight: 300, color: "var(--text-soft-dark)" }}> / noche</span>
              </p>
            </div>
            <Link
              href={"#"}
              className="btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                border: "none",
                fontSize: "0.7rem",
                padding: "16px 34px",
                textDecoration: "none",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Reservar
            </Link>
          </div>

          {room.images.length > 1 ? (
            <div className="gallery" style={{ marginBottom: "48px" }}>
              {room.images.map((src, i) => (
                <div key={i} className={
                  i === 0 ? "g1" :
                  i === 1 ? "g2" :
                  i === 2 ? "g3" :
                  i === 3 ? "g4" : "g3"
                } style={i === 4 ? { gridColumn: "span 2" } : {}}>
                  <img src={src} alt={`${room.name} - ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          ) : (
            <div className="photo-block" style={{ height: "420px", minHeight: 0, marginBottom: "48px" }}>
              <img src={room.cover} alt={room.name} loading="lazy" referrerPolicy="no-referrer" />
            </div>
          )}

          <div style={{
            maxWidth: "660px",
          }}>
            <p style={{
              color: "var(--text-soft-dark)",
              fontSize: "1.05rem",
              fontWeight: 300,
              lineHeight: "1.8",
              margin: 0,
            }}>
              {room.fullDesc}
            </p>
          </div>
        </div>
      </section>

      <section className="tight" style={{ borderTop: "1px solid var(--line-light)", paddingTop: "80px" }}>
        <div className="wrap" style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--gold)",
            fontWeight: 500,
            marginBottom: "28px",
          }}>
            Otras cabañas
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "24px",
          }}>
            {related.map((c) => (
              <Link
                key={c.slug}
                href={"#"}
                style={{ textDecoration: "none", color: "inherit" }}
                className="related-card"
              >
                <div className="photo-block" style={{ height: "200px", minHeight: 0 }}>
                  <img src={c.cover} alt={c.name} loading="lazy" referrerPolicy="no-referrer" style={{ transition: "transform 0.5s ease" }} className="related-img" />
                </div>
                <div style={{ padding: "16px 0" }}>
                  <p style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    margin: 0,
                    color: "var(--ink)",
                  }}>
                    {c.name}
                  </p>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.04em",
                    color: "var(--gold)",
                    margin: "6px 0 0",
                  }}>
                    {c.price}/noche
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .related-card:hover .related-img {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}
