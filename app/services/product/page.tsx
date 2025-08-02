import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Rocket,
  Lightbulb,
  Palette,
  Code,
  Eye,
  TestTube,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Clock,
  Shield,
  Target,
  MessageSquare,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductEngineeringPage() {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Conceptualization & Ideation",
      description: "We work closely with your team to translate ideas into actionable plans—conducting feasibility studies, market research, and technical exploration.",
      features: [
        "Feasibility studies & market research",
        "Technical exploration & validation",
        "Clear strategy definition",
        "Concept validation",
      ],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Product Design & Engineering",
      description: "From intuitive UI/UX to scalable architecture, our multidisciplinary team blends creativity and robust engineering.",
      features: [
        "Intuitive UI/UX design",
        "Scalable architecture",
        "Robust engineering",
        "Performance optimization",
      ],
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Application Development",
      description: "Whether it's desktop, mobile, web or SaaS, we deliver tailored development with clean architecture and performant code.",
      features: [
        "Desktop, mobile & web apps",
        "SaaS platform development",
        "Clean architecture",
        "Agile development process",
      ],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Services",
      description: "Our design experts craft compelling interfaces grounded in user experience best practices—ensuring your product is engaging and intuitive.",
      features: [
        "User experience best practices",
        "Engaging interface design",
        "Brand-aligned design",
        "Intuitive user flows",
      ],
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Quality Assurance & Testing",
      description: "Quality is non-negotiable. We perform comprehensive testing—including security audits, performance testing, and usability evaluations.",
      features: [
        "Comprehensive testing",
        "Security audits",
        "Performance testing",
        "Usability evaluations",
      ],
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Launch & Post-Launch Support",
      description: "Deployment support, monitoring, updates, and maintenance to ensure your product continues to perform optimally.",
      features: [
        "Deployment support",
        "Performance monitoring",
        "Regular updates",
        "Ongoing maintenance",
      ],
    },
  ]

  const whyChooseUs = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Multi-Disciplinary Team",
      description: "Work with designers, engineers, QA and strategists who deliver excellence at each stage.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Scalable & Future-Proof Solutions",
      description: "We build software architecture that evolves with your growth—flexible and extendable.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Time Delivery",
      description: "We focus on efficiency without compromising quality, delivering reliable products within defined timelines.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Relentless Quality Focus",
      description: "Through rigorous testing and systematic QA, we deliver dependable, bug-free products.",
    },
  ]

  const processFlow = [
    {
      step: "01",
      title: "Discovery & Ideation",
      description: "Requirements gathering, concept validation, project scoping",
    },
    {
      step: "02",
      title: "Design & Engineering",
      description: "UX prototypes, architecture planning, interface design",
    },
    {
      step: "03",
      title: "Development",
      description: "Agile sprints, code implementation, feature roll-out",
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Unit testing, integration testing, performance/security audits",
    },
    {
      step: "05",
      title: "Launch & Post‑Launch",
      description: "Deployment support, monitoring, updates, and maintenance",
    },
  ]

  const industries = [
    "Fintech / Banking",
    "Healthcare & Telemedicine",
    "Logistics & Supply Chain",
    "SaaS Platforms",
    "Education / EdTech",
    "Travel & Hospitality",
    "Retail, e‑Commerce & Consumer Services",
    "Manufacturing & IoT-enabled systems",
    "Social Networks & Media Platforms",
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
          <Link href="/services" className="hover:text-[#D4FF1E] transition-colors">
            Services
          </Link>
          <span>/</span>
          <span style={{ color: "#D4FF1E" }}>Product Engineering & Development</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #0D1B1E 0%, #1a2f35 100%)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge
                className="border hover:bg-transparent"
                style={{ backgroundColor: "rgba(164, 209, 0, 0.1)", color: "#D4FF1E", borderColor: "#A3D100" }}
              >
                Product Engineering & Development
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                From Concept to Creation
                <span style={{ color: "#D4FF1E" }}> — Product Engineering Excellence</span>
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#D3D3D3" }}>
                From concept to creation, we partner with you at every stage of your product engineering journey—bringing innovation, engineering excellence, and a user-first design mindset to help you outperform the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact">
                  <Button size="lg" className="font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
                    Get Free Consultation
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
                    View Our Process
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop"
                alt="Product Engineering & Development Services"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl border"
                style={{ borderColor: "#A3D100" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Our Product Engineering Services
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Comprehensive product engineering solutions designed to bring your ideas to life with excellence and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border"
                style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
              >
                <CardHeader>
                  <div
                    className="p-3 rounded-lg w-fit transition-all"
                    style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                  <CardDescription style={{ color: "#D3D3D3" }}>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                        <span className="text-sm" style={{ color: "#D3D3D3" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Why Choose Sahi Solutions?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              We combine cutting-edge technology with proven methodologies to deliver exceptional product engineering solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="p-4 rounded-full w-fit mx-auto" style={{ backgroundColor: "rgba(164, 209, 0, 0.2)" }}>
                  <div style={{ color: "#D4FF1E" }}>{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm" style={{ color: "#D3D3D3" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Our Process Flow
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              A systematic approach to product engineering that ensures quality and success at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processFlow.map((step, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border text-center"
                style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                    >
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm" style={{ color: "#D3D3D3" }}>
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Industries We Serve
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              We bring product engineering expertise to a wide range of sectors, delivering tailored solutions for diverse business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5" style={{ color: "#D4FF1E" }} />
                  <span className="text-white font-medium">{industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              What Sets Us Apart
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Our unique approach combines strategic thinking with technical excellence to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card
              className="group hover:shadow-2xl transition-all duration-300 border"
              style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                  >
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">End‑to‑End Partnership</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p style={{ color: "#D3D3D3" }}>
                  We're more than developers—we're your strategic partner, from vision to market.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-2xl transition-all duration-300 border"
              style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                  >
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">Cross‑Functional Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p style={{ color: "#D3D3D3" }}>
                  Combining design, engineering, and QA under one roof ensures seamless delivery.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-2xl transition-all duration-300 border"
              style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                  >
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">Robust Delivery Mechanics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p style={{ color: "#D3D3D3" }}>
                  Agile methodology, transparent progress tracking, and milestone-based pricing.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-2xl transition-all duration-300 border"
              style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                  >
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">Customer-Centric Innovations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p style={{ color: "#D3D3D3" }}>
                  Every solution we build is tailored to real user needs, backed by technical expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Build Your Next Product?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Let's turn your product ideas into market-ready solutions. Contact Sahi Solutions today for a free consultation and tailored quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
                  Start Your Product Journey
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
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
