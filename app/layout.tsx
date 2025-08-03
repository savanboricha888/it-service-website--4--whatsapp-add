import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Sahi Solutions - IT Solutions for Your Business",
  description: "Sahi Solutions provides comprehensive IT services including web development, app development, digital marketing, and product engineering. Transform your business with our expert solutions.",
  keywords: "IT solutions, web development, app development, digital marketing, software development, Ahmedabad",
  authors: [{ name: "Sahi Solutions" }],
  creator: "Sahi Solutions",
  publisher: "Sahi Solutions",
  robots: "index, follow",
  openGraph: {
    title: "Sahi Solutions - IT Solutions for Your Business",
    description: "Comprehensive IT services including web development, app development, digital marketing, and product engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahi Solutions - IT Solutions for Your Business",
    description: "Comprehensive IT services including web development, app development, digital marketing, and product engineering.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sahi Solutions",
              "url": "https://sahisolutions.com",
              "logo": "https://sahisolutions.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9624559599",
                "contactType": "Customer Service"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressCountry": "India"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
