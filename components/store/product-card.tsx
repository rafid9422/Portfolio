import Link from "next/link"
import { discountPercent, formatPrice, garmentFor, type Product } from "./data"
import { ProductArt } from "./product-art"

export function ProductImage({ product, colorHex, className = "" }: { product: Product; colorHex?: string; className?: string }) {
  if (product.image) {
    return <img src={product.image} alt={product.name} className={`h-full w-full object-cover ${className}`} />
  }
  return (
    <div className={`flex h-full w-full items-center justify-center bg-[#eef1f5] ${className}`}>
      <ProductArt garment={garmentFor(product)} color={colorHex ?? product.colors[0].hex} className="h-[82%] w-[82%]" />
    </div>
  )
}

export function ProductCard({ product }: { product: Product }) {
  const off = discountPercent(product)
  return (
    <Link href={`/store/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden">
        <ProductImage product={product} className="transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {off > 0 && <span className="bg-red-600 px-2 py-0.5 text-[11px] font-bold text-white">-{off}%</span>}
          {product.isNew && <span className="bg-[#0f2742] px-2 py-0.5 text-[11px] font-bold text-white">NEW</span>}
        </div>
        <span className="absolute inset-x-0 bottom-0 translate-y-full bg-[#0f2742] py-2.5 text-center text-xs font-bold uppercase tracking-widest text-white transition-transform duration-300 group-hover:translate-y-0">
          Quick view
        </span>
      </div>
      <div className="pt-3">
        <h3 className="text-sm text-neutral-800 group-hover:underline">{product.name}</h3>
        <div className="mt-1 flex items-center gap-2 text-sm">
          <span className="font-bold text-[#0f2742]">{formatPrice(product.price)}</span>
          {product.compareAt && <span className="text-neutral-400 line-through">{formatPrice(product.compareAt)}</span>}
        </div>
        <div className="mt-2 flex gap-1.5">
          {product.colors.map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="h-3.5 w-3.5 rounded-full border border-neutral-300"
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>
    </Link>
  )
}
