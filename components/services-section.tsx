"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Share2, PenTool, BarChart3, Mail, Smartphone, ArrowRight, Heart } from "lucide-react"
import MagneticElement from "./magnetic-element"

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("services-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Search,
      title: "SEO Basics ✨",
      description:
        "Starter keyword research and simple on-page improvements to help new sites get indexed and understood.",
      features: ["Keyword Ideas", "Titles & Metas", "Alt Text", "Internal Links"],
    },
    {
      icon: Share2,
      title: "Social Posts 💕",
      description:
        "Lightweight content calendars and post scheduling for consistent presence on a couple of key platforms.",
      features: ["Content Plan", "Captions", "Basic Graphics", "Scheduling"],
    },
    {
      icon: PenTool,
      title: "Content Basics 🌸",
      description:
        "Simple briefs and first-draft blog posts designed to answer beginner questions and build a content habit.",
      features: ["Content Brief", "Outline", "Drafting", "SEO Checklist"],
    },
    {
      icon: BarChart3,
      title: "Analytics Setup 📊",
      description:
        "Basic analytics and UTM conventions so you can see what’s working and what to try next.",
      features: ["GSC Setup", "GA4 Basics", "UTM Tags", "Simple Dashboards"],
    },
    {
      icon: Mail,
      title: "Email Setup 💌",
      description:
        "Set up a welcome email or a short series in a free ESP and make sure tracking is in place.",
      features: ["ESP Setup", "Welcome Flow", "Segments", "Templates"],
    },
    {
      icon: Smartphone,
      title: "Digital Foundations 🎯",
      description:
        "Help picking a few practical channels, keeping scope small, and building consistent routines.",
      features: ["Channel Picks", "Simple Goals", "Weekly Cadence", "Review Notes"],
    },
  ]

  return (
    <section id="services-section" className="py-20 bg-gradient-to-br from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 mb-6">
            Starter Services for <span className="text-pink-600">Early Wins</span> ✨
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Apprentice-friendly, scope-aware help to get the basics right and build momentum without overwhelm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <MagneticElement key={index} strength={0.1}>
              <Card
                className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white hover:shadow-pink-100 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-rose-500 transition-all duration-300 animate-rotate-slow">
                      <service.icon className="h-8 w-8 text-pink-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <Heart className="w-3 h-3 text-pink-500 mr-3 animate-pulse" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="text-pink-600 hover:text-pink-700 p-0 h-auto group/btn">
                    View Details 💕
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </MagneticElement>
          ))}
        </div>

        <div className="text-center mt-16">
          <MagneticElement>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 magnetic-hover animate-pulse-glow shadow-lg shadow-pink-200"
            >
              Explore a Trial Task ✨
            </Button>
          </MagneticElement>
        </div>
      </div>
    </section>
  )
}
