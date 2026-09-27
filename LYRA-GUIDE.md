# LYRA: Store Guide

LYRA is an online clothing store built with Next.js. It lives in this repo at `/store`
(for example `https://your-site.vercel.app/store`).

## 1. Where everything is

| What you want to change | File |
| --- | --- |
| Store name, products, prices, colours, sizes, categories | `components/store/data.ts` |
| Top banner messages, menu links | `components/store/store-header.tsx` |
| Hero slides (big banner on the homepage) | `components/store/hero-slider.tsx` |
| Homepage sections (categories, New Arrivals, Best Sellers, promo banners, newsletter) | `app/store/page.tsx` |
| Footer (phone, email, social links, payment badges) | `components/store/store-footer.tsx` |
| Product page layout | `components/store/product-details.tsx` |
| Delivery charges, checkout form | `app/store/checkout/page.tsx` |
| Free-delivery threshold (৳ 2,500) | `FREE_SHIPPING_THRESHOLD` in `components/store/cart-drawer.tsx` |
| Page title shown in Google / browser tab | `app/store/layout.tsx` |

Main colour: `#0f2742` (dark navy). Search and replace it across `components/store` and `app/store` to re-colour the site.

## 2. Common edits

**Add a product**: copy one `{ ... }` block in the `products` list in `data.ts` and change it:

```ts
{
  slug: "linen-summer-shirt",          // becomes the URL: /store/products/linen-summer-shirt
  name: "Linen Summer Shirt",
  category: "shirts",                   // must match a category slug
  price: 1690,
  compareAt: 1990,                      // optional: old price, shows a sale badge
  colors: [{ name: "White", hex: "#f4f4f4" }],
  sizes: ["S", "M", "L", "XL"],
  isNew: true,                          // shows in New Arrivals
  bestSeller: false,                    // shows in Best Sellers
  description: "Breathable pure linen shirt.",
  image: "/products/linen-shirt.jpg",   // optional: real photo
},
```

**Use real photos**: put images in `public/products/` (portrait, about 800×1000 px, `.jpg` or `.webp`),
then set `image: "/products/your-file.jpg"` on the product. Without an image, a drawing of the garment is shown.

**Rename the store**: change `STORE_NAME` in `data.ts`.

## 3. Editing at any time

**Option A: in the browser (no installs).** Open the repo on github.com, open a file, click the pencil icon,
edit, then click **Commit changes**. If the site is on Vercel, it re-publishes itself about a minute later.

**Option B: on your computer.**
1. Install [Node.js](https://nodejs.org) (LTS) and run `npm install -g pnpm`.
2. `git clone https://github.com/rafid9422/Portfolio.git && cd Portfolio && pnpm install`
3. `pnpm dev`, then open http://localhost:3000/store. Changes appear as you save.
4. When happy: `git add . && git commit -m "Update products" && git push`

**Option C: ask Claude Code** to make the change and push it.

## 4. Publishing (free, with Vercel)

1. Go to https://vercel.com and sign up with your GitHub account.
2. Click **Add New → Project**, pick the `Portfolio` repo, then click **Deploy** (Vercel detects Next.js automatically).
3. You get a free URL like `https://portfolio-xyz.vercel.app`. The store is at `/store`.
4. **Your own domain** (for example `lyra.com.bd`, bought from a registrar such as Namecheap, or a `.bd` registrar):
   in Vercel go to **Project → Settings → Domains**, add it, and copy the DNS records it shows into your registrar.
5. Every push to the production branch re-publishes the site automatically.

Netlify and Cloudflare Pages work the same way if you prefer them.

## 5. Before taking real orders

The checkout currently shows a thank-you screen but **does not save orders or take payment**. To go live you need:
- **Order storage and notification**: send the form to a database (Supabase, Firebase) or to email/Google Sheets
  (Formspree, Web3Forms), so you see each order.
- **Online payments**: a Bangladeshi gateway such as SSLCommerz, bKash PGW, or aamarPay (each needs a merchant
  account, and often a trade licence).
- Real contact details, a real delivery policy, and real product photos.

Alternatively, for a store owner who does not code, Shopify handles orders, payments and inventory out of the box.

## 6. Selling the website to someone

What you can sell:
- **The website as a finished store** (a "done-for-you" site for a clothing business), or
- **The template** (the code) for others to reuse.

Before selling:
1. **Separate it from your portfolio**: move LYRA into its own GitHub repo so the buyer only gets the store.
2. **Remove personal and placeholder data**, and make sure every image is yours or properly licensed.
3. **Check licences**: this project started from a free community v0 template. The store code is new, but read
   the original template's terms, and keep the open-source licence notices of the libraries (Next.js, Tailwind and
   others are MIT, which allows commercial use).
4. Deploy a live demo and take screenshots.

Where to sell:
- **Direct to local businesses**: clothing brands and Facebook/Instagram sellers who need a website. Offer setup plus
  their products, logo and domain for a one-time fee, and optionally a monthly fee for hosting and updates.
- **Freelance sites**: Fiverr, Upwork. List it as "Next.js clothing e-commerce website".
- **Template marketplaces**: ThemeForest, Gumroad, Lemon Squeezy, or the Vercel/v0 template gallery.
- **Website marketplaces**: Flippa. This is mainly worth it once the site has traffic or sales.

Handing it over:
1. Get paid first (or use escrow, such as Escrow.com or the platform's own payment protection).
2. **Transfer the GitHub repo**: Repo → Settings → *Transfer ownership* (or add the buyer and let them fork).
3. **Transfer the Vercel project**: Project → Settings → *Transfer*, or the buyer redeploys from their repo.
4. **Transfer the domain** at the registrar (unlock it and give them the transfer/EPP code).
5. Give them a copy of this guide.
6. Write a short agreement: price, what's included, that ownership/copyright transfers, and any support period.
