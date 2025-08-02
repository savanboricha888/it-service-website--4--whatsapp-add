import { Server } from "lucide-react"
import Image from "next/image"

// Logo Configuration - Change these values to update your logo site-wide
const LOGO_CONFIG = {
  // Set to true to use an image logo, false to use icon + text
  useImageLogo: true,

  // Image logo settings (when useImageLogo is true)
  imageLogo: {
    src: "/sahi-logo.png", // Using the new image logo path
    width: 100, // Further adjusted width for a smaller size
    height: 30, // Further adjusted height for a smaller size
    alt: "Sahi Solutions - S Crown Logo",
  },

  // Icon + Text logo settings (when useImageLogo is false)
  iconTextLogo: {
    icon: Server, // You can change this to any Lucide icon
    iconColor: "#A3D100", // Logo Green
    iconBgColor: "#A3D100",
    companyName: "Sahi Solutions",
    textColor: "#D4FF1E", // Changed to bright yellow for highlighting
    fontSize: "text-2xl sm:text-3xl", // Made bigger and responsive
  },
}

interface LogoProps {
  variant?: "header" | "footer"
  className?: string
}

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const IconComponent = LOGO_CONFIG.iconTextLogo.icon

  if (LOGO_CONFIG.useImageLogo) {
    return (
      <div className={`flex items-center space-x-2 sm:space-x-3 ${className}`}>
        <Image
          src="/sahi-logo.png"
          alt="Sahi Solutions - S Crown Logo"
          width={LOGO_CONFIG.imageLogo.width}
          height={LOGO_CONFIG.imageLogo.height}
          className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain flex-shrink-0"
          priority
        />
        <span
          className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide whitespace-nowrap"
          style={{
            color: "#D4FF1E",
            textShadow: "0 0 10px rgba(212, 255, 30, 0.3)",
          }}
        >
          Sahi Solutions
        </span>
      </div>
    )
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="p-2 rounded-lg" style={{ backgroundColor: LOGO_CONFIG.iconTextLogo.iconBgColor }}>
        <IconComponent className="h-6 w-6" style={{ color: LOGO_CONFIG.iconTextLogo.iconColor }} />
      </div>
      <span
        className={`${LOGO_CONFIG.iconTextLogo.fontSize} font-bold`}
        style={{
          color: LOGO_CONFIG.iconTextLogo.textColor,
        }}
      >
        {LOGO_CONFIG.iconTextLogo.companyName}
      </span>
    </div>
  )
}
