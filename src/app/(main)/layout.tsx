import React from "react"

interface IPropsMainLayout extends React.PropsWithChildren {}

const MainLayout = async ({ children }: IPropsMainLayout) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default MainLayout
