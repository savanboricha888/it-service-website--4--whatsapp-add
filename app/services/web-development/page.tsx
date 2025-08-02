import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Settings,
  FileText,
  Wrench,
  CheckCircle,
  ArrowRight,
  Code,
  Zap,
  Search,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WebDevelopmentPage() {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Custom Website Design",
      description: "Visually engaging, user-centric designs aligned with your brand identity.",
      features: [
        "UI/UX optimized for intuitive navigation",
        "Better engagement and conversion",
        "Brand-aligned design",
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Website Development",
      description: "Mobile-first, cross-browser compatible websites that perform seamlessly on all devices.",
      features: ["Mobile-first approach", "Cross-browser compatibility", "Seamless performance"],
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Development",
      description:
        "Secure, feature-rich online stores built using platforms like WooCommerce, Shopify, or custom solutions.",
      features: ["WooCommerce & Shopify", "Custom e-commerce solutions", "Secure payment integration"],
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "CMS Integration",
      description: "Easy-to-manage content systems like WordPress, Joomla, or custom-built CMS.",
      features: ["WordPress integration", "Custom CMS development", "Easy content management"],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Landing Page Development",
      description: "High-converting, campaign-ready landing pages optimized for leads and sales.",
      features: ["High conversion rates", "Campaign optimization", "Lead generation focus"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Website Maintenance & Support",
      description: "Ongoing updates, bug fixes, backups, and performance monitoring.",
      features: ["Regular updates", "Bug fixes & backups", "Performance monitoring"],
    },
  ]

  const whyChooseUs = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Latest Technology",
      description: "HTML5, CSS3, React, Node.js, Laravel, and more modern technologies.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast-Loading Websites",
      description: "Clean code and optimized performance for lightning-fast loading speeds.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO & Performance Focus",
      description: "Strong focus on search engine optimization and website performance.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Affordable Packages",
      description: "Competitive pricing for startups to enterprises with flexible packages.",
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
          <span style={{ color: "#D4FF1E" }}>Web Development</span>
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
                Web Development Services
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Professional Website Development
                <span style={{ color: "#D4FF1E" }}> Services</span>
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#D3D3D3" }}>
                At Sahi Solutions, we create powerful, responsive, and SEO-friendly websites tailored to your business
                goals. Whether you're a startup, small business, or enterprise, we design web experiences that captivate
                your audience and drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact">
                  <Button size="lg" className="font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-transparent"
                  style={{ borderColor: "#A3D100", color: "#A3D100" }}
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop"
                alt="Web Development Services"
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
              Our Web Development Services Include
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Comprehensive web development solutions designed to meet your business needs and exceed your expectations.
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Why Choose Us?</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              We combine cutting-edge technology with proven methodologies to deliver exceptional web solutions.
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
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Let's discuss your project and create a website that drives results for your business.
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
