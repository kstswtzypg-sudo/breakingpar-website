import { ArrowRight } from 'lucide-react'
import Container from './ui/Container'
import Button from './ui/Button'
import Reveal from './ui/Reveal'

export default function CtaBanner() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-500/30 bg-gradient-to-br from-ink-800 to-ink-900 px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 bg-grid-fade" />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
                Ready to elevate your next event?
              </h2>
              <p className="max-w-xl text-mist">
                Tell us your date and location — we’ll build a custom golf simulator package and get back to you
                within one business day.
              </p>
              <Button href="#contact" variant="primary">
                Get a Free Quote <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
