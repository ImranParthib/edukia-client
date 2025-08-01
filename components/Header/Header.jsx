"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { MainNav } from "../main-nav";
import { Logo } from "../logo";
import { ChevronDown, ChevronRight } from "lucide-react";

// Import shadcn/ui Sheet for mobile navigation
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Academics",
    dropdown: true,
    items: [
      {
        label: "Departments",
        href: "/academics/departments",
      },
      {
        label: "Academic Calendar",
        href: "/academics/calendar",
      },
      {
        label: "Class Routine",
        href: "/academics/routine",
      },
      {
        label: "Results",
        href: "/academics/results",
      },
    ],
  },
  {
    label: "Admission",
    dropdown: true,
    items: [
      {
        label: "Circulars",
        href: "/admission/circulars",
      },
      {
        label: "Requirements",
        href: "/admission/requirements",
      },
      {
        label: "Admission Form",
        href: "/admission/form",
      },
      {
        label: "Fees",
        href: "/admission/fees",
      },
    ],
  },
  {
    label: "Notice",
    href: "/notice",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const MobileNav = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
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
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <div key={index} className="py-1">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="flex w-full items-center justify-between text-base font-medium py-3 px-2 transition-colors hover:text-white hover:bg-accent rounded-md cursor-pointer select-none"
                        tabIndex={0}
                        aria-haspopup="menu"
                        aria-expanded={!!expandedItems[index]}
                        type="button"
                      >
                        <span className="flex items-center gap-2">
                          {item.label}
                        </span>
                        {expandedItems[index] ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      <div
                        className={`pl-4 py-1 space-y-1 border-l border-gray-200 dark:border-gray-700 ml-2 my-1 ${
                          expandedItems[index] ? "block" : "hidden"
                        }`}
                      >
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block py-2 px-2 text-sm transition-colors hover:text-primary hover:bg-accent rounded-md"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-base  font-medium py-3 px-2 transition-colors hover:text-white hover:bg-accent rounded-md"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
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
};

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
