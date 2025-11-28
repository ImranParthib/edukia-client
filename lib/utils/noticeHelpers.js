import {
  Calendar,
  FileText,
  GraduationCap,
  Info,
  Megaphone,
  Trophy,
} from "lucide-react";
import {
  NOTICE_CATEGORY,
  CATEGORY_NAMES,
} from "@/lib/constants/notices";

/**
 * Format date string to readable format
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
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

/**
 * Get appropriate icon component for notice category
 * @param {string} category - Notice category
 * @returns {React.Component} Icon component
 */
export const getCategoryIcon = (category) => {
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

/**
 * Format expiry date with appropriate styling and text
 * @param {string} expiryDate - Expiry date string
 * @returns {Object} Object with formatted date, status, and styling
 */
export const formatExpiryDate = (expiryDate) => {
  if (!expiryDate) {
    return {
      text: "No expiry date",
      status: "normal",
      className: "text-gray-500",
    };
  }

  try {
    const expiry = new Date(expiryDate);
    const now = new Date();
    const diffTime = expiry - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return {
        text: `Expired ${Math.abs(diffDays)} days ago`,
        status: "expired",
        className: "text-red-600 dark:text-red-400",
      };
    } else if (diffDays === 0) {
      return {
        text: "Expires today",
        status: "urgent",
        className: "text-orange-600 dark:text-orange-400 font-medium",
      };
    } else if (diffDays <= 3) {
      return {
        text: `Expires in ${diffDays} days`,
        status: "urgent",
        className: "text-orange-600 dark:text-orange-400 font-medium",
      };
    } else if (diffDays <= 7) {
      return {
        text: `Expires in ${diffDays} days`,
        status: "warning",
        className: "text-yellow-600 dark:text-yellow-400",
      };
    } else {
      return {
        text: `Expires ${formatDate(expiryDate)}`,
        status: "normal",
        className: "text-gray-600 dark:text-gray-300",
      };
    }
  } catch (error) {
    return {
      text: "Invalid expiry date",
      status: "error",
      className: "text-gray-500",
    };
  }
};

/**
 * Sort notices by date (newest first)
 * @param {Array} notices - Array of notices to sort
 * @returns {Array} Sorted notices array
 */
export const sortNotices = (notices) => {
  return [...notices].sort((a, b) => {
    // Sort by date (newest first) - prioritize publishDate
    const dateA = new Date(a.publishDate || a.createdAt || a.date || 0);
    const dateB = new Date(b.publishDate || b.createdAt || b.date || 0);

    // Handle invalid dates
    const validDateA = !isNaN(dateA.getTime()) ? dateA : new Date(0);
    const validDateB = !isNaN(dateB.getTime()) ? dateB : new Date(0);

    return validDateB - validDateA;
  });
};

/**
 * Filter notices by category
 * @param {Array} notices - Array of notices to filter
 * @param {string} category - Category to filter by ("all" for no filter)
 * @returns {Array} Filtered notices array
 */
export const filterNoticesByCategory = (notices, category) => {
  if (category === "all") return notices;
  return notices.filter((notice) => notice.category === category);
};

/**
 * Get unique categories from notices array
 * @param {Array} notices - Array of notices
 * @returns {Array} Array of unique categories
 */
export const getAvailableCategories = (notices) => {
  const categories = [
    ...new Set(notices.map((notice) => notice.category).filter(Boolean)),
  ];
  return categories;
};