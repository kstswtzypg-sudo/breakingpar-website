import { MapPin } from 'lucide-react'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const markets = [
  'Spokane, WA',
  'Spokane Valley, WA',
  'Liberty Lake, WA',
  "Coeur d'Alene, ID",
  'Post Falls, ID',
  'Hayden, ID',
]

export default function ServiceArea() {
  return (
    <section className="border-t border-ink-800 py-24">
      <Container className="flex flex-col items-center gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Where We Serve"
            title="Proudly Serving Spokane & Coeur d'Alene"
            description="Breaking Par is Eastern Washington and North Idaho's premier mobile golf simulator rental company. Wherever you're hosting across the Inland Northwest, we'll bring the tour-grade golf simulator experience directly to you."
          />
        </Reveal>

        <Reveal delay={100}>
          <ul className="flex flex-wrap justify-center gap-3">
            {markets.map((market) => (
              <li
                key={market}
                className="flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800/60 px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-brand-400/50"
              >
                <MapPin size={14} className="text-brand-400" />
                {market}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
