"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    project: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        project: "",
        message: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white flex items-center justify-center">
        <Card className="max-w-md mx-auto border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-slate-600">
              Thank you for reaching out. I'll get back to you within 24 hours to discuss your project.
            </p>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-heading font-bold text-3xl text-slate-900 mb-4">Start Your Project</h2>
          <p className="text-slate-600 leading-relaxed">
            Fill out the form below and I'll get back to you within 24 hours with a detailed proposal tailored to your
            needs.
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-semibold">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-700 font-semibold">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-slate-700 font-semibold">
                    Project Budget
                  </Label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="project" className="text-slate-700 font-semibold">
                  Project Type *
                </Label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white"
                >
                  <option value="">Select Project Type</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="social-media">Social Media Strategy</option>
                  <option value="content">Content Marketing</option>
                  <option value="email">Email Marketing</option>
                  <option value="analytics">Analytics & Insights</option>
                  <option value="full-strategy">Complete Digital Strategy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700 font-semibold">
                  Project Details *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  placeholder="Tell me about your project goals, target audience, current challenges, and what success looks like for you..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </div>
                )}
              </Button>

              <p className="text-sm text-slate-500 text-center">
                By submitting this form, you agree to receive communications from me regarding your project inquiry.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
