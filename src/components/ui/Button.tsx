import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400'

const variants = {
  primary: 'bg-brand-400 text-ink-900 hover:bg-brand-300 hover:shadow-glow active:scale-[0.98]',
  secondary: 'border border-ink-500 text-paper hover:border-brand-400 hover:text-brand-300',
  ghost: 'text-paper hover:text-brand-300',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  type = 'button',
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
