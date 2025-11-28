"use client";

import React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  Download,
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
import {
  formatDate,
  getCategoryIcon,
} from "@/lib/utils/noticeHelpers";

export function NoticeDetailsModal({ notice, isOpen, onClose }) {
  if (!notice) return null;

  const CategoryIcon = getCategoryIcon(notice.category);

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
                  <Badge key={`${notice.id}-modal-tag-${index}`} variant="outline" className="text-xs">
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
                    key={`${notice.id}-modal-attachment-${index}`}
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
}