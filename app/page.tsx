import HeroSection from './components/HeroSection';
import Introduction from './components/Introduction';
import FeaturedExperiences from './components/FeaturedExperiences';
import Gallery from './components/Gallery';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Introduction />
      <FeaturedExperiences />
      <Gallery />
      <CallToAction />
    </main>
  );
}
