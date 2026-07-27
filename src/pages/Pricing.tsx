import { useEffect } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'

type Package = {
  title: string
  price: string
  detail: string
  description?: string
  features?: string[]
  cta: string
  featured?: boolean
}

const packages: Package[] = [
  {
    title: 'Half-Day Rental',
    price: '$895',
    detail: 'Up to 4 Hours',
    features: [
      'Tour-grade golf simulator setup',
      'On-site attendant included',
      'Delivery, setup, and teardown',
    ],
    cta: 'Book Your Event',
  },
  {
    title: 'Full-Day Rental',
    price: '$1,500',
    detail: 'Full Day Event Coverage',
    features: [
      'Everything in Half-Day Rental',
      'Extended play time for larger groups',
      'Ideal for weddings, tournaments & festivals',
    ],
    cta: 'Book Your Event',
    featured: true,
  },
  {
    title: 'Corporate Events',
    price: 'Custom Quote',
    detail: 'Tailored to Your Event',
    description:
      'Custom solutions for trade shows, conferences, employee events, client appreciation events, and large-scale activations.',
    cta: 'Request Corporate Event Pricing',
  },
]

export default function Pricing() {
  useEffect(() => {
    document.title = 'Pricing | Breaking Par Mobile Golf Simulator Rentals'
  }, [])

  return (
    <section className="pb-24 pt-40">
      <Container className="flex flex-col items-center gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple Pricing for Mobile Golf Simulator Rentals"
            description="Premium golf entertainment delivered directly to your event in Spokane and Coeur d'Alene."
          />
        </Reveal>

        <div className="grid w-full gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.title} delay={index * 80}>
              <div
                className={`relative flex h-full flex-col gap-6 rounded-2xl border p-8 transition-all duration-300 ${
                  pkg.featured
                    ? 'border-brand-400/60 bg-gradient-to-b from-ink-800 to-ink-850 shadow-glow'
                    : 'border-ink-700 bg-gradient-to-b from-ink-800 to-ink-850 hover:border-brand-500/50'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-400 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-ink-900">
                    Most Popular
                  </span>
                )}

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold text-paper">{pkg.title}</h3>
                  <p className="font-display text-4xl font-bold text-brand-400">{pkg.price}</p>
                  <p className="text-sm uppercase tracking-wide text-mist">{pkg.detail}</p>
                </div>

                {pkg.description && <p className="text-sm text-mist">{pkg.description}</p>}

                {pkg.features && (
                  <ul className="flex flex-1 flex-col gap-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-mist">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-400/10 text-brand-400">
                          <Check size={12} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <Button href="/#contact" variant={pkg.featured ? 'primary' : 'secondary'} className="mt-auto w-full">
                  {pkg.cta} <ArrowRight size={16} />
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
