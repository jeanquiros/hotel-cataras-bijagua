"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav>
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
