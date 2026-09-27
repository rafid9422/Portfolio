import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { STORE_NAME, categories } from "./data"

export function StoreFooter() {
  return (
    <footer className="mt-20 bg-[#0f2742] text-neutral-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-bold tracking-[0.2em] text-white">{STORE_NAME}</p>
          <p className="mt-4 text-sm leading-relaxed">
            Everyday menswear built on quality denim and cotton. Designed and made in Bangladesh.
          </p>
          <div className="mt-5 flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-white">Shop</p>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/store/collections/${c.slug}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-white">Help</p>
          <ul className="space-y-2 text-sm">
            {["Track Order", "Size Guide", "Exchange & Return", "Delivery Information", "Privacy Policy", "Terms & Conditions"].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-white">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>Hotline: +880 1XXX-XXXXXX</li>
            <li>Email: hello@yourdomain.com</li>
            <li>Sat – Thu, 10am – 8pm</li>
          </ul>
          <p className="mt-6 text-xs uppercase tracking-widest text-neutral-400">We accept</p>
          <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-bold">
            {["bKash", "Nagad", "VISA", "Mastercard", "COD"].map((m) => (
              <span key={m} className="rounded bg-white px-2 py-1 text-[#0f2742]">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} {STORE_NAME}. All rights reserved.
      </div>
    </footer>
  )
}
