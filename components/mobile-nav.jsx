"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

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
    href: "/academics",
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
    href: "/admission",
    dropdown: true,
    items: [
      {
        label: "circulars",
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

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="lg:hidden h-9 w-9"
        aria-label="Open mobile menu"
      >
        <Menu className="h-5 w-5" />
      </Button>
      {open && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-background border-l shadow-lg z-50 overflow-y-auto">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 sm:p-6 border-b">
                <Link
                  href="/"
                  className="text-lg sm:text-xl font-bold text-primary truncate"
                  onClick={() => setOpen(false)}
                >
                  MMC
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  aria-label="Close mobile menu"
                  className="h-9 w-9 flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex-1 p-4 sm:p-6">
                <div className="flex flex-col space-y-1">
                  {NAV_ITEMS.map((item, index) => (
                    <div key={index} className="py-1">
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleExpand(index)}
                            className="flex w-full items-center justify-between text-base font-medium py-3 px-2 transition-colors hover:text-primary hover:bg-accent rounded-md"
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
                          {expandedItems[index] && (
                            <div className="pl-4 py-1 space-y-1 border-l border-gray-200 dark:border-gray-700 ml-2 my-1">
                              {item.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  onClick={() => setOpen(false)}
                                  className="block py-2 px-2 text-sm transition-colors hover:text-primary hover:bg-accent rounded-md"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block text-base font-medium py-3 px-2 transition-colors hover:text-primary hover:bg-accent rounded-md"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-6 border-t">
                <Button className="w-full" asChild>
                  <Link href="/admission/form" onClick={() => setOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
