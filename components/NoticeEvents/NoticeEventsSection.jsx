"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Bell,
  Info,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { NoticeCardSkeleton } from "@/components/ui/loading";
import { useFirstLoad } from "@/hooks/use-loading";
import { useNotices } from "@/hooks/use-notices";
import { CATEGORY_NAMES } from "@/lib/constants/notices";
import { NoticeDetailsModal } from "./NoticeDetailsModal";
import { NoticeCard } from "./NoticeCard";
import { EventCard } from "./EventCard";

export function NoticeEventsSection() {
  const pathname = usePathname();
  const { isFirstLoad } = useFirstLoad("notices-section");
  
  // Use notices context
  const {
    notices,
    events,
    loading,
    selectedCategory,
    selectedNotice,
    isModalOpen,
    filteredNotices,
    availableCategories,
    setCategoryFilter,
    setSelectedNotice,
    closeModal,
    getTotalNoticesCount,
    hasFilteredNotices,
    getCategoryData,
  } = useNotices();

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
                onClick={() => setCategoryFilter("all")}
                className="flex items-center gap-2"
              >
                <Info className="w-4 h-4" />
                All ({getTotalNoticesCount()})
              </Button>

              {availableCategories.map((category) => {
                const categoryData = getCategoryData(category);
                const CategoryIcon = categoryData.icon;

                return (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setCategoryFilter(category)}
                    className="flex items-center gap-2"
                  >
                    <CategoryIcon className="w-4 h-4" />
                    {categoryData.displayName} ({categoryData.count})
                  </Button>
                );
              })}
            </div>

            {loading ? (
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <NoticeCardSkeleton key={`skeleton-${i}`} isFirstLoad={isFirstLoad} />
                ))}
              </div>
            ) : !hasFilteredNotices() ? (
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
                {filteredNotices.map((notice, index) => (
                  <NoticeCard
                    key={notice.id || `notice-${index}`}
                    notice={notice}
                    onViewDetails={setSelectedNotice}
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
                {events.map((event, index) => (
                  <EventCard key={event.id || `event-${index}`} event={event} />
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
          onClose={closeModal}
        />
      </div>
    </section>
  );
}
