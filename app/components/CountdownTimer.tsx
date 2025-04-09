"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const target = new Date("2025-06-20T19:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#8d1717] text-white py-4">
      <div className="max-w-4xl mx-auto flex justify-center gap-8 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit}>
            <span className="block text-2xl md:text-4xl font-bold">
              {value}
            </span>
            <span className="text-sm uppercase">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
