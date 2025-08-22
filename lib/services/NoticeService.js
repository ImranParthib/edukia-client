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
        notices.push({
          id: doc.id,
          ...doc.data(),
          // Convert Firestore timestamps to readable dates
          date:
            doc.data().createdAt?.toDate?.()?.toISOString?.() ||
            new Date().toISOString(),
          createdAt:
            doc.data().createdAt?.toDate?.()?.toISOString?.() ||
            new Date().toISOString(),
        });
      });

      return { success: true, notices };
    } catch (error) {
      console.error("Error fetching notices:", error);
      return { success: false, error: error.message, notices: [] };
    }
  }

  static async getFeaturedNotices() {
    try {
      const noticesRef = collection(db, "notices");
      const q = query(
        noticesRef,
        where("status", "==", "published"),
        where("featured", "==", true),
        orderBy("createdAt", "desc"),
        limit(5)
      );

      const querySnapshot = await getDocs(q);
      const notices = [];

      querySnapshot.forEach((doc) => {
        notices.push({
          id: doc.id,
          ...doc.data(),
          date:
            doc.data().createdAt?.toDate?.()?.toISOString?.() ||
            new Date().toISOString(),
        });
      });

      return { success: true, notices };
    } catch (error) {
      console.error("Error fetching featured notices:", error);
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

          notices.push({
            id: doc.id,
            ...data,
            date:
              data.createdAt?.toDate?.()?.toISOString?.() ||
              new Date().toISOString(),
            createdAt:
              data.createdAt?.toDate?.()?.toISOString?.() ||
              new Date().toISOString(),
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
