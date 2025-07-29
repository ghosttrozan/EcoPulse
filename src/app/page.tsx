import Header from "@/components/header";
import Hero1 from "@/components/hero1";
import Hero2 from "@/components/hero2";
import React, { useMemo } from "react";

const NUM_LEAVES = 100;

interface LeafProps {
  style: React.CSSProperties;
}

function Leaf({ style }: LeafProps) {
  return (
    <svg
      style={style}
      viewBox="0 0 80 40"
      xmlns="http://www.w3.org/2000/svg"
      fill="#2a4d46"
      fillOpacity="0.7"
      className="absolute w-20 h-10 opacity-30"
    >
      <path d="M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z" />
    </svg>
  );
}

export default function Home() {
  // Generate array of random styles only once (useMemo)
  const leaves = useMemo(() => {
    return Array.from({ length: NUM_LEAVES }).map(() => {
      const top = Math.random() * 90; // 0% to 90% from top
      const left = Math.random() * 90; // 0% to 90% from left
      const rotate = Math.random() * 360; // 0 to 360 degree rotation
      const scale = 0.5 + Math.random(); // 0.5 to 1.5 scale size
      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `rotate(${rotate}deg) scale(${scale})`,
        position: "absolute",
        pointerEvents: "none", // leaves dont interfere with clicks
      };
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#194c41] via-[#0c1214] to-[#194c41] text-white overflow-hidden">
      {leaves.map((style, idx) => (
        <Leaf key={idx} style={style} />
      ))}

      {/* Your header or other content */}
      <Header />
      <Hero1 />
      <Hero2 />
    </div>
  );
}
