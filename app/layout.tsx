import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Open_Sans } from "next/font/google"
import "./globals.css"
import ScrollProgress from "@/components/scroll-progress"

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
  title: "Digital Marketing Portfolio | Creative Solutions",
  description:
    "Transforming Ideas into Beautiful Digital Experiences - Professional digital marketing portfolio with a feminine touch.",
  generator: "v0.app",
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
