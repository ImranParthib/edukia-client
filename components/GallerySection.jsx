"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function GallerySection() {
  // Sample gallery images (would be fetched from a database or CMS in a real implementation)
  const galleryImages = [
    {
      id: 1,
      title: "College Building",
      // These are placeholder gradients - replace with actual images
      placeholder:
        "bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-900",
    },
    {
      id: 2,
      title: "Science Lab",
      placeholder:
        "bg-gradient-to-r from-green-200 to-green-300 dark:from-green-800 dark:to-green-900",
    },
    {
      id: 3,
      title: "Library",
      placeholder:
        "bg-gradient-to-r from-amber-200 to-amber-300 dark:from-amber-800 dark:to-amber-900",
    },
    {
      id: 4,
      title: "Computer Lab",
      placeholder:
        "bg-gradient-to-r from-purple-200 to-purple-300 dark:from-purple-800 dark:to-purple-900",
    },
    {
      id: 5,
      title: "Annual Function",
      placeholder:
        "bg-gradient-to-r from-red-200 to-red-300 dark:from-red-800 dark:to-red-900",
    },
    {
      id: 6,
      title: "Sports Day",
      placeholder:
        "bg-gradient-to-r from-teal-200 to-teal-300 dark:from-teal-800 dark:to-teal-900",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Photo Gallery
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A glimpse of our campus and activities
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              {/* Replace with actual image when available */}
              <div
                className={`w-full h-full ${image.placeholder} flex items-center justify-center`}
              >
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/gallery">
            <Button variant="outline">
              View Full Gallery
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
