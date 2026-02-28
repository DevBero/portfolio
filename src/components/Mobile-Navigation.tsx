"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/const/nav-items";
import { ShimmerButton } from "./ui/shimmer-button";

export function MobileNavigation() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 text-white hover:bg-white/10 rounded-md transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-black border-white/10 text-white w-[300px]"
        >
          <SheetHeader className="text-left mb-2">
            <SheetTitle className="text-white text-2xl">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex justify-between flex-col w-full h-full">
            <nav className="flex flex-col gap-6 p-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-semibold hover:text-primary transition-colors border-b border-white/5 pb-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="p-4 w-full">
              <ShimmerButton className="w-full">Download CV</ShimmerButton>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
