"use client";
import { useState } from "react";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-2xl shadow-2xl p-0 overflow-hidden">

        {/* Botão X */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
        >
          ×
        </button>

        {/* Imagem clicável */}
        <a href="https://ordo-amoris.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/img/OrdoAmoris.jpg"
            alt="Popup"
            className="w-[320px] h-auto cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
