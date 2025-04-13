"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAlignJustify } from "react-icons/fa";

interface ScrollLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  onClick?: () => void;
}

const ScrollLink = ({
  href,
  onClick,
  children,
  className,
  ...props
}: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    onClick?.();
  };

  return (
    <a href={href} onClick={handleClick} className="cursor-pointer">
      {children}
    </a>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Fecha o menu ao redimensionar a tela
  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <Image
            src="/assets/img/logo.png"
            alt="Logo Eleutheria"
            width={50}
            height={50}
          />
        </Link>
        {/* Conteúdo desktop */}
        <div className="hidden md:flex space-x-8 text-2xl items-center">
          {["Sobre", "Testemunhos", "Fotos", "Local", "Contato"].map((item) => (
            <ScrollLink
              key={item}
              href={`#${item}`}
              className="text-gray-600 hover:text-blue-600 transition-colors capitalize"
            >
              {item}
            </ScrollLink>
          ))}
          <Link
            href="/formulario"
            className="bg-blue-600 text-white px-4 py-4 rounded-full hover:bg-blue-700 transition-colors text-sm font-semibold flex items-center justify-center"
          >
            INSCRIÇÕES
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-4">
            <FaAlignJustify size={26} />
          </button>

          {isOpen && (
            <div className="flex flex-col gap-4 absolute top-full left-0 right-0 bg-white shadow-lg p-4 py-2 px-4 pb-8 text-gray-600 hover:bg-gray-100 text-2xl">
              {["Sobre", "Testemunhos", "Fotos", "Local", "Contato"].map(
                (item) => (
                  <ScrollLink
                    key={item}
                    href={`#${item}`}
                    className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </ScrollLink>
                ),
              )}
              <Link
                href="/formulario"
                className="bg-blue-600 text-white px-4 py-4 rounded-full text-sm items-center justify-center hidden"
              >
                INSCRIÇÕES
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
