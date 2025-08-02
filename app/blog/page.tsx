import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  User,
  ArrowRight,
  Tag,
  Clock,
  Search,
  Filter,
  Monitor,
  Smartphone,
  Database,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Discover the latest web development trends that will shape the digital landscape in 2024, from AI integration to advanced CSS techniques.",
      content: "Web development is evolving rapidly with new technologies and methodologies emerging every year. In 2024, we're seeing a significant shift towards AI-powered development tools, advanced CSS frameworks, and improved performance optimization techniques. This article explores the key trends that will dominate web development in the coming year.",
      author: "Sahi Solutions Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Web Development",
      tags: ["Web Development", "Trends", "Technology"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Mobile Applications: Best Practices",
      excerpt: "Learn the essential best practices for creating scalable mobile applications that can grow with your business needs.",
      content: "Mobile app development requires careful planning and implementation to ensure scalability. From choosing the right architecture to implementing proper state management, this guide covers everything you need to know about building mobile applications that can handle growth and changing requirements.",
      author: "Sahi Solutions Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Mobile Development",
      tags: ["Mobile Development", "Best Practices", "Scalability"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "Digital Marketing Strategies for 2024: What's Working Now",
      excerpt: "Explore the most effective digital marketing strategies that are driving results in 2024 and how to implement them for your business.",
      content: "Digital marketing continues to evolve with new platforms, algorithms, and consumer behaviors. This comprehensive guide covers the most effective strategies currently working in digital marketing, from SEO optimization to social media marketing and paid advertising campaigns.",
      author: "Sahi Solutions Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Digital Marketing",
      tags: ["Digital Marketing", "SEO", "Social Media"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      featured: false,
    },
  ]

  const categories = [
    { name: "Web Development", icon: <Monitor className="h-4 w-4" />, count: 12 },
    { name: "Mobile Development", icon: <Smartphone className="h-4 w-4" />, count: 8 },
    { name: "Digital Marketing", icon: <Database className="h-4 w-4" />, count: 15 },
    { name: "Product Engineering", icon: <Rocket className="h-4 w-4" />, count: 6 },
  ]

  const popularTags = [
    "Web Development", "Mobile Apps", "SEO", "UI/UX", "React", "Node.js", 
    "Digital Marketing", "E-commerce", "Cloud Computing", "AI/ML"
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
          <span style={{ color: "#D4FF1E" }}>Blog</span>
        </nav>
      </div>

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
              Our Blog
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
              Latest Insights & Updates
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Stay updated with the latest trends, tips, and insights in web development, mobile apps, digital marketing, and product engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Featured Post */}
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-2xl transition-all duration-300 border"
                  style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
                >
                  <div className="relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <Badge
                      className="absolute top-4 left-4"
                      style={{ backgroundColor: "rgba(164, 209, 0, 0.9)", color: "#000" }}
                    >
                      Featured
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm mb-2">
                      <div className="flex items-center space-x-1" style={{ color: "#D3D3D3" }}>
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1" style={{ color: "#D3D3D3" }}>
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-[#D4FF1E] transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription style={{ color: "#D3D3D3" }} className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4" style={{ color: "#D3D3D3" }}>
                      {post.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                        <span className="text-sm" style={{ color: "#D3D3D3" }}>
                          {post.author}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto hover:bg-transparent"
                        style={{ color: "#D4FF1E" }}
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Regular Posts */}
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.filter(post => !post.featured).map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-2xl transition-all duration-300 border"
                    style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
                  >
                    <div className="relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm mb-2">
                        <div className="flex items-center space-x-1" style={{ color: "#D3D3D3" }}>
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1" style={{ color: "#D3D3D3" }}>
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-[#D4FF1E] transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription style={{ color: "#D3D3D3" }}>
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                          <span className="text-sm" style={{ color: "#D3D3D3" }}>
                            {post.author}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto hover:bg-transparent"
                          style={{ color: "#D4FF1E" }}
                        >
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <Card style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}>
                <CardHeader>
                  <CardTitle className="text-white">Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: "#D3D3D3" }} />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full pl-10 pr-4 py-2 rounded-lg text-white"
                      style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}>
                <CardHeader>
                  <CardTitle className="text-white">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div style={{ color: "#D4FF1E" }}>{category.icon}</div>
                          <span className="text-sm" style={{ color: "#D3D3D3" }}>
                            {category.name}
                          </span>
                        </div>
                        <Badge
                          className="text-xs"
                          style={{ backgroundColor: "rgba(164, 209, 0, 0.2)", color: "#D4FF1E" }}
                        >
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}>
                <CardHeader>
                  <CardTitle className="text-white">Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs cursor-pointer hover:bg-[#D4FF1E] hover:text-black transition-colors"
                        style={{ borderColor: "#A3D100", color: "#D4FF1E" }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Services */}
              <Card style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}>
                <CardHeader>
                  <CardTitle className="text-white">Our Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link href="/services/web-development" className="block hover:text-[#D4FF1E] transition-colors">
                      <div className="flex items-center space-x-2">
                        <Monitor className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                        <span className="text-sm" style={{ color: "#D3D3D3" }}>
                          Web Development
                        </span>
                      </div>
                    </Link>
                    <Link href="/services/app-development" className="block hover:text-[#D4FF1E] transition-colors">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                        <span className="text-sm" style={{ color: "#D3D3D3" }}>
                          Application Development
                        </span>
                      </div>
                    </Link>
                    <Link href="/services/digital-marketing" className="block hover:text-[#D4FF1E] transition-colors">
                      <div className="flex items-center space-x-2">
                        <Database className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                        <span className="text-sm" style={{ color: "#D3D3D3" }}>
                          Digital Marketing
                        </span>
                      </div>
                    </Link>
                    <Link href="/services/product" className="block hover:text-[#D4FF1E] transition-colors">
                      <div className="flex items-center space-x-2">
                        <Rocket className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                        <span className="text-sm" style={{ color: "#D3D3D3" }}>
                          Product Engineering
                        </span>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 