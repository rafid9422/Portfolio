import { FileText } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Jan 2023 – Present",
      title: "Mobile product designer",
      description:
        "Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.",
      icon: "/images/agency.png",
    },
    {
      period: "Jan 2021 – Dec 2022",
      title: "VP of design",
      description:
        "Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.",
      icon: "/images/company.png",
    },
    {
      period: "Mar 2020 – Dec 2020",
      title: "Head of product design",
      description:
        "Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.",
      icon: "/images/busines.png",
    },
    {
      period: "Sep 2017 – Feb 2020",
      title: "Web designer",
      description:
        "Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.",
      icon: "/images/startup.png",
    },
  ]

  return (
    <section id="experience" className="on-dark bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.4fr] md:gap-20 md:px-6">
        <div className="self-start md:sticky md:top-28">
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="text-[30px] leading-[38px] font-light md:text-section">
            Take a look at my <span className="font-medium text-brand">past experience</span>
          </h2>
          <p className="mt-6 text-body text-paper/70">
            Roles across agencies, product companies and startups — each one sharpened how I research, design and ship.
          </p>
          <Button asChild variant="light" className="mt-10">
            <a href="#">
              <FileText />
              See full resume
            </a>
          </Button>
        </div>

        <ol className="relative border-l border-paper/15">
          {experiences.map((exp) => (
            <li key={exp.title} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[5px] size-[9px] rounded-full bg-brand ring-4 ring-ink"
              />
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-meta text-paper/60">{exp.period}</p>
                  <h3 className="mt-2 text-title font-medium">{exp.title}</h3>
                </div>
                <Image
                  src={exp.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="size-10 shrink-0 rounded-full bg-paper md:size-12"
                />
              </div>
              <p className="mt-4 text-body text-paper/70">{exp.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
