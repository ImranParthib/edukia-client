"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Logo } from "./logo";

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

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [expandedItems, setExpandedItems] = React.useState({});

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleLinkClick = () => {
    setOpen(false);
    setExpandedItems({});
  };

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9 text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200"
            aria-label="Open mobile menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] sm:w-[350px] p-0 bg-background/95 backdrop-blur-md border-l border-border/50"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <SheetHeader className="p-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
              <SheetTitle className="flex items-center gap-3 text-left">
                <Logo />
              </SheetTitle>
            </SheetHeader>

            {/* Navigation */}
            <div className="flex-1 p-6 overflow-y-auto">
              <nav className="space-y-2">
                {NAV_ITEMS.map((item, index) => (
                  <div key={index} className="space-y-1">
                    {item.dropdown ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => toggleExpand(index)}
                          className="flex w-full items-center justify-between text-sm font-medium py-3 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-xl transition-all duration-200 group"
                          tabIndex={0}
                          aria-haspopup="menu"
                          aria-expanded={!!expandedItems[index]}
                          type="button"
                        >
                          <span className="flex items-center gap-3">
                            {item.label}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              expandedItems[index] ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            expandedItems[index]
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="pl-4 py-2 space-y-1 border-l-2 border-primary/20 ml-4">
                            {item.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                onClick={handleLinkClick}
                                className="block py-2.5 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-accent/30 rounded-lg transition-all duration-200 hover:translate-x-1"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="flex items-center text-sm font-medium py-3 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-xl transition-all duration-200 group"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="space-y-3">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                  asChild
                >
                  <Link href="/admission/form" onClick={handleLinkClick}>
                    Apply Now
                  </Link>
                </Button>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Building Trust and Excellence in Education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
