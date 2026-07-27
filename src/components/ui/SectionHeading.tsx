type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClasses}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">{title}</h2>
      {description && <p className="text-base text-mist sm:text-lg">{description}</p>}
    </div>
  )
}
