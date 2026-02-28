"use client";

import { Highlighter } from "@/components/ui/highlighter";
import { NAV_ITEMS } from "@/const/nav-items";

export function Navigation() {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-label={item.aria}
          className="group relative inline-flex w-fit font-medium tracking-wide text-white/80 hover:text-white"
        >
          <span className="transition-opacity duration-200 group-hover:opacity-0">
            {item.label}
          </span>
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
