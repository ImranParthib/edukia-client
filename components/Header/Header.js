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
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        <div className="flex items-center gap-4">
          <MainNav />
          <ModeToggle />
          <Button
            variant="default"
            size="sm"
            className="hidden md:flex"
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
