import { cn } from "@/lib/utils";

// Base Loading Spinner Component
export function LoadingSpinner({ className, size = "default", ...props }) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-current border-t-transparent",
        {
          "h-4 w-4": size === "sm",
          "h-6 w-6": size === "default",
          "h-8 w-8": size === "lg",
          "h-12 w-12": size === "xl",
        },
        className
      )}
      {...props}
    />
  );
}

// Shimmer Animation Component - For first loads
export function ShimmerWrapper({ children, className, enabled = true }) {
  return (
    <div className={cn(enabled && "animate-pulse", className)}>{children}</div>
  );
}

// Static Skeleton Component - For subsequent loads
export function StaticSkeleton({ children, className }) {
  return <div className={cn("", className)}>{children}</div>;
}

// Adaptive Card Component - Shimmer on first load, static on subsequent
export function SkeletonCard({
  className,
  showImage = true,
  lines = 3,
  isFirstLoad = false,
}) {
  const Wrapper = isFirstLoad ? ShimmerWrapper : StaticSkeleton;

  return (
    <Wrapper>
      <div className={cn("rounded-lg border p-4 space-y-3", className)}>
        {showImage && (
          <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-md" />
        )}
        <div className="space-y-2">
          {Array.from({ length: lines }, (_, i) => (
            <div
              key={i}
              className={cn(
                "h-4 bg-gray-200 dark:bg-gray-700 rounded",
                i === lines - 1 ? "w-3/4" : "w-full"
              )}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

// Skeleton Text Component
export function SkeletonText({
  className,
  lines = 1,
  width = "full",
  spacing = "normal",
}) {
  const widthClasses = {
    full: "w-full",
    "3/4": "w-3/4",
    "1/2": "w-1/2",
    "1/3": "w-1/3",
    "1/4": "w-1/4",
  };

  const spacingClasses = {
    tight: "space-y-1",
    normal: "space-y-2",
    loose: "space-y-3",
  };

  return (
    <ShimmerWrapper>
      <div className={cn("space-y-2", spacingClasses[spacing], className)}>
        {Array.from({ length: lines }, (_, i) => (
          <div
            key={i}
            className={cn(
              "h-4 bg-gray-200 dark:bg-gray-700 rounded",
              i === lines - 1 ? widthClasses["3/4"] : widthClasses[width]
            )}
          />
        ))}
      </div>
    </ShimmerWrapper>
  );
}

// Image Skeleton Component
export function ImageSkeleton({
  className,
  aspectRatio = "video", // video, square, portrait
  showIcon = true,
}) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  return (
    <ShimmerWrapper>
      <div
        className={cn(
          "bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center",
          aspectClasses[aspectRatio],
          className
        )}
      >
        {showIcon && (
          <svg
            className="h-8 w-8 text-gray-400 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
      </div>
    </ShimmerWrapper>
  );
}

// Micro-Action Loading Button - Only for form submissions and brief actions
export function LoadingButton({
  children,
  isLoading,
  loadingText,
  disabled,
  className,
  size = "default",
  variant = "default",
  ...props
}) {
  const displayText =
    loadingText ||
    (typeof children === "string" ? `${children}...` : "Loading...");

  return (
    <button
      disabled={isLoading || disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        {
          // Size variants
          "h-9 px-3 text-sm": size === "sm",
          "h-10 px-4 py-2": size === "default",
          "h-11 px-8": size === "lg",
          // Color variants
          "bg-primary text-primary-foreground hover:bg-primary/90":
            variant === "default",
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground":
            variant === "outline",
          "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
        },
        isLoading && "cursor-not-allowed",
        className
      )}
      {...props}
    >
      {isLoading && <LoadingSpinner size="sm" className="mr-2" />}
      {isLoading ? displayText : children}
    </button>
  );
} // Notice Card Skeleton - Adaptive version
export function NoticeCardSkeleton({ className, isFirstLoad = false }) {
  const Wrapper = isFirstLoad ? ShimmerWrapper : StaticSkeleton;

  return (
    <Wrapper enabled={isFirstLoad}>
      <div className={cn("rounded-lg border p-4 space-y-3", className)}>
        <div className="flex justify-between items-start">
          <div className="flex-1 space-y-2">
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
          </div>
          <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24" />
          <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </Wrapper>
  );
}

// Gallery Grid Skeleton - Adaptive version
export function GalleryGridSkeleton({
  items = 8,
  className,
  isFirstLoad = false,
}) {
  const Wrapper = isFirstLoad ? ShimmerWrapper : StaticSkeleton;

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",
        className
      )}
    >
      {Array.from({ length: items }, (_, i) => (
        <Wrapper key={i} enabled={isFirstLoad}>
          <ImageSkeleton aspectRatio="square" showIcon={!isFirstLoad} />
        </Wrapper>
      ))}
    </div>
  );
}
