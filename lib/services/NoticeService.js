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

      const noticesRef = collection(db, "notices");
      console.log("📁 Collection reference created");

      const q = query(
        noticesRef,
        where("status", "==", "published"),
        where("showOnHomepage", "==", true),
        orderBy("createdAt", "desc"),
        limit(6)
      );
      console.log(
        "🔍 Query created for published notices with showOnHomepage=true"
      );

      const querySnapshot = await getDocs(q);
      console.log("📊 Query executed. Found documents:", querySnapshot.size);

      const notices = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log("📄 Processing notice:", doc.id, data.title);

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
      });

      console.log("✅ Successfully processed", notices.length, "notices");
      return { success: true, notices };
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
