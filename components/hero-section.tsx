"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Heart } from "lucide-react"
import ParallaxBackground from "./parallax-background"
import MagneticElement from "./magnetic-element"
import AnimatedText from "./animated-text"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 floral-pattern">
      <ParallaxBackground speed={0.2} className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float morph-shape"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl animate-float morph-shape"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-float morph-shape"
          style={{ animationDelay: "4s" }}
        ></div>
      </ParallaxBackground>

      <div
        className="fixed w-4 h-4 bg-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: "all 0.1s ease-out",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <div className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-slate-900 mb-6 leading-tight">
            <AnimatedText text="Transforming Ideas" className="block" />
            <AnimatedText text="into Beautiful" className="block text-pink-500" delay={300} />
            <AnimatedText text="Digital Experiences" className="block text-rose-600" delay={600} />
          </div>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-4">
            Creating elegant digital marketing solutions with a feminine touch that captivate audiences and drive
            meaningful connections.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <MagneticElement>
              <Button
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg group magnetic-hover animate-pulse-glow rounded-full"
              >
                <Heart className="mr-2 h-5 w-5 animate-heart-bounce" />
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticElement>

            <MagneticElement>
              <Button
                variant="outline"
                size="lg"
                className="border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-4 text-lg group bg-transparent magnetic-hover rounded-full"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </MagneticElement>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className={`text-center animate-scale-in stagger-${index + 1}`}>
                <div className="font-heading font-bold text-3xl md:text-4xl text-pink-500 mb-2">{stat.number}</div>
                <div className="text-slate-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center animate-pulse-glow">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
