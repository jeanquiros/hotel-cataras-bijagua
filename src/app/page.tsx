"use client";

import { useEffect } from "react";
import Contour from "@/components/Contour";

export default function Home() {
  useEffect(() => {
    const navEl = document.querySelector("nav") as HTMLElement;
    const handleScroll = () => {
      if (navEl) {
        navEl.style.background = window.scrollY > 60
          ? "rgba(15,26,22,0.92)"
          : "linear-gradient(180deg, rgba(15,26,22,0.55), rgba(15,26,22,0))";
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="hero" style={{ overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://s3-cdn.hotellinksolutions.com/hls/data/5542/website/general/bn/1.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <p className="eyebrow">Volcán Miravalles · Volcán Tenorio</p>
          <h1>Un santuario familiar entre dos volcanes desde 2004</h1>
          <p className="hero-sub">Bungalows de montaña en Bijagua de Upala, a las puertas del Parque Nacional Volcán Miravalles y a veinte minutos del Río Celeste.</p>
          <div className="hero-meta">
            <div><span>6</span><small>Bungalows familiares</small></div>
            <div><span>4.7 km</span><small>Sendero propio a las cataratas</small></div>
            <div><span>20 min</span><small>Al Parque Nacional Tenorio</small></div>
          </div>
        </div>
      </header>

      <Contour />

      <section className="tight">
        <div className="wrap lede">
          <div>
            <p className="eyebrow">Desde 2004</p>
            <h2>Un proyecto familiar, no una cadena</h2>
          </div>
          <div>
            <p>Cataratas Bijagua Lodge comenzó cuando un grupo de familiares decidió construir, a mano y en su propia tierra, un lugar donde los visitantes pudieran sentirse parte de la familia. Dos décadas después, seguimos siendo eso: una propiedad pequeña, gestionada de cerca, con un compromiso serio con el turismo rural y la conservación del bosque que nos rodea.</p>
            <p>Un sendero propio bordea la finca y se interna en el Parque Nacional Volcán Miravalles hasta llegar a las cataratas del río Bijagua — la razón por la que existimos.</p>
          </div>
        </div>
      </section>

      {/* ACCOMMODATIONS SPLIT */}
      <div className="split" id="alojamiento">
        <div className="photo-block">
          <img
            src="https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_3_1643215265.jpg"
            alt="Bungalow de Cataratas Bijagua Lodge"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <span className="photo-caption">Bungalows · Bijagua</span>
        </div>
        <div className="copy">
          <p className="eyebrow on-dark">Alojamiento</p>
          <h2>Seis bungalows, un solo bosque</h2>
          <p>Cada uno de nuestros seis bungalows está pensado para la calma: materiales de la zona, vistas al bosque nuboso y de transición, y la distancia justa entre cabañas para que el único sonido de fondo sea el del río y los pájaros.</p>
          <p>Restaurante típico en sitio, con cocina de la región para quienes prefieren no moverse de la montaña.</p>
        </div>
      </div>

      {/* TRAIL SPLIT */}
      <div className="split reverse" id="sendero">
        <div className="copy">
          <p className="eyebrow on-dark">Sendero de las Cataratas</p>
          <h2>4.7 km, tres tipos de bosque</h2>
          <p>El sendero circular sale desde el lodge y atraviesa bosque nuboso, bosque de transición y bosque lluvioso premontano antes de llegar a las cataratas del río Bijagua, de aguas cristalinas. En el camino hay un mirador con vista al pueblo de Bijagua y su vegetación.</p>
          <div className="stat-row">
            <div><span>2 h</span><small>Duración aprox.</small></div>
            <div><span>Media–alta</span><small>Dificultad</small></div>
            <div><span>24/7</span><small>Avistamiento de aves y caminata nocturna</small></div>
          </div>
        </div>
        <div className="photo-block">
          <img
            src="https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_8_1643215759._1643215759.jpg"
            alt="Catarata del río Bijagua"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <span className="photo-caption">Catarata del Río Bijagua</span>
        </div>
      </div>

      {/* RIO CELESTE */}
      <section className="celeste-section" id="rio-celeste">
        <div className="wrap lede">
          <div>
            <p className="eyebrow">A 20 minutos</p>
            <h2>El color que solo existe en el Río Celeste</h2>
          </div>
          <div>
            <p>A quince kilómetros del lodge, dentro del Parque Nacional Volcán Tenorio, el Río Celeste debe su tono turquesa a una reacción óptica: la mezcla de azufre y carbonato de calcio en sus aguas, entre vegetación exuberante y aguas termales cercanas. Es una de las cataratas más fotografiadas de Costa Rica — y la usamos como color de firma de esta casa.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="tight" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="wrap" style={{ marginBottom: "52px", paddingLeft: "40px", paddingRight: "40px" }}>
          <p className="eyebrow">Galería</p>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)", maxWidth: "24ch" }}>Lo que se ve desde aquí</h2>
        </div>
        <div className="gallery">
          <div className="g1">
            <img src="https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_5_1643215283.jpg" alt="Bosque nuboso, Bijagua" loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div className="g2">
            <img src="https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_10_1643215838.jpg" alt="Vista panorámica del lodge" loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div className="g3">
            <img src="https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_11_1643215853.jpg" alt="Interior de bungalow" loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div className="g4">
            <img src="https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_6_1643215561._1643215561.jpg" alt="Fauna de Bijagua" loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div className="g3" style={{ gridColumn: "span 2" }}>
            <img src="https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_9_1643215771.jpg" alt="Sendero de Cataratas Bijagua" loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div className="g3" style={{ gridColumn: "span 2" }}>
            <img src="https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_4_1643215273.jpg" alt="Cataratas Bijagua Lodge" loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="loc-section" id="ubicacion">
        <div className="wrap lede">
          <div>
            <p className="eyebrow">Ubicación</p>
            <h2>Bijagua de Upala</h2>
          </div>
          <div>
            <p>En las faldas del Parque Nacional Volcán Miravalles, provincia de Alajuela, a veinte minutos del Parque Nacional Volcán Tenorio. Suficientemente cerca de Liberia y La Fortuna para una escapada corta, suficientemente lejos para que el ritmo cambie de verdad.</p>
            <p className="coords">10.7275° N, 85.0818° O</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="reservar" style={{ paddingBottom: "90px" }}>
        <div className="wrap">
          <div className="cta-inner" style={{ paddingBottom: 0 }}>
            <p className="eyebrow on-dark" style={{ justifyContent: "center" }}>Reservas</p>
            <h2>Seis bungalows. Dos volcanes. Una sola vez que llegas.</h2>
            <p>Escríbenos directamente para consultar disponibilidad y tarifas — sin intermediarios.</p>
            <a href="tel:+50689374687" className="btn">+506 8937 4687</a>
            <a href="tel:+50685170327" className="btn-outline">+506 8517 0327</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--ink-2)", padding: "48px 0", borderTop: "1px solid var(--line-dark)" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", width: "100%", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
          <span style={{ display: "block", lineHeight: "1.6" }}>Cataratas Bijagua Lodge · Upala, Costa Rica · Desde 2004</span>
          <div className="social">
            <a href="https://www.facebook.com/CataratasBijaguaLodge/" target="_blank" rel="noopener">Facebook</a>
            <a href="https://www.instagram.com/cataratasbijagualodge/" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.tripadvisor.com/Hotel_Review-g666791-d3468908-Reviews-Cataratas_Bijagua_Lodge-Bijagua_de_Upala_Province_of_Alajuela.html" target="_blank" rel="noopener">TripAdvisor</a>
          </div>
        </div>
      </footer>
    </>
  );
}
