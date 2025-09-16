"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ImageSkeleton } from "@/components/ui/loading";

export function HeroSection() {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Try multiple image sources for better reliability
  const imageSources = [
    "/images/banner-image.png",
    "/images/about-image.png",
    "/images/campus-view.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    if (currentImageIndex < imageSources.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setImageError(true);
      setImageLoading(false);
    }
  };
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 2xl:py-48 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-1">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-tight">
                Welcome to{" "}
                <span className="block sm:inline">
                  Mohammadpur Mohila College
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-full lg:max-w-[600px] xl:max-w-[700px] leading-relaxed">
                Empowering women through quality education since 1991.
                Excellence in academics, character, and leadership.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href="/admission/circulars" className="w-full sm:w-auto">
                <Button
                  variant="default"
                  className="w-full sm:w-auto inline-flex h-10 sm:h-11 md:h-12 items-center justify-center rounded-md bg-primary px-6 sm:px-8 text-sm md:text-base font-medium text-white shadow transition-colors hover:bg-primary/90"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto inline-flex h-10 sm:h-11 md:h-12 items-center justify-center rounded-md border border-input bg-background px-6 sm:px-8 text-sm md:text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center relative order-1 lg:order-2">
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] 2xl:h-[550px] w-full rounded-lg overflow-hidden">
              {imageLoading && (
                <ImageSkeleton
                  className="absolute inset-0 w-full h-full rounded-lg"
                  aspectRatio="video"
                />
              )}

              {!imageError && (
                <Image
                  src={imageSources[currentImageIndex]}
                  alt="Mohammadpur Mohila College Building"
                  fill
                  className="object-cover transition-opacity duration-500"
                  style={{ opacity: imageLoading ? 0 : 1 }}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              )}

              {imageError && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Mohammadpur Mohila College
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
