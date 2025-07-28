"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";

const CircularsPage = () => {
  const circulars = [
    {
      id: 1,
      title: "HSC Admission Circular 2025-2026",
      description:
        "Complete admission guidelines, eligibility criteria, and application process for the academic year 2025-26.",
      pdfSrc: "/circulars/admission_2025-2026.pdf",
      publishedDate: "July 2025",
      isLatest: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Admission Circulars | Edukia</title>
        <meta
          name="description"
          content="Official admission circulars for the academic year. Stay updated with the latest announcements."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Admission Circulars
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-700 dark:to-teal-800 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Table */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white dark:from-emerald-800 dark:to-teal-900">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">
                      Published
                    </th>
                    <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-center font-semibold uppercase tracking-wider">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {circulars.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="text-center py-6 text-gray-500 dark:text-gray-400"
                      >
                        No circulars available at this moment.
                      </td>
                    </tr>
                  ) : (
                    circulars.map((circular, index) => (
                      <tr
                        key={circular.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-gray-900 dark:text-white font-semibold">
                          {circular.title}
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-300 max-w-xs">
                          <p className="line-clamp-2">{circular.description}</p>
                        </td>
                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">
                          {circular.publishedDate}
                        </td>
                        <td className="px-6 py-4">
                          {circular.isLatest ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                              Latest
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                              Archive
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link
                            href={circular.pdfSrc}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Download ${circular.title} PDF`}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-800 dark:hover:bg-emerald-900 dark:text-emerald-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Download
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-800">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Important Information
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-700 dark:to-teal-800 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-sm">
              {[
                {
                  title: "Regular Updates",
                  text: "Check back regularly for new circulars and updates",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  color: "emerald",
                },
                {
                  title: "Official Documents",
                  text: "All circulars are official and verified",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  color: "green",
                },
                {
                  title: "Need Help?",
                  text: "Contact admissions office for assistance",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  color: "purple",
                },
              ].map((item, i) => (
                <div className="text-center" key={i}>
                  <div
                    className={`w-12 h-12 bg-${item.color}-100 dark:bg-${item.color}-900 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <svg
                      className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-300`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircularsPage;
