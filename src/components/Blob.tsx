import type { CSSProperties } from "react"

export function Blob({ className, style }: { className?: string; style?: CSSProperties }) {
  return <div className={`absolute pointer-events-none -z-10 ${className ?? ""}`} style={style} />
}
