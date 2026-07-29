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

      <section className="tight">
        <div className="wrap" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
            <div>
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
              <p style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "1.2rem",
                fontWeight: 400,
                color: "var(--ink)",
                margin: "6px 0 0",
              }}>
                {room.price}
                <span style={{ fontSize: "0.75rem", fontWeight: 300, color: "var(--text-soft-dark)" }}> / noche</span>
              </p>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.04em",
                color: "var(--text-soft-dark)",
                margin: "4px 0 0",
                opacity: 0.6,
              }}>
                {room.info}
              </p>
            </div>
            <Link
              href={`https://wa.me/50689374687?text=Hola! Quiero reservar ${room.name}`}
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
              Reservar por WhatsApp
            </Link>
          </div>

          {room.images.length > 0 && (
            <div className="gallery" style={{ marginBottom: "40px" }}>
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
          )}

          <div style={{
            borderTop: "1px solid var(--line-light)",
            paddingTop: "32px",
            marginBottom: "48px",
          }}>
            <p style={{
              color: "var(--text-soft-dark)",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: "1.8",
              margin: 0,
            }}>
              {room.fullDesc}
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="tight" style={{ borderTop: "1px solid var(--ivory-2)" }}>
          <div className="wrap" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 500,
              marginBottom: "24px",
            }}>
              Otras cabañas
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "24px" }}>
              {related.map((c) => (
                <Link key={c.slug} href={`/cabanas/${c.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="photo-block" style={{ height: "180px", minHeight: 0 }}>
                    <img src={c.cover} alt={c.name} loading="lazy" referrerPolicy="no-referrer" />
                  </div>
                  <p style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1rem",
                    fontWeight: 400,
                    margin: "12px 0 4px",
                  }}>
                    {c.name}
                  </p>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.04em",
                    color: "var(--gold)",
                    margin: 0,
                  }}>
                    {c.price}/noche
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
