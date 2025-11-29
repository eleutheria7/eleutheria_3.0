"use client";
import { useState } from "react";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center">
        <h2 className="text-xl font-bold mb-3">Aviso Importante</h2>
        <p className="text-gray-700 mb-4">
          Aqui vai o texto do seu pop-up, como informações do retiro.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
