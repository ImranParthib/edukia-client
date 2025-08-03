"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

export function MainNav({ className, ...props }) {
  return (
    <nav
      className="hidden lg:flex gap-2 xl:gap-2 2xl:gap-4 items-center"
      {...props}
    >
      {NAV_ITEMS.map((item, index) => (
        <div key={index} className="relative">
          {item.dropdown ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 text-sm xl:text-base font-medium transition-all duration-200 hover:text-primary hover:bg-accent/50 py-1.5 px-2 xl:px-3 h-auto whitespace-nowrap rounded-lg"
                  aria-haspopup="menu"
                  tabIndex={0}
                  type="button"
                >
                  {item.label}{" "}
                  <ChevronDown className="h-3 w-3 xl:h-3.5 xl:w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-48 xl:w-52 bg-background/95 backdrop-blur-md border border-border/50 shadow-xl"
              >
                {item.items.map((subItem, subIndex) => (
                  <DropdownMenuItem key={subIndex} asChild>
                    <Link
                      href={subItem.href}
                      className="w-full cursor-pointer text-sm xl:text-base font-medium transition-all duration-200 hover:text-primary hover:bg-accent/50 py-2 px-3 xl:px-4 whitespace-nowrap rounded-md"
                    >
                      {subItem.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href={item.href}
              className="text-sm xl:text-base font-medium transition-all duration-200 hover:text-primary hover:bg-accent/50 py-1.5 px-2 xl:px-3 whitespace-nowrap rounded-lg"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
