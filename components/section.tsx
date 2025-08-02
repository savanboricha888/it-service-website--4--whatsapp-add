import type React from "react"
interface SectionProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Section({ children, className = "", style }: SectionProps) {
  return (
    <section className={className} style={style}>
      {children}
    </section>
  )
}
