import Link from "next/link";
import React from "react";
import Head from "next/head";

const Circular = () => {
  const circulars = [
    {
      id: 1,
      title: "মোহাম্মদপুর মহিলা কলেজে একাদশ শ্রেণীতে ভর্তি চলছে",
      description:
        "২০২৫-২০২৬ শিক্ষাবর্ষে মোহাম্মদপুর মহিলা কলেজে একাদশ শ্রেণীতে ছাত্রী ভর্তির আবেদন চলছে।",
      pdfSrc: "/circulars/admission_2025-2026.pdf",
      publishedDate: "July 2025",
      isLatest: true,
    },
    {
      id: 2,
      title: "মোহাম্মদপুর মহিলা কলেজে অনার্স প্রফেশনাল কোর্সে ভর্তি চলছে",
      description:
        "জাতীয় বিশ্ববিদ্যালয়ের অধীনে ২০২৪-২০২৫ শিক্ষাবর্ষে মোহাম্মদপুর মহিলা কলেজে ১ম বর্ষ স্নাতক (সম্মান) প্রফেশনাল কোর্সে ছাত্রী ভতির আবেদন চলছে।",
      pdfSrc: "/circulars/professional_admission.pdf",
      publishedDate: "June 2025",
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
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
              Admission Circulars
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-700 dark:to-teal-800 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          </div>

          {/* Desktop/Tablet Table View */}
          <div className="hidden md:block bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 mb-12 sm:mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white dark:from-emerald-800 dark:to-teal-900">
                  <tr>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-left font-semibold uppercase tracking-wider text-xs lg:text-sm">
                      #
                    </th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-left font-semibold uppercase tracking-wider text-xs lg:text-sm">
                      Title
                    </th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-left font-semibold uppercase tracking-wider text-xs lg:text-sm">
                      Description
                    </th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-left font-semibold uppercase tracking-wider text-xs lg:text-sm">
                      Published
                    </th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-left font-semibold uppercase tracking-wider text-xs lg:text-sm">
                      Status
                    </th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-center font-semibold uppercase tracking-wider text-xs lg:text-sm">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {circulars.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="text-center py-8 text-gray-500 dark:text-gray-400"
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
                        <td className="px-4 lg:px-6 py-3 lg:py-4 text-gray-900 dark:text-white font-medium">
                          {index + 1}
                        </td>
                        <td className="px-4 lg:px-6 py-3 lg:py-4 text-gray-900 dark:text-white font-semibold">
                          {circular.title}
                        </td>
                        <td className="px-4 lg:px-6 py-3 lg:py-4 text-gray-600 dark:text-gray-300 max-w-xs">
                          <p className="line-clamp-2">{circular.description}</p>
                        </td>
                        <td className="px-4 lg:px-6 py-3 lg:py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">
                          {circular.publishedDate}
                        </td>
                        <td className="px-4 lg:px-6 py-3 lg:py-4">
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
                        <td className="px-4 lg:px-6 py-3 lg:py-4 text-center">
                          <Link
                            href={circular.pdfSrc}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Download ${circular.title} PDF`}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-800 dark:hover:bg-emerald-900 dark:text-emerald-100 px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-1 lg:gap-2 text-xs lg:text-sm"
                          >
                            <svg
                              className="w-3 h-3 lg:w-4 lg:h-4"
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
                            <span className="hidden lg:inline">Download</span>
                            <span className="lg:hidden">PDF</span>
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4 mb-12">
            {circulars.length === 0 ? (
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center border border-gray-100 dark:border-gray-800">
                <p className="text-gray-500 dark:text-gray-400">
                  No circulars available at this moment.
                </p>
              </div>
            ) : (
              circulars.map((circular, index) => (
                <div
                  key={circular.id}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-semibold">
                        {index + 1}
                      </span>
                      {circular.isLatest ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                          Latest
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                          Archive
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                      {circular.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                      {circular.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-gray-500 dark:text-gray-400 text-sm">
                        <span className="font-medium">Published:</span>{" "}
                        {circular.publishedDate}
                      </div>

                      <Link
                        href={circular.pdfSrc}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Download ${circular.title} PDF`}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-800 dark:hover:bg-emerald-900 px-4 py-2 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2 text-sm"
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
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Info Section */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Important Information
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-700 dark:to-teal-800 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-sm">
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
                <div className="text-center sm:col-span-1" key={i}>
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-emerald-600 dark:text-emerald-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
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

export default Circular;
