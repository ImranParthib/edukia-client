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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Calendar,
  Bell,
  ChevronRight,
  ExternalLink,
  Download,
  Star,
  Users,
  FileText,
  GraduationCap,
  Info,
  Megaphone,
  Trophy,
  Clock,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import { NoticeService } from "@/lib/services/NoticeService";
import {
  NOTICE_CATEGORY,
  NOTICE_AUDIENCE,
  CATEGORY_COLORS,
  AUDIENCE_COLORS,
  CATEGORY_NAMES,
  AUDIENCE_NAMES,
} from "@/lib/constants/notices";

export function NoticeEventsSection() {
  const pathname = usePathname();
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fallback notices with real dates (not today's date)
  const fallbackNotices = [
    {
      id: "fallback-1",
      title: "HSC Practical Examination 2025",
      content:
        "HSC Practical examinations will be held from February 15-28, 2025. Students must bring their admit cards.",
      publishDate: "2024-12-15",
      category: NOTICE_CATEGORY.EXAM,
      audience: NOTICE_AUDIENCE.STUDENTS,
      status: "published",
      tags: ["hsc", "practical", "exam"],
      pdfSrc: "/notices/hsc-practical-exam-2025.pdf",
    },
    {
      id: "fallback-2",
      title: "Admission Circular 2025-2026",
      content:
        "Applications are invited for admission to HSC program for the academic year 2025-2026.",
      publishDate: "2024-12-10",
      category: NOTICE_CATEGORY.ADMISSION,
      audience: NOTICE_AUDIENCE.PUBLIC,
      status: "published",
      tags: ["admission", "hsc", "2025"],
      pdfSrc: "/circulars/admission_2025-2026.pdf",
    },
    {
      id: "fallback-3",
      title: "Winter Vacation Notice",
      content:
        "The college will remain closed from December 25, 2024 to January 7, 2025 for winter vacation.",
      publishDate: "2024-12-05",
      category: NOTICE_CATEGORY.HOLIDAY,
      audience: NOTICE_AUDIENCE.ALL,
      status: "published",
      tags: ["vacation", "holiday", "winter"],
    },
  ];

  const events = [
    {
      id: 1,
      title: "Cultural Program 2025",
      date: "2025-02-14",
      description:
        "Annual cultural program featuring music, dance, and drama performances by our talented students.",
      image:
        "bg-gradient-to-r from-pink-200 to-pink-300 dark:from-pink-800 dark:to-pink-900",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Science Fair 2025",
      date: "2025-03-15",
      description:
        "Students showcase innovative science projects and experiments in this annual exhibition.",
      image:
        "bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-900",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Graduation Ceremony",
      date: "2025-04-01",
      description:
        "Celebrating the achievements of our graduating students in a formal ceremony.",
      image:
        "bg-gradient-to-r from-green-200 to-green-300 dark:from-green-800 dark:to-green-900",
      status: "upcoming",
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

  // Helper functions for enhanced display
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

  const isExpired = (expiryDate) => {
    if (!expiryDate) return false;
    return new Date(expiryDate) < new Date();
  };

  const formatExpiryDate = (expiryDate) => {
    if (!expiryDate) return null;
    try {
      const date = new Date(expiryDate);
      const now = new Date();
      const diffTime = date - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays < 0) {
        return { text: "Expired", type: "expired" };
      } else if (diffDays === 0) {
        return { text: "Expires today", type: "warning" };
      } else if (diffDays === 1) {
        return { text: "Expires tomorrow", type: "warning" };
      } else if (diffDays <= 7) {
        return { text: `Expires in ${diffDays} days`, type: "warning" };
      } else {
        return {
          text: `Valid until ${date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}`,
          type: "info",
        };
      }
    } catch (error) {
      return null;
    }
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

  // Notice Details Modal Component
  const NoticeDetailsModal = ({ notice, isOpen, onClose }) => {
    if (!notice) return null;

    const CategoryIcon = getCategoryIcon(notice.category);
    const expiryInfo = formatExpiryDate(notice.expiryDate);

    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {notice.category && (
                    <Badge
                      className={`${
                        CATEGORY_COLORS[notice.category]
                      } flex items-center gap-1`}
                    >
                      <CategoryIcon className="w-3 h-3" />
                      {CATEGORY_NAMES[notice.category] || notice.category}
                    </Badge>
                  )}
                  {notice.audience &&
                    notice.audience !== NOTICE_AUDIENCE.ALL && (
                      <Badge
                        className={`${
                          AUDIENCE_COLORS[notice.audience]
                        } flex items-center gap-1`}
                      >
                        <Users className="w-3 h-3" />
                        {AUDIENCE_NAMES[notice.audience]}
                      </Badge>
                    )}
                </div>
                <DialogTitle className="text-xl lg:text-2xl">
                  {notice.title}
                </DialogTitle>
                <DialogDescription className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Published:{" "}
                  {formatDate(
                    notice.publishDate || notice.date || notice.createdAt
                  )}
                  {expiryInfo && (
                    <span
                      className={`ml-4 px-2 py-1 rounded text-xs ${
                        expiryInfo.type === "expired"
                          ? "bg-red-100 text-red-800"
                          : expiryInfo.type === "warning"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {expiryInfo.text}
                    </span>
                  )}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {notice.content ||
                  notice.description ||
                  "No detailed content available."}
              </p>
            </div>

            {/* Tags */}
            {notice.tags && notice.tags.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {notice.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Attachments */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Downloads:</h4>
              <div className="flex flex-wrap gap-2">
                {notice.pdfSrc && (
                  <Link
                    href={notice.pdfSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Link>
                )}
                {notice.attachments &&
                  notice.attachments.length > 0 &&
                  notice.attachments.map((attachment, index) => (
                    <Link
                      key={index}
                      href={attachment.url || attachment.downloadURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2 text-sm"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
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
                {getFilteredAndSortedNotices().map((notice) => {
                  const CategoryIcon = getCategoryIcon(notice.category);
                  const expired = isExpired(notice.expiryDate);
                  const expiryInfo = formatExpiryDate(notice.expiryDate);

                  return (
                    <Card
                      key={notice.id}
                      className={`relative ${expired ? "opacity-75" : ""}`}
                    >
                      <CardHeader className="pb-3">
                        {/* Category and Validity Badges - Responsive Layout */}
                        <div className="flex flex-col sm:flex-col sm:items-end sm:justify-between gap-2 mb-2">
                          {/* Expired Notice Overlay */}
                          {expired && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                              <Clock className="w-3 h-3 inline mr-1" />
                              Expired
                            </div>
                          )}
                          {/** Category Badge */}
                          {notice.category && (
                            <Badge
                              className={`${
                                CATEGORY_COLORS[notice.category]
                              } flex items-center gap-1`}
                            >
                              <CategoryIcon className="w-3 h-3" />
                              {CATEGORY_NAMES[notice.category] ||
                                notice.category}
                            </Badge>
                          )}
                        </div>

                        <CardTitle className="text-lg leading-tight">
                          {notice.title}
                        </CardTitle>

                        <CardDescription className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {formatDate(
                              notice.publishDate ||
                                notice.date ||
                                notice.createdAt ||
                                notice.updatedAt
                            )}
                          </div>
                          {/* Audience Badge */}
                          {notice.audience &&
                            notice.audience !== NOTICE_AUDIENCE.ALL && (
                              <Badge
                                className={`${
                                  AUDIENCE_COLORS[notice.audience]
                                } flex items-center gap-1 text-xs`}
                              >
                                <Users className="w-3 h-3" />
                                {AUDIENCE_NAMES[notice.audience]}
                              </Badge>
                            )}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pb-3">
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                          {notice.content || notice.description}
                        </p>

                        {/* Tags Display */}
                        {notice.tags && notice.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {notice.tags.slice(0, 3).map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                #{tag}
                              </Badge>
                            ))}
                            {notice.tags.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{notice.tags.length - 3} more
                              </Badge>
                            )}
                          </div>
                        )}
                      </CardContent>

                      <CardFooter className="flex gap-2 pt-3">
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
                            <span>Download PDF</span>
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
                              <Download className="w-3 h-3" />
                              Download PDF
                            </Link>
                          ))}

                        {/* View Details Button */}
                        {notice.content && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="ml-auto"
                            onClick={() => {
                              setSelectedNotice(notice);
                              setIsModalOpen(true);
                            }}
                          >
                            View Details
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  );
                })}
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
                  <Card key={event.id} className="overflow-hidden">
                    <div
                      className={`h-32 sm:h-40 ${event.image} rounded-t-lg flex items-center justify-center`}
                    >
                      <div className="text-center">
                        <Calendar className="mx-auto h-8 w-8 text-gray-600 dark:text-gray-300 mb-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                          Event Image
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {formatDate(event.date)}
                        {event.status && (
                          <Badge variant="outline" className="ml-auto text-xs">
                            {event.status}
                          </Badge>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                        {event.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-auto"
                        disabled
                      >
                        Learn More
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
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
