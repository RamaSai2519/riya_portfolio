"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`text-reveal ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{
            animationDelay: `${index * 0.05}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}
