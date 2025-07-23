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
      className="hidden lg:flex gap-3 xl:gap-4 2xl:gap-6 items-center"
      {...props}
    >
      {NAV_ITEMS.map((item, index) => (
        <div key={index} className="relative">
          {item.dropdown ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 text-xs xl:text-sm font-medium transition-colors hover:text-primary py-1.5 px-2 xl:px-3 h-auto whitespace-nowrap"
                >
                  {item.label}{" "}
                  <ChevronDown className="h-3 w-3 xl:h-3.5 xl:w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44 xl:w-48">
                {item.items.map((subItem, subIndex) => (
                  <DropdownMenuItem key={subIndex} asChild>
                    <Link
                      href={subItem.href}
                      className="w-full cursor-pointer text-sm"
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
              className="text-xs xl:text-sm font-medium transition-colors hover:text-primary py-1.5 px-2 xl:px-3 whitespace-nowrap"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
