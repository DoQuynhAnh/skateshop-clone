import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const kbdVariants = cva(
  "select-none rounded border px-1.5 py-px font-mono text-[0.7rem] font-normal shadow-sm disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground",
        outline: "bg-background text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface KbdProps
  extends React.ComponentPropsWithoutRef<"kbd">,
    VariantProps<typeof kbdVariants> {
  abbrTitle?: string
}

const Kbd = React.forwardRef<HTMLUnknownElement, KbdProps>(
  ({ className, abbrTitle, children, variant, ...props }, ref) => {
    return (
      <kbd
        className={cn(kbdVariants({ className, variant }))}
        ref={ref}
        {...props}
      >
        {abbrTitle ? (
          <abbr title={abbrTitle} className="no-underline">
            {children}
          </abbr>
        ) : (
          children
        )}
      </kbd>
    )
  }
)

Kbd.displayName = "Kbd"

export default Kbd
