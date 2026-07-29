import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", width: "100%", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
        <span>Cataratas Bijagua Lodge · Upala, Costa Rica · Desde 2004</span>
        <div className="social">
          <a href="https://www.facebook.com/CataratasBijaguaLodge/" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.instagram.com/cataratasbijagualodge/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.tripadvisor.com/Hotel_Review-g666791-d3468908-Reviews-Cataratas_Bijagua_Lodge-Bijagua_de_Upala_Province_of_Alajuela.html" target="_blank" rel="noopener">TripAdvisor</a>
        </div>
      </div>
    </footer>
  );
}
