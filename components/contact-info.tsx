"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react"

export default function ContactInfo() {
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

    const element = document.getElementById("contact-info")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@digitalcraft.com",
      description: "Best for detailed project discussions",
      action: "mailto:hello@digitalcraft.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM PST",
      action: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Available for local meetings",
      action: "#",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Usually much faster!",
      action: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/digitalcraft",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/digitalcraft",
      color: "hover:text-sky-500",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/digitalcraft",
      color: "hover:text-pink-500",
    },
  ]

  return (
    <section id="contact-info" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-8 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-heading font-bold text-3xl text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-slate-600 leading-relaxed">
            Ready to elevate your digital marketing? Choose the best way to connect and let's start building something
            amazing together.
          </p>
        </div>

        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <method.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-slate-900">{method.title}</h3>
                    <p className="text-blue-600 font-semibold">{method.value}</p>
                    <p className="text-slate-600 text-sm">{method.description}</p>
                  </div>
                  {method.action !== "#" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700"
                      onClick={() => window.open(method.action, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <Card
          className={`mt-8 border-0 shadow-lg transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <CardContent className="p-6">
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-4">Connect on Social</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`text-slate-600 ${social.color} transition-colors`}
                  onClick={() => window.open(social.url, "_blank")}
                >
                  <social.icon className="h-5 w-5 mr-2" />
                  {social.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card
          className={`mt-8 border-0 shadow-lg transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "800ms" }}
        >
          <CardContent className="p-6">
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-4">Quick Questions?</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-700">How quickly can we start?</p>
                <p className="text-slate-600">Most projects can begin within 1-2 weeks of contract signing.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Do you work with small businesses?</p>
                <p className="text-slate-600">I work with businesses of all sizes, from startups to Fortune 500.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">What's included in your proposals?</p>
                <p className="text-slate-600">Detailed strategy, timeline, deliverables, and transparent pricing.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
