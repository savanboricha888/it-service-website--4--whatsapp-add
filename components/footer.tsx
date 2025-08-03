import { Logo } from "@/components/logo"
import { Linkedin, Facebook, Instagram, Youtube, PhoneIcon as Whatsapp, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="text-white py-12 border-t" style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo variant="footer" />
            <p style={{ color: "#D3D3D3" }}>
              Your trusted IT partner specializing in web development, application development, and digital marketing
              solutions that drive business growth and success.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/sahi-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-opacity-30 cursor-pointer transition-colors border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <Linkedin className="h-5 w-5" style={{ color: "#D4FF1E" }} />
              </Link>
              <Link
                href="https://www.facebook.com/sahisolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-opacity-30 cursor-pointer transition-colors border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <Facebook className="h-5 w-5" style={{ color: "#D4FF1E" }} />
              </Link>
              <Link
                href="https://www.instagram.com/sahisolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-opacity-30 cursor-pointer transition-colors border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <Instagram className="h-5 w-5" style={{ color: "#D4FF1E" }} />
              </Link>
              <Link
                href="https://www.youtube.com/sahisolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-opacity-30 cursor-pointer transition-colors border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <Whatsapp className="h-5 w-5" style={{ color: "#D4FF1E" }} />
              </Link>
              <Link
                href="https://www.youtube.com/sahisolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-opacity-30 cursor-pointer transition-colors border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <Youtube className="h-5 w-5" style={{ color: "#D4FF1E" }} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "#D4FF1E" }}>
              Services
            </h3>
            <ul className="space-y-2" style={{ color: "#D3D3D3" }}>
              <li>
                <Link href="/services/web-development" className="hover:text-[#D4FF1E] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="hover:text-[#D4FF1E] transition-colors">
                  Application Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-[#D4FF1E] transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/product" className="hover:text-[#D4FF1E] transition-colors">
                  Product Engineering & Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "#D4FF1E" }}>
              Company
            </h3>
            <ul className="space-y-2" style={{ color: "#D3D3D3" }}>
              <li>
                <Link href="/#about" className="hover:text-[#D4FF1E] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-[#D4FF1E] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D4FF1E] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "#D4FF1E" }}>
              Contact
            </h3>
            <ul className="space-y-3" style={{ color: "#D3D3D3" }}>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                <Link href="tel:+919624559599" className="hover:text-[#D4FF1E] transition-colors">
                  +91 9624559599
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                <Link href="mailto:sahisolutions3272@gmail.com" className="hover:text-[#D4FF1E] transition-colors">
                  sahisolutions3272@gmail.com
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                <span style={{ color: "#D3D3D3" }}>
                  Ahmedabad, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center"
          style={{ borderColor: "#A3D100" }}
        >
          <p className="text-sm" style={{ color: "#D3D3D3" }}>
            © {new Date().getFullYear()} Sahi Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="text-sm transition-colors hover:text-[#D4FF1E]" style={{ color: "#D3D3D3" }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm transition-colors hover:text-[#D4FF1E]" style={{ color: "#D3D3D3" }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
