"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Bell, ChevronRight } from "lucide-react";

export function NoticeEventsSection() {
  const notices = [
    {
      id: 1,
      title: "HSC Examination 2024 Schedule Released",
      date: "2024-01-15",
      description:
        "The Higher Secondary Certificate examination schedule for 2024 has been published.",
      urgent: true,
    },
    {
      id: 2,
      title: "Annual Sports Day 2024",
      date: "2024-01-20",
      description:
        "Join us for the annual sports day celebration with various competitions.",
      urgent: false,
    },
    {
      id: 3,
      title: "Admission for Session 2024-25",
      date: "2024-01-10",
      description:
        "Admission applications are now open for the academic session 2024-25.",
      urgent: true,
    },
  ];

  const events = [
    {
      id: 1,
      title: "Cultural Program 2024",
      date: "2024-02-14",
      description:
        "Annual cultural program featuring music, dance, and drama performances.",
      image:
        "bg-gradient-to-r from-pink-200 to-pink-300 dark:from-pink-800 dark:to-pink-900",
    },
    {
      id: 2,
      title: "Science Fair",
      date: "2024-02-20",
      description:
        "Students showcase innovative science projects and experiments.",
      image:
        "bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-900",
    },
    {
      id: 3,
      title: "Graduation Ceremony",
      date: "2024-03-01",
      description: "Celebrating the achievements of our graduating students.",
      image:
        "bg-gradient-to-r from-green-200 to-green-300 dark:from-green-800 dark:to-green-900",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Notice & Events
            </h2>
            <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              Stay updated with our latest announcements and upcoming events
            </p>
          </div>
        </div>

        <Tabs defaultValue="notices" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8">
            <TabsTrigger value="notices" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notices
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notices" className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {notices.map((notice) => (
                <Card key={notice.id} className="relative">
                  {notice.urgent && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Urgent
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{notice.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(notice.date).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {notice.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Read More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link href="/notice">
                <Button variant="outline">View All Notices</Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <Card key={event.id}>
                  <div
                    className={`h-32 sm:h-40 ${event.image} rounded-t-lg flex items-center justify-center`}
                  >
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Event Image
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {event.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Learn More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link href="/events">
                <Button variant="outline">View All Events</Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
