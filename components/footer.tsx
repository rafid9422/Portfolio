import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react"
import { NewsletterSignup } from "@/components/newsletter-signup"

const socials = [
  { href: "#", label: "Facebook", icon: Facebook },
  { href: "#", label: "Twitter", icon: Twitter },
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "YouTube", icon: Youtube },
  { href: "#", label: "LinkedIn", icon: Linkedin },
]

const pages = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#articles", label: "Articles" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="on-dark bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-10 md:px-6 md:pt-28">
        <div className="grid gap-12 border-b border-paper/15 pb-16 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <h2 className="text-[30px] leading-[38px] font-light md:text-section">
              Have a project in mind? <span className="font-medium text-brand">Let&apos;s talk.</span>
            </h2>
            <ul className="mt-8 space-y-3 text-body">
              <li>
                <a href="mailto:nikhil@helpinggeeks.com" className="inline-flex items-center gap-3 text-paper/80 hover:text-paper">
                  <Mail className="size-4 text-brand" aria-hidden="true" />
                  <span className="text-link">nikhil@helpinggeeks.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919000057810" className="inline-flex items-center gap-3 text-paper/80 hover:text-paper">
                  <Phone className="size-4 text-brand" aria-hidden="true" />
                  <span className="text-link">+91-9000057810</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:pt-10">
            <h3 className="text-title font-medium">Subscribe to my newsletter</h3>
            <p className="mt-2 mb-6 text-body text-paper/70">
              Occasional notes on design, video and automation. No spam, unsubscribe anytime.
            </p>
            <NewsletterSignup />
          </div>
        </div>

        <div className="flex flex-col gap-8 pt-10 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="text-title font-medium">
            Rafid<span className="text-brand">.</span>
          </a>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-meta">
              {pages.map((page) => (
                <li key={page.href}>
                  <a href={page.href} className="text-link text-paper/70 hover:text-paper">
                    {page.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors duration-150 hover:border-brand hover:bg-brand hover:text-ink"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-meta text-paper/50">© {year} Rafid Rahman. All rights reserved.</p>
      </div>
    </footer>
  )
}
