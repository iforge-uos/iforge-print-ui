"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import axios from "axios"
import { useCookies } from "react-cookie"

import { siteConfig } from "@/config/site"

interface AuthState {
  isLoggedIn: boolean
  user: any
}

interface AuthContextType extends AuthState {
  login: (username: string, password: string) => Promise<string | null>
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: async () => Promise.resolve(null),
  logout: () => {},
})

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "refresh_token",
    "user",
  ])
  const [authState, setAuthState] = useState<AuthState>({
    isLoggedIn: false,
    user: null,
  })

  useEffect(() => {
    if (cookies.user) {
      setAuthState({ isLoggedIn: true, user: cookies.user })
    }
  }, [cookies])

  const login = async (
    username: string,
    password: string
  ): Promise<string | null> => {
    try {
      const response = await axios.post(
        siteConfig.api.url + siteConfig.api.login_endpoint,
        {
          uid: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )

      const { access_token, refresh_token, user } = response.data.payload.data
      setCookie("access_token", String(access_token), { path: "/" })
      setCookie("refresh_token", String(refresh_token), { path: "/" })
      setCookie("user", JSON.stringify(user), { path: "/" })

      setAuthState({ isLoggedIn: true, user })
      return null
    } catch (error: string | any | undefined) {
      return (
        error.response?.data?.message?.message ||
        "An error occurred while logging in."
      )
    }
  }

  const logout = () => {
    try {
      axios.delete(siteConfig.api.url + siteConfig.api.logout_endpoint, {
        headers: {
          Authorization: `Bearer ${cookies.refresh_token}`,
        },
        withCredentials: true,
      })
      removeCookie("access_token", { path: "/" })
      removeCookie("refresh_token", { path: "/" })
      removeCookie("user", { path: "/" })
      setAuthState({ isLoggedIn: false, user: null })
    } catch (error: string | any | undefined) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
