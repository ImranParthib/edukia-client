import React from "react";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Our College
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Nurturing women's education for over six decades
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Our Mission
              </h3>
              <p className="text-gray-500 md:text-lg/relaxed dark:text-gray-400">
                To provide quality education to women, empowering them with
                knowledge, skills, and values to become responsible citizens and
                leaders of tomorrow.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Our Vision
              </h3>
              <p className="text-gray-500 md:text-lg/relaxed dark:text-gray-400">
                To be the premier educational institution for women in
                Bangladesh, known for academic excellence and holistic
                development.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 py-4">
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-100 px-4 py-3 dark:bg-gray-800">
                <div className="text-xl font-bold">1960</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Established
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-100 px-4 py-3 dark:bg-gray-800">
                <div className="text-xl font-bold">5000+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Students
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-100 px-4 py-3 dark:bg-gray-800">
                <div className="text-xl font-bold">100+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Faculty
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-100 px-4 py-3 dark:bg-gray-800">
                <div className="text-xl font-bold">15</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Departments
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first">
            {/* Placeholder for about image */}
            <div className="h-full w-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center">
              <span className="text-lg text-gray-500 dark:text-gray-400">
                College History Image
              </span>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="mx-auto flex max-w-[800px] flex-col items-center space-y-4 text-center">
          <blockquote className="italic text-xl text-gray-600 dark:text-gray-300">
            "Education is the most powerful weapon which you can use to change
            the world."
          </blockquote>
          <p className="text-gray-500 dark:text-gray-400">- Nelson Mandela</p>
        </div>
      </div>
    </section>
  );
}
