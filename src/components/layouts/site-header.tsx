import React from "react"
import type { User } from "@clerk/nextjs/server"

import MainNav from "./main-nav"
import { siteConfig } from "@/config/site"

interface IPropsSiteHeader {
  user: User | null
}

const SiteHeader = ({ user }: IPropsSiteHeader) => {
  console.log(user)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  )
}

export default SiteHeader
