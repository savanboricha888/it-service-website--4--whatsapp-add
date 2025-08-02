"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b shadow-lg"
      style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Logo variant="header" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-[#D4FF1E] transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-[#D4FF1E] transition-colors">Services</button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#1a2f35] border border-[#A3D100] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/services/web-development"
                  className="block px-4 py-3 text-white hover:text-[#D4FF1E] hover:bg-[#0D1B1E] transition-colors"
                >
                  Web Development
                </Link>
                <Link
                  href="/services/app-development"
                  className="block px-4 py-3 text-white hover:text-[#D4FF1E] hover:bg-[#0D1B1E] transition-colors"
                >
                  Application Development
                </Link>
                <Link
                  href="/services/digital-marketing"
                  className="block px-4 py-3 text-white hover:text-[#D4FF1E] hover:bg-[#0D1B1E] transition-colors"
                >
                  Digital Marketing
                </Link>
                <Link
                  href="/services/product"
                  className="block px-4 py-3 text-white hover:text-[#D4FF1E] hover:bg-[#0D1B1E] transition-colors"
                >
                  Product Engineering & Development
                </Link>
              </div>
            </div>
            <Link href="/#about" className="text-white hover:text-[#D4FF1E] transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-white hover:text-[#D4FF1E] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/#contact">
              <Button className="font-semibold text-black hover:opacity-90" style={{ backgroundColor: "#D4FF1E" }}>
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6" style={{ color: "#D4FF1E" }} />
            ) : (
              <Menu className="h-6 w-6" style={{ color: "#D4FF1E" }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ backgroundColor: "#0D1B1E", borderColor: "#A3D100" }}>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-[#D4FF1E] transition-colors">
                Home
              </Link>
              <Link href="/services/web-development" className="text-white hover:text-[#D4FF1E] transition-colors">
                Web Development
              </Link>
              <Link href="/services/app-development" className="text-white hover:text-[#D4FF1E] transition-colors">
                Application Development
              </Link>
              <Link href="/services/digital-marketing" className="text-white hover:text-[#D4FF1E] transition-colors">
                Digital Marketing
              </Link>
              <Link href="/services/product" className="text-white hover:text-[#D4FF1E] transition-colors">
                Product Engineering & Development
              </Link>
              <Link href="/#about" className="text-white hover:text-[#D4FF1E] transition-colors">
                About
              </Link>
              <Link href="/#contact" className="text-white hover:text-[#D4FF1E] transition-colors">
                Contact
              </Link>
              <Link href="/#contact">
                <Button className="font-semibold text-black w-full" style={{ backgroundColor: "#D4FF1E" }}>
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
