import { Building2, Presentation, PartyPopper, Heart, HandHeart, Flag } from 'lucide-react'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const events = [
  {
    icon: Building2,
    title: 'Corporate Events',
    description: 'Client entertainment, team offsites, and office parties that keep everyone engaged.',
  },
  {
    icon: Presentation,
    title: 'Trade Shows',
    description: 'Draw a crowd to your booth with an interactive experience attendees remember.',
  },
  {
    icon: PartyPopper,
    title: 'Private Parties',
    description: 'Birthdays, milestones, and backyard get-togethers with a premium twist.',
  },
  {
    icon: Heart,
    title: 'Weddings',
    description: 'A standout reception activity and icebreaker for guests of every skill level.',
  },
  {
    icon: HandHeart,
    title: 'Fundraisers',
    description: 'Long-drive contests and closest-to-the-pin challenges that drive donations.',
  },
  {
    icon: Flag,
    title: 'Golf Tournaments',
    description: 'Rain delays and 19th-hole lounges covered with a simulator on standby.',
  },
]

export default function EventTypes() {
  return (
    <section id="events" className="py-24">
      <Container className="flex flex-col items-center gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Where We Show Up"
            title="One golf simulator, endless occasions"
            description="However you're gathering people, Breaking Par turns it into an event worth talking about."
          />
        </Reveal>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Reveal key={event.title} delay={index * 80}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-ink-700 bg-gradient-to-b from-ink-800 to-ink-850 p-7 transition-all duration-300 hover:border-brand-500/50">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-400/10 text-brand-400">
                  <event.icon size={24} />
                </span>
                <h3 className="font-display text-xl font-semibold text-paper">{event.title}</h3>
                <p className="text-sm text-mist">{event.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
