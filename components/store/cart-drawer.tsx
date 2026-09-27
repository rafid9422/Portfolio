"use client"

import Link from "next/link"
import { Minus, Plus, Trash2, X } from "lucide-react"
import { formatPrice, getProduct } from "./data"
import { useCart } from "./cart-context"
import { ProductImage } from "./product-card"

export const FREE_SHIPPING_THRESHOLD = 2500

export function CartDrawer() {
  const { lines, open, setOpen, update, remove, subtotal } = useCart()
  if (!open) return null

  const remaining = FREE_SHIPPING_THRESHOLD - subtotal

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
      <aside className="absolute right-0 top-0 flex h-full w-[420px] max-w-full flex-col bg-white animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h2 className="text-lg font-bold uppercase tracking-wide">Your cart</h2>
          <button aria-label="Close cart" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="text-neutral-500">Your cart is empty.</p>
            <Link
              href="/store/collections/all"
              onClick={() => setOpen(false)}
              className="bg-[#0f2742] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="border-b border-neutral-200 px-5 py-3 text-sm">
              {remaining > 0 ? (
                <p>
                  Add <b>{formatPrice(remaining)}</b> more for free delivery
                </p>
              ) : (
                <p className="font-medium text-green-700">You&apos;ve unlocked free delivery!</p>
              )}
              <div className="mt-2 h-1.5 bg-neutral-100">
                <div
                  className="h-full bg-[#0f2742] transition-all"
                  style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%` }}
                />
              </div>
            </div>

            <ul className="flex-1 divide-y divide-neutral-100 overflow-y-auto px-5">
              {lines.map((line, i) => {
                const product = getProduct(line.slug)
                if (!product) return null
                const color = product.colors.find((c) => c.name === line.color)
                return (
                  <li key={`${line.slug}-${line.size}-${line.color}`} className="flex gap-4 py-4">
                    <div className="h-24 w-20 flex-shrink-0">
                      <ProductImage product={product} colorHex={color?.hex} />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <p className="text-sm font-medium">{product.name}</p>
                        <button aria-label="Remove item" onClick={() => remove(i)}>
                          <Trash2 className="h-4 w-4 text-neutral-400 hover:text-red-600" />
                        </button>
                      </div>
                      <p className="text-xs text-neutral-500">
                        {line.color} / {line.size}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-neutral-300">
                          <button aria-label="Decrease" className="p-1.5" onClick={() => update(i, line.qty - 1)}>
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{line.qty}</span>
                          <button aria-label="Increase" className="p-1.5" onClick={() => update(i, line.qty + 1)}>
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-bold">{formatPrice(product.price * line.qty)}</span>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="border-t border-neutral-200 p-5">
              <div className="mb-1 flex justify-between font-bold">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-4 text-xs text-neutral-500">Delivery charge calculated at checkout.</p>
              <Link
                href="/store/checkout"
                onClick={() => setOpen(false)}
                className="block bg-[#0f2742] py-3.5 text-center text-sm font-bold uppercase tracking-widest text-white hover:bg-[#1c3d63]"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
