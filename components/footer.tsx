import { Logo } from "@/components/logo"
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  PhoneIcon as Whatsapp,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer
      className="text-white py-12 border-t"
      style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo variant="footer" />
            <p style={{ color: "#D3D3D3" }}>
              Your trusted IT partner specializing in web development,
              application development, and digital marketing solutions that
              drive business growth and success.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/sahi-solutions-6953a137a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-opacity-30 cursor-pointer transition-colors border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <Linkedin className="h-5 w-5" style={{ color: "#D4FF1E" }} />
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/share/1CP4H3zZWW/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-opacity-30 cursor-pointer transition-colors border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <Facebook className="h-5 w-5" style={{ color: "#D4FF1E" }} />
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/sahi_solutions?igsh=MTgybHZ2bWJ1aHppNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-opacity-30 cursor-pointer transition-colors border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <Instagram className="h-5 w-5" style={{ color: "#D4FF1E" }} />
              </Link>

              {/* Twitter (X) */}
              <Link
                href="https://x.com/Sahi_Solutions?t=hoosTbgzGLx4ebSssXQ1qQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-opacity-30 cursor-pointer transition-colors border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  style={{ color: "#D4FF1E" }}
                >
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.924 2.206-4.924 4.924 0 .39.045.765.127 1.124-4.094-.205-7.725-2.166-10.148-5.144-.426.729-.666 1.577-.666 2.475 0 1.708.869 3.216 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.06c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.318 0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.317-3.808 2.103-6.115 2.103-.398 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.211 7.557 2.211 9.054 0 14-7.496 14-13.986 0-.213-.005-.425-.014-.636.961-.695 1.8-1.562 2.46-2.549z" />
                </svg>
              </Link>

              {/* Pinterest */}
              <Link
                href="https://pin.it/6c9RstoOa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-opacity-30 cursor-pointer transition-colors border"
                style={{ backgroundColor: "#1a2f35", borderColor: "#A3D100" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  style={{ color: "#D4FF1E" }}
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 4.991 3.657 9.128 8.438 10.167-.117-.863-.223-2.188.047-3.136.242-.828 1.558-5.273 1.558-5.273s-.396-.793-.396-1.963c0-1.84 1.067-3.214 2.396-3.214 1.13 0 1.675.849 1.675 1.868 0 1.139-.724 2.843-1.096 4.423-.312 1.318.663 2.392 1.963 2.392 2.356 0 3.939-3.028 3.939-6.604 0-2.724-1.834-4.763-5.159-4.763-3.76 0-6.103 2.804-6.103 5.938 0 1.083.419 2.246.943 2.877.103.125.118.235.087.362-.095.393-.308 1.246-.35 1.419-.055.227-.18.276-.419.167-1.559-.725-2.532-2.996-2.532-4.822 0-3.928 2.854-7.543 8.228-7.543 4.322 0 7.679 3.082 7.679 7.201 0 4.291-2.706 7.741-6.458 7.741-1.263 0-2.453-.656-2.86-1.428l-.778 2.961c-.283 1.09-1.049 2.454-1.563 3.289.926.287 1.905.442 2.927.442 6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="https://youtube.com/@sahisolutions?si=btFaYb15LFbafeKw"
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
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#D4FF1E" }}
            >
              Services
            </h3>
            <ul className="space-y-2" style={{ color: "#D3D3D3" }}>
              <li>
                <Link
                  href="/services/web-development"
                  className="hover:text-[#D4FF1E] transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-development"
                  className="hover:text-[#D4FF1E] transition-colors"
                >
                  Application Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="hover:text-[#D4FF1E] transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/product"
                  className="hover:text-[#D4FF1E] transition-colors"
                >
                  Product Engineering & Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#D4FF1E" }}
            >
              Company
            </h3>
            <ul className="space-y-2" style={{ color: "#D3D3D3" }}>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-[#D4FF1E] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="hover:text-[#D4FF1E] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#D4FF1E] transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#D4FF1E" }}
            >
              Contact
            </h3>
            <ul className="space-y-3" style={{ color: "#D3D3D3" }}>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                <Link
                  href="tel:+919624559599"
                  className="hover:text-[#D4FF1E] transition-colors"
                >
                  +91 9624559599
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                <Link
                  href="mailto:sahisolutions3272@gmail.com"
                  className="hover:text-[#D4FF1E] transition-colors"
                >
                  sahisolutions3272@gmail.com
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" style={{ color: "#D4FF1E" }} />
                <span style={{ color: "#D3D3D3" }}>Ahmedabad, India</span>
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
            <Link
              href="/privacy-policy"
              className="text-sm transition-colors hover:text-[#D4FF1E]"
              style={{ color: "#D3D3D3" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm transition-colors hover:text-[#D4FF1E]"
              style={{ color: "#D3D3D3" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
