"use client";

import { motion } from "motion/react";
import { constellations } from "@/lib/constellations";

export default function Constellation({ sign }: { sign: string }) {
  const data = constellations[sign];
  if (!data) return null;

  return (
    <div className="absolute inset-0 overflow-hidden bg-stone-950">
      {/* Background Starry Sky panning */}
      <motion.div 
        className="absolute -inset-[100%] bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-40"
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Constellation Container panning */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full max-w-[300px] max-h-[300px] opacity-90 overflow-visible drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
          {/* Lines */}
          {data.lines.map((line, i) => {
            const start = data.stars[line[0]];
            const end = data.stars[line[1]];
            return (
              <motion.line 
                key={`line-${i}`}
                x1={start[0]} y1={start[1]} 
                x2={end[0]} y2={end[1]} 
                stroke="white" 
                strokeWidth="0.4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2, delay: i * 0.15 }}
              />
            )
          })}
          
          {/* Stars */}
          {data.stars.map((star, i) => (
            <motion.circle 
              key={`star-${i}`}
              cx={star[0]} 
              cy={star[1]} 
              r="1.2" 
              fill="white"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: Math.random() * 2 }}
            />
          ))}
        </svg>
      </motion.div>
      <div className="absolute inset-0 bg-stone-950/20" />
    </div>
  );
}
