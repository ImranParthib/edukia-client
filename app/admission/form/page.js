import React from "react";
import { Download, FileText } from "lucide-react";

const AdmissionFormPage = () => {
  const formPath = "/form/HSC Admission Application Form 2025-2026.pdf";

  return (
    <section className="min-h-screen w-full px-4 py-10    transition-colors">
      <div className="max-w-3xl mx-auto  p-6 md:p-10 rounded-lg ">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          একাদশ শ্রেণির ভর্তি ফর্ম – ২০২৫-২৬
        </h1>

        <p className="mb-6">
          মোহাম্মদপুর মহিলা কলেজে একাদশ শ্রেণির ভর্তি ফর্ম নিচের লিংক থেকে
          ডাউনলোড করুন। ফর্মটি পূরণ করে কলেজ অফিসে নির্ধারিত সময়ের মধ্যে জমা
          দিন।
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={formPath}
            download
            className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded shadow transition"
          >
            <Download className="w-5 h-5" />
            ফর্ম ডাউনলোড করুন
          </a>

          <a
            href={formPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow transition"
          >
            <FileText className="w-5 h-5" />
            ফর্ম দেখুন (DOC ফরম্যাট)
          </a>
        </div>

        <p className="text-sm mt-6 text-muted-foreground">
          ফর্মটি .doc ফরম্যাটে দেওয়া হয়েছে। এটি Microsoft Word বা Google Docs এ
          খুলতে পারবেন।
        </p>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-primary mb-2">
            ফর্ম জমা দেওয়ার ঠিকানা:
          </h3>
          <p>
            মোহাম্মদপুর মহিলা কলেজ <br />
            নুরজাহান রোড, মোহাম্মদপুর, ঢাকা
          </p>
          <p className="mt-2">ফোন: 01917-555322</p>
        </div>
      </div>
    </section>
  );
};
export default AdmissionFormPage;
