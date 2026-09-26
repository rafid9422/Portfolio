export function LogoMarquee() {
  const items = [
    { logo: "/logos/application.svg", alt: "Application" },
    { logo: "/logos/business.svg", alt: "Business" },
    { logo: "/logos/company.svg", alt: "Company" },
    { logo: "/logos/startup.svg", alt: "Startup" },
    { logo: "/logos/venture.svg", alt: "Venture" },
    { logo: "/logos/agency.svg", alt: "Agency" },
  ]

  return (
    <section aria-label="Brands I've worked with" className="bg-ink py-10">
      <p className="sr-only">{items.map((i) => i.alt).join(", ")}</p>
      <div className="overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={index} src={item.logo} alt="" className="h-8 w-auto opacity-70" />
          ))}
        </div>
      </div>
    </section>
  )
}
