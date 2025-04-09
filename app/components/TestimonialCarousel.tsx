"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { text } from "stream/consumers";

const testimonials = [
  {
    name: "Guilherme",
    text: '"Me chamo Guilherme, tenho 23 anos, e havia me afastado de Deus por um longo tempo. Porém, o Eleutheria foi como uma guia para me reconectar e voltar para casa. No começo, senti um nervosismo de ir para um lugar onde não conhecia ninguém, mas, depois de fazer algumas novas amizades e viver tudo o que aconteceu lá, com tantas pessoas buscando reencontrar Deus e renovar sua fé, as pregações de pessoas incríveis me inspiraram muito. Hoje, não consigo mais imaginar minha vida fora da casa do Pai. Sem dúvida, participarei sempre que puder."',
    image: "/assets/img/Guilherme.jpg",
  },
  {
    name: "Maria Natalia",
    text: '"Eu me chamo Maria Natália, tenho 25 anos e o Eleutheria foi o meu primeiro retiro. Não participei de outros retiros por medo e insegurança, mas estava afastada da fé e decidi que era hora de mudar. E essa foi a melhor escolha! Conheci pessoas novas, me senti muito acolhida e acima de tudo, me reencontrei com Deus! Foi uma experiência infinitamente maravilhosa! Sinto que minha vida mudou completamente, após o retiro! "',
    image: "/assets/img/Natalia.jpg",
  },
  {
    name: "Rafael",
    text: '"Meu nome é Rafael, tenho 24 anos, e participar do retiro Eleutheria foi uma experiência que realmente marcou minha vida. Confesso que fiquei um pouco receoso, sem saber bem como funcionava ou o que esperar, mas decidi me entregar à experiência. Durante o retiro, fui surpreendido várias vezes pelas conversas, orações e até momentos de silêncio, que me ajudaram a sentir a presença de Deus. O Eleutheria foi um ponto de virada. Ali comecei a enxergar minha fé com mais profundidade, e essa nova caminhada tem sido transformadora. Acredito que saíra de lá renovado, com um propósito claro, e a certeza real de que Deus está ao nosso lado"',
    image: "/assets/img/Rafael.jpg",
  },
  {
    name: "Giovana Schicovski",
    text: '"Meu nome é Giovana tenho 17 anos, participei do retiro Eleutheria ano passado, me reconectei profundamente com Jesus de uma forma que nunca imaginei. Foi ali que, com o coração aberto, me entreguei de uma vez por todas à Ele. Lembro com carinho de todos os momento sem que senti Sua presença de maneira tão forte, como tudo que estava ao meu redor sumisse e fosse apenas eu e ele. Eleutheria é muito mais que um retiro, é um tempo de cura e renovação. Cada oração, cada reflexão, cada momento de partilha, me aproximaram mais de Jesus e me ajudaram a entender o quanto Ele me ama."',
    image: "/assets/img/Giovana Schicovski.jpg",
  },
  {
    name: "Bianca",
    text: '"Me chamo Bianca, tenho 16 anos, e o Eleutheria foi um retiro que transformou minha vida. No começo, senti medo por não conhecer ninguém, mas decidi ir. E que escolha incrível! Lá, senti a presença de Deus de uma forma indescritível, vivi experiências que transformam qualquer pessoa e fiz amizades maravilhosas. O Eleutheria é muito mais que um retiro: é um lugar de renovação, fé e conversão. Sem dúvidas, voltarei muitas vezes!"',
    image: "/assets/img/Bianca.jpg",
  },
  {
    name: "Giovana Cruz",
    text: '"Me chamo Giovana, tenho 18 anos e com certeza o Eleutheria foi a melhor experiência da minha vida. O retiro onde eu conseguia ver Jesus em todas as pessoas, tanto as que serviram e se doaram muito para estar ali, quanto nos retirantes também. Tive minha primeira experiência pessoal com Cristo no retiro e nunca esqueço de nenhum momento que vivi ali, das palestras, das orações, dos momentos de adoração, do sorriso de cada um, da comida muito boa nunca me senti tão bem, acolhida e tão feliz em toda minha vida, mesmo. Eleutheria é uma benção, e grande graça do Senhor foi participar."',
    image: "/assets/img/Giovana Cruz.jpg",
  },
  {
    name: "Murilo",
    text: '"Me chamo Murillo, tenho 20 anos. Recebi o convite para o retiro de quem eu menos esperava. Como estava de boa, resolvi ir. Três dias parecem muito tempo, mas lá esses três dias pareceram horas. Eu até queria ficar mais! Foram os três dias mais importantes da minha vida, onde realmente entendi que o propósito da vida é Deus, Ele transformou minha vida de uma forma que eu não sei explicar; Ele encheu o vazio do meu coração. Lá conheci pessoas que me aproximaram de Deus, só tenho a agradecer. Se você tiver a oportunidade de participar, vá! Não pense duas vezes; Se entregue completamente! Assim como Ele mudou minha vida, pode mudar a sua."',
    image: "/assets/img/Anonimo.png",
  },
  // Adicione os outros testemunhos aqui
];

export default function TestimonialCarousel() {
  return (
    <section id="Testemunhos">
      <div className="py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">Testemunhos</h3>
        <div className="custom-carousel-container max-w-10xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 10000 }}
            className="h-full max-w-7xl mx-auto px-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-6 mx-2 h-full">
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold">
                      {testimonial.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-justify leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
