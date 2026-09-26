import { ArrowDownRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pt-12 pb-20 md:px-6 md:pt-20 md:pb-28">
      <div className="grid items-center gap-12 md:grid-cols-[1.25fr_1fr] md:gap-16">
        <div>
          <p className="eyebrow mb-6">UI/UX designer · Dhaka, Bangladesh</p>

          <h1 className="text-[40px] leading-[48px] font-light tracking-tight md:text-display">
            I&apos;m <span className="font-medium">Rafid Rahman</span>. I design <span className="marker">calm, useful</span>{" "}
            digital products.
          </h1>

          <p className="mt-6 max-w-xl text-body text-muted md:text-title md:font-light">
            I shape interfaces for web and mobile, edit video that holds attention, and build AI automations that take
            repetitive work off your plate.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <a href="#contact">
                <Mail />
                Get in touch
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#portfolio">
                View portfolio
                <ArrowDownRight />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div aria-hidden="true" className="absolute -top-4 -right-4 size-24 rounded-full bg-accent md:size-32" />
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 size-40 rounded-full border border-brand md:size-48"
          />
          <div className="relative aspect-square overflow-hidden rounded-full bg-brand shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png"
              alt="Illustrated portrait of Rafid Rahman"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
