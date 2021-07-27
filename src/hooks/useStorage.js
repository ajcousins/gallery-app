import { storage } from "firebase";
import React, { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    // const storageRef = projectStorage.ref(file.name);
    const storageRef = projectStorage.ref(
      `${new Date().toLocaleString().replace(/\/|:|,|\s/gi, "")}_${file.name}`
    );
    const collectionRef = projectFirestore.collection("images");
    ////// Could pass collection name as prop into hook for specified collection names?

    // upload file
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        // fires when upload is completed
        const url = await storageRef.getDownloadURL();
        // adds image to database/ firestore
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;