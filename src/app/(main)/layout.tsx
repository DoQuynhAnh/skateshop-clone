import React from "react"

import SiteHeader from "@/components/layouts/site-header"

interface IPropsMainLayout extends React.PropsWithChildren {}

const MainLayout = async ({ children }: IPropsMainLayout) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={null} />
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default MainLayout
