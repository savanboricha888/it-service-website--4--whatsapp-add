import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Building,
  ShoppingCart,
  GraduationCap,
  Heart,
  Factory,
  Home,
  Church,
  Plane,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Section from "@/components/section"

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Globe className="h-8 w-8" />,
      name: "Cargo & Courier Services",
      description: "Streamline your logistics operations with our digital solutions. From tracking systems to customer portals, we help cargo and courier services optimize their operations.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop",
      features: [
        "Package tracking systems",
        "Customer portals",
        "Route optimization",
        "Inventory management",
        "Mobile apps for delivery",
        "Analytics and reporting"
      ]
    },
    {
      icon: <Building className="h-8 w-8" />,
      name: "Corporate Website",
      description: "Professional corporate websites that reflect your brand identity and drive business growth. We create modern, responsive websites that engage your audience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      features: [
        "Professional design",
        "Brand integration",
        "Content management",
        "SEO optimization",
        "Analytics integration",
        "Mobile responsiveness"
      ]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      name: "eCommerce Website",
      description: "Powerful e-commerce platforms that drive sales and provide exceptional shopping experiences. From product catalogs to secure payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      features: [
        "Product catalog management",
        "Secure payment gateways",
        "Inventory tracking",
        "Order management",
        "Customer accounts",
        "Mobile shopping apps"
      ]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      name: "Education",
      description: "Transform learning experiences with our educational technology solutions. From learning management systems to student portals and online courses.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=600&h=400&fit=crop",
      features: [
        "Learning management systems",
        "Student portals",
        "Online course platforms",
        "Virtual classrooms",
        "Assessment tools",
        "Parent communication apps"
      ]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      name: "Healthcare",
      description: "Digital solutions that enhance patient care and streamline healthcare operations. From patient portals to telemedicine platforms and medical record systems.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      features: [
        "Patient portals",
        "Telemedicine platforms",
        "Appointment scheduling",
        "Medical record systems",
        "Health monitoring apps",
        "Pharmacy management"
      ]
    },
    {
      icon: <Factory className="h-8 w-8" />,
      name: "Manufacturer Industrial",
      description: "Optimize your manufacturing processes with our industrial digital solutions. From production tracking to quality control and supply chain management.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      features: [
        "Production tracking",
        "Quality control systems",
        "Inventory management",
        "Supply chain optimization",
        "Equipment monitoring",
        "Safety compliance tools"
      ]
    },
    {
      icon: <Home className="h-8 w-8" />,
      name: "Real Estate",
      description: "Digital solutions for real estate professionals. From property listing platforms to client management systems and virtual property tours.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      features: [
        "Property listing platforms",
        "Client management systems",
        "Virtual property tours",
        "Lead generation tools",
        "Document management",
        "Mobile apps for agents"
      ]
    },
    {
      icon: <Church className="h-8 w-8" />,
      name: "Religious & Communities",
      description: "Connect and engage your community with our digital solutions. From community portals to event management and communication platforms.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      features: [
        "Community portals",
        "Event management",
        "Communication platforms",
        "Donation systems",
        "Volunteer coordination",
        "Resource sharing"
      ]
    },
    {
      icon: <Church className="h-8 w-8" />,
      name: "Religious Organization",
      description: "Digital solutions tailored for religious organizations. From worship service streaming to community engagement and administrative management.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      features: [
        "Worship service streaming",
        "Community engagement",
        "Administrative management",
        "Event coordination",
        "Resource sharing",
        "Communication tools"
      ]
    },
    {
      icon: <Plane className="h-8 w-8" />,
      name: "Travel & Tourism",
      description: "Enhance travel experiences with our tourism digital solutions. From booking platforms to travel guides and destination management systems.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      features: [
        "Booking platforms",
        "Travel guides",
        "Destination management",
        "Customer reviews",
        "Mobile travel apps",
        "Tour operator systems"
      ]
    }
  ]

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#0D1B1E" }}>
      <Navigation />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center space-x-2 text-sm" style={{ color: "#D3D3D3" }}>
          <Link href="/" className="hover:text-[#D4FF1E] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span style={{ color: "#D4FF1E" }}>Industries We Serve</span>
        </nav>
      </div>

      {/* Hero Section */}
      <Section
        className="py-12 sm:py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #0D1B1E 0%, #1a2f35 100%)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge
              className="border hover:bg-transparent"
              style={{ backgroundColor: "rgba(164, 209, 0, 0.1)", color: "#D4FF1E", borderColor: "#A3D100" }}
            >
              Industries We Serve
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
              Digital Solutions for
              <span style={{ color: "#D4FF1E" }}> Every Industry</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              We provide tailored digital solutions across diverse industries, helping businesses of all sizes grow and succeed in the digital age.
            </p>
          </div>
        </div>
      </Section>

      {/* Industries Grid */}
      <Section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border overflow-hidden"
                style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: "rgba(164, 209, 0, 0.9)", color: "#000" }}
                    >
                      {industry.icon}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{industry.name}</CardTitle>
                  <CardDescription style={{ color: "#D3D3D3" }}>
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Key Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                          <span className="text-sm" style={{ color: "#D3D3D3" }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Let's discuss how our digital solutions can help your business grow and succeed in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-transparent"
                  style={{ borderColor: "#A3D100", color: "#A3D100" }}
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
} 