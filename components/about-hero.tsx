"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Award, Heart, Sparkles } from "lucide-react"

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-slate-900 mb-6 leading-tight">
              Growing through practice and
              <span className="text-pink-600"> real projects</span> ✨
            </h1>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I’m an apprentice digital marketer building solid fundamentals in SEO, social, content, and analytics.
              I’ve delivered a handful of small projects and I’m focused on learning fast and delivering value.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              My approach blends curiosity with data-informed decisions. I test, measure, and iterate—keeping things
              simple, honest, and results-aware while I grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 shadow-lg shadow-pink-200">
                <Download className="mr-2 h-4 w-4" />
                Download Resume 💕
              </Button>
              <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50 bg-transparent">
                View Portfolio ✨
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Award, number: "1", label: "Course Certificate" },
                { icon: Heart, number: "3–5", label: "Projects Completed" },
                { icon: Sparkles, number: "Ongoing", label: "Skills in Progress" },
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <metric.icon className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                  <div className="font-heading font-bold text-2xl text-slate-900">{metric.number}</div>
                  <div className="text-sm text-slate-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src="/digital-marketing-expert.png"
                  alt="Apprentice Digital Marketer"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-pink-600 text-white p-3 rounded-full animate-float">
                <Heart className="h-6 w-6" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-rose-400 text-white p-3 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
