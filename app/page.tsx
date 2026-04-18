import HeroSection from '@/components/sections/HeroSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import AboutPreview from '@/components/sections/AboutPreview';
import ServicesOverview from '@/components/sections/ServicesOverview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <AboutPreview />
      <ServicesOverview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
