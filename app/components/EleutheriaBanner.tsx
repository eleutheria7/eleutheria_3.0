import Image from "next/image";
import React from "react";

export default function EleutheriaBanner() {
  return (
    <section className="relative flex items-center justify-center text-white h-[40vh] min-h-[30vh] mt-20">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/img/cabeçalho.jpg"
          alt="Background Eleutheria"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-75 hover:brightness-100 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            ELEUTHERIA 2025
          </h1>
          <h2 className="text-xl md:text-2xl mb-6">
            “Eis a vontade de Deus: A vossa Santificação” - I Tessalonicenses 4,
            3
          </h2>
          <p className="text-lg md:text-xl font-semibold mb-8">
            Dias 20, 21 e 22 de Junho de 2025
          </p>
          <div className="md:hidden">
            <a
              href="/formulario"
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
            >
              INSCREVA-SE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
