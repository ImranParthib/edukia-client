import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook for detecting first load vs subsequent loads
 * @param {string} key - Unique identifier for the component/page
 * @param {number} sessionDuration - How long to consider as "same session" in minutes
 * @returns {object} - First load detection utilities
 */
export function useFirstLoad(key, sessionDuration = 30) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    try {
      const storageKey = `first-load-${key}`;
      const lastVisit = localStorage.getItem(storageKey);
      const now = Date.now();

      if (lastVisit) {
        const timeDiff = now - parseInt(lastVisit);
        const minutesDiff = timeDiff / (1000 * 60);

        // If within session duration, not first load
        if (minutesDiff < sessionDuration) {
          setIsFirstLoad(false);
        }
      }

      // Update last visit time
      localStorage.setItem(storageKey, now.toString());
    } catch (error) {
      // Fallback if localStorage is not available
      console.warn("localStorage not available, treating as first load");
    }
  }, [key, sessionDuration]);

  return { isFirstLoad };
}

/**
 * Custom hook for managing image loading states
 * @param {number} totalImages - Total number of images to load
 * @param {number} threshold - Threshold percentage to consider as "loaded" (default: 70)
 * @returns {object} - Loading state management object
 */
export function useImageLoader(totalImages, threshold = 0.7) {
  const [loadedImages, setLoadedImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const thresholdCount = Math.ceil(totalImages * threshold);

  const handleImageLoad = useCallback(() => {
    setLoadedImages((prev) => {
      const newCount = prev + 1;
      if (newCount >= thresholdCount) {
        setTimeout(() => setIsLoading(false), 200); // Small delay for smooth transition
      }
      return newCount;
    });
  }, [thresholdCount]);

  const handleImageError = useCallback(() => {
    setLoadedImages((prev) => prev + 1);
    setHasError(true);
  }, []);

  const resetLoader = useCallback(() => {
    setLoadedImages(0);
    setIsLoading(true);
    setHasError(false);
  }, []);

  const progress = totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

  return {
    isLoading,
    hasError,
    loadedImages,
    totalImages,
    progress: Math.min(progress, 100),
    handleImageLoad,
    handleImageError,
    resetLoader,
  };
}

/**
 * Custom hook for managing component loading states with delays
 * @param {number} initialDelay - Initial delay before showing loading (default: 0)
 * @param {number} minimumDuration - Minimum duration to show loading (default: 500ms)
 * @returns {object} - Loading state management object
 */
export function useLoadingState(initialDelay = 0, minimumDuration = 500) {
  const [isLoading, setIsLoading] = useState(true);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTime(Date.now());
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  const finishLoading = useCallback(() => {
    if (!startTime) return;

    const elapsed = Date.now() - startTime;
    const remainingTime = Math.max(0, minimumDuration - elapsed);

    setTimeout(() => {
      setIsLoading(false);
    }, remainingTime);
  }, [startTime, minimumDuration]);

  const resetLoading = useCallback(() => {
    setIsLoading(true);
    setStartTime(Date.now());
  }, []);

  return {
    isLoading,
    finishLoading,
    resetLoading,
  };
}

/**
 * Custom hook for lazy loading components with Intersection Observer
 * @param {object} options - Intersection Observer options
 * @returns {object} - Lazy loading utilities
 */
export function useLazyLoad(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    if (!elementRef || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elementRef);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [elementRef, options]);

  return {
    isVisible,
    ref: setElementRef,
  };
}

/**
 * Custom hook for managing async operations with loading states
 * @param {function} asyncFunction - The async function to execute
 * @param {array} deps - Dependencies for the effect
 * @returns {object} - Async state management object
 */
export function useAsyncState(asyncFunction, deps = []) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await asyncFunction();
      setData(result);
    } catch (err) {
      setError(err);
      console.error("Async operation failed:", err);
    } finally {
      setIsLoading(false);
    }
  }, [asyncFunction]);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const retry = useCallback(() => {
    execute();
  }, [execute]);

  return {
    data,
    isLoading,
    error,
    retry,
  };
}
