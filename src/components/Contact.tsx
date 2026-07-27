import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'

const eventTypes = [
  'Corporate Event',
  'Trade Show',
  'Private Party',
  'Wedding',
  'Fundraiser',
  'Golf Tournament',
  'Other',
]

const inputClasses =
  'w-full rounded-lg border border-ink-600 bg-ink-850 px-4 py-3 text-sm text-paper placeholder:text-ink-400 outline-none transition-colors focus:border-brand-400'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: wire to a form backend (e.g. Cloudflare Pages Function or Formspree) before launch
    setSubmitted(true)
  }

  return (
    <section id="contact" className="border-t border-ink-800 bg-ink-850 py-24">
      <Container className="grid gap-16 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Request your free event quote"
            description="Share a few details about your event and our team will follow up within one business day."
            align="left"
          />

          <div className="flex flex-col gap-5">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-4 text-paper transition-colors hover:text-brand-300"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-400/10 text-brand-400">
                <Phone size={20} />
              </span>
              (555) 123-4567
            </a>
            <a
              href="mailto:hello@breakingpargolf.com"
              className="flex items-center gap-4 text-paper transition-colors hover:text-brand-300"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-400/10 text-brand-400">
                <Mail size={20} />
              </span>
              hello@breakingpargolf.com
            </a>
            <div className="flex items-center gap-4 text-paper">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-400/10 text-brand-400">
                <MapPin size={20} />
              </span>
              Proudly serving Spokane, WA &amp; Coeur d'Alene, ID and surrounding communities
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {submitted ? (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl border border-brand-500/30 bg-ink-800/60 p-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-400/10 text-brand-400">
                <Send size={24} />
              </span>
              <h3 className="font-display text-xl font-semibold text-paper">Thanks — request received!</h3>
              <p className="text-mist">A member of our events team will reach out within one business day.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border border-ink-700 bg-ink-800/60 p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-paper">
                    Full name
                  </label>
                  <input id="name" name="name" type="text" required className={inputClasses} placeholder="Jane Smith" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-paper">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClasses}
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-paper">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" className={inputClasses} placeholder="(555) 123-4567" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="eventDate" className="text-sm font-medium text-paper">
                    Event date
                  </label>
                  <input id="eventDate" name="eventDate" type="date" className={inputClasses} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="eventType" className="text-sm font-medium text-paper">
                  Event type
                </label>
                <select id="eventType" name="eventType" required className={inputClasses} defaultValue="">
                  <option value="" disabled>
                    Select an event type
                  </option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-paper">
                  Tell us about your event
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={inputClasses}
                  placeholder="Guest count, location, ideas..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Send Request <Send size={16} />
              </Button>
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  )
}
