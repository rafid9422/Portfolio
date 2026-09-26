import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-[1.5fr_1fr] md:gap-20">
        <figure>
          <p className="eyebrow mb-8">What clients say</p>
          <span aria-hidden="true" className="block font-serif text-[96px] leading-[45px] text-brand">
            &ldquo;
          </span>
          <blockquote className="mt-4 font-serif text-[26px] leading-[36px] italic md:text-[32px] md:leading-[45px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim quis nostrud exercitation.
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-ink" />
            <span>
              <span className="block font-medium">Lily Woods</span>
              <span className="block text-meta text-muted">VP of design at Google</span>
            </span>
          </figcaption>
        </figure>

        <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div aria-hidden="true" className="absolute -top-3 -left-3 size-16 rounded-full bg-accent" />
          <div className="relative aspect-square overflow-hidden rounded-full bg-surface">
            <Image
              src="/images/633b277fc2e3697bb14c6a4f-frances.png"
              alt="Portrait of Lily Woods"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
