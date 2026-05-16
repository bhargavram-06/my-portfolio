import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind CSS classes with clsx and tailwind-merge.
 * It handles conditional classes and resolves Tailwind conflicts.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}