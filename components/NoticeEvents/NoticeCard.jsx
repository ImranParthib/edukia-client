"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  Download,
  Clock,
  FileText,
  GraduationCap,
  Info,
  Megaphone,
  Trophy,
} from "lucide-react";
import {
  NOTICE_CATEGORY,
  NOTICE_AUDIENCE,
  CATEGORY_COLORS,
  AUDIENCE_COLORS,
  CATEGORY_NAMES,
  AUDIENCE_NAMES,
} from "@/lib/constants/notices";

// Helper functions
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

const isExpired = (expiryDate) => {
  if (!expiryDate) return false;
  return new Date(expiryDate) < new Date();
};

export function NoticeCard({ notice, onViewDetails }) {
  const CategoryIcon = getCategoryIcon(notice.category);
  const expired = isExpired(notice.expiryDate);
  const expiryInfo = formatExpiryDate(notice.expiryDate);

  return (
    <Card key={notice.id} className={`relative ${expired ? "opacity-75" : ""}`}>
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
              {CATEGORY_NAMES[notice.category] || notice.category}
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
          {notice.audience && notice.audience !== NOTICE_AUDIENCE.ALL && (
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
              <Badge key={index} variant="outline" className="text-xs">
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
            onClick={() => onViewDetails(notice)}
          >
            View Details
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}