import type React from "react"
import type { Metadata } from "next"
import ScrollProgress from "@/components/scroll-progress"
import { Playfair_Display, Open_Sans } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Bella Digital | Riya's Portfolio",
  description:
    "Transforming Ideas into Beautiful Digital Experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
