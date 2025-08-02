"use client"

import Link from "next/link"
import Image from "next/image" // Import Image component

export function WhatsappButton() {
  const whatsappNumber = "919624559599" // Your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      style={{ backgroundColor: "#D4FF1E" }} // Yellow background, removed text color as image provides it
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp-icon.ico" // Reference the image from the public folder
        alt="WhatsApp Icon"
        width={32} // Adjust size as needed
        height={32} // Adjust size as needed
        className="h-8 w-8" // Tailwind classes for size, ensuring it's visible
      />
    </Link>
  )
}

export default WhatsappButton
