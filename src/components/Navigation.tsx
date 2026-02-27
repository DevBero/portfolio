"use client";

import { Highlighter } from "@/components/ui/highlighter";

type NavItem = {
  label: string;
  href: string;
  aria: string;
  color: string;
  action?: "underline" | "highlight";
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "About me",
    href: "#about",
    aria: "About me",
    color: "#9241d4",
    action: "underline",
  },
  {
    label: "What I do",
    href: "#what-i-do",
    aria: "What I do",
    color: "#9241d4",
    action: "underline",
  },
  {
    label: "Projects",
    href: "#projects",
    aria: "Projects",
    color: "#9241d4",
    action: "underline",
  },
  {
    label: "Services",
    href: "#services",
    aria: "Services",
    color: "#9241d4",
    action: "underline",
  },
];

export function Navigation() {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-label={item.aria}
          className="group relative inline-flex w-fit text-sm font-medium tracking-wide"
        >
          {/* Base text */}
          <span className="transition-opacity duration-200 group-hover:opacity-0">
            {item.label}
          </span>

          {/* Highlight text on hover */}
          <span className="pointer-events-none absolute left-0 top-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <Highlighter action={item.action ?? "underline"} color={item.color}>
              {item.label}
            </Highlighter>
          </span>
        </a>
      ))}
    </nav>
  );
}