"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { getProduct } from "./data"

export type CartLine = { slug: string; size: string; color: string; qty: number }

type CartState = {
  lines: CartLine[]
  open: boolean
  setOpen: (open: boolean) => void
  add: (line: Omit<CartLine, "qty">, qty?: number) => void
  update: (index: number, qty: number) => void
  remove: (index: number) => void
  clear: () => void
  count: number
  subtotal: number
}

const CartContext = createContext<CartState | null>(null)
const STORAGE_KEY = "store-cart"

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setLines(JSON.parse(saved))
    } catch {}
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {}
  }, [lines, loaded])

  const value = useMemo<CartState>(() => {
    const count = lines.reduce((sum, l) => sum + l.qty, 0)
    const subtotal = lines.reduce((sum, l) => sum + (getProduct(l.slug)?.price ?? 0) * l.qty, 0)
    return {
      lines,
      open,
      setOpen,
      count,
      subtotal,
      add: (line, qty = 1) => {
        setLines((prev) => {
          const i = prev.findIndex((l) => l.slug === line.slug && l.size === line.size && l.color === line.color)
          if (i === -1) return [...prev, { ...line, qty }]
          return prev.map((l, idx) => (idx === i ? { ...l, qty: l.qty + qty } : l))
        })
        setOpen(true)
      },
      update: (index, qty) =>
        setLines((prev) =>
          qty <= 0 ? prev.filter((_, i) => i !== index) : prev.map((l, i) => (i === index ? { ...l, qty } : l)),
        ),
      remove: (index) => setLines((prev) => prev.filter((_, i) => i !== index)),
      clear: () => setLines([]),
    }
  }, [lines, open])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}
