import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { TestimonialSlider } from "@/components/testimonial-slider"
import {
  Smartphone,
  Database,
  Lock,
  Users,
  Clock,
  Award,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Monitor,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
// Removed Suspense import as it's no longer needed for TestimonialSlider

// React 19: Server Component for static data
async function getServicesData() {
  return [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Web Development",
      description:
        "We build stunning, responsive, and high-performance websites tailored to your business goals. From static landing pages to dynamic e-commerce platforms.",
      features: [
        "Custom UI/UX design",
        "Mobile-first responsive layouts",
        "SEO-optimized structure",
        "Fast loading speeds",
        "CMS integration (WordPress, Shopify, etc.)",
      ],
      link: "/services/web-development",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Application Development",
      description:
        "Transform your ideas into powerful applications. Whether it's a mobile app, desktop software, or a cloud-based system, we deliver scalable and secure solutions.",
      features: [
        "Android & iOS app development",
        "Cross-platform development (Flutter, React Native)",
        "Custom software solutions",
        "API integration & backend services",
        "Ongoing support & maintenance",
      ],
      link: "/services/app-development",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Digital Marketing",
      description:
        "Boost your brand visibility and drive targeted traffic with our full-stack digital marketing services to grow your online presence.",
      features: [
        "SEO (Search Engine Optimization)",
        "Social Media Marketing (SMM)",
        "Google Ads & Pay-Per-Click (PPC)",
        "Email Campaigns",
        "Performance analytics & reporting",
      ],
      link: "/services/digital-marketing",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Product Engineering & Development",
      description:
        "From concept to creation, we partner with you at every stage of your product engineering journey—bringing innovation, engineering excellence, and a user-first design mindset.",
      features: [
        "Conceptualization & Ideation",
        "Product Design & Engineering",
        "Application Development",
        "UI/UX Services",
        "Quality Assurance & Testing",
      ],
      link: "/services/product",
    },
  ]
}

async function getClientLogos() {
  return [
    { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120&text=TechCorp" },
    { name: "StartupXYZ", logo: "/placeholder.svg?height=60&width=120&text=StartupXYZ" },
    { name: "Global Enterprises", logo: "/placeholder.svg?height=60&width=120&text=Global+Enterprises" },
    { name: "InnovateTech", logo: "/placeholder.svg?height=60&width=120&text=InnovateTech" },
    { name: "DigitalFlow", logo: "/placeholder.svg?height=60&width=120&text=DigitalFlow" },
    { name: "GrowthCorp", logo: "/placeholder.svg?height=60&width=120&text=GrowthCorp" },
    { name: "CloudSystems", logo: "/placeholder.svg?height=60&width=120&text=CloudSystems" },
    { name: "NextGen Solutions", logo: "/placeholder.svg?height=60&width=120&text=NextGen+Solutions" },
    { name: "DataTech", logo: "/placeholder.svg?height=60&width=120&text=DataTech" },
    { name: "WebFlow Pro", logo: "/placeholder.svg?height=60&width=120&text=WebFlow+Pro" },
    { name: "AppMasters", logo: "/placeholder.svg?height=60&width=120&text=AppMasters" },
    { name: "MarketBoost", logo: "/placeholder.svg?height=60&width=120&text=MarketBoost" },
  ]
}

// React 19: Enhanced Server Component
export default async function ITServiceWebsite() {
  // React 19: Parallel data fetching in Server Components
  const [services, clientLogos] = await Promise.all([getServicesData(), getClientLogos()])

  const stats = [
    { number: "100+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    //{ number: "10+", label: "Years Experience" },
  ]

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#0D1B1E" }}>
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
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
                Trusted IT Solutions Provider
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Transform Your Business with
                <span style={{ color: "#D4FF1E" }}> Professional IT Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#D3D3D3" }}>
                We specialize in Web Development, Application Development, and Digital Marketing to help your business
                grow and succeed in the digital landscape.
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
                    View Our Services
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold" style={{ color: "#D4FF1E" }}>
                      {stat.number}
                    </div>
                    <div className="text-sm" style={{ color: "#D3D3D3" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop"
                alt="IT Solutions"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl border"
                style={{ borderColor: "#A3D100" }}
              />
              <div
                className="absolute -bottom-6 -left-6 p-4 rounded-xl shadow-lg border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full" style={{ backgroundColor: "rgba(164, 209, 0, 0.2)" }}>
                    <CheckCircle className="h-6 w-6" style={{ color: "#D4FF1E" }} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">99.9% Uptime</div>
                    <div className="text-sm" style={{ color: "#D3D3D3" }}>
                      Guaranteed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
// Client Logos Section - Commented out as requested
<section className="py-12 sm:py-16" style={{ backgroundColor: "#1a2f35" }}>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Trusted by Leading Companies</h2>
      <p style={{ color: "#D3D3D3" }}>Join hundreds of satisfied clients who trust us with their IT solutions</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
      {clientLogos.map((client, index) => (
        <div
          key={index}
          className="flex justify-center items-center p-4 rounded-lg border hover:shadow-lg transition-all"
          style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
        >
          <Image
            src={client.logo || "/placeholder.svg"}
            alt={client.name}
            width={120}
            height={60}
            className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity filter brightness-0 invert"
          />
        </div>
      ))}
    </div>
  </div>
</section>
*/}

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              className="border hover:bg-transparent mb-4"
              style={{ backgroundColor: "rgba(164, 209, 0, 0.1)", color: "#D4FF1E", borderColor: "#A3D100" }}
            >
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Our Core IT Solutions</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              We offer three specialized IT services designed to elevate your business: Web Development, Application
              Development, and Digital Marketing.
            </p>
            <Link href="/services">
              <Button
                variant="outline"
                className="bg-transparent hover:bg-transparent"
                style={{ borderColor: "#A3D100", color: "#A3D100" }}
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
                    className="p-3 rounded-lg w-fit transition-all group-hover:text-black"
                    style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                  <CardDescription style={{ color: "#D3D3D3" }}>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                        <span className="text-sm" style={{ color: "#D3D3D3" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link}>
                    <Button
                      variant="ghost"
                      className="mt-4 p-0 h-auto hover:bg-transparent"
                      style={{ color: "#D4FF1E" }}
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop"
                alt="Our Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg border"
                style={{ borderColor: "#A3D100" }}
              />
            </div>

            <div className="space-y-6">
              <Badge
                className="border hover:bg-transparent"
                style={{ backgroundColor: "rgba(164, 209, 0, 0.1)", color: "#D4FF1E", borderColor: "#A3D100" }}
              >
                About Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Your Trusted IT Partner Since 2014
              </h2>
              <p className="text-lg" style={{ color: "#D3D3D3" }}>
                Sahi Solutions specializes in delivering comprehensive IT services including web development,
                application development, and digital marketing. Our expert team combines technical excellence with
                creative innovation to help businesses thrive in the digital world.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(164, 209, 0, 0.2)" }}>
                    <Users className="h-6 w-6" style={{ color: "#D4FF1E" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Expert Team</h3>
                    <p className="text-sm" style={{ color: "#D3D3D3" }}>
                      Certified professionals with years of experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(164, 209, 0, 0.2)" }}>
                    <Clock className="h-6 w-6" style={{ color: "#D4FF1E" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">24/7 Support</h3>
                    <p className="text-sm" style={{ color: "#D3D3D3" }}>
                      Round-the-clock technical assistance
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(164, 209, 0, 0.2)" }}>
                    <Award className="h-6 w-6" style={{ color: "#D4FF1E" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Industry Awards</h3>
                    <p className="text-sm" style={{ color: "#D3D3D3" }}>
                      Recognized for excellence and innovation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(164, 209, 0, 0.2)" }}>
                    <Lock className="h-6 w-6" style={{ color: "#D4FF1E" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Security First</h3>
                    <p className="text-sm" style={{ color: "#D3D3D3" }}>
                      Enterprise-grade security in everything we do
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/#about">
                <Button className="font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* React 19: Testimonial Slider (now a Server Component) */}
      <TestimonialSlider />

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              className="border hover:bg-transparent mb-4"
              style={{ backgroundColor: "rgba(164, 209, 0, 0.1)", color: "#D4FF1E", borderColor: "#A3D100" }}
            >
              Contact Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Contact us today for a free consultation and discover how we can help transform your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* React 19: Enhanced Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(164, 209, 0, 0.2)" }}>
                      <Phone className="h-6 w-6" style={{ color: "#D4FF1E" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div style={{ color: "#D3D3D3" }}>+919624559599</div> {/* Updated phone number */}
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(164, 209, 0, 0.2)" }}>
                      <Mail className="h-6 w-6" style={{ color: "#D4FF1E" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div style={{ color: "#D3D3D3" }}>sahisolutions3272@gmail.com</div> {/* Updated email address */}
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(164, 209, 0, 0.2)" }}>
                      <Award className="h-6 w-6" style={{ color: "#D4FF1E" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Address</div>
                      <div style={{ color: "#D3D3D3" }}>Ahmedabad, India</div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
