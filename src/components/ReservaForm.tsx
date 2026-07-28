"use client";

import { useState } from "react";
import { CalendarDays, Users, ChevronDown, ChevronUp, Check } from "lucide-react";

const actividades = [
  "Sendero Cataratas",
  "Río Celeste",
  "Observación de Aves",
  "Caminata Nocturna",
  "Aguas Termales",
  "Yoga al Atardecer",
];

interface Props {
  cabanaName: string;
  cabanaPrice: string;
}

export default function ReservaForm({ cabanaName, cabanaPrice }: Props) {
  const [open, setOpen] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggleActividad = (a: string) => {
    setSelected((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div id="reserva" className="mt-16 border-t border-gray-100 pt-12">
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl font-bold text-luxury-charcoal mb-2">
          Reservar {cabanaName}
        </h3>
        <p className="text-gray-500 text-sm">{cabanaPrice} por noche</p>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="mx-auto flex items-center gap-3 border-2 border-luxury-gold text-luxury-gold px-10 py-3 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
      >
        {open ? "Cerrar" : "Reservar ahora"}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {open && (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8 bg-luxury-warm p-8">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 mx-auto rounded-full bg-luxury-gold/20 flex items-center justify-center mb-4">
                <Check size={28} className="text-luxury-gold" />
              </div>
              <p className="font-heading text-xl font-bold text-luxury-charcoal mb-2">Solicitud enviada</p>
              <p className="text-gray-500 text-sm">Te contactaremos pronto para confirmar tu reservación.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <CalendarDays size={14} /> Llegada
                  </label>
                  <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required
                    className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-luxury-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <CalendarDays size={14} /> Salida
                  </label>
                  <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required
                    className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-luxury-gold transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Users size={14} /> Huéspedes
                </label>
                <select value={guests} onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-luxury-gold transition-colors">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "huésped" : "huéspedes"}</option>
                  ))}
                </select>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Itinerario — Actividades</p>
                <div className="grid grid-cols-2 gap-2">
                  {actividades.map((a) => (
                    <button type="button" key={a} onClick={() => toggleActividad(a)}
                      className={`text-left text-sm px-3 py-2 border transition-colors ${
                        selected.includes(a)
                          ? "border-luxury-gold bg-luxury-gold/10 text-luxury-charcoal"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                      }`}>
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">Nombre</label>
                  <input type="text" required
                    className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-luxury-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input type="email" required
                    className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-luxury-gold transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">Teléfono</label>
                <input type="tel"
                  className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-luxury-gold transition-colors" />
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">Notas</label>
                <textarea rows={2}
                  className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-luxury-gold transition-colors resize-none" />
              </div>

              <button type="submit"
                className="w-full bg-luxury-gold text-white py-3 text-sm font-medium uppercase tracking-widest hover:bg-luxury-gold-dark transition-colors">
                Enviar solicitud
              </button>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
