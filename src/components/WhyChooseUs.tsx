import { Check } from 'lucide-react'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'

const differentiators = [
  'White-glove delivery, setup, and teardown handled by our own crew',
  'Tour-grade launch monitors for accurate, realistic ball flight',
  'Flexible for any venue — indoors, outdoors, tents, or ballrooms',
  'A dedicated on-site attendant runs the games so you don’t have to',
  'Custom branding overlays available for corporate activations',
  'Fully insured, background-checked staff for peace of mind',
]

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Why Choose Breaking Par"
            title="Premium execution, from first call to final swing"
            align="left"
          />
          <ul className="flex flex-col gap-4">
            {differentiators.map((item) => (
              <li key={item} className="flex items-start gap-3 text-mist">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-400/10 text-brand-400">
                  <Check size={14} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button href="#contact" variant="primary" className="w-fit">
            Book Your Event
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900">
            <div className="absolute inset-0 bg-grid-fade" />
            <div className="flex h-full items-center justify-center">
              <span className="font-display text-sm uppercase tracking-[0.3em] text-mist">
                Simulator action photo placeholder
              </span>
            </div>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 animate-float rounded-full bg-brand-400/20 blur-3xl" />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
