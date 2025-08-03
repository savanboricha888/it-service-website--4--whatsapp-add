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
      icon: <Globe className="h-6 w-6" />,
      title: "Local Experts, Global Results",
      description: "We know the business scene inside out. Our team brings local knowledge with world-class digital marketing and website development skills to help your business stand out.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Smart Solutions That Won't Break the Bank",
      description: "Looking for affordable digital marketing that actually works? We deliver powerful results without the hefty price tag. Our affordable digital marketing packages are designed to fit your budget while maximizing your return.",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Everything Under One Roof",
      description: "Why juggle multiple agencies? We handle all your digital marketing and website development needs in one place. From eye-catching websites to traffic-driving SEO, we've got you covered.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real Results You Can See",
      description: "We don't just talk - we deliver. Our clients see real growth in clicks, calls, and sales. Our digital marketing and website development strategies focus on what matters: bringing you more business.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "We Speak Your Language",
      description: "No tech jargon or confusing reports. Our digital marketing experts explain everything in plain talk so you always know what's happening with your marketing campaigns.",
    },
  ]

  const industries = [
    { icon: <Globe className="h-6 w-6" />, name: "Cargo & Courier Services" },
    { icon: <Building className="h-6 w-6" />, name: "Corporate Website" },
    { icon: <ShoppingCart className="h-6 w-6" />, name: "eCommerce Website" },
    { icon: <GraduationCap className="h-6 w-6" />, name: "Education" },
    { icon: <Heart className="h-6 w-6" />, name: "Healthcare" },
    { icon: <Factory className="h-6 w-6" />, name: "Manufacturer Industrial" },
    { icon: <Home className="h-6 w-6" />, name: "Real Estate" },
    { icon: <Church className="h-6 w-6" />, name: "Religious & Communities" },
    { icon: <Church className="h-6 w-6" />, name: "Religious Organization" },
    { icon: <Plane className="h-6 w-6" />, name: "Travel & Tourism" },
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
                At Sahi Solutions, we don't just focus on metrics like clicks, impressions, and engagement, rather, we specialize in driving real results. With our dedication, expertise and practical digital solutions, we have earned a reputation as the best digital marketing company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact">
                  <Button size="lg" className="font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
                    Get Marketing Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Main Content Section */}
      <Section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: "#D3D3D3" }}>
                We take a results-driven approach where every strategy is tailored to meet your specific business goals. Being one of the best digital marketing agencies, our priority is to make sure that every effort we put in has a direct impact on your bottom line. No guesswork, just a focused plan that brings measurable growth.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#D3D3D3" }}>
                From increasing visibility to driving conversions, we make sure your digital marketing investment works for you, bringing in consistent, sustainable results.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">What Is The Importance Of Digital Marketing Services?</h2>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed" style={{ color: "#D3D3D3" }}>
                    Digital marketing is a game-changer, and as the best digital marketing company, we understand this. With the global digital advertising market set to hit $786.2 billion by 2026, it's clear this is where the action is. Online channels like social media, SEO, and PPC are the keys to reaching your audience and growing your brand.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "#D3D3D3" }}>
                    Customers now turn to digital platforms to find and connect with brands—they're no longer flipping through the yellow pages.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "#D3D3D3" }}>
                    For your business, digital marketing is the bridge to connect with potential and existing customers, boosting visibility and awareness. As a top digital marketing company, we help you tap into the power of these digital platforms to stand out and get noticed.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "#D3D3D3" }}>
                    We create digital strategies that are aligned with your business ambitions. Every tactic, from content to paid ads, should push you closer to your big-picture goals. When you work with the best digital marketing company, you're setting yourself up for measurable success.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="Digital Marketing Analytics"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl border"
                    style={{ borderColor: "#A3D100" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Why Choose Our Top Digital Marketing Company?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Here's Why You Should Choose Sahi Solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
              {whyChooseUs.slice(0, 3).map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border"
                  style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
                >
                  <CardHeader>
                    <div
                      className="p-3 rounded-lg w-fit transition-all"
                      style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                    >
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm" style={{ color: "#D3D3D3" }}>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Digital Marketing Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl border"
                style={{ borderColor: "#A3D100" }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.slice(3).map((item, index) => (
              <Card
                key={index + 3}
                className="group hover:shadow-2xl transition-all duration-300 border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <CardHeader>
                  <div
                    className="p-3 rounded-lg w-fit transition-all"
                    style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                  >
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm" style={{ color: "#D3D3D3" }}>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl border" style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}>
            <h3 className="text-2xl font-bold text-white mb-4">Why Sahi Solutions is Perfect for Your Startup?</h3>
            <p className="text-lg mb-4" style={{ color: "#D3D3D3" }}>
              We get it. You're small but dreaming big. So are we.
            </p>
            <p className="text-lg mb-4" style={{ color: "#D3D3D3" }}>
              As a digital marketing agency for small business, we've helped hundreds of startups just like yours shine. No complex contracts. No confusing jargon. We offer digital marketing services that truly deliver results.
            </p>
            <p className="text-lg mb-4" style={{ color: "#D3D3D3" }}>
              We do it all: sharp website design, killer social posts, eye-catching videos.
            </p>
            <p className="text-lg mb-4" style={{ color: "#D3D3D3" }}>
              Our secret? We actually listen first.
            </p>
            <p className="text-lg" style={{ color: "#D3D3D3" }}>
              Choose our digital marketing agency for small businesses for bold solutions. Why wait to try it out?
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
              We provide digital marketing solutions across diverse industries to help businesses grow and succeed.
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
                  <h3 className="text-sm font-semibold text-white">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/work">
              <Button size="lg" className="font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
                Browse Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
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
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
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
