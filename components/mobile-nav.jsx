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
    icon: "📘",
    dropdown: true,
    items: [
      {
        label: "Departments / Subjects",
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
        label: "Faculty Members",
        href: "/academics/faculty",
      },
    ],
  },
  {
    label: "Admission",
    href: "/admission",
    icon: "🎓",
    dropdown: true,
    items: [
      {
        label: "Admission Info",
        href: "/admission/info",
      },
      {
        label: "Admission Form",
        href: "/admission/form",
      },
      {
        label: "Requirements",
        href: "/admission/requirements",
      },
      {
        label: "Fees & Scholarships",
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
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="md:hidden"
        aria-label="Open mobile menu"
      >
        <Menu className="h-5 w-5" />
      </Button>
      {open && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg z-50 overflow-y-auto">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold text-primary">
                MM College
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Close mobile menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex flex-col">
              {NAV_ITEMS.map((item, index) => (
                <div key={index} className="py-1">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="flex w-full items-center justify-between text-base font-medium py-2 transition-colors hover:text-primary"
                      >
                        <span className="flex items-center gap-2">
                          <span>{item.icon}</span> {item.label}
                        </span>
                        {expandedItems[index] ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      {expandedItems[index] && (
                        <div className="pl-8 py-1 space-y-1 border-l border-gray-200 dark:border-gray-700 ml-1 my-1">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-sm transition-colors hover:text-primary"
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
                      className="block text-base font-medium py-2 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t">
                <Button className="w-full" asChild>
                  <Link href="/admission/form">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
