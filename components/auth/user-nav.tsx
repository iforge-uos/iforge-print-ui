import Link from "next/link"
import { LogOut, User } from "lucide-react"
import { useCookies } from "react-cookie"

import { useAuth } from "@/lib/auth-context"
import { getGravatarUrl } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserNav() {
  const [cookies] = useCookies(["user"]) // Read the "user" cookie
  const user = cookies.user

  const { logout } = useAuth()
  const handleLogout = () => {
    logout()
  }

  const gravatarUrl = getGravatarUrl(user.email) // Generate Gravatar URL
  const userInitials = user.name
    .split(" ")
    .map((namePart: string) => namePart.charAt(0).toUpperCase())
    .join("")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={gravatarUrl} alt={userInitials} />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.uid}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <Link href="/profile">
          <DropdownMenuItem style={{ cursor: "pointer"}}>
            <User className="mr-2 h-4 w-4" />
              {" "}
              <span>Profile</span>{" "}

            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div>
        <DropdownMenuItem onClick={handleLogout} style={{ cursor: "pointer" }}>
          <LogOut className="mr-2 h-4 w-4" />
          <span >Logout</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
        </div>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
