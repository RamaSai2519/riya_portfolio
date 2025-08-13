"use client"

import { useEffect, useState } from "react"
import { MessageCircle, Calendar, Coffee, Heart, Sparkles } from "lucide-react"

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="h-8 w-8 text-pink-500 animate-pulse" />
            <h1 className="font-heading font-bold text-4xl md:text-6xl bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Let's Create Something
              <span className="block">Beautiful Together</span>
            </h1>
            <Sparkles className="h-8 w-8 text-purple-500 animate-pulse" />
          </div>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            I’m looking for collaborative opportunities, internships, and small practice projects. If you’re open to an
            apprentice who learns fast and communicates clearly, let’s talk.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: MessageCircle,
                title: "Quick Chat",
                description:
                  "Have a small task or idea? Let’s discuss scope, goals, and how I can help while learning.",
                action: "Send Message",
              },
              {
                icon: Calendar,
                title: "Schedule Call",
                description: "Book a 20–30 minute call to see if we’re a good match for an internship or trial task.",
                action: "Book Meeting",
              },
              {
                icon: Coffee,
                title: "Coffee Intro",
                description: "Nearby? Happy to meet and learn more about your team, tools, and workflows.",
                action: "Suggest Location",
              },
            ].map((option, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                  }`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105">
                  <option.icon className="h-8 w-8 text-pink-600 hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{option.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{option.description}</p>
                <button className="text-pink-600 hover:text-rose-600 font-semibold text-sm transition-colors">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
