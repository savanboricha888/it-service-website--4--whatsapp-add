import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Monitor,
  Settings,
  Plug,
  TestTube,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Zap,
  MessageSquare,
  Clock,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AppDevelopmentPage() {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Android, iOS, and cross-platform app development using Flutter, React Native, or native languages.",
      features: [
        "Android & iOS development",
        "Cross-platform solutions",
        "UI/UX focused design",
        "Security & performance",
      ],
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Web Application Development",
      description: "Powerful web apps using modern frameworks like React, Angular, Vue, Laravel, Node.js, and more.",
      features: ["Modern frameworks", "Portals & dashboards", "SaaS platforms", "Custom tools"],
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Solutions tailored to your business needs — CRM, ERP, HRM, POS, Inventory, and more.",
      features: ["CRM & ERP systems", "HRM solutions", "POS systems", "Inventory management"],
    },
    {
      icon: <Plug className="h-8 w-8" />,
      title: "API Development & Integration",
      description: "Custom API creation and third-party integrations (payment gateways, CRMs, social platforms, etc.).",
      features: ["Custom API development", "Payment gateway integration", "CRM integrations", "Social platform APIs"],
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Testing & QA",
      description: "Comprehensive testing services to ensure bug-free, secure, and high-performing applications.",
      features: ["Comprehensive testing", "Security testing", "Performance optimization", "Bug-free delivery"],
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Maintenance & Upgrades",
      description: "Post-launch support, version updates, bug fixes, and performance improvements.",
      features: ["Post-launch support", "Version updates", "Bug fixes", "Performance improvements"],
    },
  ]

  const whyChooseUs = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Agile Development Approach",
      description: "Flexible, iterative development process that adapts to your changing needs.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Transparent Communication",
      description: "Regular updates and clear communication throughout the development process.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Time Project Delivery",
      description: "Committed to delivering your project on schedule without compromising quality.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Scalable & Secure Coding",
      description: "Future-proof applications built with security and scalability in mind.",
    },
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
          <span style={{ color: "#D4FF1E" }}>Application Development</span>
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
                Application Development
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                End-to-End App Development
                <span style={{ color: "#D4FF1E" }}> Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#D3D3D3" }}>
                Whether you need a mobile app, web-based tool, or enterprise software, Sahi Solutions builds robust and
                scalable applications tailored to your users and business goals.
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
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop"
                alt="Application Development Services"
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
              Our App Development Expertise
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              From mobile apps to enterprise software, we deliver comprehensive application development solutions.
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Why Work With Us?</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Our proven development methodology ensures successful project delivery every time.
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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Build Your Next Application?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Let's turn your ideas into powerful, scalable applications that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
                  Start Your App Project
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
