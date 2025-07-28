"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 lg:gap-8 xl:gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                About Our College
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                Established in 1991, Mohammadpur Mohila College has been a
                beacon of women&apos;s education in Bangladesh for over six
                decades.
              </p>
            </div>
            <div className="grid gap-4 sm:gap-6">
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                  To provide quality education to women, empowering them with
                  knowledge, skills, and values to become responsible citizens
                  and leaders of tomorrow.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                  To be the premier educational institution for women in
                  Bangladesh, known for academic excellence and holistic
                  development.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 py-4">
                <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-100 px-2 sm:px-4 py-3 dark:bg-gray-800">
                  <div className="text-lg sm:text-xl font-bold">1991</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
                    Established
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-100 px-2 sm:px-4 py-3 dark:bg-gray-800">
                  <div className="text-lg sm:text-xl font-bold">1600+</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
                    Students
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-100 px-2 sm:px-4 py-3 dark:bg-gray-800">
                  <div className="text-lg sm:text-xl font-bold">50+</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
                    Faculty
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-100 px-2 sm:px-4 py-3 dark:bg-gray-800">
                  <div className="text-lg sm:text-xl font-bold">10</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
                    Departments
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full order-1 lg:order-2">
            <div className="relative w-full h-full">
              <Image
                src="/images/about-image.png"
                alt="About College Image"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYa"
              />
            </div>
          </div>
        </div>
        <Separator className="my-6 sm:my-8" />
        <div className="mx-auto flex max-w-[800px] flex-col items-center space-y-4 text-center">
          <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            We are committed to fostering an environment where women can thrive
            academically, personally, and professionally.
          </p>
          <Link href="/about">
            <Button variant="outline" className="w-full sm:w-auto">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
