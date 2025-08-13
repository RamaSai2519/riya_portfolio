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
      year: "2025",
      title: "Marketing Apprentice (Freelance Projects)",
      company: "Independent / Volunteer",
      location: "Remote",
      description:
        "Completed a handful of small projects across SEO, social media, and content. Collaborated with mentors and used feedback loops to improve outcomes.",
      achievements: ["Shipped 3–5 mini projects", "Built simple analytics dashboards", "Learned to brief and report"],
    },
    {
      year: "2024",
      title: "Digital Marketing Trainee",
      company: "Community Nonprofit",
      location: "Remote",
      description:
        "Supported social posts, basic SEO checks, and email newsletter setup. Focused on consistency and measurement basics.",
      achievements: ["Set up newsletter workflow", "Drafted content calendar", "Documented simple SEO fixes"],
    },
    {
      year: "2024",
      title: "Course Projects",
      company: "Online Programs",
      location: "Remote",
      description:
        "Hands-on assignments covering keyword research, basic on-page SEO, content briefs, and UTM tracking.",
      achievements: ["Completed capstone project", "Practiced A/B test setup", "Created content brief templates"],
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
            A starter journey focused on fundamentals, feedback, and steady improvement through real, small projects.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
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
