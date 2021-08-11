import React, { useState, useEffect } from "react";
import { ReactComponent as Radio } from "../svg/radio.svg";
import { ReactComponent as RadioFilled } from "../svg/radio-filled.svg";
import { ReactComponent as Bin } from "../svg/bin.svg";
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
    console.log("Hello?");
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
      {/* {refString} */}
      {isFront ? (
        <RadioFilled onClick={radioFillHandler} />
      ) : (
        <Radio onClick={radioFillHandler} />
      )}
      <Bin onClick={binHandler} />
    </div>
  );
}
