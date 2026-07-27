import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from './ui/Container'
import Button from './ui/Button'
import logo from '../assets/logo.svg'

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Events', href: '#events' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-ink-700 bg-ink-900/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Breaking Par" className="h-10 w-10 rounded-lg" width={40} height={40} />
          <span className="font-display text-lg font-semibold tracking-wide text-paper">BREAKING PAR</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mist transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="text-paper lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-ink-700 bg-ink-900/95 backdrop-blur-md lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-mist transition-colors hover:bg-ink-800 hover:text-paper"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Get a Quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
