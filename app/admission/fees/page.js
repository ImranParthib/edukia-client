"use client";
import React from "react";

const FeesPage = () => {
  const feeStructure = {
    admissionFee: "৳৭,৫০০/-",
    monthlyTuition: "৳৭০০/- প্রতি মাসে",
  };

  return (
    <section className="w-full px-4 py-10 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-lg transition-colors">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 dark:text-white">
          মোহাম্মদপুর মহিলা কলেজ – ভর্তি এবং মাসিক ফি
        </h1>

        <ul className="space-y-4 text-lg">
          <li>
            <span className="font-semibold text-gray-800 dark:text-gray-100">🎓 ভর্তি ফি:</span>{" "}
            <span className="text-red-600 dark:text-red-400 font-bold">
              {feeStructure.admissionFee}
            </span>
          </li>
          <li>
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              🕓 মাসিক টিউশন ফি:
            </span>{" "}
            <span className="text-red-600 dark:text-red-400 font-bold">
              {feeStructure.monthlyTuition}
            </span>
          </li>
        </ul>

        <div className="mt-8">
          <p className="text-gray-700 dark:text-gray-300">
            ⚠️ সঠিক তথ্যের জন্য কলেজ অফিস বা অফিসিয়াল নোটিশ দেখতে অনুরোধ করছি।
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-300">
            ✅ ফি নিশ্চিত করার উপায়:
          </h2>
          <ol className="list-decimal ml-5 space-y-2 text-gray-800 dark:text-gray-100">
            <li>কলেজ নোটিশ বোর্ড বা অফিসে সরাসরি খোঁজ নিন</li>
            <li>কলেজের ফোন নম্বরে যোগাযোগ করুন</li>
            <li>
              ঢাকা বোর্ড বা জাতীয় বিশ্ববিদ্যালয়ের ওয়েবসাইটে বিজ্ঞপ্তি দেখুন
            </li>
          </ol>
        </div>

        <div className="mt-10 p-5 rounded-lg bg-blue-50 dark:bg-blue-900 transition-colors">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200">
            📞 যোগাযোগের তথ্য:
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-100">
            মোহাম্মদপুর মহিলা কলেজ <br />
            নুরজাহান রোড, মোহাম্মদপুর, ঢাকা – EIIN: 108255
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-100">
            ফোন:{" "}
            <a href="tel:01917555322" className="text-blue-600 dark:text-blue-300 underline">
              01917-555322
            </a>
            ,{" "}
            <a href="tel:01819297268" className="text-blue-600 dark:text-blue-300 underline">
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
