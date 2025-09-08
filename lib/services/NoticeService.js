/**
 * Notice Service for Frontend (edukia-client)
 * Fetches notices from Firebase Firestore for public display
 */
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export class NoticeService {
  static async getPublishedNotices(limitCount = 10) {
    try {
      const noticesRef = collection(db, "notices");
      const q = query(
        noticesRef,
        where("status", "==", "published"),
        orderBy("createdAt", "desc"),
        limit(limitCount)
      );

      const querySnapshot = await getDocs(q);
      const notices = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();

        notices.push({
          id: doc.id,
          ...data,
          // Convert publishDate to ISO string if it's a date input value (YYYY-MM-DD)
          publishDate: data.publishDate
            ? data.publishDate.includes("T")
              ? data.publishDate
              : new Date(data.publishDate + "T00:00:00.000Z").toISOString()
            : null,
          // Use publishDate as primary date, then fallback to others
          date: data.publishDate
            ? data.publishDate.includes("T")
              ? data.publishDate
              : new Date(data.publishDate + "T00:00:00.000Z").toISOString()
            : data.createdAt?.toDate?.()?.toISOString?.() || data.date || null,
          createdAt: data.publishDate
            ? data.publishDate.includes("T")
              ? data.publishDate
              : new Date(data.publishDate + "T00:00:00.000Z").toISOString()
            : data.createdAt?.toDate?.()?.toISOString?.() || data.date || null,
        });
      });

      return { success: true, notices };
    } catch (error) {
      console.error("Error fetching notices:", error);
      return { success: false, error: error.message, notices: [] };
    }
  }

  static async getHomepageNotices() {
    try {
      console.log("🔍 Fetching homepage notices...");

      if (!db) {
        console.error("❌ Firebase database not initialized");
        return {
          success: false,
          error: "Database not initialized",
          notices: [],
        };
      }

      const noticesRef = collection(db, "notices");
      console.log("📁 Collection reference created");

      // SIMPLEST QUERY - No index required, just get all notices
      const querySnapshot = await getDocs(noticesRef);
      console.log(
        "📊 Query executed. Found total documents:",
        querySnapshot.size
      );

      if (querySnapshot.empty) {
        console.warn("⚠️ No notices found in database at all");
        return { success: true, notices: [] };
      }

      const notices = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log("📄 Examining notice:", doc.id, {
          title: data.title,
          status: data.status,
          showOnHomepage: data.showOnHomepage,
          createdAt: data.createdAt?.toDate?.() || "No date",
        });

        // Only include published notices that should show on homepage
        if (data.status === "published" && data.showOnHomepage === true) {
          console.log("✅ Adding notice to homepage:", data.title);
          console.log("📅 Raw publishDate from Firebase:", data.publishDate);
          console.log("📅 Raw createdAt from Firebase:", data.createdAt);

          // Convert publishDate to proper ISO string format
          const processedPublishDate = data.publishDate
            ? data.publishDate.includes("T")
              ? data.publishDate
              : new Date(data.publishDate + "T00:00:00.000Z").toISOString()
            : null;

          console.log("📅 Processed publishDate:", processedPublishDate);

          notices.push({
            id: doc.id,
            ...data,
            publishDate: processedPublishDate,
            // Prioritize publishDate, then createdAt, then fallback date
            date:
              processedPublishDate ||
              data.createdAt?.toDate?.()?.toISOString?.() ||
              data.date ||
              null,
            createdAt:
              processedPublishDate ||
              data.createdAt?.toDate?.()?.toISOString?.() ||
              data.date ||
              null,
          });
        } else {
          console.log(
            "⏭️ Skipping notice:",
            data.title,
            `(status: ${data.status}, homepage: ${data.showOnHomepage})`
          );
        }
      });

      // Sort by date in JavaScript (newest first)
      notices.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      // Limit to 6 notices
      const limitedNotices = notices.slice(0, 6);

      console.log("✅ Final homepage notices:", limitedNotices.length);
      limitedNotices.forEach((notice) => {
        console.log("📌", notice.title, "- Date:", notice.date);
      });

      return { success: true, notices: limitedNotices };
    } catch (error) {
      console.error("❌ Error fetching homepage notices:", error);
      console.error("Error details:", {
        code: error.code,
        message: error.message,
      });
      return { success: false, error: error.message, notices: [] };
    }
  }
}
