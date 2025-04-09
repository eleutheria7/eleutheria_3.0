import React from "react";

export default function Localizacao() {
  return (
    <section id="Local">
      <div className="py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Local</h3>
        <div className="max-w-4xl mx-auto aspect-square md:aspect-video flex flex-col items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d459.6789342124309!2d-47.4856583!3d-22.8235209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c620e16ce44f5f%3A0xa87cd1be60590d50!2sCapela%20de%20Santo%20Antonio!5e0!3m2!1spt-BR!2sbr!4v1743472401460!5m2!1spt-BR!2sbr"
            className="w-full h-full border-0"
            allowFullScreen
          />
          <p>Centro de Formação Religioso – Luiza G. Freguglia</p>
        </div>
      </div>
    </section>
  );
}
