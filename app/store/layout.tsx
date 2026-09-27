import type React from "react"
import type { Metadata } from "next"
import { CartProvider } from "@/components/store/cart-context"
import { StoreHeader } from "@/components/store/store-header"
import { CartDrawer } from "@/components/store/cart-drawer"
import { StoreFooter } from "@/components/store/store-footer"
import { STORE_NAME } from "@/components/store/data"

export const metadata: Metadata = {
  title: `${STORE_NAME} — Men's Fashion Online Shop in Bangladesh`,
  description: "Denim, t-shirts, polos, shirts and panjabi. Cash on delivery across Bangladesh.",
}

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white text-neutral-900">
        <StoreHeader />
        <main>{children}</main>
        <StoreFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
