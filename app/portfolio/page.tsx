import Navigation from "@/components/navigation"
import PortfolioHero from "@/components/portfolio-hero"
import ProjectGallery from "@/components/project-gallery"
import TestimonialsSection from "@/components/testimonials-section"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioHero />
      <ProjectGallery />
      <TestimonialsSection />
    </main>
  )
}
