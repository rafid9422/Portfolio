import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      title: "UI/UX design",
      description: "Designing clean, user-friendly interfaces and experiences for web and mobile products.",
      image: "/images/ui-ux-design.svg",
    },
    {
      title: "Video editing",
      description: "Editing engaging videos with smooth transitions, color grading, and motion graphics.",
      image: "/images/motion-graphics.svg",
    },
    {
      title: "AI automation",
      description: "Building AI-powered workflows and automations to save time and streamline tasks.",
      image: "/images/product-design.svg",
    },
  ]

  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow mb-4">What I do</p>
            <h2 className="text-[30px] leading-[38px] font-light md:text-section">
              A focused <span className="font-medium">set of services</span>
            </h2>
          </div>
          <p className="max-w-md text-body text-muted md:justify-self-end">
            Three disciplines that work well together: a product that looks right, a story that moves, and the systems
            that keep it running.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-md bg-paper transition-shadow duration-300 hover:shadow-sm"
            >
              <div className="overflow-hidden">
                <Image
                  src={service.image}
                  alt=""
                  width={382}
                  height={328}
                  className="h-auto w-full transition-transform duration-300 ease-base group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-meta text-muted">0{index + 1}</span>
                <h3 className="mt-2 text-title font-medium">{service.title}</h3>
                <p className="mt-3 text-body text-muted">{service.description}</p>
              </div>
            </li>
          ))}

          <li className="flex flex-col justify-between rounded-md bg-ink p-6 text-paper on-dark">
            <div>
              <span className="inline-block size-3 rounded-full bg-accent" aria-hidden="true" />
              <h3 className="mt-6 text-title font-medium">Need something else?</h3>
              <p className="mt-3 text-body text-paper/70">
                Looking for another service? Get in touch — there&apos;s a good chance I can help.
              </p>
            </div>
            <Button asChild className="mt-8 w-full">
              <a href="#contact">
                Get in touch
                <ArrowUpRight />
              </a>
            </Button>
          </li>
        </ol>
      </div>
    </section>
  )
}
