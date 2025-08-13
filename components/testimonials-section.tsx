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
      name: "Sarah Johnson",
      title: "CEO, TechStyle Fashion",
      company: "TechStyle Fashion",
      image: "/professional-woman-ceo.png",
      rating: 5,
      testimonial:
        "Working with this digital marketing expert transformed our online presence completely. The SEO strategy alone increased our organic traffic by 300% and generated over $2.5M in additional revenue. Absolutely exceptional work!",
    },
    {
      name: "Michael Chen",
      title: "Marketing Director, CloudTech Solutions",
      company: "CloudTech Solutions",
      image: "/professional-marketing-director.png",
      rating: 5,
      testimonial:
        "The B2B lead generation system they developed for us was a game-changer. We saw a 400% increase in qualified leads and reduced our cost per lead by 60%. Their analytical approach and attention to detail is unmatched.",
    },
    {
      name: "Emily Rodriguez",
      title: "Founder, Urban Wellness Co.",
      company: "Urban Wellness Co.",
      image: "/professional-woman-founder-headshot.png",
      rating: 5,
      testimonial:
        "Our social media transformation was incredible! From struggling with engagement to building a community of 50K+ followers with 500% higher engagement rates. The content strategy was brilliant and perfectly aligned with our brand.",
    },
    {
      name: "David Park",
      title: "VP Marketing, FinTech Innovators",
      company: "FinTech Innovators",
      image: "/professional-man-vp-marketing-headshot.png",
      rating: 5,
      testimonial:
        "The content marketing strategy positioned us as thought leaders in our industry. We achieved 250% organic traffic growth and won 3 industry awards. Their strategic thinking and execution are world-class.",
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
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
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
              <span className="font-bold">5.0</span> average rating from <span className="font-bold">50+</span> clients
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
