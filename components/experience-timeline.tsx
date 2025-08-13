"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export default function ExperienceTimeline() {
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

    const element = document.getElementById("experience-timeline")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Digital Marketing Strategist",
      company: "Creative Digital Agency",
      location: "San Francisco, CA",
      description:
        "Leading comprehensive digital marketing campaigns for Fortune 500 clients, resulting in an average 200% increase in ROI and 150% growth in organic traffic.",
      achievements: ["Managed $2M+ in ad spend", "Led team of 8 specialists", "Launched 50+ successful campaigns"],
    },
    {
      year: "2021 - 2023",
      title: "Digital Marketing Manager",
      company: "TechStart Solutions",
      location: "Austin, TX",
      description:
        "Developed and executed multi-channel marketing strategies for B2B SaaS companies, focusing on lead generation and customer acquisition.",
      achievements: ["Increased lead quality by 180%", "Reduced CAC by 45%", "Built marketing automation systems"],
    },
    {
      year: "2019 - 2021",
      title: "Marketing Specialist",
      company: "Growth Marketing Co.",
      location: "Denver, CO",
      description:
        "Specialized in content marketing and SEO optimization for e-commerce brands, driving significant improvements in search rankings and conversion rates.",
      achievements: ["Improved organic traffic by 300%", "Created 200+ content pieces", "Optimized 50+ websites"],
    },
    {
      year: "2018 - 2019",
      title: "Junior Marketing Analyst",
      company: "Digital Insights Inc.",
      location: "Chicago, IL",
      description:
        "Analyzed marketing performance data and provided actionable insights to optimize campaign effectiveness and budget allocation.",
      achievements: [
        "Analyzed 100+ campaigns",
        "Improved reporting efficiency by 60%",
        "Identified key growth opportunities",
      ],
    },
  ]

  return (
    <section id="experience-timeline" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 mb-6">
            My <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A timeline of growth, learning, and delivering exceptional results across diverse industries and challenges.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                <Card className="ml-20 shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-heading font-bold text-xl text-slate-900 mb-1">{exp.title}</h3>
                        <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-slate-600 mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.year}
                        </div>
                        <div className="flex items-center text-slate-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-6">{exp.description}</p>

                    <div className="grid md:grid-cols-3 gap-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-sm text-slate-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
