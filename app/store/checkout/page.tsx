"use client"

import Link from "next/link"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { useCart } from "@/components/store/cart-context"
import { FREE_SHIPPING_THRESHOLD } from "@/components/store/cart-drawer"
import { formatPrice, getProduct } from "@/components/store/data"

const DELIVERY = { inside: { label: "Inside Dhaka", fee: 70 }, outside: { label: "Outside Dhaka", fee: 130 } }

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart()
  const [zone, setZone] = useState<keyof typeof DELIVERY>("inside")
  const [payment, setPayment] = useState("cod")
  const [placed, setPlaced] = useState(false)

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : DELIVERY[zone].fee
  const input = "w-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-[#0f2742]"

  if (placed) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
        <h1 className="mt-4 text-2xl font-bold text-[#0f2742]">Thank you for your order!</h1>
        <p className="mt-2 text-neutral-600">We&apos;ll call you shortly to confirm your order and delivery details.</p>
        <Link href="/store" className="mt-8 inline-block bg-[#0f2742] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white">
          Continue shopping
        </Link>
      </div>
    )
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-[#0f2742]">Your cart is empty</h1>
        <Link href="/store/collections/all" className="mt-8 inline-block bg-[#0f2742] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white">
          Shop products
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1fr_380px]">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          // Hook this up to your order API / payment gateway.
          clear()
          setPlaced(true)
        }}
        className="space-y-8"
      >
        <section>
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wide">Shipping details</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <input required placeholder="Full name" className={input} />
            <input required type="tel" pattern="01[0-9]{9}" placeholder="Phone (01XXXXXXXXX)" className={input} />
            <input type="email" placeholder="Email (optional)" className={`${input} sm:col-span-2`} />
            <input required placeholder="Full address" className={`${input} sm:col-span-2`} />
            <input required placeholder="City / District" className={input} />
            <input placeholder="Order note (optional)" className={input} />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wide">Delivery area</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {Object.entries(DELIVERY).map(([key, d]) => (
              <label
                key={key}
                className={`flex cursor-pointer items-center justify-between border px-4 py-3 text-sm ${zone === key ? "border-[#0f2742]" : "border-neutral-300"}`}
              >
                <span className="flex items-center gap-2">
                  <input type="radio" name="zone" checked={zone === key} onChange={() => setZone(key as keyof typeof DELIVERY)} />
                  {d.label}
                </span>
                <span>{formatPrice(d.fee)}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wide">Payment</h2>
          <div className="space-y-3">
            {[
              { id: "cod", label: "Cash on Delivery" },
              { id: "bkash", label: "bKash / Nagad" },
              { id: "card", label: "Credit / Debit Card" },
            ].map((m) => (
              <label
                key={m.id}
                className={`flex cursor-pointer items-center gap-2 border px-4 py-3 text-sm ${payment === m.id ? "border-[#0f2742]" : "border-neutral-300"}`}
              >
                <input type="radio" name="payment" checked={payment === m.id} onChange={() => setPayment(m.id)} />
                {m.label}
              </label>
            ))}
          </div>
        </section>

        <button className="w-full bg-[#0f2742] py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#1c3d63]">
          Place order · {formatPrice(subtotal + shipping)}
        </button>
      </form>

      <aside className="h-fit bg-[#eef1f5] p-6">
        <h2 className="mb-4 text-lg font-bold uppercase tracking-wide">Order summary</h2>
        <ul className="space-y-3 text-sm">
          {lines.map((l) => {
            const p = getProduct(l.slug)
            if (!p) return null
            return (
              <li key={`${l.slug}-${l.size}-${l.color}`} className="flex justify-between gap-4">
                <span>
                  {p.name} <span className="text-neutral-500">({l.color}/{l.size}) × {l.qty}</span>
                </span>
                <span className="whitespace-nowrap">{formatPrice(p.price * l.qty)}</span>
              </li>
            )
          })}
        </ul>
        <div className="mt-5 space-y-2 border-t border-neutral-300 pt-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
          </div>
          <div className="flex justify-between pt-2 text-base font-bold">
            <span>Total</span>
            <span>{formatPrice(subtotal + shipping)}</span>
          </div>
        </div>
      </aside>
    </div>
  )
}
