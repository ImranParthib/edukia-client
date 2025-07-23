"use client";
import { studentResults } from "@/data/studentResults";
export default function ResultPage() {
  const student = studentResults[0];

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4 text-primary">Student Result</h1>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 mb-6">
        <div className="mb-2">
          <span className="font-semibold">Name:</span> {student.name}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Father's Name:</span>{" "}
          {student.fatherName}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Mother's Name:</span>{" "}
          {student.motherName}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Institution:</span>{" "}
          {student.institution}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Centre:</span> {student.centre}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Group:</span> {student.group}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Type:</span> {student.type}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Session:</span> {student.session}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Publication Date:</span>{" "}
          {student.publicationDate}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 mb-6">
        <h2 className="font-semibold mb-2">Subjects</h2>
        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2 text-left">Subject</th>
              <th className="p-2 text-left">Letter Grade</th>
              <th className="p-2 text-left">Grade Point</th>
            </tr>
          </thead>
          <tbody>
            {student.subjects.map((subj) => (
              <tr key={subj.name}>
                <td className="p-2">{subj.name}</td>
                <td className="p-2">{subj.letterGrade}</td>
                <td className="p-2">{subj.gradePoint}</td>
              </tr>
            ))}
            {student.optionalSubject && (
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="p-2 font-semibold">
                  Additional: {student.optionalSubject.name}
                </td>
                <td className="p-2">{student.optionalSubject.letterGrade}</td>
                <td className="p-2">
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

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
        <div className="mb-2">
          <span className="font-semibold">GPA (without additional):</span>{" "}
          {student.gpaWithoutAdditional}
        </div>
        <div>
          <span className="font-semibold">GPA (with additional):</span>{" "}
          {student.gpaWithAdditional}
        </div>
      </div>
    </main>
  );
}
