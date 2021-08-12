import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase";

// Returns images from specified collection.
export default function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "asc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    // unsubscribes from function when finished
    return () => unsub();
  }, [collection]);

  return { docs };
}
