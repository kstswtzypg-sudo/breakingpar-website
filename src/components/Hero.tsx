import { ArrowRight, PlayCircle } from 'lucide-react'
import Container from './ui/Container'
import Button from './ui/Button'
import logo from '../assets/logo.svg'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32">
      {/* Replace with hero background video/image */}
      <div className="absolute inset-0 -z-10 bg-ink-900">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,theme(colors.ink.900))]" />
        <div className="flex h-full w-full items-center justify-center opacity-20">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-mist">
            Hero background video / image placeholder
          </span>
        </div>
      </div>

      <Container className="flex flex-col items-center gap-8 text-center">
        <img
          src={logo}
          alt="Breaking Par"
          className="h-24 w-24 animate-fade-up rounded-2xl opacity-0 shadow-glow sm:h-32 sm:w-32"
          width={128}
          height={128}
        />

        <span
          className="animate-fade-up rounded-full border border-ink-600 bg-ink-800/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300 opacity-0"
          style={{ animationDelay: '40ms' }}
        >
          Mobile Golf Simulator Rentals — Spokane &amp; Coeur d'Alene
        </span>

        <h1
          className="animate-fade-up font-display text-4xl font-bold leading-[1.05] text-paper opacity-0 sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '120ms' }}
        >
          Premium Mobile Golf Simulator Rentals for <span className="text-brand-400">Spokane &amp; Coeur d'Alene</span>{' '}
          Events
        </h1>

        <p
          className="max-w-2xl animate-fade-up text-lg text-mist opacity-0 sm:text-xl"
          style={{ animationDelay: '200ms' }}
        >
          Bring a professional golf simulator experience directly to your corporate event, private party,
          fundraiser, wedding, tournament, or special event.
        </p>

        <div
          className="flex animate-fade-up flex-col gap-4 opacity-0 sm:flex-row"
          style={{ animationDelay: '280ms' }}
        >
          <Button href="/pricing" variant="primary">
            View Pricing <ArrowRight size={18} />
          </Button>
          <Button href="#how-it-works" variant="secondary">
            <PlayCircle size={18} /> See How It Works
          </Button>
        </div>
      </Container>
    </section>
  )
}
