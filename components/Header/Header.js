"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { MainNav } from "../main-nav";
import { Logo } from "../logo";

// Import shadcn/ui Sheet for mobile navigation
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admission", href: "/admission/circulars" },
  { label: "Notice", href: "/notice" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden h-9 w-9"
        aria-label="Open mobile menu"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="p-0 w-64">
      <nav className="flex flex-col h-full bg-background">
        <div className="p-4 border-b">
          <Logo />
        </div>
        <div className="flex-1 p-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 px-2 text-base font-medium transition-colors hover:text-primary hover:bg-accent rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="p-4 border-t">
          <Button className="w-full" asChild>
            <Link href="/admission/circulars">Apply Now</Link>
          </Button>
        </div>
      </nav>
    </SheetContent>
  </Sheet>
);

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b   backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-2 md:py-2.5 flex justify-between items-center min-h-[56px] sm:min-h-[60px] md:min-h-[64px]">
        <div className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
          <Logo />
        </div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
          <MainNav />
          <ModeToggle />
          <Button
            variant="default"
            size="sm"
            className="hidden lg:flex h-8 px-3 text-xs font-medium whitespace-nowrap"
            asChild
          >
            <Link href="/admission/circulars">Apply Now</Link>
          </Button>
          {/* Use shadcn/ui Sheet for mobile nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
