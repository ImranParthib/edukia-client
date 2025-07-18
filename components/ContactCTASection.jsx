import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export function ContactCTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Have questions? Feel free to reach out to us.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+880 2-9119941, +880 2-9111124</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>mohammadpurmohilacollege@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span>Mohammadpur, Dhaka-1207, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Office Hours: 9:00 AM - 5:00 PM (Sun-Thu)</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto">Contact Us</Button>
              </Link>
              <Link
                href="https://maps.google.com"
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
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <h3 className="text-2xl font-bold">Apply for Admission</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Take the first step towards a bright future. Our admission
                process is simple and transparent.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    1
                  </div>
                  <p>Download and fill the admission form</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    2
                  </div>
                  <p>Submit required documents</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    3
                  </div>
                  <p>Appear for entrance test/interview</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/admission">
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
