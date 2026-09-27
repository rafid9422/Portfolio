"use client"

import { useState } from "react"
import { Minus, Plus, RefreshCw, Truck } from "lucide-react"
import { discountPercent, formatPrice, type Product } from "./data"
import { useCart } from "./cart-context"
import { ProductImage } from "./product-card"

export function ProductDetails({ product }: { product: Product }) {
  const { add } = useCart()
  const [color, setColor] = useState(product.colors[0])
  const [size, setSize] = useState<string | null>(null)
  const [qty, setQty] = useState(1)
  const [error, setError] = useState(false)
  const off = discountPercent(product)

  function addToCart() {
    if (!size) {
      setError(true)
      return
    }
    add({ slug: product.slug, size, color: color.name }, qty)
    setQty(1)
  }

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="relative aspect-[4/5]">
        <ProductImage product={product} colorHex={color.hex} />
        {off > 0 && (
          <span className="absolute left-3 top-3 bg-red-600 px-2.5 py-1 text-xs font-bold text-white">-{off}%</span>
        )}
      </div>

      <div>
        <h1 className="text-3xl font-bold text-[#0f2742]">{product.name}</h1>
        <div className="mt-3 flex items-center gap-3 text-xl">
          <span className="font-bold">{formatPrice(product.price)}</span>
          {product.compareAt && <span className="text-base text-neutral-400 line-through">{formatPrice(product.compareAt)}</span>}
          {off > 0 && <span className="text-sm font-bold text-red-600">Save {off}%</span>}
        </div>

        <div className="mt-8">
          <p className="mb-2 text-sm">
            <span className="font-bold">Colour:</span> {color.name}
          </p>
          <div className="flex gap-2">
            {product.colors.map((c) => (
              <button
                key={c.name}
                title={c.name}
                aria-label={c.name}
                onClick={() => setColor(c)}
                className={`h-9 w-9 rounded-full border-2 p-0.5 ${color.name === c.name ? "border-[#0f2742]" : "border-transparent"}`}
              >
                <span className="block h-full w-full rounded-full border border-neutral-300" style={{ backgroundColor: c.hex }} />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex justify-between text-sm">
            <span>
              <span className="font-bold">Size:</span> {size ?? "Select a size"}
            </span>
            <a href="#size-guide" className="underline underline-offset-4">
              Size guide
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSize(s)
                  setError(false)
                }}
                className={`min-w-12 border px-3 py-2.5 text-sm font-medium ${size === s ? "border-[#0f2742] bg-[#0f2742] text-white" : "border-neutral-300 hover:border-neutral-800"}`}
              >
                {s}
              </button>
            ))}
          </div>
          {error && <p className="mt-2 text-sm text-red-600">Please select a size.</p>}
        </div>

        <div className="mt-8 flex gap-3">
          <div className="flex items-center border border-neutral-300">
            <button aria-label="Decrease quantity" className="px-3 py-3" onClick={() => setQty((q) => Math.max(1, q - 1))}>
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center">{qty}</span>
            <button aria-label="Increase quantity" className="px-3 py-3" onClick={() => setQty((q) => q + 1)}>
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            onClick={addToCart}
            className="flex-1 bg-[#0f2742] py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#1c3d63]"
          >
            Add to cart
          </button>
        </div>

        <div className="mt-8 space-y-3 border-y border-neutral-200 py-5 text-sm">
          <p className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-[#0f2742]" /> Delivery in 2–5 working days. Free over ৳ 2,500.
          </p>
          <p className="flex items-center gap-3">
            <RefreshCw className="h-5 w-5 text-[#0f2742]" /> Easy exchange within 7 days.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-widest">Description</h2>
          <p className="leading-relaxed text-neutral-600">{product.description}</p>
        </div>
      </div>
    </div>
  )
}
