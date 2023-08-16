import React from "react"
import { useCookies } from "react-cookie"

import { getGravatarUrl } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"

const Sidebar = () => {
  const [cookies] = useCookies(["user"]) // Read the "user" cookie
  const user = cookies.user

  const gravatarUrl = getGravatarUrl(user.email) // Generate Gravatar URL

  return (
    <div className="flex min-h-full flex-col justify-between border-e bg-accent ">
      <div className="px-4 py-6">
        <span className="grid text-xs text-gray-600">IFORGE</span>

        <ul className="mt-6 space-y-1">
          <li className="flex cursor-pointer gap-8 rounded-lg bg-gray-100 px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:bg-neutral-600 dark:text-white">
            <Icons.grip className="h-5 w-5" />
            <a href="" className="font-proto-mono text-sm font-medium">
              Overview
            </a>
          </li>

          <li className="flex cursor-pointer gap-8 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:bg-neutral-600">
            <Icons.logo className="h-5 w-5" />
            <a
              href="profile/past-prints"
              className="font-proto-mono text-sm font-medium"
            >
              Past prints
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:bg-neutral-600">
                <Icons.user />
                <span className="text-sm font-medium"> Account </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:bg-neutral-600"
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:bg-neutral-600"
                  >
                    Data
                  </a>
                </li>

                <li>
                  <form action="/logout">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:bg-neutral-600"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 dark:border-neutral-700">
        <a
          href="#"
          className="bg-accente flex items-center gap-2 p-4 hover:bg-gray-50 dark:hover:bg-neutral-700"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage />
            <AvatarImage src={gravatarUrl} alt="user" />
          </Avatar>

          <div>
            <p className="text-xs">
              <strong className="block font-medium">{user.name}</strong>

              <span> {user.email} </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
