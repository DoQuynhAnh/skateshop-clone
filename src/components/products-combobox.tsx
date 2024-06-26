"use client"

import React, { useEffect, useState } from "react"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

import { cn, isMacOs } from "@/lib/utils"

import Kbd from "./kbd"
import Button from "./ui/button"
import { CommandDialog, CommandEmpty, CommandInput } from "./ui/command"

const ProductsCombobox = () => {
  const [open, setOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative size-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon className="size-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search products...</span>
        <span className="sr-only">Search products</span>
        <Kbd
          title={isMacOs() ? "Command" : "Control"}
          className="pointer-events-none absolute right-1.5 top-1.5 hidden xl:block"
        >
          {isMacOs() ? (isClient ? "⌘" : "Ctrl") : "Ctrl"} K
        </Kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={(e) => {
          setOpen(e)
        }}
      >
        <CommandInput placeholder="Search products..." />
        <CommandEmpty className={cn("py-6 text-center text-sm")}>
          No products found.
        </CommandEmpty>
      </CommandDialog>
    </>
  )
}

export default ProductsCombobox
