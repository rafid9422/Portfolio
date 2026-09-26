"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#articles", label: "Articles" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-paper/95 backdrop-blur transition-[border-color] duration-300 border-b",
        scrolled || open ? "border-surface" : "border-transparent",
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#home" className="text-title font-medium tracking-tight">
          Rafid<span className="text-brand">.</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-link text-body text-muted hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="dark" className="hidden sm:inline-flex">
            <a href="#contact">Let&apos;s talk</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-surface bg-paper px-4 pb-6 md:hidden"
      >
        <ul className="flex flex-col">
          {links.map((link) => (
            <li key={link.href} className="border-b border-surface">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-title font-light hover:text-muted"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild variant="dark" className="mt-6 w-full">
          <a href="#contact" onClick={() => setOpen(false)}>
            Let&apos;s talk
          </a>
        </Button>
      </div>
    </header>
  )
}
