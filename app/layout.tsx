import type React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"

import "./globals.css"

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "900"],
  variable: "--font-jost",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rafid Rahman — UI/UX designer",
  description:
    "Rafid Rahman is a UI/UX designer from Dhaka, Bangladesh, also working in video editing and AI automation.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={jost.variable}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
