"use client";

import React, { useState, useEffect } from "react";
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
import {
  Calendar,
  Bell,
  ChevronRight,
  ExternalLink,
  Download,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { NoticeService } from "@/lib/services/NoticeService";

export function NoticeEventsSection() {
  const pathname = usePathname();
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // Fetch notices from Firebase
  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    setLoading(true);
    try {
      console.log("🔄 Starting to fetch notices...");
      const result = await NoticeService.getHomepageNotices();

      console.log("📊 Fetch result:", result);

      if (result.success && result.notices.length > 0) {
        console.log("✅ Success! Found notices:", result.notices.length);
        console.log("📝 Notices array:", result.notices);
        setNotices(result.notices);
      } else {
        // Use fallback notices if Firebase fails or returns empty
        console.warn(
          "⚠️ No notices found or Firebase failed, using fallback notices"
        );
        console.error("Firebase error:", result.error);
        setNotices(fallbackNotices);
      }
    } catch (error) {
      console.error("❌ Error fetching notices:", error);
      console.log("🔄 Using fallback notices due to error");
      setNotices(fallbackNotices); // Use fallback instead of empty array
    } finally {
      setLoading(false);
      console.log("🏁 Finished fetching notices. Loading:", false);
    }
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "Date not available";
    }
  };

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
            {loading ? (
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="relative animate-pulse">
                    <CardHeader>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="h-3 bg-gray-100 rounded mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : notices.length === 0 ? (
              <div className="text-center py-8">
                <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                  No notices available
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Check back later for updates
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {notices.map((notice) => (
                  <Card key={notice.id} className="relative">
                    <CardHeader>
                      <CardTitle className="text-lg">{notice.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {formatDate(notice.date || notice.createdAt)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {notice.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      {/* PDF Download (for fallback notices) */}
                      {notice.pdfSrc && (
                        <Link
                          href={notice.pdfSrc}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Download ${notice.title} PDF`}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-800 dark:hover:bg-emerald-900 dark:text-emerald-100 px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-1 lg:gap-2 text-xs lg:text-sm"
                        >
                          <Download className="w-3 h-3 lg:w-4 lg:h-4" />
                          <span className="hidden lg:inline">Download</span>
                          <span className="lg:hidden">PDF</span>
                        </Link>
                      )}

                      {/* Attachments from Firebase */}
                      {notice.attachments &&
                        notice.attachments.length > 0 &&
                        notice.attachments.map((attachment, index) => (
                          <Link
                            key={index}
                            href={attachment.url || attachment.downloadURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2 text-xs"
                          >
                            <ExternalLink className="w-3 h-3" />
                            {attachment.name || "View"}
                          </Link>
                        ))}

                      {/* View Details Button */}
                      {notice.content && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-auto"
                          onClick={() => {
                            // Future: implement notice details modal/page
                            alert("Notice details will be available soon!");
                          }}
                        >
                          View Details
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {pathname !== "/notice" && (
              <div className="text-center mt-8">
                <Link href="/notice">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto inline-flex h-10 sm:h-11 md:h-12 items-center justify-center rounded-md bg-primary px-6 sm:px-8 text-sm md:text-base font-medium text-white shadow transition-colors hover:bg-primary/90 dark:hover:bg-primary dark:text-gray-100 dark:bg-primary/80"
                  >
                    View All Notices
                  </Button>
                </Link>
              </div>
            )}
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
                      {formatDate(event.date)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {event.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-auto hidden"
                    >
                      Learn More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {pathname !== "/notice" && (
              <div className="text-center mt-8">
                <Link href="/notice">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto inline-flex h-10 sm:h-11 md:h-12 items-center justify-center rounded-md bg-primary px-6 sm:px-8 text-sm md:text-base font-medium text-white shadow transition-colors hover:bg-primary/90 dark:hover:bg-primary dark:text-gray-100 dark:bg-primary/80"
                  >
                    View All Events
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
