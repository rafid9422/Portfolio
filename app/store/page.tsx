import Link from "next/link"
import { RefreshCw, ShieldCheck, Truck, Wallet } from "lucide-react"
import { HeroSlider } from "@/components/store/hero-slider"
import { ProductCard } from "@/components/store/product-card"
import { ProductArt } from "@/components/store/product-art"
import { categories, products } from "@/components/store/data"

function SectionHeading({ title, href }: { title: string; href?: string }) {
  return (
    <div className="mb-8 flex items-end justify-between">
      <h2 className="text-2xl font-bold uppercase tracking-wide text-[#0f2742] sm:text-3xl">{title}</h2>
      {href && (
        <Link href={href} className="text-sm font-medium underline underline-offset-4 hover:text-[#2b6cb0]">
          View all
        </Link>
      )}
    </div>
  )
}

export default function StoreHome() {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4)
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 4)

  return (
    <>
      <HeroSlider />

      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-6 text-sm lg:grid-cols-4">
          {[
            { icon: Truck, title: "Nationwide Delivery", text: "Inside Dhaka in 48 hours" },
            { icon: Wallet, title: "Cash on Delivery", text: "Pay when you receive" },
            { icon: RefreshCw, title: "Easy Exchange", text: "Within 7 days of delivery" },
            { icon: ShieldCheck, title: "Secure Payment", text: "bKash, Nagad & cards" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3">
              <Icon className="h-7 w-7 flex-shrink-0 text-[#0f2742]" />
              <div>
                <p className="font-bold">{title}</p>
                <p className="text-neutral-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-16">
        <SectionHeading title="Shop by Category" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {categories.map((c) => (
            <Link key={c.slug} href={`/store/collections/${c.slug}`} className="group text-center">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-full bg-[#eef1f5] transition-colors group-hover:bg-[#dfe6ee]">
                <ProductArt
                  garment={c.garment}
                  color={c.color}
                  className="h-3/4 w-3/4 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="mt-3 text-sm font-bold uppercase tracking-wide">{c.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20">
        <SectionHeading title="New Arrivals" href="/store/collections/new" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-4 px-4 md:grid-cols-2">
        {[
          {
            title: "Denim Collection",
            text: "Built to fade beautifully",
            href: "/store/collections/jeans",
            bg: "#274472",
            garment: "jeans" as const,
            color: "#8aa9d6",
          },
          {
            title: "Polo Season",
            text: "Breathable piqué in 6 colours",
            href: "/store/collections/polo",
            bg: "#1f6f5c",
            garment: "polo" as const,
            color: "#f4f4f4",
          },
        ].map((b) => (
          <Link
            key={b.title}
            href={b.href}
            className="group relative flex min-h-[280px] items-center overflow-hidden p-8 text-white"
            style={{ backgroundColor: b.bg }}
          >
            <div className="relative z-10">
              <p className="text-3xl font-bold uppercase">{b.title}</p>
              <p className="mt-2 opacity-80">{b.text}</p>
              <span className="mt-6 inline-block border-b-2 border-white pb-1 text-sm font-bold uppercase tracking-widest">
                Shop now
              </span>
            </div>
            <ProductArt
              garment={b.garment}
              color={b.color}
              className="absolute -right-6 bottom-0 h-[110%] opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20">
        <SectionHeading title="Best Sellers" href="/store/collections/all" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4">
        <div className="bg-[#eef1f5] px-6 py-12 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-[#0f2742]">Join our newsletter</h2>
          <p className="mt-2 text-neutral-600">Get 10% off your first order and early access to new drops.</p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#0f2742]"
            />
            <button className="bg-[#0f2742] px-6 py-3 text-sm font-bold uppercase tracking-widest text-white">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
