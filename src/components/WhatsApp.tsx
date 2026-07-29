"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/50689374687"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
