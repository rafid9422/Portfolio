import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-6 focus:py-3 focus:text-paper"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="min-h-screen">
        <HeroSection />
        <LogoMarquee />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ArticlesSection />
      </main>
      <Footer />
    </>
  )
}
