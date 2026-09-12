"use client"

import { useState } from "react"

export function QuestionRow({ category, question, href }: { category: string; question: string; href: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      className="block py-7"
      style={{ borderTop: "1px solid rgba(20,45,30,0.25)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        className="mb-2 tracking-[0.12em]"
        style={{
          color: "var(--foreground)",
          fontSize: "12px",
          fontWeight: 600,
          fontFamily: "var(--font-body)",
          opacity: 0.9,
        }}
      >
        {category}
      </p>
      <div className="flex items-center justify-between gap-4">
        <p
          style={{
            color: hovered ? "var(--primary)" : "var(--foreground)",
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)",
            lineHeight: 1.3,
            transition: "color 0.2s ease",
            fontWeight: 400,
          }}
        >
          {question}
        </p>
        <span
          className="flex-shrink-0 transition-all duration-200"
          style={{
            color: "var(--primary)",
            fontSize: "20px",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(-6px)",
          }}
        >
          →
        </span>
      </div>
    </a>
  )
}
