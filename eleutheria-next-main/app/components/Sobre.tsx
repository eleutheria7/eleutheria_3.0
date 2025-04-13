import Image from "next/image";
import React from "react";

export default function Sobre() {
  return (
    <section id="Sobre" className="w-full p-16">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Nós</h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-8 items-center">
          <div className="hidden md:block relative w-full h-full">
            <div className="hidden md:block absolute left-0 w-42 h-full">
              <Image
                src="/assets/img/coração.jpg"
                alt="Símbolo Eleutheria"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Texto Central */}
          <div className=" space-y-6 text-lg text-justify">
            <p className="leading-relaxed">
              O Eleutheria é um retiro católico organizado pela juventude da
              Paróquia Santa Luzia de Hortolândia/SP, destinado a jovens de 14 a
              30 anos.
            </p>

            <p className="leading-relaxed">
              Neste encontro, você terá a oportunidade de:
            </p>

            <ul className="list-disc pl-6">
              <li>Desenvolver uma relação mais profunda com Deus</li>
              <li>Se abster das preocupações cotidianas</li>
              <li>Descobrir o sentido da sua vida</li>
              <li>Encontrar a verdadeira alegria</li>
              <li>Compartilhar experiências com outros jovens</li>
            </ul>

            <p>
              O Eleutheria é um momento único para você ter um encontro genuíno
              com a bondade e a misericórdia de Deus.
            </p>

            <p>
              Se você está procurando por um momento de reflexão, oração e
              encontro com Deus, o Eleutheria é o lugar certo para você!
            </p>

            <h2 className="text-3xl font-bold text-center mb-12 mt-12">
              O que é Eleutheria?
            </h2>

            <p>
              "Eleutheria" é uma palavra grega (Ελευθερία) que significa
              "liberdade". No contexto cristão, especialmente no catolicismo, o
              termo "Eleutheria" é usado para se referir à liberdade espiritual
              que vem da relação com Deus.
            </p>

            <p>
              Nesse sentido, a Eleutheria não se refere apenas à liberdade
              física ou política, mas sim à liberdade interior que permite que
              as pessoas vivam de acordo com a vontade de Deus e alcancem a
              plenitude da vida.
            </p>
          </div>

          {/* Imagem Direita */}
          <div className="hidden md:block relative w-full h-full">
            <div className="hidden md:block absolute right-0 w-42 h-full">
              <Image
                src="/assets/img/coração.jpg"
                alt="Símbolo Eleutheria"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
