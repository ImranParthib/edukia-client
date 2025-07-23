"use client";
import { useState } from "react";
import { studentResults } from "@/data/studentResults";

export default function ResultPage() {
  const [roll, setRoll] = useState("");
  const [student, setStudent] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = studentResults.find((s) => s.rollNumber === roll.trim());
    setStudent(found || null);
  };

  return (
    <main className="max-w-3xl mx-auto py-8 px-2 print:px-0 print:py-0">
      <div className="border border-gray-400 rounded-lg bg-white dark:bg-gray-900 shadow-lg p-0 print:shadow-none print:border print:rounded-none">
        {/* Header */}
        <div className="border-b border-gray-300 py-6 px-4 text-center">
          <h1 className="text-2xl font-bold uppercase tracking-wider mb-1 text-gray-800 dark:text-gray-100">
            Government of the People&apos;s Republic of Bangladesh
          </h1>
          <h2 className="text-lg font-semibold tracking-wide mb-1 text-gray-700 dark:text-gray-200">
            Board of Intermediate and Secondary Education
          </h2>
          <h3 className="text-lg font-bold tracking-wide text-primary mb-2">
            Higher Secondary Certificate (HSC) Examination Result
          </h3>
          <div className="text-base font-medium text-gray-700 dark:text-gray-200">
            Institution: Mohammad Pur Mohila College
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
            className="border rounded px-3 py-2 flex-1 max-w-xs"
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </form>

        {student ? (
          <div className="px-4 pb-8 pt-2 print:pt-8">
            {/* Student Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-base mb-6">
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
            <div className="overflow-x-auto">
              <table className="w-full border text-sm text-center">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
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
                    <tr key={subj.name}>
                      <td className="p-2 border text-left">{subj.name}</td>
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
                      <td className="p-2 border">{subj.letterGrade}</td>
                      <td className="p-2 border">{subj.gradePoint}</td>
                    </tr>
                  ))}
                  {student.optionalSubject && (
                    <tr className="bg-gray-50 dark:bg-gray-800">
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
                      <td className="p-2 border">
                        {student.optionalSubject.letterGrade}
                      </td>
                      <td className="p-2 border">
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
            <div className="flex flex-col sm:flex-row justify-end gap-8 mt-6 text-base">
              <div>
                <span className="font-semibold">GPA (without additional):</span>{" "}
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
        ) : (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-center">
            <span className="text-gray-500">
              No student found. Please enter a valid roll number.
            </span>
          </div>
        )}
      </div>
    </main>
  );
}
