import { Badge } from "@/components/ui/badge"
import { TestimonialCarousel } from "./testimonial-carousel"

// Simulated async data fetching (Server Component)
async function fetchTestimonials() {
  // Simulate API call, but this will now happen on the server
  // For demonstration, keeping a small delay, but in production, this would be a direct DB/API call
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content:
        "Their web development service transformed our online presence. We've seen 40% improvement in user engagement and our conversion rates have doubled.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "StartupXYZ",
      role: "Founder",
      content:
        "Excellent application development. They built our mobile app exactly as we envisioned it. The team was professional and delivered on time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Global Enterprises",
      role: "Marketing Director",
      content:
        "Outstanding digital marketing results. Our online visibility increased by 300% in just 6 months! ROI exceeded all expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "David Thompson",
      company: "InnovateTech",
      role: "CEO",
      content:
        "Sahi Solutions delivered a comprehensive web solution that streamlined our operations. Their attention to detail is remarkable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "DigitalFlow",
      role: "Product Manager",
      content:
        "The mobile application they developed for us has received excellent user reviews. Clean code, great performance, and ongoing support.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Robert Martinez",
      company: "GrowthCorp",
      role: "VP Marketing",
      content:
        "Their digital marketing strategies helped us reach new markets. Lead generation increased by 250% within the first quarter.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Jennifer Adams",
      company: "CloudSystems",
      role: "IT Director",
      content:
        "Professional team with deep technical expertise. They delivered our enterprise web application ahead of schedule and under budget.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "Alex Kumar",
      company: "NextGen Solutions",
      role: "Founder",
      content:
        "From concept to deployment, Sahi Solutions guided us through every step. Their development process is transparent and efficient.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
    },
  ]
}

// Server Component to fetch data and pass to client component
export async function TestimonialSlider() {
  const testimonials = await fetchTestimonials()

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            className="border hover:bg-transparent mb-4"
            style={{ backgroundColor: "rgba(164, 209, 0, 0.1)", color: "#D4FF1E", borderColor: "#A3D100" }}
          >
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">What Our Clients Say</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  )
}
