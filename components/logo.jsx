"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex items-center">
        <span className="hidden sm:block text-lg md:text-xl font-bold text-primary">
          Mohammadpur Mohila College
        </span>
        <span className="sm:hidden text-base font-bold text-primary">MMC</span>
      </div>
    </Link>
  );
}
