"use client";

import { useNotices as useNoticesContext } from "@/contexts/NoticesContext";
import { getCategoryIcon } from "@/lib/utils/noticeHelpers";
import { CATEGORY_NAMES } from "@/lib/constants/notices";

/**
 * Enhanced hook that provides additional utilities on top of NoticesContext
 * @returns {Object} Enhanced notices state and utilities
 */
export const useNotices = () => {
  const context = useNoticesContext();
  
  // Enhanced utilities
  const getCategoryData = (category) => {
    const CategoryIcon = getCategoryIcon(category);
    const count = context.notices.filter(n => n.category === category).length;
    const displayName = CATEGORY_NAMES[category] || category;
    
    return {
      icon: CategoryIcon,
      count,
      displayName,
      category
    };
  };
  
  const getTotalNoticesCount = () => context.notices.length;
  
  const hasNotices = () => context.notices.length > 0;
  
  const hasFilteredNotices = () => context.filteredNotices.length > 0;
  
  const isFiltered = () => context.selectedCategory !== "all";
  
  return {
    ...context,
    // Enhanced utilities
    getCategoryData,
    getTotalNoticesCount,
    hasNotices,
    hasFilteredNotices,
    isFiltered,
  };
};