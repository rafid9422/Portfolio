"use client"

import { useId, useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Status = "idle" | "loading" | "success" | "error"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")
  const id = useId()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus("error")
      setMessage("Please enter a valid email address.")
      return
    }

    setStatus("loading")
    setMessage("")
    // TODO: connect to a newsletter provider (e.g. Mailchimp, Buttondown, ConvertKit).
    await new Promise((resolve) => setTimeout(resolve, 600))
    setStatus("success")
    setMessage("Thanks for subscribing — keep an eye on your inbox.")
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <label htmlFor={`${id}-email`} className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          id={`${id}-email`}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === "error") setStatus("idle")
          }}
          aria-invalid={status === "error" || undefined}
          aria-describedby={`${id}-message`}
          disabled={status === "loading"}
          className="sm:flex-1"
        />
        <Button type="submit" loading={status === "loading"} className="shrink-0">
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </Button>
      </div>
      <p id={`${id}-message`} role="status" aria-live="polite" className="mt-3 min-h-[18px] text-meta">
        {status === "error" && <span className="text-accent">{message}</span>}
        {status === "success" && <span className="text-brand">{message}</span>}
      </p>
    </form>
  )
}
