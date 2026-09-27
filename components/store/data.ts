export const STORE_NAME = "LYRA"

export type Garment = "tshirt" | "polo" | "shirt" | "jeans" | "panjabi" | "jacket" | "trouser"

export type Category = {
  slug: string
  name: string
  garment: Garment
  color: string
}

export type Product = {
  slug: string
  name: string
  category: string
  price: number
  compareAt?: number
  colors: { name: string; hex: string }[]
  sizes: string[]
  isNew?: boolean
  bestSeller?: boolean
  description: string
  // Replace with a real photo path (e.g. "/products/denim-slim.jpg") to override the illustration.
  image?: string
}

export const categories: Category[] = [
  { slug: "t-shirts", name: "T-Shirts", garment: "tshirt", color: "#2b4c7e" },
  { slug: "polo", name: "Polo Shirts", garment: "polo", color: "#1f6f5c" },
  { slug: "shirts", name: "Casual Shirts", garment: "shirt", color: "#8aa9d6" },
  { slug: "jeans", name: "Denim Jeans", garment: "jeans", color: "#274472" },
  { slug: "panjabi", name: "Panjabi", garment: "panjabi", color: "#e8dcc2" },
  { slug: "jackets", name: "Jackets", garment: "jacket", color: "#3d3d3d" },
  { slug: "trousers", name: "Chino Trousers", garment: "trouser", color: "#b89b72" },
]

const TOP_SIZES = ["S", "M", "L", "XL", "XXL"]
const WAIST_SIZES = ["28", "30", "32", "34", "36", "38"]

export const products: Product[] = [
  {
    slug: "classic-crew-neck-tee-navy",
    name: "Classic Crew Neck Tee",
    category: "t-shirts",
    price: 590,
    compareAt: 790,
    colors: [
      { name: "Navy", hex: "#1f3a5f" },
      { name: "White", hex: "#f4f4f4" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    sizes: TOP_SIZES,
    bestSeller: true,
    description: "Soft 180 GSM combed cotton tee with a relaxed everyday fit and ribbed crew neck.",
  },
  {
    slug: "graphic-print-tee",
    name: "Graphic Print Tee",
    category: "t-shirts",
    price: 690,
    colors: [
      { name: "Olive", hex: "#556b2f" },
      { name: "Charcoal", hex: "#36454f" },
    ],
    sizes: TOP_SIZES,
    isNew: true,
    description: "Premium cotton tee with a high-density front print. Pre-washed to prevent shrinking.",
  },
  {
    slug: "pique-polo-shirt",
    name: "Piqué Polo Shirt",
    category: "polo",
    price: 990,
    compareAt: 1290,
    colors: [
      { name: "Forest", hex: "#1f6f5c" },
      { name: "Maroon", hex: "#6d1f2f" },
      { name: "Sky", hex: "#7fb3d5" },
    ],
    sizes: TOP_SIZES,
    bestSeller: true,
    description: "Breathable cotton piqué polo with a two-button placket and tipped collar.",
  },
  {
    slug: "tipped-collar-polo",
    name: "Tipped Collar Polo",
    category: "polo",
    price: 1090,
    colors: [
      { name: "Navy", hex: "#1f3a5f" },
      { name: "White", hex: "#f4f4f4" },
    ],
    sizes: TOP_SIZES,
    isNew: true,
    description: "Smart-casual polo with contrast tipping on the collar and sleeves.",
  },
  {
    slug: "oxford-button-down-shirt",
    name: "Oxford Button-Down Shirt",
    category: "shirts",
    price: 1490,
    compareAt: 1790,
    colors: [
      { name: "Light Blue", hex: "#8aa9d6" },
      { name: "White", hex: "#f4f4f4" },
    ],
    sizes: TOP_SIZES,
    bestSeller: true,
    description: "Timeless oxford weave shirt with a button-down collar. Works with jeans or chinos.",
  },
  {
    slug: "checked-flannel-shirt",
    name: "Checked Flannel Shirt",
    category: "shirts",
    price: 1390,
    colors: [
      { name: "Red Check", hex: "#9b2c2c" },
      { name: "Green Check", hex: "#2f5d3a" },
    ],
    sizes: TOP_SIZES,
    isNew: true,
    description: "Brushed cotton flannel for cooler evenings, with twin chest pockets.",
  },
  {
    slug: "slim-fit-denim-jeans",
    name: "Slim Fit Denim Jeans",
    category: "jeans",
    price: 1890,
    compareAt: 2290,
    colors: [
      { name: "Mid Blue", hex: "#274472" },
      { name: "Dark Indigo", hex: "#1b2a4a" },
    ],
    sizes: WAIST_SIZES,
    bestSeller: true,
    description: "Our signature stretch denim with a slim leg. 98% cotton, 2% elastane for all-day comfort.",
  },
  {
    slug: "regular-fit-denim-jeans",
    name: "Regular Fit Denim Jeans",
    category: "jeans",
    price: 1790,
    colors: [
      { name: "Stone Wash", hex: "#5b7db1" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    sizes: WAIST_SIZES,
    description: "Straight, easy fit through the seat and thigh in a durable mid-weight denim.",
  },
  {
    slug: "cotton-panjabi-cream",
    name: "Cotton Panjabi",
    category: "panjabi",
    price: 2190,
    compareAt: 2590,
    colors: [
      { name: "Cream", hex: "#e8dcc2" },
      { name: "Sky", hex: "#9cc3e4" },
    ],
    sizes: TOP_SIZES,
    isNew: true,
    description: "Festive cotton panjabi with fine embroidery around the placket and cuffs.",
  },
  {
    slug: "embroidered-panjabi",
    name: "Embroidered Panjabi",
    category: "panjabi",
    price: 2890,
    colors: [
      { name: "Maroon", hex: "#6d1f2f" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    sizes: TOP_SIZES,
    bestSeller: true,
    description: "Premium viscose-cotton blend panjabi with tonal embroidery for celebrations.",
  },
  {
    slug: "denim-trucker-jacket",
    name: "Denim Trucker Jacket",
    category: "jackets",
    price: 2990,
    compareAt: 3490,
    colors: [{ name: "Mid Blue", hex: "#3c5f94" }],
    sizes: TOP_SIZES,
    isNew: true,
    description: "Classic trucker jacket in rigid denim with button flap chest pockets.",
  },
  {
    slug: "lightweight-bomber-jacket",
    name: "Lightweight Bomber Jacket",
    category: "jackets",
    price: 2690,
    colors: [
      { name: "Black", hex: "#2a2a2a" },
      { name: "Olive", hex: "#556b2f" },
    ],
    sizes: TOP_SIZES,
    description: "Water-resistant bomber with ribbed cuffs and hem. Easy layering for winter.",
  },
  {
    slug: "stretch-chino-trousers",
    name: "Stretch Chino Trousers",
    category: "trousers",
    price: 1590,
    compareAt: 1890,
    colors: [
      { name: "Khaki", hex: "#b89b72" },
      { name: "Navy", hex: "#1f3a5f" },
    ],
    sizes: WAIST_SIZES,
    bestSeller: true,
    description: "Tailored chinos in stretch twill that move with you from office to weekend.",
  },
  {
    slug: "relaxed-cargo-trousers",
    name: "Relaxed Cargo Trousers",
    category: "trousers",
    price: 1690,
    colors: [
      { name: "Stone", hex: "#a39e8f" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    sizes: WAIST_SIZES,
    isNew: true,
    description: "Utility cargo trousers with a relaxed fit and six functional pockets.",
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function garmentFor(product: Product): Garment {
  return getCategory(product.category)?.garment ?? "tshirt"
}

export function formatPrice(amount: number) {
  return `৳ ${amount.toLocaleString("en-IN")}`
}

export function discountPercent(product: Product) {
  if (!product.compareAt) return 0
  return Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
}
