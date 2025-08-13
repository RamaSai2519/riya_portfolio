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
      title: "SEO Magic ✨",
      description:
        "Boost your search rankings with enchanting SEO strategies that attract organic traffic and make your brand shine brighter.",
      features: ["Keyword Research", "On-Page Optimization", "Technical Audits", "Link Building"],
    },
    {
      icon: Share2,
      title: "Social Media Sparkle 💕",
      description:
        "Create scroll-stopping social media campaigns that build loving communities and spark meaningful connections with your audience.",
      features: ["Content Planning", "Community Love", "Paid Advertising", "Analytics & Insights"],
    },
    {
      icon: PenTool,
      title: "Content Creation 🌸",
      description:
        "Develop captivating content that tells your brand's beautiful story and touches hearts across all platforms.",
      features: ["Blog Writing", "Visual Content", "Video Production", "Brand Storytelling"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights 📊",
      description:
        "Transform data into beautiful insights that guide strategic decisions and optimize your campaign's performance gracefully.",
      features: ["Performance Tracking", "ROI Analysis", "Custom Dashboards", "Strategic Recommendations"],
    },
    {
      icon: Mail,
      title: "Email Marketing 💌",
      description:
        "Build and nurture loving customer relationships through heartfelt email campaigns that convert beautifully.",
      features: ["Campaign Design", "Automation Setup", "A/B Testing", "List Segmentation"],
    },
    {
      icon: Smartphone,
      title: "Digital Strategy 🎯",
      description:
        "Comprehensive digital marketing strategies that align with your dreams and drive sustainable, beautiful growth.",
      features: ["Market Research", "Competitor Analysis", "Growth Planning", "Multi-Channel Integration"],
    },
  ]

  return (
    <section id="services-section" className="py-20 bg-gradient-to-br from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 mb-6">
            Services That <span className="text-pink-600">Sparkle</span> & Shine ✨
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From SEO magic to Social Media sparkle, I create beautiful solutions that make your brand shine and deliver
            results that make hearts flutter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <MagneticElement key={index} strength={0.1}>
              <Card
                className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white hover:shadow-pink-100 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
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
                    Learn More 💕
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
              Get Custom Quote ✨
            </Button>
          </MagneticElement>
        </div>
      </div>
    </section>
  )
}
