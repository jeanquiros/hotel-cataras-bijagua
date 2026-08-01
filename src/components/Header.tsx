"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 140);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={hidden ? "nav-hide" : undefined}>
      <Link href="/" className="brand">
        <Image src="/logo.png" alt="Cataratas Bijagua" width={180} height={48} style={{ display: "block", height: "40px", width: "auto" }} priority />
      </Link>
      <ul>
        <li><Link href="/cabanas">Alojamiento</Link></li>
        <li><Link href="/experiencias">Sendero</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
