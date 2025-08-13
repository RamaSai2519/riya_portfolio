"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp, Users, Clock, Award } from "lucide-react"

export default function ProjectGallery() {
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

    const element = document.getElementById("project-gallery")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "Local Bakery SEO Basics",
      client: "Practice Project",
      category: "SEO Basics",
      image: "/modern-ecommerce-dashboard.png",
      description:
        "Keyword research and on-page fixes for a small local bakery site. Focused on titles, meta descriptions, and internal links.",
      metrics: [
        { icon: TrendingUp, label: "Indexed Pages", value: "+12" },
        { icon: Users, label: "GSC Clicks (MoM)", value: "+18%" },
        { icon: Clock, label: "Duration", value: "3 weeks" },
      ],
      tags: ["Keyword Research", "On-page", "GSC"],
      results: "Improved visibility for 8 priority terms",
      featured: true,
    },
    {
      id: 2,
      title: "Social Post Series for Nonprofit",
      client: "Volunteer",
      category: "Social Posts",
      image: "/social-media-analytics-dashboard.png",
      description:
        "Planned and scheduled a month of Instagram posts with simple visuals and captions. Tracked engagement and iteration notes.",
      metrics: [
        { icon: Users, label: "Avg. Engagement", value: "+9%" },
        { icon: TrendingUp, label: "Reach", value: "+14%" },
        { icon: Award, label: "Posts", value: "20" },
      ],
      tags: ["Content Calendar", "Canva", "Scheduling"],
      results: "More consistent posting cadence",
      featured: false,
    },
    {
      id: 3,
      title: "Email Welcome Flow Setup",
      client: "Practice Store",
      category: "Email Setup",
      image: "/placeholder-mxiaw.png",
      description:
        "Drafted copy and set up a 2-step welcome series in a free ESP. Added UTM tags and basic segmenting.",
      metrics: [
        { icon: TrendingUp, label: "Open Rate", value: "28%" },
        { icon: Users, label: "Subscribers", value: "350" },
        { icon: Clock, label: "Flow Steps", value: "2" },
      ],
      tags: ["ESP Setup", "UTM", "Segmentation"],
      results: "Baseline flow ready for testing",
      featured: false,
    },
    {
      id: 4,
      title: "Content Brief and Blog Draft",
      client: "Personal Blog",
      category: "Content Briefs",
      image: "/content-marketing-strategy.png",
      description:
        "Created a content brief and first draft for a beginner topic. Used a simple outline and SEO checklist.",
      metrics: [
        { icon: TrendingUp, label: "Word Count", value: "1.1k" },
        { icon: Users, label: "Edits", value: "3 rounds" },
        { icon: Award, label: "Checklist Items", value: "10/10" },
      ],
      tags: ["Brief", "Drafting", "SEO Checklist"],
      results: "Published and shared with 2 mentors",
      featured: true,
    },
  ]

  return (
    <section id="project-gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${project.featured ? "lg:col-span-2" : ""
                } ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`${project.featured ? "lg:flex" : ""}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${project.featured ? "lg:w-1/2" : ""}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-500 text-white">Featured</Badge>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <CardContent className={`p-8 ${project.featured ? "lg:w-1/2" : ""}`}>
                  <div className="mb-4">
                    <h3 className="font-heading font-bold text-xl lg:text-2xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 font-semibold">{project.client}</p>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <metric.icon className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-heading font-bold text-lg text-slate-900">{metric.value}</div>
                        <div className="text-xs text-slate-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <p className="text-blue-800 font-semibold text-sm">{project.results}</p>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group/btn">
                    View Notes
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
          >
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
