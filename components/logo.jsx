"use client";

import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex items-center space-x-2">
        {/* Logo Image */}
        <Image
          src="/images/mmc-logo.png"
          alt="Mohammadpur Mohila College Logo"
          width={160}
          height={120}
        />
      </div>
    </Link>
  );
}
