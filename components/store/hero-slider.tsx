"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProductArt } from "./product-art"
import type { Garment } from "./data"

const slides: {
  eyebrow: string
  title: string
  text: string
  cta: string
  href: string
  bg: string
  fg: string
  art: { garment: Garment; color: string }[]
}[] = [
  {
    eyebrow: "New Season",
    title: "The Denim Edit",
    text: "Slim, regular and relaxed fits in stretch denim made to last.",
    cta: "Shop Jeans",
    href: "/store/collections/jeans",
    bg: "#0f2742",
    fg: "#ffffff",
    art: [
      { garment: "jacket", color: "#3c5f94" },
      { garment: "jeans", color: "#8aa9d6" },
    ],
  },
  {
    eyebrow: "Festive Collection",
    title: "Panjabi for Every Occasion",
    text: "Fine cotton and embroidered panjabis for Eid, weddings and celebrations.",
    cta: "Explore Panjabi",
    href: "/store/collections/panjabi",
    bg: "#efe6d2",
    fg: "#2a2014",
    art: [
      { garment: "panjabi", color: "#6d1f2f" },
      { garment: "panjabi", color: "#fbf7ee" },
    ],
  },
  {
    eyebrow: "Up to 25% Off",
    title: "Summer Essentials Sale",
    text: "Tees, polos and shirts at their best prices of the season.",
    cta: "Shop Sale",
    href: "/store/collections/sale",
    bg: "#d9e6f2",
    fg: "#0f2742",
    art: [
      { garment: "polo", color: "#1f6f5c" },
      { garment: "tshirt", color: "#f4f4f4" },
    ],
  },
]

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const go = (i: number) => setIndex((i + slides.length) % slides.length)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [index])

  const s = slides[index]

  return (
    <section className="relative overflow-hidden transition-colors duration-700" style={{ backgroundColor: s.bg, color: s.fg }}>
      <div
        key={index}
        className="mx-auto grid min-h-[480px] max-w-7xl items-center gap-6 px-4 py-12 animate-in fade-in duration-700 md:grid-cols-2 md:py-0 lg:min-h-[560px]"
      >
        <div className="text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">{s.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{s.title}</h1>
          <p className="mx-auto mt-4 max-w-md text-base opacity-80 md:mx-0">{s.text}</p>
          <Link
            href={s.href}
            className="mt-8 inline-block border-2 px-8 py-3.5 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
            style={{ borderColor: s.fg, backgroundColor: s.fg, color: s.bg }}
          >
            {s.cta}
          </Link>
        </div>
        <div className="flex items-end justify-center">
          {s.art.map((a, i) => (
            <ProductArt
              key={i}
              garment={a.garment}
              color={a.color}
              className={`w-40 drop-shadow-xl sm:w-56 lg:w-64 ${i === 1 ? "-ml-10 translate-y-6" : ""}`}
            />
          ))}
        </div>
      </div>

      <button
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#0f2742] hover:bg-white md:block"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#0f2742] hover:bg-white md:block"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8" : "w-2 opacity-40"}`}
            style={{ backgroundColor: s.fg }}
          />
        ))}
      </div>
    </section>
  )
}
