import { Star, Quote } from 'lucide-react'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const testimonials = [
  {
    quote:
      'Breaking Par was the highlight of our company outing. Even people who’d never golfed were competing for the leaderboard by the end of the night.',
    name: 'Sarah Mitchell',
    role: 'Corporate Event Planner, Ridgeline Partners',
  },
  {
    quote:
      'We booked the simulator for our trade show booth and it drew a crowd all three days. Best lead-gen decision we made for the whole conference.',
    name: 'James Torres',
    role: 'Marketing Director, Vantage Supply Co.',
  },
  {
    quote:
      'Our wedding guests are still talking about the golf lounge at our reception. It was the perfect icebreaker and gave everyone something fun to do.',
    name: 'Emily Reyes',
    role: 'Bride',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <Container className="flex flex-col items-center gap-16">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="Trusted by planners and hosts alike" />
        </Reveal>

        <div className="grid w-full gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100} className="h-full">
              <figure className="flex h-full flex-col gap-6 rounded-2xl border border-ink-700 bg-ink-800/60 p-8">
                <Quote className="text-brand-400/40" size={32} />
                <blockquote className="flex-1 text-mist">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <div className="flex gap-1 text-brand-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <figcaption>
                  <div className="font-display font-semibold text-paper">{testimonial.name}</div>
                  <div className="text-sm text-mist">{testimonial.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
