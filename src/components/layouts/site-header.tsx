import React from "react"
import type { User } from "@clerk/nextjs/server"

import { siteConfig } from "@/config/site"

import CartSheet from "../checkout/cart-sheet"
import ProductsCombobox from "../products-combobox"
import MainNav from "./main-nav"
import AuthDropdown from "./auth-dropdown"

interface IPropsSiteHeader {
  user: User | null
}

const SiteHeader = ({ user }: IPropsSiteHeader) => {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ProductsCombobox />
          <CartSheet />
          <AuthDropdown user={user} />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
