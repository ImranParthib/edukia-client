"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { NoticeService } from "@/lib/services/NoticeService";
import {
  sortNotices,
  filterNoticesByCategory,
  getAvailableCategories,
} from "@/lib/utils/noticeHelpers";

// Action types
const NOTICES_ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  SET_CATEGORY_FILTER: "SET_CATEGORY_FILTER",
  SET_SELECTED_NOTICE: "SET_SELECTED_NOTICE",
  SET_MODAL_OPEN: "SET_MODAL_OPEN",
  SET_EVENTS: "SET_EVENTS",
};

// Initial state
const initialState = {
  notices: [],
  events: [],
  loading: true,
  error: null,
  selectedCategory: "all",
  selectedNotice: null,
  isModalOpen: false,
};

// Reducer function
const noticesReducer = (state, action) => {
  switch (action.type) {
    case NOTICES_ACTIONS.FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case NOTICES_ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        notices: action.payload,
        loading: false,
        error: null,
      };

    case NOTICES_ACTIONS.FETCH_ERROR:
      return {
        ...state,
        notices: [],
        loading: false,
        error: action.payload,
      };

    case NOTICES_ACTIONS.SET_CATEGORY_FILTER:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case NOTICES_ACTIONS.SET_SELECTED_NOTICE:
      return {
        ...state,
        selectedNotice: action.payload,
      };

    case NOTICES_ACTIONS.SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload,
      };

    case NOTICES_ACTIONS.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    default:
      return state;
  }
};

// Create context
const NoticesContext = createContext();

// Provider component
export const NoticesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noticesReducer, initialState);

  // Fetch notices from Firebase
  const fetchNotices = async () => {
    dispatch({ type: NOTICES_ACTIONS.FETCH_START });
    
    try {
      console.log("🔄 Starting to fetch notices...");
      const result = await NoticeService.getHomepageNotices();

      console.log("📊 Fetch result:", result);

      if (result.success && result.notices.length > 0) {
        console.log("✅ Success! Found notices:", result.notices.length);
        console.log("📝 Notices array:", result.notices);
        dispatch({ 
          type: NOTICES_ACTIONS.FETCH_SUCCESS, 
          payload: result.notices 
        });
      } else {
        // Show empty state if no notices found
        console.warn("⚠️ No notices found or Firebase failed");
        console.error("Firebase error:", result.error);
        dispatch({ 
          type: NOTICES_ACTIONS.FETCH_SUCCESS, 
          payload: [] 
        });
      }
    } catch (error) {
      console.error("❌ Error fetching notices:", error);
      console.log("🔄 Showing empty state due to error");
      dispatch({ 
        type: NOTICES_ACTIONS.FETCH_ERROR, 
        payload: error.message 
      });
    }
  };

  // Set category filter
  const setCategoryFilter = (category) => {
    dispatch({ 
      type: NOTICES_ACTIONS.SET_CATEGORY_FILTER, 
      payload: category 
    });
  };

  // Set selected notice and modal state
  const setSelectedNotice = (notice) => {
    dispatch({ 
      type: NOTICES_ACTIONS.SET_SELECTED_NOTICE, 
      payload: notice 
    });
    dispatch({ 
      type: NOTICES_ACTIONS.SET_MODAL_OPEN, 
      payload: !!notice 
    });
  };

  // Close modal
  const closeModal = () => {
    dispatch({ 
      type: NOTICES_ACTIONS.SET_MODAL_OPEN, 
      payload: false 
    });
    dispatch({ 
      type: NOTICES_ACTIONS.SET_SELECTED_NOTICE, 
      payload: null 
    });
  };

  // Set events (for future implementation)
  const setEvents = (events) => {
    dispatch({ 
      type: NOTICES_ACTIONS.SET_EVENTS, 
      payload: events 
    });
  };

  // Get filtered and sorted notices
  const getFilteredAndSortedNotices = () => {
    const filtered = filterNoticesByCategory(state.notices, state.selectedCategory);
    return sortNotices(filtered);
  };

  // Get available categories
  const availableCategories = getAvailableCategories(state.notices);

  // Fetch notices on mount
  useEffect(() => {
    fetchNotices();
  }, []);

  // Context value
  const contextValue = {
    // State
    notices: state.notices,
    events: state.events,
    loading: state.loading,
    error: state.error,
    selectedCategory: state.selectedCategory,
    selectedNotice: state.selectedNotice,
    isModalOpen: state.isModalOpen,
    
    // Computed values
    filteredNotices: getFilteredAndSortedNotices(),
    availableCategories,
    
    // Actions
    fetchNotices,
    setCategoryFilter,
    setSelectedNotice,
    closeModal,
    setEvents,
  };

  return (
    <NoticesContext.Provider value={contextValue}>
      {children}
    </NoticesContext.Provider>
  );
};

// Custom hook to use the context
export const useNotices = () => {
  const context = useContext(NoticesContext);
  
  if (!context) {
    throw new Error("useNotices must be used within a NoticesProvider");
  }
  
  return context;
};

// Export actions for external use if needed
export { NOTICES_ACTIONS };