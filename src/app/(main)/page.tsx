import React from "react"

const IndexPage = async () => {
  return (
    <React.Suspense fallback={<>loading....</>}>
      <div className="text-white">IndexPage</div>
    </React.Suspense>
  )
}

export default IndexPage
