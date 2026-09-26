import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const stats = [
    { value: "5+", label: "Years of experience" },
    { value: "10+", label: "Successful projects" },
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
        <div className="relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-md bg-brand" />
          <div className="relative aspect-square overflow-hidden rounded-md bg-surface">
            <Image src="/images/about-me.svg" alt="Illustration of a designer at work" fill className="object-cover" />
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">About me</p>
          <h2 className="text-[30px] leading-[38px] font-light md:text-section">
            Who&apos;s behind all this <span className="marker font-medium">work?</span>
          </h2>
          <p className="mt-6 text-body text-muted">
            I&apos;m a designer based in Dhaka who cares about the small details that make software feel effortless. I
            start with research, sketch in the open, and keep iterating until the product is simple to use and easy to
            build.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-surface pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-meta text-muted">{stat.label}</dt>
                <dd className="mt-1 text-[48px] leading-none font-light">
                  {stat.value}
                  <span className="text-brand" aria-hidden="true">
                    .
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <Button asChild variant="outline" className="mt-10">
            <a href="#experience">
              More about me
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
