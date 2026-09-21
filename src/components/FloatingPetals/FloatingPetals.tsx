// src/components/FloatingPetals/FloatingPetals.tsx
// Ambient falling petal animation — CSS-driven for performance
import { useReducedMotion } from "framer-motion";

interface Petal {
  id: number;
  startX: string;
  size: string;
  duration: string;
  delay: string;
  drift: string;
  rotation: string;
  opacity: string;
  color: string;
}

const PETAL_COLORS = [
  "#c9a8a0", // dusty rose
  "#d4b8b2", // blush
  "#b8a882", // champagne gold
  "#a5b595", // sage
  "#e2ccc6", // light blush
];

function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    startX: `${Math.random() * 100}%`,
    size: `${6 + Math.random() * 10}px`,
    duration: `${12 + Math.random() * 16}s`,
    delay: `${Math.random() * 20}s`,
    drift: `${(Math.random() - 0.5) * 120}px`,
    rotation: `${(Math.random() - 0.5) * 360}deg`,
    opacity: `${0.25 + Math.random() * 0.2}`,
    color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
  }));
}

const PETALS = generatePetals(16);

const PetalShape = () => (
  <svg viewBox="0 0 20 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 1 C15 3 19 8 18 14 C17 19 13 22 10 23 C7 22 3 19 2 14 C1 8 5 3 10 1 Z" opacity="0.85"/>
  </svg>
);

export default function FloatingPetals() {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return null;

  return (
    <div aria-hidden="true" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 10, overflow: "hidden" }}>
      {PETALS.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            "--start-x": petal.startX,
            "--petal-size": petal.size,
            "--duration": petal.duration,
            "--delay": petal.delay,
            "--drift": petal.drift,
            "--rotation": petal.rotation,
            "--petal-opacity": petal.opacity,
            "--petal-color": petal.color,
          } as React.CSSProperties}
        >
          <PetalShape />
        </div>
      ))}
    </div>
  );
}
