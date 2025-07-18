"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

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

export function MainNav({ className, ...props }) {
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  const handleDropdownToggle = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="hidden md:flex gap-6 items-center" {...props}>
      {NAV_ITEMS.map((item, index) => (
        <div key={index} className="relative">
          {item.dropdown ? (
            <div className="flex flex-col">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDropdownToggle(index);
                }}
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary py-2"
              >
                <span>{item.icon}</span> {item.label} <ChevronDown className="h-4 w-4" />
              </button>

              {activeDropdown === index && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-background border rounded-md shadow-lg z-50">
                  <div className="py-1">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary py-2"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
