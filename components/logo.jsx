import React from "react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-purple-700 bg-clip-text text-transparent">
        Mohammadpur Mohila College
      </span>
    </Link>
  );
}
