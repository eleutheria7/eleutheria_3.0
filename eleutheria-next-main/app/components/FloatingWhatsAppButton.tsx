"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/5519981097482"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full 
               shadow-lg hover:bg-green-600 transition-all z-50 animate-bounce"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
