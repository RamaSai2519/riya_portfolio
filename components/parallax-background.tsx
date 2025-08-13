"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ParallaxBackgroundProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export default function ParallaxBackground({ children, className = "", speed = 0.5 }: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`relative ${className}`}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
      }}
    >
      {children}
    </div>
  )
}
