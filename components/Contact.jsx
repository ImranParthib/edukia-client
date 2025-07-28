import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export function ContactPage() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                Get in Touch
              </h2>
              <p className="text-gray-600 md:text-xl dark:text-gray-300">
                Have questions? Feel free to reach out to us.
              </p>
            </div>
            <div className="space-y-4 text-base">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  +01953-007320, +01710-078815
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  mmcdhaka91@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  Nurjahan Road, Mohammadpur, Dhaka-1207, Dhaka, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  Office Hours: 9:00 AM - 5:00 PM (Sun-Thu)
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/contact">
                <Button className="w-full sm:w-auto">Contact Us</Button>
              </Link>
              <Link
                href="https://maps.app.goo.gl/3XXbCguAuCR1UEh6A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full sm:w-auto">
                  View on Map
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          {/* Admission Info */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Apply for Admission
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Take the first step towards a bright future. Our admission
                process is simple and transparent.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                    1
                  </div>
                  <p className="text-gray-900 dark:text-gray-100">
                    Download and fill the admission form
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                    2
                  </div>
                  <p className="text-gray-900 dark:text-gray-100">
                    Submit required documents
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                    3
                  </div>
                  <p className="text-gray-900 dark:text-gray-100">
                    Appear for entrance test/interview
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/admission/circulars">
                  <Button className="w-full">Start Your Application</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
