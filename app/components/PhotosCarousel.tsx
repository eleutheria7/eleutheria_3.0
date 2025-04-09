"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const photos = [
  {
    image: "/assets/img/photos/Imagem1.jpg",
    alt: "Foto 1",
  },
  {
    image: "/assets/img/photos/Imagem2.jpg",
    alt: "Foto 2",
  },
  {
    image: "/assets/img/photos/Imagem3.jpg",
    alt: "Foto 3",
  },
  {
    image: "/assets/img/photos/Imagem4.jpg",
    alt: "Foto 4",
  },
  {
    image: "/assets/img/photos/Imagem5.jpg",
    alt: "Foto 5",
  },
  {
    image: "/assets/img/photos/Imagem6.jpg",
    alt: "Foto 6",
  },
  {
    image: "/assets/img/photos/Imagem7.jpg",
    alt: "Foto 7",
  },
  {
    image: "/assets/img/photos/Imagem8.jpg",
    alt: "Foto 8",
  },
  {
    image: "/assets/img/photos/Imagem9.jpg",
    alt: "Foto 9",
  },
  {
    image: "/assets/img/photos/Imagem10.jpg",
    alt: "Foto 10",
  },
  {
    image: "/assets/img/photos/Imagem11.jpg",
    alt: "Foto 11",
  },
  {
    image: "/assets/img/photos/Imagem12.jpg",
    alt: "Foto 12",
  },
  {
    image: "/assets/img/photos/Imagem13.jpg",
    alt: "Foto 13",
  },
  {
    image: "/assets/img/photos/Imagem14.jpg",
    alt: "Foto 14",
  },
  {
    image: "/assets/img/photos/Imagem15.jpg",
    alt: "Foto 15",
  },
  {
    image: "/assets/img/photos/Imagem16.jpg",
    alt: "Foto 16",
  },
  {
    image: "/assets/img/photos/Imagem17.jpg",
    alt: "Foto 17",
  },
  {
    image: "/assets/img/photos/Imagem18.jpg",
    alt: "Foto 18",
  },
  {
    image: "/assets/img/photos/Imagem19.jpg",
    alt: "Foto 19",
  },
  {
    image: "/assets/img/photos/Imagem20.jpg",
    alt: "Foto 20",
  },
  {
    image: "/assets/img/photos/Imagem21.jpg",
    alt: "Foto 21",
  },
  {
    image: "/assets/img/photos/Imagem22.jpg",
    alt: "Foto 22",
  },
  {
    image: "/assets/img/photos/Imagem23.jpg",
    alt: "Foto 23",
  },
  {
    image: "/assets/img/photos/Imagem24.jpg",
    alt: "Foto 24",
  },
  {
    image: "/assets/img/photos/Imagem25.jpg",
    alt: "Foto 25",
  },
  {
    image: "/assets/img/photos/Imagem26.jpg",
    alt: "Foto 26",
  },
  {
    image: "/assets/img/photos/Imagem27.jpg",
    alt: "Foto 27",
  },
  {
    image: "/assets/img/photos/Imagem28.jpg",
    alt: "Foto 28",
  },
];

export default function PhotosCarousel() {
  return (
    <section id="Fotos">
      <div className="py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">
          Fotos Eleutheria 2024
        </h3>
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
            autoplay={{ delay: 5000 }}
            className="h-full max-w-7xl mx-auto px-4"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-6 mx-2 h-full">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
