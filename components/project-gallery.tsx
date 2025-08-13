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
      title: "E-commerce Growth Campaign",
      client: "TechStyle Fashion",
      category: "SEO",
      image: "/modern-ecommerce-dashboard.png",
      description:
        "Comprehensive SEO and content strategy that increased organic traffic by 300% and boosted conversion rates by 45% within 6 months.",
      metrics: [
        { icon: TrendingUp, label: "Traffic Increase", value: "300%" },
        { icon: Users, label: "New Customers", value: "12K+" },
        { icon: Clock, label: "Project Duration", value: "6 months" },
      ],
      tags: ["SEO", "Content Strategy", "Analytics"],
      results: "Generated $2.5M in additional revenue",
      featured: true,
    },
    {
      id: 2,
      title: "Social Media Transformation",
      client: "Urban Wellness Co.",
      category: "Social Media",
      image: "/social-media-analytics-dashboard.png",
      description:
        "Complete social media overhaul resulting in 500% increase in engagement and 200% growth in follower base across all platforms.",
      metrics: [
        { icon: Users, label: "Follower Growth", value: "200%" },
        { icon: TrendingUp, label: "Engagement Rate", value: "500%" },
        { icon: Award, label: "Viral Posts", value: "15+" },
      ],
      tags: ["Social Media", "Content Creation", "Community Management"],
      results: "Built a community of 50K+ engaged followers",
      featured: false,
    },
    {
      id: 3,
      title: "B2B Lead Generation System",
      client: "CloudTech Solutions",
      category: "Analytics",
      image: "/b2b-marketing-dashboard.png",
      description:
        "Developed automated lead generation system using advanced analytics and personalization, resulting in 400% increase in qualified leads.",
      metrics: [
        { icon: TrendingUp, label: "Lead Quality", value: "400%" },
        { icon: Users, label: "MQLs Generated", value: "2,500+" },
        { icon: Clock, label: "Sales Cycle", value: "-30%" },
      ],
      tags: ["Analytics", "Automation", "Lead Generation"],
      results: "Reduced cost per lead by 60%",
      featured: true,
    },
    {
      id: 4,
      title: "Email Marketing Revival",
      client: "Artisan Marketplace",
      category: "Email Marketing",
      image: "/placeholder-mxiaw.png",
      description:
        "Revitalized email marketing strategy with personalized campaigns, achieving industry-leading open rates and driving significant revenue growth.",
      metrics: [
        { icon: TrendingUp, label: "Open Rate", value: "45%" },
        { icon: Users, label: "Subscribers", value: "25K+" },
        { icon: Award, label: "Revenue Growth", value: "180%" },
      ],
      tags: ["Email Marketing", "Personalization", "Automation"],
      results: "Generated $800K in email-driven revenue",
      featured: false,
    },
    {
      id: 5,
      title: "Content Marketing Mastery",
      client: "FinTech Innovators",
      category: "Content",
      image: "/content-marketing-strategy.png",
      description:
        "Strategic content marketing approach that positioned the brand as a thought leader, resulting in massive organic growth and industry recognition.",
      metrics: [
        { icon: TrendingUp, label: "Organic Traffic", value: "250%" },
        { icon: Users, label: "Content Shares", value: "10K+" },
        { icon: Award, label: "Industry Awards", value: "3" },
      ],
      tags: ["Content Strategy", "Thought Leadership", "SEO"],
      results: "Established brand as industry thought leader",
      featured: false,
    },
    {
      id: 6,
      title: "Multi-Channel Campaign",
      client: "Sustainable Living Brand",
      category: "Analytics",
      image: "/multi-channel-marketing-dashboard.png",
      description:
        "Integrated multi-channel marketing campaign that unified brand messaging across all touchpoints, resulting in exceptional ROI and brand awareness.",
      metrics: [
        { icon: TrendingUp, label: "ROI Increase", value: "320%" },
        { icon: Users, label: "Brand Awareness", value: "85%" },
        { icon: Award, label: "Campaign Awards", value: "2" },
      ],
      tags: ["Multi-Channel", "Brand Strategy", "Analytics"],
      results: "Achieved 320% ROI across all channels",
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
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? "lg:col-span-2" : ""
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
                    View Case Study
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
