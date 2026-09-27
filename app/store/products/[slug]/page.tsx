import Link from "next/link"
import { notFound } from "next/navigation"
import { ProductDetails } from "@/components/store/product-details"
import { ProductCard } from "@/components/store/product-card"
import { getCategory, getProduct, products } from "@/components/store/data"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const category = getCategory(product.category)
  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category)
  const more = products.filter((p) => p.slug !== product.slug && p.category !== product.category)
  const suggestions = [...related, ...more].slice(0, 4)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <nav className="mb-6 text-xs text-neutral-500">
        <Link href="/store" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        {category && (
          <>
            <Link href={`/store/collections/${category.slug}`} className="hover:underline">
              {category.name}
            </Link>{" "}
            /{" "}
          </>
        )}
        <span className="text-neutral-800">{product.name}</span>
      </nav>

      <ProductDetails product={product} />

      <section className="pt-20">
        <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-[#0f2742]">You may also like</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
          {suggestions.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
