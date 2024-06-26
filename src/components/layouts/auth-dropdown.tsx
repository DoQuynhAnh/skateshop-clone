import React from "react"
import Link from "next/link"
import { type User } from "@clerk/nextjs/server"

import { cn } from "@/lib/utils"

import Button, { type IPropsButton } from "../ui/button"
import { type DropdownMenuTrigger } from "../ui/dropdown-menu"

interface AuthDropdownProps
  extends React.ComponentPropsWithRef<typeof DropdownMenuTrigger>,
    IPropsButton {
  user: User | null
}

const AuthDropdown = ({ user, className, ...props }: AuthDropdownProps) => {
  if (!user) {
    return (
      <Button size="sm" className={cn(className)} {...props} asChild>
        <Link href="/signin">
          Sign In
          <span className="sr-only">Sign In</span>
        </Link>
      </Button>
    )
  }

  return <div>AuthDropdown</div>
}

export default AuthDropdown
