"use client";

import { useState } from "react";
import { CalendarDays, Users, Check } from "lucide-react";

const actividades = [
  { name: "Sendero Cataratas", price: 45 },
  { name: "Río Celeste", price: 65 },
  { name: "Observación de Aves", price: 35 },
  { name: "Caminata Nocturna", price: 40 },
  { name: "Aguas Termales", price: 30 },
  { name: "Yoga al Atardecer", price: 25 },
];

interface Props {
  cabanaName: string;
  cabanaPrice: string;
}

export default function ReservaForm({ cabanaName, cabanaPrice }: Props) {
  const basePrice = parseInt(cabanaPrice.replace("$", ""));
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggleActividad = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]
    );
  };

  const tourTotal = selected.reduce((sum, name) => {
    const act = actividades.find((a) => a.name === name);
    return sum + (act?.price || 0);
  }, 0);

  const total = basePrice + tourTotal;

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
        <p className="text-gray-500 text-sm">Desde ${basePrice} por noche</p>
      </div>

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
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <button type="button" key={n} onClick={() => setGuests(n)}
                      className={`w-10 h-10 text-sm font-medium border transition-colors ${
                        guests === n
                          ? "bg-luxury-gold text-white border-luxury-gold"
                          : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                      }`}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Itinerario — Actividades</p>
                <div className="space-y-2">
                  {actividades.map((a) => (
                    <button type="button" key={a.name} onClick={() => toggleActividad(a.name)}
                      className={`w-full flex items-center justify-between text-sm px-4 py-3 border transition-colors ${
                        selected.includes(a.name)
                          ? "border-luxury-gold bg-luxury-gold/10 text-luxury-charcoal"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                      }`}>
                      <span>{a.name}</span>
                      <span className="font-medium">${a.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{cabanaName}</span>
                  <span>${basePrice}</span>
                </div>
                {selected.length > 0 && (
                  <div className="border-t border-gray-100 pt-2 mb-2">
                    {selected.map((s) => {
                      const act = actividades.find((a) => a.name === s);
                      return (
                        <div key={s} className="flex justify-between text-sm text-gray-500">
                          <span className="text-xs">Tour: {s}</span>
                          <span>${act?.price}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-luxury-charcoal">
                  <span>Total</span>
                  <span>${total}</span>
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
                Enviar solicitud — ${total}
              </button>
            </div>
          )}
        </form>
    </div>
  );
}
