"use client";

import { useEffect, useState, useRef } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  useEffect(() => {
    if (!ringRef.current) return;
    ringRef.current.style.transform = `translate(${pos.x - 12}px, ${pos.y - 12}px)`;
  }, [pos]);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body { cursor: none; }
          a, button, [role="button"], input, textarea, select {
            cursor: none;
          }
        }
      `}</style>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-[width,height,opacity,border-color] duration-300"
        style={{
          width: visible ? 24 : 0,
          height: visible ? 24 : 0,
          borderRadius: "50%",
          border: "1.5px solid #3cb371",
          opacity: visible ? 1 : 0,
          marginLeft: 0,
          marginTop: 0,
        }}
      />
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "#3cb371",
          transform: `translate(${pos.x - 2}px, ${pos.y - 2}px)`,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
    </>
  );
}
