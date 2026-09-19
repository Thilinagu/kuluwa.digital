import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Generates a short, human-shareable reference like "KLW-7F3A-92104". */
export function generateReference(): string {
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  const time = Date.now().toString().slice(-5);
  return `KLW-${rand}-${time}`;
}
