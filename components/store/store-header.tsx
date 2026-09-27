"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { STORE_NAME, categories } from "./data"
import { useCart } from "./cart-context"

const announcements = [
  "Free delivery on orders over ৳ 2,500",
  "Cash on delivery available all over Bangladesh",
  "Easy 7-day exchange policy",
]

export function StoreHeader() {
  const { count, setOpen } = useCart()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 4000)
    return () => clearInterval(id)
  }, [])

  function submitSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/store/collections/all?q=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="bg-[#0f2742] py-2 text-center text-xs font-medium tracking-wide text-white">
        <span key={tick} className="inline-block animate-in fade-in duration-500">
          {announcements[tick % announcements.length]}
        </span>
      </div>

      <div className="border-b border-neutral-200">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
          <button className="lg:hidden" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>

          <Link href="/store" className="text-2xl font-bold tracking-[0.2em] text-[#0f2742]">
            {STORE_NAME}
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/store/collections/new" className="text-sm font-medium uppercase tracking-wide hover:text-[#2b6cb0]">
              New In
            </Link>
            {categories.slice(0, 6).map((c) => (
              <Link
                key={c.slug}
                href={`/store/collections/${c.slug}`}
                className="text-sm font-medium uppercase tracking-wide hover:text-[#2b6cb0]"
              >
                {c.name}
              </Link>
            ))}
            <Link href="/store/collections/sale" className="text-sm font-bold uppercase tracking-wide text-red-600">
              Sale
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Search" onClick={() => setSearchOpen((s) => !s)}>
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Account" className="hidden sm:block">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Open cart" className="relative" onClick={() => setOpen(true)}>
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {searchOpen && (
          <form onSubmit={submitSearch} className="mx-auto flex max-w-7xl gap-2 px-4 pb-4">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for jeans, polo, panjabi..."
              className="flex-1 border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-[#0f2742]"
            />
            <button className="bg-[#0f2742] px-5 text-sm font-bold uppercase text-white">Search</button>
          </form>
        )}
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-white p-5 animate-in slide-in-from-left duration-200">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-bold tracking-[0.2em] text-[#0f2742]">{STORE_NAME}</span>
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={submitSearch} className="mb-6">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                className="w-full border border-neutral-300 px-3 py-2 text-sm outline-none"
              />
            </form>
            <nav className="flex flex-col divide-y divide-neutral-100">
              {[{ slug: "new", name: "New In" }, ...categories, { slug: "sale", name: "Sale" }].map((c) => (
                <Link
                  key={c.slug}
                  href={`/store/collections/${c.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 text-sm font-medium uppercase tracking-wide ${c.slug === "sale" ? "text-red-600" : ""}`}
                >
                  {c.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
