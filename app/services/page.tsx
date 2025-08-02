import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, Database, Rocket, CheckCircle, ArrowRight, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      icon: <Monitor className="h-12 w-12" />,
      title: "Web Development",
      subtitle: "Professional Website Development Services",
      description:
        "At Sahi Solutions, we create powerful, responsive, and SEO-friendly websites tailored to your business goals. Whether you're a startup, small business, or enterprise, we design web experiences that captivate your audience and drive results.",
      features: [
        "Custom Website Design",
        "Responsive Development",
        "E-commerce Solutions",
        "CMS Integration",
        "Landing Pages",
        "Maintenance & Support",
      ],
      technologies: ["HTML5", "CSS3", "React", "Node.js", "WordPress", "Shopify"],
      link: "/services/web-development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      id: "app-development",
      icon: <Smartphone className="h-12 w-12" />,
      title: "Application Development",
      subtitle: "End-to-End App Development Solutions",
      description:
        "Whether you need a mobile app, web-based tool, or enterprise software, Sahi Solutions builds robust and scalable applications tailored to your users and business goals.",
      features: [
        "Mobile App Development",
        "Web Applications",
        "Custom Software",
        "API Development",
        "Testing & QA",
        "Maintenance & Upgrades",
      ],
      technologies: ["Flutter", "React Native", "Angular", "Laravel", "Node.js", "MongoDB"],
      link: "/services/app-development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    },
    {
      id: "digital-marketing",
      icon: <Database className="h-12 w-12" />,
      title: "Digital Marketing",
      subtitle: "Digital Marketing That Drives Real Business Growth",
      description:
        "In today's digital world, visibility is key. Sahi Solutions offers strategic digital marketing services to help your business reach the right audience, increase leads, and boost revenue.",
      features: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Pay-Per-Click Advertising",
        "Content Marketing",
        "Email Marketing",
        "Reputation Management",
      ],
      technologies: ["Google Ads", "Facebook Ads", "SEO Tools", "Analytics", "Email Platforms", "CRM"],
      link: "/services/digital-marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      id: "product-engineering",
      icon: <Rocket className="h-12 w-12" />,
      title: "Product Engineering & Development",
      subtitle: "From Concept to Creation - Product Engineering Excellence",
      description:
        "From concept to creation, we partner with you at every stage of your product engineering journey—bringing innovation, engineering excellence, and a user-first design mindset to help you outperform the competition.",
      features: [
        "Conceptualization & Ideation",
        "Product Design & Engineering",
        "Application Development",
        "UI/UX Services",
        "Quality Assurance & Testing",
        "Launch & Post-Launch Support",
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
      link: "/services/product",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    },
  ]

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Projects Completed" },
    { icon: <Award className="h-8 w-8" />, number: "98%", label: "Client Satisfaction" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "10+", label: "Years Experience" },
  ]

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#0D1B1E" }}>
      <Navigation />

      {/* Hero Section */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #0D1B1E 0%, #1a2f35 100%)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge
              className="border hover:bg-transparent"
              style={{ backgroundColor: "rgba(164, 209, 0, 0.1)", color: "#D4FF1E", borderColor: "#A3D100" }}
            >
              Our Services
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
              Comprehensive IT Solutions
              <span style={{ color: "#D4FF1E" }}> for Your Business</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto" style={{ color: "#D3D3D3" }}>
              We offer three specialized IT services designed to elevate your business: Web Development, Application
              Development, and Digital Marketing. Each service is crafted to deliver exceptional results and drive your
              business growth.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="p-3 rounded-full w-fit mx-auto" style={{ backgroundColor: "rgba(164, 209, 0, 0.2)" }}>
                    <div style={{ color: "#D4FF1E" }}>{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold" style={{ color: "#D4FF1E" }}>
                    {stat.number}
                  </div>
                  <div className="text-sm" style={{ color: "#D3D3D3" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-white">{service.title}</h2>
                      <p className="text-lg" style={{ color: "#D4FF1E" }}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg" style={{ color: "#D3D3D3" }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Key Services Include:</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                          <span className="text-sm" style={{ color: "#D3D3D3" }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Technologies We Use:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="border"
                          style={{
                            backgroundColor: "rgba(164, 209, 0, 0.1)",
                            color: "#D4FF1E",
                            borderColor: "#A3D100",
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={service.link}>
                      <Button size="lg" className="font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/#contact">
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent hover:bg-transparent"
                        style={{ borderColor: "#A3D100", color: "#A3D100" }}
                      >
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl border"
                    style={{ borderColor: "#A3D100" }}
                  />
                  <div
                    className="absolute -bottom-4 -right-4 p-4 rounded-xl shadow-lg border"
                    style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: "#D4FF1E" }}>
                        {index === 0 ? "150+" : index === 1 ? "100+" : "200+"}
                      </div>
                      <div className="text-sm" style={{ color: "#D3D3D3" }}>
                        {index === 0 ? "Websites Built" : index === 1 ? "Apps Developed" : "Campaigns Run"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Our Process</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and strategy" },
              { step: "03", title: "Development", description: "Building your solution with latest technologies" },
              { step: "04", title: "Launch", description: "Deploying and supporting your project" },
            ].map((process, index) => (
              <Card
                key={index}
                className="text-center border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <CardHeader>
                  <div
                    className="text-4xl font-bold mb-2 mx-auto w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                  >
                    {process.step}
                  </div>
                  <CardTitle className="text-xl text-white">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "#D3D3D3" }}>{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#1a2f35" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Ready to Transform Your Business?</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Let's discuss your project and create solutions that drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="font-semibold text-black" style={{ backgroundColor: "#D4FF1E" }}>
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#about">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-transparent"
                  style={{ borderColor: "#A3D100", color: "#A3D100" }}
                >
                  Learn About Us
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
