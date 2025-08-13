import Navigation from "@/components/navigation"
import AboutHero from "@/components/about-hero"
import ServicesSection from "@/components/services-section"
import ExperienceTimeline from "@/components/experience-timeline"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <ServicesSection />
      <ExperienceTimeline />
    </main>
  )
}
