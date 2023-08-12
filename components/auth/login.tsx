"use client"

import { ChangeEvent, FormEvent, useState } from "react"

import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { login } = useAuth()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const error = await login(username, password)
    if (error) {
      setErrorMessage(error)
    }
  }

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login </DialogTitle>
          <DialogDescription>
            Developer Only Login (University Account)
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="uid" className="text-right">
                Username
              </Label>
              <Input
                id="uid"
                type="text"
                placeholder="fe6if"
                className="col-span-3"
                onChange={handleUsernameChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                className="col-span-3"
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Login</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
