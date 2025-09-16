"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GalleryGridSkeleton } from "@/components/ui/loading";
import { useImageLoader } from "@/hooks/use-loading";

export function GallerySection() {
  const pathname = usePathname();

  const galleryImages = [
    {
      id: 1,
      title: "College Building",
      url: "/gallery/college-building.png",
    },
    {
      id: 2,
      title: "ICT Lab",
      url: "/gallery/ict-lab.png",
    },
    {
      id: 3,
      title: "Tree Plantation for July 24",
      url: "/gallery/tree-plant.png",
    },
    {
      id: 4,
      title: "Back to July 24",
      url: "/gallery/back-to-july.png",
    },
    {
      id: 5,
      title: "Graffiti for July 24",
      url: "/gallery/graffiti.png",
    },

    {
      id: 5,
      title: "Annual Function",
      url: "/gallery/annual-function.png",
    },
    {
      id: 6,
      title: "Teacher's Day Celebration",
      url: "/gallery/teachers-day.png",
    },

    {
      id: 7,
      title: "Cultural Event",
      url: "/gallery/cultural-event.png",
    },
  ];

  const { isLoading, handleImageLoad, handleImageError } = useImageLoader(
    galleryImages.length,
    0.6
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
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

        {isLoading && (
          <GalleryGridSkeleton
            items={galleryImages.length}
            className="mx-auto max-w-5xl mt-12"
          />
        )}

        <div
          className={`mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12 transition-opacity duration-500 ${
            isLoading ? "opacity-0 absolute" : "opacity-100"
          }`}
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg group border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                priority={image.id === 1}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 dark:bg-black/60 text-white text-xs md:text-sm px-2 py-1 text-center">
                {image.title}
              </div>
            </div>
          ))}
        </div>
        {pathname !== "/gallery" && (
          <div className="text-center mt-8">
            <Link href="/gallery">
              <Button
                variant="outline"
                className="w-full sm:w-auto inline-flex h-10 sm:h-11 md:h-12 items-center justify-center rounded-md bg-primary px-6 sm:px-8 text-sm md:text-base font-medium text-white shadow transition-colors hover:bg-primary/90 dark:hover:bg-primary dark:text-gray-100 dark:bg-primary/80"
              >
                View Full Gallery
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
