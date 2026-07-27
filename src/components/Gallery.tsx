import { ImageIcon } from 'lucide-react'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const images = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  label: `Gallery photo placeholder ${i + 1}`,
}))

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-ink-800 bg-ink-850 py-24">
      <Container className="flex flex-col items-center gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="See Breaking Par in action"
            description="A look at our simulator lounge at recent corporate events, weddings, and tournaments."
          />
        </Reveal>

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <Reveal key={image.id} delay={index * 50} className={index === 0 ? 'col-span-2 row-span-2' : ''}>
              <div className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-ink-700 bg-ink-800 transition-transform duration-500 hover:scale-[1.02]">
                <ImageIcon
                  className="text-ink-500 transition-colors duration-300 group-hover:text-brand-400"
                  size={28}
                />
                <span className="sr-only">{image.label}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
