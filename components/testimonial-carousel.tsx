"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  content: string
  rating: number
  image: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <Card className="shadow-2xl mx-4 border" style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}>
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current" style={{ color: "#D4FF1E" }} />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic" style={{ color: "#D3D3D3" }}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full border-2"
                      style={{ borderColor: "#A3D100" }}
                    />
                    <div className="text-left">
                      <div className="font-semibold text-lg text-white">{testimonial.name}</div>
                      <div className="text-sm" style={{ color: "#D3D3D3" }}>
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border"
        style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100", color: "#D4FF1E" }}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border"
        style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100", color: "#D4FF1E" }}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-colors`}
            style={{ backgroundColor: index === currentTestimonial ? "#D4FF1E" : "#D3D3D3" }}
          />
        ))}
      </div>
    </div>
  )
} 