import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Welcome to Edukia
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your comprehensive education management system for modern learning.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Students
            </h3>
            <p className="text-gray-600">
              Manage student enrollment and progress
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Courses
            </h3>
            <p className="text-gray-600">
              Create and organize educational content
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Analytics
            </h3>
            <p className="text-gray-600">Track performance and insights</p>
          </div>
        </div>
      </div>
    </div>
  );
}
