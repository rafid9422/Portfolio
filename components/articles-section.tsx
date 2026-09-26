import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ArticlesSection() {
  const articles = [
    {
      category: "Resources",
      title: "What is the right design tool to choose in 2023?",
      excerpt: "A practical comparison of today's design tools and how to pick the one that fits your workflow.",
      image: "/images/article-design-tools.png",
      date: "Oct 28, 2022",
      dateTime: "2022-10-28",
    },
    {
      category: "Articles",
      title: "Font sizes in UI design: the complete guide to follow",
      excerpt: "How to build a type scale that stays readable from the smallest caption to the largest heading.",
      image: "/images/article-font-sizes.png",
      date: "Oct 21, 2022",
      dateTime: "2022-10-21",
    },
    {
      category: "News",
      title: "6 practical exercises to become a pro UI/UX designer",
      excerpt: "Short, repeatable drills that sharpen your eye for layout, hierarchy and interaction.",
      image: "/images/article-exercises.png",
      date: "Oct 14, 2022",
      dateTime: "2022-10-14",
    },
  ]

  return (
    <section id="articles" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end md:mb-16">
          <div>
            <p className="eyebrow mb-4">Journal</p>
            <h2 className="text-[30px] leading-[38px] font-light md:text-section">
              Articles <span className="font-medium">&amp; news</span>
            </h2>
          </div>
          <Button asChild variant="outline" size="sm">
            <a href="#">
              Browse all articles
              <ArrowRight />
            </a>
          </Button>
        </div>

        <ul className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <li key={article.title}>
              <article className="group relative flex h-full flex-col">
                <div className="relative aspect-[274/242] overflow-hidden rounded-md bg-paper">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 ease-base group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-center gap-3 text-meta text-muted">
                  <span className="rounded-lg bg-paper px-3 py-1 text-ink">{article.category}</span>
                  <time dateTime={article.dateTime}>{article.date}</time>
                </div>
                <h3 className="mt-4 text-title font-medium">
                  {/* Stretched link: whole card is clickable without nesting interactive elements */}
                  <a href="#" className="text-link after:absolute after:inset-0 after:content-['']">
                    {article.title}
                  </a>
                </h3>
                <p className="mt-3 text-body text-muted">{article.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
