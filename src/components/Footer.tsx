import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'
import Container from './ui/Container'
import logo from '../assets/logo.svg'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Events We Cover', href: '#events' },
      { label: 'Features', href: '#features' },
      { label: 'Gallery', href: '#gallery' },
    ],
  },
  {
    title: 'Get Started',
    links: [
      { label: 'Request a Quote', href: '#contact' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
  },
]

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-900 py-16">
      <Container className="flex flex-col gap-12">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Breaking Par" className="h-10 w-10 rounded-lg" width={40} height={40} />
              <span className="font-display text-lg font-semibold text-paper">BREAKING PAR</span>
            </div>
            <p className="max-w-sm text-sm text-mist">
              Mobile golf simulator rentals bringing a premium, tour-grade golf experience directly to your
              corporate event, wedding, trade show, or private party.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-mist transition-colors hover:border-brand-400 hover:text-brand-400"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-paper">{column.title}</h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-mist transition-colors hover:text-paper">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-ink-800 pt-8 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Breaking Par. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-paper">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-paper">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
