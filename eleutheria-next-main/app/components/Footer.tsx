"use client";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#08220d] text-white py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <img
          src="/assets/img/paroquia.png"
          alt="Paróquia Santa Luzia"
          className="w-16 mb-4 md:mb-0"
        />
        <p className="text-center text-xl italic mb-4 md:mb-0">
          "Uma juventude abrasada pelo Sagrado Coração de Jesus"
        </p>
        <div className="flex gap-4">
          <a
            href="https://wa.me/19981097482"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 text-2xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/SantaLuziaHortolandia/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/jc.santaluzia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
