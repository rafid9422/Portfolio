import Link from "next/link"
import { notFound } from "next/navigation"
import { CollectionGrid } from "@/components/store/collection-grid"
import { categories, getCategory, products, type Product } from "@/components/store/data"

const special: Record<string, { name: string; filter: (p: Product) => boolean }> = {
  all: { name: "All Products", filter: () => true },
  new: { name: "New Arrivals", filter: (p) => !!p.isNew },
  sale: { name: "Sale", filter: (p) => !!p.compareAt },
}

export function generateStaticParams() {
  return [...Object.keys(special), ...categories.map((c) => c.slug)].map((category) => ({ category }))
}

export default async function CollectionPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>
  searchParams: Promise<{ q?: string }>
}) {
  const { category } = await params
  const { q } = await searchParams

  const cat = getCategory(category)
  const sp = special[category]
  if (!cat && !sp) notFound()

  let items = cat ? products.filter((p) => p.category === cat.slug) : products.filter(sp.filter)
  const query = q?.trim().toLowerCase()
  if (query) {
    items = items.filter(
      (p) => p.name.toLowerCase().includes(query) || (getCategory(p.category)?.name.toLowerCase().includes(query) ?? false),
    )
  }

  const title = query ? `Search: “${q}”` : (cat?.name ?? sp.name)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <nav className="mb-4 text-xs text-neutral-500">
        <Link href="/store" className="hover:underline">
          Home
        </Link>{" "}
        / <span className="text-neutral-800">{title}</span>
      </nav>
      <h1 className="mb-8 text-3xl font-bold uppercase tracking-wide text-[#0f2742]">{title}</h1>
      <CollectionGrid products={items} />
    </div>
  )
}
