import React, { useState, useEffect } from "react";
import { ReactComponent as Radio } from "../svg/radio.svg";
import { ReactComponent as RadioFilled } from "../svg/radio-filled.svg";
import Bin from "../svg/bin.js";
import { useSelector, useDispatch } from "react-redux";
import { projectStorage, projectFirestore } from "../firebase";
import deleteImageHandler from "../utils/deleteImageHandler";

export default function ImageOverlay({ collectionTitle, refString, id }) {
  const collectionsModel = useSelector((state) => state.collectionsModel);
  const [isFront, setIsFront] = useState(false);

  const radioFillHandler = () => {
    console.log("fill radio");
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
          <div
            onClick={() =>
              deleteImageHandler({
                projectStorage,
                projectFirestore,
                collectionTitle,
                refString,
                id,
              })
            }
          >
            <Bin />
          </div>
        </>
      )}
    </div>
  );
}
