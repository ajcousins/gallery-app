import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase";

// Saves image to storage and saves reference of image to firestore.
const useStorage = (file, collection, description) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    // const storageRef = projectStorage.ref(file.name);
    const refString = `${new Date()
      .toLocaleString()
      .replace(/\/|:|,|\s/gi, "")}_${file.name}`;
    const storageRef = projectStorage.ref(refString);
    const collectionRef = projectFirestore.collection(collection);
    ////// Could pass collection name as prop into hook for specified collection names?

    // get collection list
    let collectionArray = [];
    const register = projectFirestore.collection("00_admin").doc("register");
    register
      .get()
      .then((doc) => {
        if (doc.exists) {
          if (existsInCollection(doc.data().collections, collection)) {
            collectionArray = [...doc.data().collections];
          } else {
            collectionArray = [
              ...doc.data().collections,
              JSON.stringify({
                title: collection,
                front: refString,
                description: description,
              }),
            ];
          }
        } else {
          collectionArray.push(
            JSON.stringify({
              title: collection,
              front: refString,
              description: description,
            })
          );
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });

    let bytes; // for use later when calculating storage usage

    // upload file
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
        bytes = snap.totalBytes;
      },
      (err) => {
        setError(err);
      },
      async () => {
        // fires when upload is completed
        const url = await storageRef.getDownloadURL();

        // adds image to database/ firestore
        const createdAt = timestamp();
        collectionRef.add({ refString, url, createdAt, bytes });
        projectFirestore
          .collection("00_admin")
          .doc("register")
          .set({ collections: collectionArray }, { merge: true });
        setUrl(url);
      }
    );
  }, [file, collection, description]);

  return { progress, url, error };
};

export default useStorage;

const existsInCollection = (collectionArr, collection) => {
  return collectionArr.some((item) => JSON.parse(item).title === collection);
};
