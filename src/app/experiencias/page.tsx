"use client";

export default function Experiencias() {
  return (
    <>
      <header className="hero" style={{ height: "70vh", minHeight: "460px", alignItems: "flex-end" }}>
        <div className="hero-content" style={{ paddingBottom: "64px" }}>
          <p className="eyebrow">Experiencias</p>
          <h1>El bosque es nuestro vecino</h1>
          <p className="hero-sub">Sal a caminar entre tres tipos de bosque, bañate en las pozas del río Bijagua o simplemente sentate a escuchar el dosel.</p>
        </div>
      </header>

      <section className="tight">
        <div className="wrap lede">
          <div>
            <p className="eyebrow">Sendero de las Cataratas</p>
            <h2>4.7 km · ida y vuelta</h2>
          </div>
          <div>
            <p>Un sendero privado que nace en el lodge y desciende hasta las cataratas del río Bijagua, una caída de 15 metros de agua cristalina rodeada de bosque nuboso, de transición y lluvioso premontano.</p>
            <p>En el camino, tres miradores con vista al valle de Bijagua, dos puentes colgantes y pozas donde detenerse a nadar. Se recorre en dos a tres horas, sin guía.</p>
            <p className="coords" style={{ color: "var(--gold)", marginTop: "18px" }}>Salí temprano · Llevá repelente y agua · Zapatos cerrados</p>
          </div>
        </div>
      </section>

      <div className="photo-block" style={{ height: "80vh" }}>
        <img src="/images/sendero/sendero-2.jpg" alt="Sendero entre el bosque" loading="lazy" />
      </div>

      <section className="split" style={{ display: "grid" }}>
        <div className="copy">
          <p className="eyebrow on-dark">La caída</p>
          <h2>Quince metros de agua que nacen del volcán</h2>
          <p>El sendero termina donde empieza la razón del lodge: la catarata Bijagua, alimentada por las faldas del Volcán Miravalles. En temporada verde el caudal es generoso y las pozas invitan a quedarse.</p>
          <div className="stat-row">
            <div><span>2–3 h</span><small>Duración</small></div>
            <div><span>Moderada baja</span><small>Dificultad</small></div>
            <div><span>15 m</span><small>Caída</small></div>
          </div>
        </div>
        <div className="photo-block">
          <img src="/images/sendero/sendero-1.jpg" alt="Catarata del río Bijagua" loading="lazy" />
        </div>
      </section>

      <section className="celeste-section" style={{ padding: "110px 0" }}>
        <div className="wrap lede">
          <div>
            <p className="eyebrow">De noche</p>
            <h2>Cuando cae el sol, el bosque despierta</h2>
          </div>
          <div>
            <p>Ofrecemos caminata nocturna guiada por los alrededores del lodge: ranas, insectos, serpientes y aves que solo se escuchan cuando oscurece. Linterna incluida.</p>
            <p>Y para los madrugadores, tour de observación de aves al amanecer, cuando el dosel está en su punto más alto de actividad.</p>
          </div>
        </div>
      </section>

      <section className="tight" style={{ paddingTop: 0 }}>
        <div className="gallery" style={{ gridAutoRows: "300px" }}>
          <div className="g1">
            <img src="/images/sendero/sendero-1.jpg" alt="Sendero hacia las cataratas" loading="lazy" />
          </div>
          <div className="g2">
            <img src="/images/sendero/sendero-3.jpg" alt="Bosque nuboso" loading="lazy" />
          </div>
          <div className="g3">
            <img src="https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_8_1643215759._1643215759.jpg" alt="Catarata del río Bijagua" loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div className="g3">
            <img src="https://s3-cdn.hotellinksolutions.com/hls/data/5542/gallery/thumbs/full_10_1643215838.jpg" alt="Catarata Bijagua" loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section className="cta" style={{ padding: "110px 0 120px" }}>
        <div className="cta-inner" style={{ paddingBottom: 0 }}>
          <p className="eyebrow">Cataratas Bijagua Lodge</p>
          <h2>La montaña no necesita plan, solo presencialidad.</h2>
          <p>Sendero, cataratas y avistamiento de aves incluidos con tu estadía.</p>
          <a href="#" className="btn">Reservar ahora</a>
        </div>
      </section>
    </>
  );
}
