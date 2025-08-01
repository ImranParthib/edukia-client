"use client";
import React from "react";

const FeesPage = () => {
  const feeStructure = {
    hsc: {
      admissionAndOthers: {
        admissionFee: "৳৭,৫০০/-",
        monthlySalary: "৳৯০০/-",
        eleventhTwelfthExamFee: "৳৪২,৭০০/-",
      },
      hostelInfo: {
        hostelAdmissionFee: "৳৪,০০০/-",
        seatRent: "৳২,০০০/-",
        foodAllowance: "৳২,৫০০/- মাসিক ফি (১২×২৫০০=৩০,০০০/-)",
        note: "(একাদশীন / ৩ কিস্তিতে পরিশোধযোগ্য)",
      },
      monthlyTuition: "৳৭০০/- প্রতি মাসে",
    },
    honours: {
      admissionFee: "আসছে...",
      monthlyTuition: "আসছে...",
    },
    masters: {
      admissionFee: "আসছে...",
      monthlyTuition: "আসছে...",
    },
  };

  return (
    <section className="w-full px-4 py-10 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-lg transition-colors">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800 dark:text-white">
          মোহাম্মদপুর মহিলা কলেজ – ফি বিবরণ
        </h1>

        {/* HSC Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">
            🎓 এইচএসসি (ইন্টারমিডিয়েট)
          </h2>

          {/* Admission and Regular Fees */}
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              ভর্তি ও অন্যান্য ফি
            </h3>
            <ul className="space-y-2 text-lg">
              <li>
                <strong className="text-gray-800 dark:text-gray-100">
                  ভর্তি ফি:
                </strong>{" "}
                <span className="text-red-600 dark:text-red-400 font-bold">
                  {feeStructure.hsc.admissionAndOthers.admissionFee}
                </span>
              </li>
              <li>
                <strong className="text-gray-800 dark:text-gray-100">
                  মাসিক বেতন:
                </strong>{" "}
                <span className="text-red-600 dark:text-red-400 font-bold">
                  {feeStructure.hsc.admissionAndOthers.monthlySalary}
                </span>
              </li>
              <li>
                <strong className="text-gray-800 dark:text-gray-100">
                  একাদশ ও দ্বাদশ শ্রেণির সংমিষ্ট টাকা:
                </strong>{" "}
                <span className="text-red-600 dark:text-red-400 font-bold">
                  {feeStructure.hsc.admissionAndOthers.eleventhTwelfthExamFee}
                </span>
              </li>
            </ul>
          </div>

          {/* Hostel Information */}
          <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              🏠 হোস্টেল ভর্তি তথ্য
            </h3>
            <ul className="space-y-2 text-lg">
              <li>
                <strong className="text-gray-800 dark:text-gray-100">
                  হোস্টেল ভর্তি ফি (সেশন চার্জ বার্ষিক):
                </strong>{" "}
                <span className="text-orange-600 dark:text-orange-400 font-bold">
                  {feeStructure.hsc.hostelInfo.hostelAdmissionFee}
                </span>
              </li>
              <li>
                <strong className="text-gray-800 dark:text-gray-100">
                  সীট ভাড়া (মাসিক):
                </strong>{" "}
                <span className="text-orange-600 dark:text-orange-400 font-bold">
                  {feeStructure.hsc.hostelInfo.seatRent}
                </span>
              </li>
              <li>
                <strong className="text-gray-800 dark:text-gray-100">
                  খাওয়া বাবদ:
                </strong>{" "}
                <span className="text-orange-600 dark:text-orange-400 font-bold">
                  {feeStructure.hsc.hostelInfo.foodAllowance}
                </span>
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400 italic">
                {feeStructure.hsc.hostelInfo.note}
              </li>
            </ul>
          </div>

          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded border-l-4 border-blue-400">
            <p className="text-center text-lg font-semibold text-blue-800 dark:text-blue-200">
              মূল্যবোধ সম্পন্ন আদর্শ মানুষ গড়ে তোলাই আমাদের অঙ্গীকার
            </p>
          </div>
        </div>

        {/* Honours Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">
            🎓 অনার্স প্রোগ্রাম
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <strong className="text-gray-800 dark:text-gray-100">
                ভর্তি ফি:
              </strong>{" "}
              <span className="text-red-600 dark:text-red-400 font-bold">
                {feeStructure.honours.admissionFee}
              </span>
            </li>
            <li>
              <strong className="text-gray-800 dark:text-gray-100">
                মাসিক টিউশন ফি:
              </strong>{" "}
              <span className="text-red-600 dark:text-red-400 font-bold">
                {feeStructure.honours.monthlyTuition}
              </span>
            </li>
          </ul>
        </div>

        {/* Masters Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">
            🎓 মাস্টার্স প্রোগ্রাম
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <strong className="text-gray-800 dark:text-gray-100">
                ভর্তি ফি:
              </strong>{" "}
              <span className="text-red-600 dark:text-red-400 font-bold">
                {feeStructure.masters.admissionFee}
              </span>
            </li>
            <li>
              <strong className="text-gray-800 dark:text-gray-100">
                মাসিক টিউশন ফি:
              </strong>{" "}
              <span className="text-red-600 dark:text-red-400 font-bold">
                {feeStructure.masters.monthlyTuition}
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-6 text-gray-700 dark:text-gray-300">
          ⚠️ বিস্তারিত তথ্যের জন্য কলেজ অফিস অথবা অফিসিয়াল নোটিশ দেখুন।
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">
            ✅ ফি জানার উপায়:
          </h3>
          <ol className="list-decimal ml-5 space-y-2 text-gray-800 dark:text-gray-100">
            <li>কলেজ নোটিশ বোর্ডে দেখুন</li>
            <li>কলেজ অফিসে সরাসরি যোগাযোগ করুন</li>
            <li>জাতীয় বিশ্ববিদ্যালয় বা শিক্ষা বোর্ডের ওয়েবসাইট দেখুন</li>
          </ol>
        </div>

        <div className="mt-10 p-5 rounded-lg bg-blue-50 dark:bg-blue-900 transition-colors">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200">
            📞 যোগাযোগ:
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-100">
            মোহাম্মদপুর মহিলা কলেজ <br />
            নুরজাহান রোড, মোহাম্মদপুর, ঢাকা – EIIN: 108255
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-100">
            ফোন:{" "}
            <a
              href="tel:01917555322"
              className="text-blue-600 dark:text-blue-300 underline"
            >
              01917-555322
            </a>
            ,{" "}
            <a
              href="tel:01819297268"
              className="text-blue-600 dark:text-blue-300 underline"
            >
              01819-297268
            </a>
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-800 px-6 py-3 rounded shadow transition duration-200"
          >
            এখনই যোগাযোগ করুন
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeesPage;
