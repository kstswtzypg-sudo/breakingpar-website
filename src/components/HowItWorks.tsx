import { CalendarCheck, Truck, Trophy, PackageCheck } from 'lucide-react'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const steps = [
  {
    icon: CalendarCheck,
    title: 'Request Your Quote',
    description: 'Tell us your event date, location, and guest count. We tailor a package to fit your event.',
  },
  {
    icon: Truck,
    title: 'We Deliver & Set Up',
    description: 'Our team arrives with full simulator rigs, high-def screens, and pro-grade launch monitors.',
  },
  {
    icon: Trophy,
    title: 'Play & Compete',
    description: 'Guests tee off on world-famous courses with realistic ball tracking and leaderboard challenges.',
  },
  {
    icon: PackageCheck,
    title: 'We Break It Down',
    description: 'When the event wraps, we handle teardown and haul-away — no cleanup for you.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-ink-800 bg-ink-850 py-24">
      <Container className="flex flex-col items-center gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="Booking a golf simulator has never been easier"
            description="From first inquiry to final putt, we manage the logistics so you can focus on your guests."
          />
        </Reveal>

        <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 100}>
              <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-ink-700 bg-ink-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-glow">
                <span className="font-display text-sm font-semibold text-brand-400">0{index + 1}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-400/10 text-brand-400">
                  <step.icon size={24} />
                </span>
                <h3 className="font-display text-lg font-semibold text-paper">{step.title}</h3>
                <p className="text-sm text-mist">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
