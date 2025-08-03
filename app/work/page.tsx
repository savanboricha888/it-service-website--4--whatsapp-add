import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ExternalLink,
  Star,
  TrendingUp,
  Users,
  Calendar,
  Globe,
  Building,
  ShoppingCart,
  GraduationCap,
  Heart,
  Factory,
  Home,
  Church,
  Plane,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Section from "@/components/section"

export default function WorkPage() {
  const caseStudies = [
    {
      title: "E-commerce Growth Campaign",
      industry: "eCommerce",
      icon: <ShoppingCart className="h-6 w-6" />,
      description: "Increased online sales by 300% for a leading fashion retailer through targeted PPC campaigns and SEO optimization.",
      results: [
        "300% increase in online sales",
        "150% improvement in organic traffic",
        "40% reduction in cost per acquisition",
        "25% increase in conversion rate"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "Digital Marketing"
    },
    {
      title: "Healthcare Brand Awareness",
      industry: "Healthcare",
      icon: <Heart className="h-6 w-6" />,
      description: "Built strong brand presence for a healthcare provider through comprehensive digital marketing strategies.",
      results: [
        "200% increase in website traffic",
        "80% improvement in local search rankings",
        "150% growth in appointment bookings",
        "95% positive patient reviews"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      category: "Digital Marketing"
    },
    {
      title: "Real Estate Lead Generation",
      industry: "Real Estate",
      icon: <Home className="h-6 w-6" />,
      description: "Developed lead generation system for a real estate company using targeted digital marketing campaigns.",
      results: [
        "400% increase in qualified leads",
        "60% improvement in lead quality",
        "35% reduction in marketing costs",
        "200% growth in property inquiries"
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      category: "Digital Marketing"
    },
    {
      title: "Educational Institution Website",
      industry: "Education",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Created modern, responsive website for an educational institution with integrated digital marketing.",
      results: [
        "250% increase in student inquiries",
        "180% improvement in website engagement",
        "90% mobile responsiveness score",
        "300% growth in social media followers"
      ],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=600&h=400&fit=crop",
      category: "Web Development"
    },
    {
      title: "Manufacturing Company Digital Presence",
      industry: "Manufacturing",
      icon: <Factory className="h-6 w-6" />,
      description: "Established strong digital presence for a manufacturing company through comprehensive online marketing.",
      results: [
        "150% increase in B2B inquiries",
        "120% improvement in brand visibility",
        "80% growth in LinkedIn engagement",
        "200% increase in international leads"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "Digital Marketing"
    },
    {
      title: "Travel Agency Booking System",
      industry: "Travel & Tourism",
      icon: <Plane className="h-6 w-6" />,
      description: "Developed booking system and digital marketing strategy for a travel agency.",
      results: [
        "180% increase in online bookings",
        "140% improvement in customer engagement",
        "70% reduction in booking processing time",
        "250% growth in repeat customers"
      ],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      category: "Web Development"
    }
  ]

  const industries = [
    { icon: <Globe className="h-6 w-6" />, name: "Cargo & Courier Services", count: 12 },
    { icon: <Building className="h-6 w-6" />, name: "Corporate Website", count: 25 },
    { icon: <ShoppingCart className="h-6 w-6" />, name: "eCommerce Website", count: 18 },
    { icon: <GraduationCap className="h-6 w-6" />, name: "Education", count: 15 },
    { icon: <Heart className="h-6 w-6" />, name: "Healthcare", count: 22 },
    { icon: <Factory className="h-6 w-6" />, name: "Manufacturer Industrial", count: 8 },
    { icon: <Home className="h-6 w-6" />, name: "Real Estate", count: 20 },
    { icon: <Church className="h-6 w-6" />, name: "Religious & Communities", count: 10 },
    { icon: <Church className="h-6 w-6" />, name: "Religious Organization", count: 12 },
    { icon: <Plane className="h-6 w-6" />, name: "Travel & Tourism", count: 14 }
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
          <span style={{ color: "#D4FF1E" }}>Our Work</span>
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
              Portfolio & Case Studies
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
              Our Work That
              <span style={{ color: "#D4FF1E" }}> Drives Results</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Discover how we've helped businesses across diverse industries achieve remarkable growth through our digital marketing and web development solutions.
            </p>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Industries We Serve
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              We've successfully delivered digital solutions across diverse industries, helping businesses grow and succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border text-center"
                style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
              >
                <CardContent className="p-6">
                  <div
                    className="p-3 rounded-lg w-fit mx-auto mb-3 transition-all"
                    style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                  >
                    {industry.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-xs" style={{ color: "#D4FF1E" }}>{industry.count} Projects</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Featured Case Studies
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Real results from real clients. See how our digital marketing and web development strategies have transformed businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border overflow-hidden"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className="border"
                      style={{ backgroundColor: "rgba(164, 209, 0, 0.9)", color: "#000", borderColor: "#A3D100" }}
                    >
                      {study.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                    >
                      {study.icon}
                    </div>
                    <span className="text-sm" style={{ color: "#D4FF1E" }}>
                      {study.industry}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{study.title}</CardTitle>
                  <CardDescription style={{ color: "#D3D3D3" }}>
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.slice(0, 3).map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                          <span className="text-sm" style={{ color: "#D3D3D3" }}>
                            {result}
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

      {/* Stats Section */}
      <Section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <p className="text-lg" style={{ color: "#D4FF1E" }}>Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-lg" style={{ color: "#D4FF1E" }}>Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">300%</div>
              <p className="text-lg" style={{ color: "#D4FF1E" }}>Average Growth</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <p className="text-lg" style={{ color: "#D4FF1E" }}>Years Experience</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Let's create amazing results for your business. Get in touch with us today to discuss your project.
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