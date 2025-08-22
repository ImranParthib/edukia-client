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
      const noticesRef = collection(db, "notices");
      const q = query(
        noticesRef,
        where("status", "==", "published"),
        where("showOnHomepage", "==", true),
        orderBy("createdAt", "desc"),
        limit(6)
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
      console.error("Error fetching homepage notices:", error);
      return { success: false, error: error.message, notices: [] };
    }
  }
}
