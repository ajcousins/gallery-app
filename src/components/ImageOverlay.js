import React, { useState, useEffect } from "react";
import { ReactComponent as Radio } from "../svg/radio.svg";
import { ReactComponent as RadioFilled } from "../svg/radio-filled.svg";
import Bin from "../svg/bin.js";
import { useSelector, useDispatch } from "react-redux";

export default function ImageOverlay({ refString }) {
  const collectionsModel = useSelector((state) => state.collectionsModel);
  const [isFront, setIsFront] = useState(false);

  const radioFillHandler = () => {
    console.log("fill radio");
  };

  const binHandler = () => {
    console.log("bin handler");
  };

  useEffect(() => {
    console.log(collectionsModel);
    if (
      collectionsModel.some((collection) => {
        return collection.front === refString;
      })
    ) {
      console.log("Is front!");
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
          <div onClick={binHandler}>
            <Bin />
          </div>
        </>
      )}
    </div>
  );
}
