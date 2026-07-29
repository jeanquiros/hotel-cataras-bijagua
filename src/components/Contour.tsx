export default function Contour() {
  return (
    <div className="relative bg-ink h-[150px] overflow-hidden">
      <span className="absolute font-mono text-[0.62rem] tracking-[0.1em] uppercase text-[#C9C2B4] top-[18px] left-[16%] max-sm:hidden">
        Miravalles · 2,028 m
      </span>
      <span className="absolute font-mono text-[0.62rem] tracking-[0.1em] uppercase text-[#C9C2B4] top-[18px] left-[63%] max-sm:hidden">
        Tenorio · 1,916 m
      </span>
      <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
        <polyline
          points="0,150 0,120 90,95 180,110 260,60 320,85 400,40 460,70 540,30 600,55 680,95 760,70 820,110 900,50 960,80 1040,35 1100,65 1180,25 1240,60 1320,90 1440,70 1440,150"
          fill="none" stroke="#B08D57" strokeWidth="1.4" opacity="0.9"
        />
        <polyline
          points="0,150 0,132 90,112 180,122 260,88 320,105 400,72 460,95 540,66 600,84 680,112 760,95 820,122 900,80 960,102 1040,68 1100,90 1180,58 1240,84 1320,106 1440,92 1440,150"
          fill="none" stroke="#D4B47E" strokeWidth="0.8" opacity="0.4"
        />
      </svg>
    </div>
  );
}
