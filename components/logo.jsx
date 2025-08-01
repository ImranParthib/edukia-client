"use client";

import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-1 sm:space-x-2 min-w-0">
      <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
        {/* Logo Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/mmc-logo.png"
            alt="Mohammadpur Mohila College Logo"
            width={160}
            height={160}
          />
        </div>
      </div>
    </Link>
  );
}
