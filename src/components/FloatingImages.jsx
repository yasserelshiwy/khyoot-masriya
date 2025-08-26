import React, { useState, useEffect } from "react";
export default function FloatingImages({
  images = [], 
  count = 20,
  mobileCount = 6,
  sizeRange = [40, 80], 
  duration = [10, 18],
  sway = 18,
  className = "",
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const generateItems = () => {
    if (!images.length) return [];

    const total = isMobile ? mobileCount : count;
    const rand = (min, max) => Math.random() * (max - min) + min;

    const shuffledImages = [...images];
    for (let i = shuffledImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledImages[i], shuffledImages[j]] = [
        shuffledImages[j],
        shuffledImages[i],
      ];
    }

    return Array.from({ length: total }).map((_, i) => {
      const left = Math.random() * 100;
      const delay = -rand(0, 12);
      const dur = rand(duration[0], duration[1]);
      const size = rand(sizeRange[0], sizeRange[1]);
      const img = shuffledImages[i % shuffledImages.length];
      const swayAmt = (Math.random() * 0.5 + 0.75) * sway;

      return { id: i, left, delay, dur, size, img, swayAmt };
    });
  };

  useEffect(() => {
    setItems(generateItems());

  }, [isMobile]);

  if (reduceMotion || !images.length || !items.length) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <style>{`
        @keyframes floatTiltFA {
          0%   { transform: translate(-50%, 0) rotate(-10deg); opacity: 0; }
          8%   { opacity: 0.9; }
          50%  { transform: translate(calc(-50% + var(--sway)), -55vh) rotate(10deg); opacity: 0.9; }
          100% { transform: translate(-50%, -105vh) rotate(-10deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .img-float { animation: none !important; }
        }
      `}</style>

      {items.map((it) => (
        <img
          key={it.id}
          src={it.img}
          alt=""
          className="img-float absolute bottom-[-80px] will-change-transform will-change-opacity"
          style={{
            left: `${it.left}%`,
            width: `${it.size}px`,
            height: `${it.size}px`,
            objectFit: "contain",
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
            animation: `floatTiltFA ${it.dur}s linear infinite`,
            animationDelay: `${it.delay}s`,
            "--sway": `${it.swayAmt}px`,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
