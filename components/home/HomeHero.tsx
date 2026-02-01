import { HomeCarousel } from "./HomeCarousel";
import HomeHeroContent from "./HomeHeroContent";
import BackgroundVisuals from "../BackgroundVisuals";

export default function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center py-10 lg:py-0">
      <BackgroundVisuals />
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
          <HomeCarousel />
          <HomeHeroContent />
        </div>
      </div>
    </section>
  );
}
