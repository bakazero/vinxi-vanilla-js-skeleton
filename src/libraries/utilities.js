import { clsx } from "clsx";
import { Notyf } from "notyf";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const simpleHash = (str) => {
  let hash = 0;
  if (str.length === 0) return hash.toString();
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
};

export const notyf = new Notyf({
  duration: 100000,
  position: {
    x: "right",
    y: "bottom",
  },
  ripple: false,
});
