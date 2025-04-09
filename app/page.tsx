import Header from "./components/Header";
import EleutheriaBanner from "./components/EleutheriaBanner";
import CountdownTimer from "./components/CountdownTimer";
import Sobre from "./components/Sobre";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Video from "./components/Video";
import PhotosCarousel from "./components/PhotosCarousel";
import Localizacao from "./components/Localizacao";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Eleutheria 2025 */}
      <EleutheriaBanner />

      {/* Countdown */}
      <CountdownTimer />

      {/* Seção Sobre */}
      <Sobre />

      {/* Seção Testemunhos */}
      <TestimonialCarousel />

      {/* Seção Vídeo */}
      <Video />

      {/* Seção Fotos */}
      <PhotosCarousel />

      {/* Seção Mapa */}
      <Localizacao />

      {/* Seção Contato */}
      <Contato />

      {/* Footer */}
      <Footer />
    </div>
  );
}
