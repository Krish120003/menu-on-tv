import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function tl(s: string, x: number = 0, y: number = 0) {
  return {
    className: cn(s),
    style: {
      transform: `translate(${x}px, ${y}px)`,
    },
  };
}
