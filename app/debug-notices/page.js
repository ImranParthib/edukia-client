"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function DebugNoticesPage() {
  const [allNotices, setAllNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllNotices = async () => {
      try {
        console.log("🔍 DEBUG: Fetching ALL notices from database...");

        if (!db) {
          console.error("❌ Database not initialized");
          setError("Database not initialized");
          return;
        }

        const noticesRef = collection(db, "notices");
        const querySnapshot = await getDocs(noticesRef);

        console.log(
          "📊 Total documents in notices collection:",
          querySnapshot.size
        );

        const notices = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          notices.push({
            id: doc.id,
            ...data,
            createdAtOriginal: data.createdAt,
            createdAtString:
              data.createdAt?.toDate?.()?.toString() || "No date",
          });

          console.log("📄 Notice found:", {
            id: doc.id,
            title: data.title || "No title",
            status: data.status || "No status",
            showOnHomepage: data.showOnHomepage,
            createdAt: data.createdAt?.toDate?.()?.toString() || "No date",
          });
        });

        setAllNotices(notices);
        console.log("✅ All notices loaded:", notices.length);
      } catch (error) {
        console.error("❌ Error fetching all notices:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNotices();
  }, []);

  if (loading) return <div className="p-8">Loading debug info...</div>;

  if (error) return <div className="p-8 text-red-600">Error: {error}</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Debug: All Notices in Database
      </h1>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p>
          Total notices in database: <strong>{allNotices.length}</strong>
        </p>
        <p>
          Published notices:{" "}
          <strong>
            {allNotices.filter((n) => n.status === "published").length}
          </strong>
        </p>
        <p>
          Notices with showOnHomepage=true:{" "}
          <strong>
            {allNotices.filter((n) => n.showOnHomepage === true).length}
          </strong>
        </p>
        <p>
          Published + showOnHomepage=true:{" "}
          <strong>
            {
              allNotices.filter(
                (n) => n.status === "published" && n.showOnHomepage === true
              ).length
            }
          </strong>
        </p>
      </div>

      {allNotices.length === 0 ? (
        <div className="p-4 bg-yellow-50 rounded-lg">
          <p>No notices found in the database at all.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {allNotices.map((notice) => (
            <div key={notice.id} className="border p-4 rounded-lg">
              <h3 className="font-semibold text-lg">
                {notice.title || "No title"}
              </h3>
              <div className="mt-2 text-sm space-y-1">
                <p>
                  <strong>ID:</strong> {notice.id}
                </p>
                <p>
                  <strong>Status:</strong> {notice.status || "No status"}
                </p>
                <p>
                  <strong>showOnHomepage:</strong>{" "}
                  {notice.showOnHomepage?.toString() || "undefined"}
                </p>
                <p>
                  <strong>Created:</strong> {notice.createdAtString}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {notice.description || "No description"}
                </p>

                <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
                  <strong>Raw data:</strong>
                  <pre>{JSON.stringify(notice, null, 2)}</pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
