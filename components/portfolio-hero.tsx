"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Grid, List, Heart, Sparkles } from "lucide-react"

export default function PortfolioHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")
  const [viewMode, setViewMode] = useState("grid")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filters = ["All", "SEO Basics", "Social Posts", "Content Briefs", "Email Setup"]

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="h-8 w-8 text-pink-500 animate-pulse" />
            <h1 className="font-heading font-bold text-4xl md:text-6xl bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              My Beautiful Portfolio
            </h1>
            <Sparkles className="h-8 w-8 text-purple-500 animate-pulse" />
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            A small collection of early projects and practice work. Each one helped me learn core skills and improve my
            process.
          </p>

          {/* Filter and View Controls */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className={
                    activeFilter === filter
                      ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0 shadow-lg"
                      : "border-pink-200 text-pink-700 hover:bg-pink-50 bg-white/80 backdrop-blur-sm"
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0"
                    : "border-pink-200 text-pink-700 hover:bg-pink-50 bg-white/80"
                }
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={
                  viewMode === "list"
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0"
                    : "border-pink-200 text-pink-700 hover:bg-pink-50 bg-white/80"
                }
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
