"use client"

import { useMemo, useState } from "react"
import { ProductCard } from "./product-card"
import type { Product } from "./data"

const sorts = {
  featured: { label: "Featured", fn: () => 0 },
  "price-asc": { label: "Price: Low to High", fn: (a: Product, b: Product) => a.price - b.price },
  "price-desc": { label: "Price: High to Low", fn: (a: Product, b: Product) => b.price - a.price },
  "name-asc": { label: "Alphabetically, A–Z", fn: (a: Product, b: Product) => a.name.localeCompare(b.name) },
}

export function CollectionGrid({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<keyof typeof sorts>("featured")
  const [size, setSize] = useState<string | null>(null)

  const allSizes = useMemo(() => Array.from(new Set(products.flatMap((p) => p.sizes))), [products])
  const visible = useMemo(
    () => products.filter((p) => !size || p.sizes.includes(size)).sort(sorts[sort].fn),
    [products, sort, size],
  )

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 border-y border-neutral-200 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="mr-1 font-medium">Size:</span>
          {allSizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(size === s ? null : s)}
              className={`min-w-10 border px-2.5 py-1 ${size === s ? "border-[#0f2742] bg-[#0f2742] text-white" : "border-neutral-300 hover:border-neutral-800"}`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-neutral-500">{visible.length} products</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as keyof typeof sorts)}
            className="border border-neutral-300 bg-white px-3 py-2 outline-none"
          >
            {Object.entries(sorts).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="py-20 text-center text-neutral-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </>
  )
}
