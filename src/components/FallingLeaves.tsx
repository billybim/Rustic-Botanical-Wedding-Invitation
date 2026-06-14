import { useEffect, useState, CSSProperties } from "react";

interface Leaf {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  svgPath: string;
  color: string;
}

// Organic leaf paths
const LEAF_PATHS = [
  // Olive style leaf
  "M10,0 C15,10 15,20 10,30 C5,20 5,10 10,0 Z",
  // Eucalyptus style rounded leaf
  "M15,0 C25,5 25,25 15,30 C5,25 5,5 15,0 Z",
  // Willow style long leaf
  "M5,0 C10,12 10,24 5,36 C0,24 0,12 5,0 Z",
];

const LEAF_COLORS = [
  "rgba(115, 138, 124, 0.4)",  // Sage green soft
  "rgba(156, 177, 162, 0.35)", // Sage light
  "rgba(207, 129, 100, 0.25)", // Terracotta soft warm
  "rgba(147, 118, 92, 0.25)",  // Wood gold/brown soft
];

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    // Generate a fixed set of leaves with different parameters
    const initialLeaves: Leaf[] = Array.from({ length: 18 }).map((_, index) => {
      const left = Math.random() * 100; // random percentage
      const delay = Math.random() * -15; // start in offset so they're already scattered immediately
      const duration = 12 + Math.random() * 12; // slow fall, between 12s and 24s
      const size = 12 + Math.random() * 24; // size in px
      const rotation = Math.random() * 360;
      const svgPath = LEAF_PATHS[Math.floor(Math.random() * LEAF_PATHS.length)];
      const color = LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)];

      return {
        id: index,
        left,
        delay,
        duration,
        size,
        rotation,
        svgPath,
        color,
      };
    });

    setLeaves(initialLeaves);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 select-none">
      {leaves.map((leaf) => (
        <svg
          key={leaf.id}
          className="leaf-falling"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size * 2.5}px`,
            fill: leaf.color,
            fontSize: `${leaf.size}px`,
            filter: "drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.05))",
            "--fall-duration": `${leaf.duration}s`,
            "--fall-delay": `${leaf.delay}s`,
            transform: `rotate(${leaf.rotation}deg)`,
          } as CSSProperties}
          viewBox="0 0 30 50"
        >
          <path d={leaf.svgPath} />
        </svg>
      ))}
    </div>
  );
}
