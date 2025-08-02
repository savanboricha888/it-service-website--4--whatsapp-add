import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function TermsOfServicePage() {
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
          <span style={{ color: "#D4FF1E" }}>Terms of Service</span>
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
              Terms of Service
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: "#D3D3D3" }}>
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm" style={{ color: "#D3D3D3" }}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#0D1B1E" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>By accessing and using the services provided by Sahi Solutions ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Services Description</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>Sahi Solutions provides the following services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Web Development and Design</li>
                  <li>Application Development (Mobile and Desktop)</li>
                  <li>Digital Marketing Services</li>
                  <li>Product Engineering & Development</li>
                  <li>IT Consulting and Support</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Client Responsibilities</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>As a client, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Cooperate with our team during project development</li>
                  <li>Provide timely feedback and approvals</li>
                  <li>Pay invoices according to agreed payment terms</li>
                  <li>Use our services in compliance with applicable laws</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Payment Terms</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>Payment terms are as follows:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>50% upfront payment for project initiation</li>
                  <li>Remaining balance upon project completion</li>
                  <li>Payment methods: Bank transfer, online payment</li>
                  <li>Late payments may incur additional charges</li>
                  <li>All prices are in Indian Rupees (INR) unless otherwise specified</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Project Timeline and Deliverables</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>Project timelines and deliverables will be:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Agreed upon in writing before project commencement</li>
                  <li>Subject to client feedback and approval processes</li>
                  <li>May be extended due to scope changes or client delays</li>
                  <li>Deliverables will be provided in agreed formats</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Intellectual Property</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>Intellectual property rights are as follows:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Final deliverables become client property upon full payment</li>
                  <li>We retain rights to our proprietary tools and frameworks</li>
                  <li>Client retains rights to their existing content and branding</li>
                  <li>Portfolio rights: We may showcase completed work</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Confidentiality</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>We maintain strict confidentiality regarding:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Client business information and trade secrets</li>
                  <li>Project specifications and requirements</li>
                  <li>Financial and payment information</li>
                  <li>Any other information marked as confidential</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8. Limitation of Liability</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>Our liability is limited as follows:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We are not liable for indirect or consequential damages</li>
                  <li>Total liability limited to amount paid for services</li>
                  <li>No warranty for third-party integrations or services</li>
                  <li>Client responsible for backup and data protection</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">9. Termination</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>Either party may terminate services with written notice:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>30 days written notice for ongoing projects</li>
                  <li>Immediate termination for breach of terms</li>
                  <li>Payment for work completed up to termination date</li>
                  <li>Return of client materials and data</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">10. Dispute Resolution</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>In case of disputes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Parties will attempt to resolve through good faith negotiation</li>
                  <li>Mediation may be required before legal action</li>
                  <li>Governing law: Indian law</li>
                  <li>Jurisdiction: Courts in India</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">11. Force Majeure</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>We are not liable for delays or failures due to circumstances beyond our control, including but not limited to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Natural disasters</li>
                  <li>Government actions</li>
                  <li>Internet or power outages</li>
                  <li>Third-party service failures</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">12. Changes to Terms</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">13. Contact Information</h2>
              <div className="space-y-3" style={{ color: "#D3D3D3" }}>
                <p>For questions about these terms, contact us:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> sahisolutions3272@gmail.com</p>
                  <p><strong>Phone:</strong> +919624559599</p>
                  <p><strong>Address:</strong> Sahi Solutions, India</p>
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