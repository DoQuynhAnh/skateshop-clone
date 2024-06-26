import React from "react"

import SiteHeader from "@/components/layouts/site-header"
import { getCachedUser } from "@/lib/queries/user"

interface IPropsMainLayout extends React.PropsWithChildren {}

const MainLayout = async ({ children }: IPropsMainLayout) => {
  const user = await getCachedUser()

  console.log(user, 'this is user')

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default MainLayout
