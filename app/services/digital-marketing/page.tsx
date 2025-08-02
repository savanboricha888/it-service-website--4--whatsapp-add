import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Share2,
  MousePointer,
  FileText,
  Mail,
  Star,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Users,
  TrendingUp,
  Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Section from "@/components/section" // Declare the Section variable

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Search Engine Optimization (SEO)",
      description: "Comprehensive SEO strategies to improve your search rankings and organic visibility.",
      features: [
        "On-page & off-page optimization",
        "Local SEO for maps/searches",
        "Technical SEO audits",
        "Keyword research & strategy",
      ],
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Marketing (SMM)",
      description: "Strategic social media campaigns across all major platforms to build your brand presence.",
      features: [
        "Facebook, Instagram, LinkedIn, YouTube",
        "Organic growth & paid advertising",
        "Social media calendar",
        "Creative design & content",
      ],
    },
    {
      icon: <MousePointer className="h-8 w-8" />,
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Targeted advertising campaigns that deliver immediate results and maximize your ROI.",
      features: [
        "Google Ads, YouTube Ads, Meta Ads",
        "Strategy & targeting",
        "A/B testing & optimization",
        "Campaign management",
      ],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Content Marketing",
      description: "Engaging, SEO-friendly content that converts visitors into customers and builds brand authority.",
      features: [
        "Blogs, articles, web content",
        "Video scripts & content",
        "SEO-friendly writing",
        "Content that converts",
      ],
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Marketing",
      description: "Automated email campaigns that nurture leads and drive customer retention.",
      features: [
        "Campaign setup & automation",
        "Email tracking & analytics",
        "Newsletter design",
        "Audience segmentation",
      ],
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Online Reputation Management",
      description: "Build and maintain a positive online reputation that drives trust and credibility.",
      features: [
        "Google Reviews management",
        "Brand mention monitoring",
        "Trust-building strategies",
        "Crisis management",
      ],
    },
  ]

  const whyChooseUs = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data-Driven Approach",
      description: "Every strategy is backed by comprehensive data analysis and market research.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Certified Digital Marketers",
      description: "Our team holds certifications from Google, Facebook, and other leading platforms.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Transparent Reporting",
      description: "Detailed analytics and reporting so you can track your ROI and campaign performance.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "ROI-Focused Campaigns",
      description: "We focus on campaigns that deliver measurable results and positive return on investment.",
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
          <span style={{ color: "#D4FF1E" }}>Digital Marketing</span>
        </nav>
      </div>

      {/* Hero Section */}
      <Section
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
                Digital Marketing Services
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Digital Marketing That Drives
                <span style={{ color: "#D4FF1E" }}> Real Business Growth</span>
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#D3D3D3" }}>
                In today's digital world, visibility is key. Sahi Solutions offers strategic digital marketing services
                to help your business reach the right audience, increase leads, and boost revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact">
                  <Button size="lg" className="font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
                    Get Marketing Audit
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
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"
                alt="Digital Marketing Services"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl border"
                style={{ borderColor: "#A3D100" }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Our Digital Marketing Services Include
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Comprehensive digital marketing solutions designed to increase your online visibility and drive growth.
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
      </Section>

      {/* Why Choose Us Section */}
      <Section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Why Choose Our Marketing Team?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Our experienced team delivers results-driven marketing strategies that grow your business.
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
      </Section>

      {/* CTA Section */}
      <Section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Let's create a digital marketing strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
                  Start Marketing Campaign
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
      </Section>

      <Footer />
    </div>
  )
}
