import { HeroSection } from '@/components/hero-section';
import PlanetGallery from '@/components/planet-gallery';
import Features from '@/components/features';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PlanetGallery />
        <Features />
      </div>
      <Footer />
    </div>
  );
}