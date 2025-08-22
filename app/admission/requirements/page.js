"use client";
import Image from "next/image";
import React from "react";
import { BadgeCheck, Star, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const highlights = [
  "নারী শিক্ষার অন্যতম শ্রেষ্ঠ শিক্ষা প্রতিষ্ঠান।",
  "এক ঝাঁক মেধাবী, দক্ষ ও আন্তরিক শিক্ষক-শিক্ষিকা দ্বারা পাঠদান।",
  "Smart Board এর মাধ্যমে পাঠদান।",
  "গাইড শিক্ষকদের দ্বারা পরিচালিত।",
  "আইডিয়াল ল্যাব সুবিধা।",
  "সম্পূর্ণ কলেজ ক্যাম্পাস সিসি ক্যামেরা দ্বারা নিয়ন্ত্রিত এবং এসি সম্বলিত হলরুম।",
  "ছাত্রী কাউন্সেলিং।",
];

const AdmissionRequirements = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-white mb-4 leading-tight">
              Admission Requirements
            </h1>
            <div className="inline-block">
              <p className="text-sm sm:text-base md:text-lg font-medium text-red-600 dark:text-yellow-200 bg-yellow-200 dark:bg-gray-800 px-3 sm:px-4 py-2 rounded-md shadow-sm">
                ২০২৫-২৬ শিক্ষাবর্ষে – বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক শাখায়
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>(আবাসিক ও অনাবাসিক)
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Column - Eligibility & Fees */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  ভর্তির তথ্য
                </h2>

                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 dark:border-green-400 pl-4 bg-green-50 dark:bg-green-900 p-3 rounded-r-lg transition-colors">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      ভর্তির যোগ্যতা
                    </h3>
                    <ul className="text-sm space-y-1">
                      <li className="flex justify-between">
                        <span>🔹 বিজ্ঞান:</span>
                        <span className="font-semibold">GPA 4.00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>🔹 ব্যবসায় শিক্ষা:</span>
                        <span className="font-semibold">GPA 3.00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>🔹 মানবিক:</span>
                        <span className="font-semibold">GPA 2.50</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 dark:border-red-400 pl-4 bg-red-50 dark:bg-red-900 p-3 rounded-r-lg transition-colors">
                    <h3 className="font-semibold text-red-700 dark:text-red-200 mb-2">
                      আবেদন ফি
                    </h3>
                    <p className="text-lg font-bold text-gray-800 dark:text-white">
                      ২৩০/- টাকা
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      অনলাইন পেমেন্ট
                    </p>
                  </div>
                </div>
              </div>

              {/* Special Offer */}
              <div className="bg-gradient-to-r from-pink-100 to-red-100 dark:from-pink-900 dark:to-red-900 rounded-xl p-4 sm:p-6 border border-pink-200 dark:border-pink-700 transition-colors">
                <div className="text-center">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-sm sm:text-base font-bold text-red-600 dark:text-red-200 leading-relaxed">
                    জিপিএ ৫.০০ প্রাপ্তদের বিনা বেতনে পড়ার সুযোগ!
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Column - Required Documents */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-4 sm:p-6 border-l-4 border-blue-500 dark:border-blue-400 transition-colors">
                <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-4 text-base sm:text-lg">
                  আবেদনের সময় প্রয়োজনীয় কাগজপত্র
                </h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-800 dark:text-gray-100">
                      এসএসসি পরীক্ষার প্রবেশপত্র ও রেজি: কার্ডের কপি
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-800 dark:text-gray-100">
                      এসএসসি পরীক্ষার নম্বরপত্রের প্রিন্টআউট কপি
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-800 dark:text-gray-100">
                      দু&#39;টি মোবাইল নম্বর
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-800 dark:text-gray-100">
                      অনলাইন আবেদন ফি ২৩০/- টাকা
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900 rounded-xl p-4 sm:p-6 border-l-4 border-green-500 dark:border-green-400 transition-colors">
                <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-base sm:text-lg">
                  ভর্তিকালীন প্রয়োজনীয় কাগজপত্র
                </h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 dark:bg-green-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-800 dark:text-gray-100">
                      মূল ট্রান্সক্রিপ্ট ও ফটোকপি ১ কপি
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 dark:bg-green-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-800 dark:text-gray-100">
                      প্রশংসাপত্রের ফটোকপি ১ কপি
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 dark:bg-green-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-800 dark:text-gray-100">
                      পাসপোর্ট সাইজের ছবি ৩ কপি
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Features & Contact */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors">
                <div className="border-l-4 border-red-500 dark:border-red-400 pl-4 mb-6 bg-red-50 dark:bg-red-900 p-3 rounded-r-lg transition-colors">
                  <h3 className="font-bold text-red-700 dark:text-red-200 mb-2">
                    আবাসিক সুবিধা
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-100 leading-relaxed">
                    স্বল্প খরচে নিজস্ব হোস্টেলে থাকা-খাওয়া এবং পড়াশোনার উন্নত
                    পরিবেশ।
                  </p>
                </div>

                <h3 className="font-bold text-blue-700 dark:text-blue-200 mb-4 text-base sm:text-lg">
                  বৈশিষ্ট্যসমূহ:
                </h3>
                <ul className="space-y-2">
                  {highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <BadgeCheck className="text-green-600 dark:text-green-300 w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 dark:text-gray-100 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Apply Section */}
          <div className="mt-8 md:mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-900 dark:to-green-900 rounded-xl p-4 sm:p-6 md:p-8 text-white transition-colors">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    যোগাযোগ করুন
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      01950-703703
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      01307-078788
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      01756-086688
                    </p>
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <Link
                    href="/admission/form"
                    className="inline-block bg-white dark:bg-gray-900 text-blue-600 dark:text-white font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 shadow-lg text-sm sm:text-base"
                  >
                    এখনই আবেদন করুন
                  </Link>
                  <p className="mt-2 text-xs sm:text-sm opacity-90">
                    ⏰ আবেদনের শেষ তারিখ: শীঘ্রই ঘোষণা
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionRequirements;
