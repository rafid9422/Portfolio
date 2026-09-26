import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium select-none transition-[color,background-color,border-color,transform] duration-150 ease-in-out active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Tan fill with ink text (7:1 contrast); inverts to ink on hover
        primary: "bg-brand text-ink hover:bg-ink hover:text-paper",
        dark: "bg-ink text-paper hover:bg-brand hover:text-ink",
        outline: "border border-ink text-ink bg-transparent hover:bg-ink hover:text-paper",
        light: "border border-paper/60 text-paper bg-transparent hover:bg-paper hover:text-ink",
        ghost: "text-ink hover:bg-surface",
      },
      size: {
        default: "h-12 px-8 text-body",
        sm: "h-10 px-6 text-meta",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
  }

function Button({ className, variant, size, asChild = false, loading = false, children, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      aria-busy={loading || undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      disabled={asChild ? undefined : props.disabled || loading}
    >
      {asChild ? (
        children
      ) : (
        <>
          {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
          {children}
        </>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
