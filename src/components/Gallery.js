import React, { useState, useEffect } from "react";
import { projectFirestore, projectStorage } from "../firebase";
// import useFirestore from "../hooks/useFirestore";
import NavBarFront from "./NavBarFront";

export default function Gallery() {
  const [dataRegister, setDataRegister] = useState([]);
  const [imageData, setImageData] = useState({});
  const [loaded, setLoaded] = useState(false);

  // LOAD COLLECTIONS AND IMAGES
  useEffect(() => {
    const ref = projectFirestore.collection("00_admin").doc("register");
    ref.get().then((doc) => {
      if (doc.exists) {
        // console.log("Data: ", doc.data());

        const dataArr = doc.data().collections.map((collection) => {
          const entry = JSON.parse(collection);
          // fetchImageData();

          // entry.documents = [];
          // // GET IMAGES FOR EACH COLLECTION
          // projectFirestore
          //   .collection(entry.title)
          //   .orderBy("createdAt", "asc")
          //   .get()
          //   .then((querySnapshot) => {
          //     querySnapshot.forEach((doc) => entry.documents.push(doc.data()));
          //     setLoaded(true);
          //   })
          //   .catch((err) => {
          //     console.log("Error getting documents: ", err);
          //   });

          return entry;
        });

        setDataRegister(dataArr.reverse());
      }
    });
  }, []);

  // const fetchImageData = (title) => {
  //   console.log(title);

  //   projectFirestore
  //     .collection(title)
  //     .orderBy("createdAt", "asc")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         const obj = { refString: doc.data().refString, url: doc.data().url };
  //         // const imageDataCopy = [...imageData];
  //         // imageDataCopy.push(obj);
  //         setImageData(...imageData, obj);
  //       });
  //     });
  // };

  useEffect(() => {
    console.log(dataRegister);

    const data = {};
    dataRegister.forEach((collection) => {
      projectFirestore
        .collection(collection.title)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // const index = data.indexOf((el) => el.title === collection.title);
            // // console.log("index: ", index);
            // if (index > -1) {
            //   data[index].data.push(doc.data());
            // } else {
            //   data.push({ title: collection.title, data: [doc.data()] });
            // }

            // const obj = doc.data();
            // obj.collection = collection.title;
            // data.push(obj);

            if (!data[collection.title]) {
              data[collection.title] = [doc.data()];
            } else {
              data[collection.title].push(doc.data());
            }
          });
        });
    });
    setImageData(data);
  }, [dataRegister]);

  useEffect(() => {
    console.log(imageData);
    // console.log("Length: ", Object.keys(imageData.errors).length);
    console.log("Length: ", Object.keys(imageData).length);
    console.log("Entries:", Object.entries(imageData));
    if (!imageData) return;
    console.log(imageData);
    setLoaded(true);
  }, [imageData]);

  const imgUrl = (collectionTitle, refString) => {
    console.log({ collectionTitle, refString });
    console.log({ imageData });
    // if (imageData[collectionTitle] === undefined) return;
    console.log(imageData[collectionTitle]);
    // const index = imageData[collectionTitle].findIndex((image) => {
    //   return image.refString === refString;
    // });

    // return imageData[collectionTitle][index].url;
    // return imageData[0][collectionTitle];
  };

  return (
    <div>
      <NavBarFront title='Your Name Here' />

      {loaded &&
        dataRegister.map((collection) => {
          return (
            <div>
              Loaded - Title: {collection.title} - Front: {collection.front}
              {imageData[collection.title]}
              {/* {JSON.stringify(imgUrl(collection.title, collection.front))} */}
            </div>
          );
        })}
    </div>
  );
}
