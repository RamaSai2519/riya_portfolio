"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
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

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Maya Patel",
      title: "Volunteer Coordinator",
      company: "Local Nonprofit",
      image: "/professional-woman-ceo.png",
      rating: 5,
      testimonial:
        "Reliable, proactive, and thoughtful. Helped us plan a consistent month of posts and reported simple insights we could act on. Great attitude and follow-through!",
    },
    {
      name: "Alex Kim",
      title: "Mentor",
      company: "Marketing Community",
      image: "/professional-marketing-director.png",
      rating: 5,
      testimonial:
        "Picks up feedback quickly and iterates well. Strong effort on fundamentals like briefs, checklists, and UTM tracking. Promising early-career marketer.",
    },
    {
      name: "Sara Lopez",
      title: "Small Business Owner",
      company: "Home Bakery",
      image: "/professional-woman-founder-headshot.png",
      rating: 5,
      testimonial:
        "Helped me clean up page titles and descriptions and showed me how to track results. Clear communication and helpful documentation.",
    },
  ]

  return (
    <section id="testimonials-section" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 mb-6">
            What Clients <span className="text-blue-600">Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what industry leaders say about working with me and the results we've
            achieved together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-lg text-slate-900">{testimonial.name}</h4>
                    <p className="text-blue-600 font-semibold">{testimonial.title}</p>
                    <p className="text-slate-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                  <p className="text-slate-700 leading-relaxed pl-6 italic">{testimonial.testimonial}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center">
              {[...Array(5)].map((_, starIndex) => (
                <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-slate-700">
              <span className="font-bold">5.0</span> early feedback from mentors and first collaborators
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
