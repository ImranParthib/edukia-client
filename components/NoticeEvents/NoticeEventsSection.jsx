"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import {
  Calendar,
  Bell,
  Info,
  FileText,
  GraduationCap,
  Megaphone,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import { NoticeService } from "@/lib/services/NoticeService";
import { NoticeCardSkeleton } from "@/components/ui/loading";
import { useFirstLoad } from "@/hooks/use-loading";
import {
  NOTICE_CATEGORY,
  NOTICE_AUDIENCE,
  CATEGORY_COLORS,
  AUDIENCE_COLORS,
  CATEGORY_NAMES,
  AUDIENCE_NAMES,
} from "@/lib/constants/notices";
import { NoticeDetailsModal } from "./NoticeDetailsModal";
import { NoticeCard } from "./NoticeCard";
import { EventCard } from "./EventCard";

export function NoticeEventsSection() {
  const pathname = usePathname();
  const { isFirstLoad } = useFirstLoad("notices-section");
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Events will be fetched from database or service
  const [events, setEvents] = useState([]);

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
        // Show empty state if no notices found
        console.warn("⚠️ No notices found or Firebase failed");
        console.error("Firebase error:", result.error);
        setNotices([]);
      }
    } catch (error) {
      console.error("❌ Error fetching notices:", error);
      console.log("🔄 Showing empty state due to error");
      setNotices([]); // Show empty state instead of fallback
    } finally {
      setLoading(false);
      console.log("🏁 Finished fetching notices. Loading:", false);
    }
  };

  // Helper function for date formatting
  const formatDate = (dateString) => {
    try {
      if (!dateString || dateString === null) {
        return "Date not available";
      }

      const date = new Date(dateString);

      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return "Date not available";
      }

      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "Date not available";
    }
  };

  // Helper function for category icons
  const getCategoryIcon = (category) => {
    const iconMap = {
      [NOTICE_CATEGORY.EXAM]: FileText,
      [NOTICE_CATEGORY.ADMISSION]: GraduationCap,
      [NOTICE_CATEGORY.GENERAL]: Info,
      [NOTICE_CATEGORY.HOLIDAY]: Calendar,
      [NOTICE_CATEGORY.ANNOUNCEMENT]: Megaphone,
      [NOTICE_CATEGORY.RESULTS]: Trophy,
    };
    return iconMap[category] || Info;
  };

  const sortNotices = (notices) => {
    return [...notices].sort((a, b) => {
      // Then sort by date (newest first) - prioritize publishDate
      const dateA = new Date(a.publishDate || a.createdAt || a.date || 0);
      const dateB = new Date(b.publishDate || b.createdAt || b.date || 0);

      // Handle invalid dates
      const validDateA = !isNaN(dateA.getTime()) ? dateA : new Date(0);
      const validDateB = !isNaN(dateB.getTime()) ? dateB : new Date(0);

      return validDateB - validDateA;
    });
  };

  const filterNoticesByCategory = (notices, category) => {
    if (category === "all") return notices;
    return notices.filter((notice) => notice.category === category);
  };

  const getFilteredAndSortedNotices = () => {
    const filtered = filterNoticesByCategory(notices, selectedCategory);
    return sortNotices(filtered);
  };

  // Get unique categories from notices for tabs
  const getAvailableCategories = () => {
    const categories = [
      ...new Set(notices.map((notice) => notice.category).filter(Boolean)),
    ];
    return categories;
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
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className="flex items-center gap-2"
              >
                <Info className="w-4 h-4" />
                All ({notices.length})
              </Button>

              {getAvailableCategories().map((category) => {
                const CategoryIcon = getCategoryIcon(category);
                const count = notices.filter(
                  (n) => n.category === category
                ).length;

                return (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="flex items-center gap-2"
                  >
                    <CategoryIcon className="w-4 h-4" />
                    {CATEGORY_NAMES[category] || category} ({count})
                  </Button>
                );
              })}
            </div>

            {loading ? (
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <NoticeCardSkeleton key={i} isFirstLoad={isFirstLoad} />
                ))}
              </div>
            ) : getFilteredAndSortedNotices().length === 0 ? (
              <div className="text-center py-8">
                <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                  {selectedCategory === "all"
                    ? "No notices available"
                    : `No ${
                        CATEGORY_NAMES[selectedCategory] ||
                        selectedCategory.toLowerCase()
                      } notices available`}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedCategory === "all"
                    ? "Check back later for updates"
                    : "Try selecting a different category"}
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {getFilteredAndSortedNotices().map((notice) => (
                  <NoticeCard
                    key={notice.id}
                    notice={notice}
                    onViewDetails={(notice) => {
                      setSelectedNotice(notice);
                      setIsModalOpen(true);
                    }}
                  />
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
            {events.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                  No upcoming events
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Check back later for upcoming events and activities
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
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
                    View All Events
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Notice Details Modal */}
        <NoticeDetailsModal
          notice={selectedNotice}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedNotice(null);
          }}
        />
      </div>
    </section>
  );
}
