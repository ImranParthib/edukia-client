/**
 * Notice Management Constants for Client-Side Usage
 * Synchronized with server-side constants
 */

export const NOTICE_STATUS = {
  DRAFT: "draft",
  PUBLISHED: "published",
  ARCHIVED: "archived",
};

export const NOTICE_CATEGORY = {
  EXAM: "exam",
  ADMISSION: "admission",
  GENERAL: "general",
  HOLIDAY: "holiday",
  ANNOUNCEMENT: "announcement",
  RESULTS: "results",
};

export const NOTICE_AUDIENCE = {
  STUDENTS: "students",
  TEACHERS: "teachers",
  PUBLIC: "public",
  ALL: "all",
};

// Category colors for UI
export const CATEGORY_COLORS = {
  [NOTICE_CATEGORY.EXAM]:
    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-200 dark:border-red-700",
  [NOTICE_CATEGORY.ADMISSION]:
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-700",
  [NOTICE_CATEGORY.GENERAL]:
    "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 border-gray-200 dark:border-gray-700",
  [NOTICE_CATEGORY.HOLIDAY]:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-700",
  [NOTICE_CATEGORY.ANNOUNCEMENT]:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-200 dark:border-purple-700",
  [NOTICE_CATEGORY.RESULTS]:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700",
};

// Audience colors for UI
export const AUDIENCE_COLORS = {
  [NOTICE_AUDIENCE.STUDENTS]:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 border-indigo-200 dark:border-indigo-700",
  [NOTICE_AUDIENCE.TEACHERS]:
    "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 border-teal-200 dark:border-teal-700",
  [NOTICE_AUDIENCE.PUBLIC]:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border-orange-200 dark:border-orange-700",
  [NOTICE_AUDIENCE.ALL]:
    "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200 border-slate-200 dark:border-slate-700",
};

// Display names
export const CATEGORY_NAMES = {
  [NOTICE_CATEGORY.EXAM]: "Examination",
  [NOTICE_CATEGORY.ADMISSION]: "Admission",
  [NOTICE_CATEGORY.GENERAL]: "General",
  [NOTICE_CATEGORY.HOLIDAY]: "Holiday",
  [NOTICE_CATEGORY.ANNOUNCEMENT]: "Announcement",
  [NOTICE_CATEGORY.RESULTS]: "Results",
};

export const STATUS_NAMES = {
  [NOTICE_STATUS.DRAFT]: "Draft",
  [NOTICE_STATUS.PUBLISHED]: "Published",
  [NOTICE_STATUS.ARCHIVED]: "Archived",
};

export const AUDIENCE_NAMES = {
  [NOTICE_AUDIENCE.STUDENTS]: "Students",
  [NOTICE_AUDIENCE.TEACHERS]: "Teachers",
  [NOTICE_AUDIENCE.PUBLIC]: "Public",
  [NOTICE_AUDIENCE.ALL]: "Everyone",
};

// Category icons (using Lucide React icons)
export const CATEGORY_ICONS = {
  [NOTICE_CATEGORY.EXAM]: "FileText",
  [NOTICE_CATEGORY.ADMISSION]: "GraduationCap",
  [NOTICE_CATEGORY.GENERAL]: "Info",
  [NOTICE_CATEGORY.HOLIDAY]: "Calendar",
  [NOTICE_CATEGORY.ANNOUNCEMENT]: "Megaphone",
  [NOTICE_CATEGORY.RESULTS]: "Trophy",
};
