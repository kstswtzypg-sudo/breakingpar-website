import { Truck, ShieldCheck, Radar, MapPinned, CloudSun, Swords } from 'lucide-react'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const features = [
  {
    icon: Truck,
    title: 'Portable Setup',
    description: 'Our rigs pack into a trailer and set up indoors or out — ballrooms, tents, parking lots, and lawns.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Equipment',
    description: 'Tour-grade launch monitors and enclosures built for accuracy and durability, event after event.',
  },
  {
    icon: Radar,
    title: 'Realistic Simulation',
    description: 'High-speed cameras capture true ball flight, spin, and distance down to the yard.',
  },
  {
    icon: MapPinned,
    title: 'Multiple Golf Courses',
    description: 'Choose from dozens of world-famous courses, or keep it casual with a driving range mode.',
  },
  {
    icon: CloudSun,
    title: 'All-Weather Entertainment',
    description: 'Rain, heat, or a freezing forecast — the round goes on inside a climate-proof setup.',
  },
  {
    icon: Swords,
    title: 'Competitive Games & Challenges',
    description: 'Closest-to-the-pin, long drive, and team scrambles with live leaderboards guests can see.',
  },
]

export default function Features() {
  return (
    <section id="features" className="border-t border-ink-800 bg-ink-850 py-24">
      <Container className="flex flex-col items-center gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Features & Benefits"
            title="Everything you'd expect from a real golf course, none of the travel"
          />
        </Reveal>

        <div className="grid w-full gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 60} className="h-full">
              <div className="flex h-full flex-col gap-4 bg-ink-850 p-8 transition-colors duration-300 hover:bg-ink-800">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-400/10 text-brand-400">
                  <feature.icon size={22} />
                </span>
                <h3 className="font-display text-lg font-semibold text-paper">{feature.title}</h3>
                <p className="text-sm text-mist">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
