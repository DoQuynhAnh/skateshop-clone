import Link from "next/link"

import { cn } from "@/lib/utils"
import Button, { buttonVariants } from "@/components/ui/button"

import { Icons } from "../icons"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

const CartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button className="relative" aria-label="Open cart">
          <Badge
            variant="secondary"
            className="absolute -right-2 -top-2 size-6 justify-center rounded-full p-2.5"
          >
            2
          </Badge>
          <Icons.cart className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart 0</SheetTitle>
          <Separator />
        </SheetHeader>
        <div className="flex h-full flex-col items-center justify-center space-y-1">
          <Icons.cart
            className="mb-4 size-16 text-muted-foreground"
            aria-hidden="true"
          />
          <div className="text-xl font-medium text-muted-foreground">
            Your cart is empty
          </div>
          <SheetTrigger asChild>
            <Link
              aria-label="Add items to your cart to checkout"
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })
              )}
            >
              Add items to your cart to checkout
            </Link>
          </SheetTrigger>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet
