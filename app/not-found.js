"use client";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-lg w-full mx-auto rounded-2xl shadow-2xl bg-white dark:bg-gray-900 overflow-hidden print:shadow-none print:rounded-none border border-gray-300 dark:border-gray-800">
        <div className="p-8 text-center">
          <svg
            className="w-12 h-12 m-auto text-blue-500 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
            Oops! Page Not Found
          </h2>
          {/* Animated 404 Icon */}
          <div className="mb-6 flex justify-center">
            <span className="relative inline-block">
              <span className="text-8xl font-extrabold text-gray-200 dark:text-gray-700 select-none">
                404
              </span>
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none "></span>
            </span>
          </div>

          <p className="text-base mb-6 text-gray-600 dark:text-gray-300">
            The page you&apos;re looking for isn&apos;t here.
            <br />
            It may have been moved, deleted, or the URL might be incorrect.
          </p>
          <Link href="/" className="inline-block">
            <button className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold shadow-md hover:bg-blue-500 transition-all duration-200 ease-in-out">
              Go to Homepage
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
