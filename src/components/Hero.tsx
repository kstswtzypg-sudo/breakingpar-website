import { ArrowRight, PlayCircle } from 'lucide-react'
import Container from './ui/Container'
import Button from './ui/Button'

const stats: [string, string][] = [
  ['200+', 'Events Hosted'],
  ['50+', 'World Courses'],
  ['5-Star', 'Average Rating'],
  ['Nationwide', 'Delivery'],
]

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
        <span
          className="animate-fade-up rounded-full border border-ink-600 bg-ink-800/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300 opacity-0"
        >
          Mobile Golf Simulator Rentals
        </span>

        <h1
          className="animate-fade-up font-display text-4xl font-bold leading-[1.05] text-paper opacity-0 sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '80ms' }}
        >
          The Course Comes <span className="text-brand-400">To You</span>
        </h1>

        <p
          className="max-w-2xl animate-fade-up text-lg text-mist opacity-0 sm:text-xl"
          style={{ animationDelay: '160ms' }}
        >
          Breaking Par delivers premium, tour-grade golf simulators to corporate events, weddings, trade shows,
          and private parties — anywhere you're hosting, rain or shine.
        </p>

        <div
          className="flex animate-fade-up flex-col gap-4 opacity-0 sm:flex-row"
          style={{ animationDelay: '240ms' }}
        >
          <Button href="#contact" variant="primary">
            Get a Free Quote <ArrowRight size={18} />
          </Button>
          <Button href="#how-it-works" variant="secondary">
            <PlayCircle size={18} /> See How It Works
          </Button>
        </div>

        <dl
          className="grid animate-fade-up grid-cols-2 gap-8 pt-10 opacity-0 sm:grid-cols-4"
          style={{ animationDelay: '320ms' }}
        >
          {stats.map(([value, label]) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <dt className="font-display text-2xl font-semibold text-paper sm:text-3xl">{value}</dt>
              <dd className="text-xs uppercase tracking-wide text-mist">{label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
