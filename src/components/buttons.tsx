import type { ReactNode } from "react"

interface BaseProps {
  children: ReactNode
  className?: string
}

interface LinkVariant extends BaseProps {
  href: string
  onClick?: undefined
  type?: undefined
}

interface ButtonVariant extends BaseProps {
  href?: undefined
  onClick?: () => void
  type?: "button" | "submit"
}

type Props = LinkVariant | ButtonVariant

function isLink(props: Props): props is LinkVariant {
  return typeof props.href === "string"
}

export function PrimaryBtn(props: Props) {
  const className = `inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 hover:shadow-lg transition-all text-sm ${props.className ?? ""}`
  if (isLink(props)) {
    return <a href={props.href} className={className}>{props.children}</a>
  }
  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={className}>
      {props.children}
    </button>
  )
}

export function OutlineBtn(props: Props) {
  const className = `inline-flex items-center gap-2 px-7 py-3.5 border-2 border-foreground/20 text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all text-sm ${props.className ?? ""}`
  if (isLink(props)) {
    return <a href={props.href} className={className}>{props.children}</a>
  }
  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={className}>
      {props.children}
    </button>
  )
}
