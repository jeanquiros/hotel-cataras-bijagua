"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Image } from "lucide-react";

interface Props {
  images: string[];
}

export default function Galeria({ images }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () => setSelected((s) => (s !== null ? (s - 1 + images.length) % images.length : null));
  const next = () => setSelected((s) => (s !== null ? (s + 1) % images.length : null));

  const visible = images.slice(0, 3);

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {visible.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`block bg-cover bg-center rounded-sm cursor-pointer hover:opacity-90 transition-opacity text-left ${i === 0 ? "col-span-2 aspect-[16/7]" : "aspect-square"}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>

      {images.length > 3 && (
        <button
          onClick={() => setSelected(0)}
          className="mt-3 flex items-center gap-2 text-sm text-luxury-gold font-medium uppercase tracking-widest hover:text-luxury-gold-dark transition-colors"
        >
          <Image size={16} /> Ver todas las fotos ({images.length})
        </button>
      )}

      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-white/70 hover:text-white z-10">
            <X size={28} />
          </button>

          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
            <ChevronLeft size={36} />
          </button>

          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
            <ChevronRight size={36} />
          </button>

          <div
            className="w-full max-w-4xl aspect-[4/3] bg-contain bg-center bg-no-repeat mx-4"
            style={{ backgroundImage: `url('${images[selected]}')` }}
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {selected + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
