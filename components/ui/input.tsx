import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-lg border border-surface bg-paper px-6 text-body text-ink placeholder:text-muted transition-[border-color,box-shadow] duration-150 ease-in-out outline-none",
        "hover:border-muted focus-visible:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
        "aria-invalid:border-ink aria-invalid:ring-2 aria-invalid:ring-accent disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
