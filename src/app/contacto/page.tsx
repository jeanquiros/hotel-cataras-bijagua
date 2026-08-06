"use client";

import { FadeUp, SlideLeft, SlideRight } from "../../components/Animations";

export default function Contacto() {
  return (
    <>
      <header className="hero" style={{ height: "60vh", minHeight: "420px", alignItems: "flex-end" }}>
        <div className="hero-content" style={{ paddingBottom: "64px" }}>
          <p className="eyebrow">Contacto</p>
          <h1>Hablemos antes de que llegues</h1>
          <p className="hero-sub">Escribinos por WhatsApp, llamá o pasate a conocer el lodge. Respondemos siempre, de una u otra forma.</p>
          <p className="coords" style={{ marginTop: "16px", color: "var(--gold-soft)" }}>10.7275° N, 85.0818° O · Bijagua de Upala</p>
        </div>
      </header>

      <section className="tight" style={{ padding: "110px 0" }}>
        <div className="wrap contact-grid">
          <SlideLeft>
            <div>
              <p className="eyebrow">Dónde estamos</p>
              <h2 style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", margin: "0 0 20px" }}>Al pie del Miravalles, a veinte minutos del Río Celeste</h2>
              <p style={{ color: "var(--text-soft-dark)", fontSize: "1.05rem", fontWeight: 300, maxWidth: "54ch" }}>
                El lodge está a 15 km al noroeste del Parque Nacional Volcán Tenorio, sobre las faldas del Volcán Miravalles, en Bijagua de Upala. El sendero a las cataratas nace en la propiedad.
              </p>

              <div className="contact-list">
                <div className="contact-row">
                  <span className="label">WhatsApp</span>
                  <a className="value" href="https://wa.me/50685170327" target="_blank" rel="noopener noreferrer">+506 8517 0327</a>
                </div>
                <div className="contact-row">
                  <span className="label">Teléfono</span>
                  <a className="value" href="tel:+50689374687">+506 8937 4687</a>
                </div>
                <div className="contact-row">
                  <span className="label">Correo</span>
                  <a className="value" href="mailto:info@cataratasbijagua.com">info@cataratasbijagua.com</a>
                </div>
                <div className="contact-row">
                  <span className="label">Dirección</span>
                  <span className="value">Bijagua de Upala, Alajuela, Costa Rica</span>
                </div>
                <div className="contact-row">
                  <span className="label">Coordenadas</span>
                  <span className="value" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.9rem", color: "var(--gold)" }}>10.7275° N · 85.0818° O</span>
                </div>
              </div>
            </div>
          </SlideLeft>

          <SlideRight>
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.579358153899!2d-85.08402768457912!3d10.727545060394528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e8f1b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sCataratas%20Bijagua%20Lodge!5e0!3m2!1sen!2scr!4v1!4m1!1s0x8f9e8f1b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Cataratas Bijagua Lodge"
              />
            </div>
          </SlideRight>
        </div>
      </section>

      <section className="split" style={{ display: "grid", padding: 0 }}>
        <div className="copy">
          <p className="eyebrow on-dark">Cómo llegar</p>
          <h2>El bosque queda lejos del ruido, cerca de todo lo demás</h2>
          <p>Desde Liberia, el camino es 2 horas y media por carretera hasta Bijagua. El Parque Nacional Volcán Tenorio y el Río Celeste están a veinte minutos, y el lodge queda en la base del Volcán Miravalles, a pie de sendero.</p>
          <div className="stat-row">
            <div><span>2 h 30</span><small>Desde Liberia (LIR)</small></div>
            <div><span>20 min</span><small>Al Río Celeste</small></div>
            <div><span>A pie</span><small>Sendero a las cataratas</small></div>
          </div>
        </div>
        <div className="photo-block">
          <img src="/images/sendero/sendero-2.jpg" alt="Bosque en Bijagua de Upala" loading="lazy" />
        </div>
      </section>

      <section className="cta" style={{ padding: "90px 0 100px" }}>
        <div className="cta-inner" style={{ paddingBottom: 0 }}>
          <p className="eyebrow">Cataratas Bijagua Lodge</p>
          <h2>¿Dudas sobre fechas, rutas o habitaciones?</h2>
          <p>Escribinos y te respondemos con todo lo que necesitás para armar el viaje.</p>
          <a href="https://wa.me/50685170327" target="_blank" rel="noopener noreferrer" className="btn">WhatsApp directo</a>
          <a href="tel:+50689374687" className="btn-outline" style={{ color: "var(--ivory)" }}>Llamar al lodge</a>
        </div>
      </section>
    </>
  );
}
