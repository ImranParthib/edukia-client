"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { MainNav } from "../main-nav";
import { MobileNav } from "../mobile-nav";
import { Logo } from "../logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
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
            <Link href="/admission">Apply Now</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
