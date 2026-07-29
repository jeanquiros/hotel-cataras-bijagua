"use client";

export default function Contacto() {
  return (
    <>
      <header className="hero" style={{ height: "50vh", minHeight: "350px", alignItems: "flex-end" }}>
        <div className="hero-content" style={{ paddingBottom: "56px" }}>
          <p className="eyebrow">Ubicación</p>
          <h1>Bijagua de Upala</h1>
          <p className="hero-sub">En las faldas del Parque Nacional Volcán Miravalles, provincia de Alajuela.</p>
          <p className="coords" style={{ marginTop: "16px", color: "var(--gold-soft)" }}>10.7275° N, 85.0818° O</p>
        </div>
      </header>

      <section className="loc-section" id="ubicacion">
        <div className="wrap lede">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>Escribinos directo</h2>
          </div>
          <div>
            <p>Respondemos más rápido por teléfono o WhatsApp. También podés escribirnos al correo.</p>
            <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="tel:+50689374687" className="btn" style={{ width: "fit-content" }}>+506 8937 4687</a>
              <a href="tel:+50685170327" className="btn-outline" style={{ margin: 0, width: "fit-content" }}>+506 8517 0327</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
