import type { ReactNode } from "react"

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-primary font-extrabold text-xs tracking-widest uppercase mb-3">{children}</p>
}
