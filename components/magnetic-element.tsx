"use client"

import type React from "react"

import { useRef, useEffect } from "react"

interface MagneticElementProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export default function MagneticElement({ children, className = "", strength = 0.3 }: MagneticElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      element.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    }

    const handleMouseLeave = () => {
      element.style.transform = "translate(0px, 0px)"
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [strength])

  return (
    <div ref={elementRef} className={`transition-transform duration-300 ease-out ${className}`}>
      {children}
    </div>
  )
}
