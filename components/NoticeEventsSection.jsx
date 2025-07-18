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
} from "./ui/card";
import { Calendar, Bell, ChevronRight } from "lucide-react";

export function NoticeEventsSection() {
  // Sample notices (would come from an API/database in a real implementation)
  const notices = [
    {
      id: 1,
      title: "Admission Open for 2023-24 Session",
      date: "2023-05-15",
      excerpt:
        "Applications are invited for admission to various programs for the upcoming academic session.",
    },
    {
      id: 2,
      title: "Schedule for Mid-Term Examinations",
      date: "2023-06-10",
      excerpt:
        "Mid-term examinations for all classes will commence from July 1st, 2023.",
    },
    {
      id: 3,
      title: "Science Fair Registration",
      date: "2023-06-18",
      excerpt:
        "Students interested in participating in the Annual Science Fair are requested to register by June 30.",
    },
  ];

  // Sample upcoming events
  const events = [
    {
      id: 1,
      title: "Annual Cultural Festival",
      date: "2023-07-15",
      excerpt:
        "Three-day cultural extravaganza featuring performances, competitions and exhibitions.",
    },
    {
      id: 2,
      title: "Parent-Teacher Meeting",
      date: "2023-07-22",
      excerpt:
        "Discussion about student progress and addressing concerns for the ongoing semester.",
    },
    {
      id: 3,
      title: "Career Counseling Workshop",
      date: "2023-08-05",
      excerpt:
        "Guidance on future career paths and higher education opportunities for final year students.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Notices & Events
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Stay updated with the latest announcements and upcoming events
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl mt-12">
          <Tabs defaultValue="notices" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="notices" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notices
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Upcoming Events
              </TabsTrigger>
            </TabsList>
            <TabsContent value="notices" className="mt-4 space-y-4">
              {notices.map((notice) => (
                <Card key={notice.id}>
                  <CardHeader>
                    <CardTitle>{notice.title}</CardTitle>
                    <CardDescription>Posted on: {notice.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{notice.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/notice/${notice.id}`}>
                      <Button variant="outline" size="sm" className="ml-auto">
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
              <div className="text-center mt-6">
                <Link href="/notice">
                  <Button variant="outline">
                    View All Notices
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="events" className="mt-4 space-y-4">
              {events.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>Date: {event.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{event.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/event/${event.id}`}>
                      <Button variant="outline" size="sm" className="ml-auto">
                        View Details <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
              <div className="text-center mt-6">
                <Link href="/events">
                  <Button variant="outline">
                    View All Events
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
