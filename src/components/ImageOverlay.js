import React, { useState, useEffect } from "react";
import { ReactComponent as Radio } from "../svg/radio.svg";
import { ReactComponent as RadioFilled } from "../svg/radio-filled.svg";
import Bin from "../svg/bin.js";
import { useSelector, useDispatch } from "react-redux";
import { projectStorage, projectFirestore } from "../firebase";

export default function ImageOverlay({ collectionTitle, refString, id }) {
  const collectionsModel = useSelector((state) => state.collectionsModel);
  const [isFront, setIsFront] = useState(false);

  const radioFillHandler = () => {
    console.log("fill radio");
  };

  const deleteImageHandler = () => {
    console.log("bin handler:", collectionTitle, refString, id);
    // Delete actual image from file storage
    const storageRef = projectStorage.ref(refString);
    storageRef
      .delete()
      .then(() => {
        // Delete from FireStore database
        projectFirestore
          .collection(collectionTitle)
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted");
          });
      })
      .catch((err) => {
        console.error("Error removing document: ", err);
      });
  };

  // Is this image the 'front' of the collection?? If so, set state of this component.
  useEffect(() => {
    if (collectionsModel.some((collection) => collection.front === refString)) {
      setIsFront(true);
    }
  }, [collectionsModel]);

  return (
    <div className='image-overlay'>
      {isFront ? (
        <>
          <RadioFilled />
          <Bin color={"#ffffff55"} />
        </>
      ) : (
        <>
          <Radio onClick={radioFillHandler} />
          <div onClick={deleteImageHandler}>
            <Bin />
          </div>
        </>
      )}
    </div>
  );
}
