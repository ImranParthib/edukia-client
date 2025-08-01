"use client";
import { useRef, useState } from "react";
import { studentResults } from "@/data/studentResults";
import Image from "next/image";

export default function ResultPage() {
  const [roll, setRoll] = useState("");
  const [student, setStudent] = useState(null);
  const resultRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = studentResults.find((s) => s.rollNumber === roll.trim());
    setStudent(found || null);
  };

  const handleDownloadPDF = async () => {
    if (resultRef.current) {
      const html2pdf = (await import("html2pdf.js")).default;
      html2pdf()
        .set({
          margin: 0.5,
          filename: `${student.name}_result.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        })
        .from(resultRef.current)
        .save();
    }
  };

  return (
    <main className="max-w-3xl mx-auto py-8 px-2 print:px-0 print:py-0">
      {/* Download Button placed outside the result card */}

      <div className="border border-gray-400 rounded-lg bg-white dark:bg-gray-900 shadow-lg p-0 print:shadow-none print:border print:rounded-none">
        {/* Official HSC Result Sheet Header */}
        <div className="border-b border-gray-300 py-6 px-4 text-center">
          <div className="flex flex-col items-center gap-1">
            <Image
              src="/images/bd-govt-logo.png"
              alt="Bangladesh Govt Logo"
              width={48}
              height={48}
              className="h-12 w-12 mx-auto mb-2 print:mb-0"
              style={{ filter: "grayscale(1)" }}
              onError={(e) => (e.target.style.display = "none")}
            />
            <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-wider mb-1 text-gray-800 dark:text-gray-100">
              Government of the People&apos;s Republic of Bangladesh
            </h1>
            <h2 className="text-base sm:text-lg font-semibold tracking-wide mb-1 text-gray-700 dark:text-gray-200">
              Board of Intermediate and Secondary Education
            </h2>
            <h3 className="text-base sm:text-lg font-bold tracking-wide text-primary mb-2">
              Higher Secondary Certificate (HSC) Examination Result
            </h3>
            <div className="text-base font-medium text-gray-700 dark:text-gray-200">
              Institution: Mohammad Pur Mohila College
            </div>
          </div>
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="my-6 flex gap-2 justify-center print:hidden"
        >
          <input
            type="text"
            placeholder="Enter Roll Number"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            className="border border-gray-400 focus:border-primary rounded px-3 py-2 flex-1 max-w-xs outline-none focus:ring-2 focus:ring-primary/30 transition"
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded font-semibold shadow hover:bg-primary/90 transition"
          >
            Search
          </button>
        </form>

        {student ? (
          <>
            <div ref={resultRef} className="px-4 pb-8 pt-2 print:pt-8">
              {/* Student Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-base mb-6 mt-4">
                <div>
                  <span className="font-semibold">Name:</span> {student.name}
                </div>
                <div>
                  <span className="font-semibold">Roll Number:</span>{" "}
                  {student.rollNumber}
                </div>
                <div>
                  <span className="font-semibold">Father&apos;s Name:</span>{" "}
                  {student.fatherName}
                </div>
                <div>
                  <span className="font-semibold">Mother&apos;s Name:</span>{" "}
                  {student.motherName}
                </div>
                <div>
                  <span className="font-semibold">Group:</span> {student.group}
                </div>
                <div>
                  <span className="font-semibold">Type:</span> {student.type}
                </div>
                <div>
                  <span className="font-semibold">Session:</span>{" "}
                  {student.session}
                </div>
                <div>
                  <span className="font-semibold">Publication Date:</span>{" "}
                  {student.publicationDate}
                </div>
              </div>

              {/* Result Table */}
              <div className="overflow-x-auto mt-2">
                <table className="w-full border text-sm text-center">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800 text-xs uppercase tracking-wider">
                      <th className="p-2 border">Subject</th>
                      <th className="p-2 border">CQ</th>
                      <th className="p-2 border">MCQ</th>
                      <th className="p-2 border">Practical</th>
                      <th className="p-2 border">Total %</th>
                      <th className="p-2 border">Letter Grade</th>
                      <th className="p-2 border">Grade Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.subjects.map((subj) => (
                      <tr
                        key={subj.name}
                        className="even:bg-gray-50 dark:even:bg-gray-900"
                      >
                        <td className="p-2 border text-left font-medium">
                          {subj.name}
                        </td>
                        <td className="p-2 border">
                          {subj.cq !== undefined ? subj.cq : "-"}
                        </td>
                        <td className="p-2 border">
                          {subj.mcq !== undefined ? subj.mcq : "-"}
                        </td>
                        <td className="p-2 border">
                          {subj.practical !== undefined ? subj.practical : "-"}
                        </td>
                        <td className="p-2 border">
                          {subj.totalPercentage !== undefined
                            ? subj.totalPercentage + "%"
                            : "-"}
                        </td>
                        <td className="p-2 border font-semibold">
                          {subj.letterGrade}
                        </td>
                        <td className="p-2 border font-semibold">
                          {subj.gradePoint}
                        </td>
                      </tr>
                    ))}
                    {student.optionalSubject && (
                      <tr className="bg-yellow-50 dark:bg-yellow-900">
                        <td className="p-2 border font-semibold text-left">
                          Additional: {student.optionalSubject.name}
                        </td>
                        <td className="p-2 border">
                          {student.optionalSubject.cq !== undefined
                            ? student.optionalSubject.cq
                            : "-"}
                        </td>
                        <td className="p-2 border">
                          {student.optionalSubject.mcq !== undefined
                            ? student.optionalSubject.mcq
                            : "-"}
                        </td>
                        <td className="p-2 border">
                          {student.optionalSubject.practical !== undefined
                            ? student.optionalSubject.practical
                            : "-"}
                        </td>
                        <td className="p-2 border">
                          {student.optionalSubject.totalPercentage !== undefined
                            ? student.optionalSubject.totalPercentage + "%"
                            : "-"}
                        </td>
                        <td className="p-2 border font-semibold">
                          {student.optionalSubject.letterGrade}
                        </td>
                        <td className="p-2 border font-semibold">
                          {student.optionalSubject.gradePoint}
                          {student.optionalSubject.additionalGP
                            ? ` (+${student.optionalSubject.additionalGP})`
                            : ""}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* GPA Summary */}
              <div className="flex flex-col sm:flex-row justify-end gap-8 mt-6 text-base border-t pt-4">
                <div>
                  <span className="font-semibold">
                    GPA (without additional):
                  </span>{" "}
                  {student.gpaWithoutAdditional}
                </div>
                <div>
                  <span className="font-semibold">GPA (with additional):</span>{" "}
                  {student.gpaWithAdditional}
                </div>
              </div>

              {/* Signature Section */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 print:mt-20">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-40 border-b-2 border-gray-400 mb-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Guardian&apos;s Signature
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-40 border-b-2 border-gray-400 mb-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Class Teacher&apos;s Signature
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-40 border-b-2 border-gray-400 mb-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Exam Controller&apos;s Signature
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-40 border-b-2 border-gray-400 mb-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Principal&apos;s Signature
                  </span>
                </div>
              </div>
            </div>
            
          </>
        ) : (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-center">
            <span className="text-gray-500">
              No student found. Please enter a valid roll number.
            </span>
          </div>
        )}
      </div>
      {student && (
        <div className="flex justify-center mt-6 print:hidden">
          <button
            onClick={handleDownloadPDF}
            className="bg-primary text-white px-4 py-2 rounded font-semibold shadow hover:bg-primary/90 transition"
          >
            Download as PDF
          </button>
        </div>
      )}
    </main>
  );
}
