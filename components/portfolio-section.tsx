import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "Studio user research and analysis",
      description:
        "Mapping how a creative studio plans and delivers work, then turning interviews and usability sessions into a clear set of product priorities.",
      tag: "UI/UX design",
      logo: "/images/studio-logo.svg",
      illustration: "/images/studio-workspace.svg",
    },
    {
      title: "Venture Workspace web app redesign",
      description:
        "A ground-up redesign of a workspace dashboard — new information architecture, a lighter visual language and a reusable component library.",
      tag: "UI/UX design",
      logo: "/images/venture-logo.svg",
      illustration: "/images/venture-workspace.svg",
    },
  ]

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="mb-12 md:mb-16">
        <p className="eyebrow mb-4">Selected work</p>
        <h2 className="text-[30px] leading-[38px] font-light md:text-section">
          Take a look at my <span className="marker font-medium">design portfolio</span>
        </h2>
      </div>

      <ul className="space-y-16 md:space-y-24">
        {projects.map((project, index) => (
          <li key={project.title}>
            <article className="group grid items-center gap-8 md:grid-cols-2 md:gap-16">
              <a
                href="#"
                tabIndex={-1}
                aria-hidden="true"
                className={`relative block aspect-[4/3] overflow-hidden rounded-md bg-surface ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={project.illustration}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 ease-base group-hover:scale-105"
                />
              </a>

              <div>
                <Image src={project.logo} alt="" width={120} height={32} className="block h-7 w-auto" />
                <span className="mt-6 inline-block rounded-lg bg-surface px-3 py-1 text-meta">{project.tag}</span>
                <h3 className="mt-4 text-[26px] leading-[34px] font-light md:text-[30px] md:leading-[38px]">
                  {project.title}
                </h3>
                <p className="mt-4 text-body text-muted">{project.description}</p>
                <a href="#" className="mt-8 inline-flex items-center gap-2 font-medium">
                  <span className="text-link">View case study</span>
                  <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
