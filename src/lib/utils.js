import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function randomNumber(max = 1000) {
  return Math.floor(Math.random() * max) + 1;
}