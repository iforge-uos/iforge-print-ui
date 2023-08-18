import { clsx, type ClassValue } from "clsx"
import md5 from "md5"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getGravatarUrl(email: string, size = 64) {
  const emailHash = md5(email.trim().toLowerCase())
  return `https://www.gravatar.com/avatar/${emailHash}?s=${size}&d=identicon`
}

export function filterByKeys(object: any, keys: string[]) {
  return Object.keys(object)
    .filter(key => keys.includes(key))
    .reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {} as any);
}

