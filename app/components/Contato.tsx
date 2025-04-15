import Link from "next/link";
import React from "react";

export default function Contato() {
  return (
    <section
      id="Contato"
      className="flex items-center justify-center py-16 bg-gray-50"
    >
      <div>
        <h3 className="text-3xl font-bold text-center mb-12">Contato</h3>
        <Link href="https://wa.me/19981097482">
          <h2 className="200px bg-green-600 text-white px-4 py-4 rounded-full hover:bg-green-700 transition-colors text-2xl font-semibold flex items-center justify-center">
            Falar com Organizador
          </h2>
        </Link>
      </div>
    </section>
  );
}
