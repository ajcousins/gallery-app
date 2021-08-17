import React, { useState, useEffect } from "react";
import { ReactComponent as Exit } from "../svg/exit-white.svg";
import { ReactComponent as Left } from "../svg/left-white.svg";
import { ReactComponent as Right } from "../svg/right-white.svg";
import BottomPanel from "./BottomPanel";

export default function ImageExpand({ expandHandler, docs, front }) {
  const [imgArray, setImgArray] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // sort docs array so that front image is at start of array
    const docsCopy = [...docs];
    docsCopy.sort((a, b) => {
      if (a.refString === front) return -1;
      else if (b.refString === front) return 1;
      else return 0;
    });
    setLoaded(true);
    setImgArray(docsCopy);
  }, [docs, front]);

  useEffect(() => {
    console.log(imgArray);
  }, [imgArray]);

  useEffect(() => {
    console.log(`${current + 1} of ${imgArray.length}`);
  }, [current, imgArray]);

  const nextHandler = () => {
    if (current === imgArray.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const prevHandler = () => {
    if (current === 0) {
      setCurrent(imgArray.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className='img-expand-wrapper-front'>
      <div className='img-expand-wrapper-front__left-container'>
        <div
          className='img-expand-wrapper-front__exit-symbol'
          onClick={expandHandler}
        >
          <Exit />
        </div>
        {imgArray.length > 1 ? (
          <div
            className='img-expand-wrapper-front__left-symbol'
            onClick={prevHandler}
          >
            <Left />
          </div>
        ) : null}
        {imgArray.length > 1 ? (
          <div
            className='img-expand-wrapper-front__right-symbol'
            onClick={nextHandler}
          >
            <Right />
          </div>
        ) : null}
        {imgArray.length > 1 ? (
          <div className='img-expand-wrapper-front__bottom-panel'>
            <BottomPanel current={current} length={imgArray.length} />
          </div>
        ) : null}
        <div className='img-expand-wrapper-front__img-container'>
          {loaded && (
            <img
              className='img-expand-wrapper-front__img'
              src={imgArray[current].url}
              alt={front}
            />
          )}
        </div>
      </div>
      <div className='img-expand-wrapper-front__right-container'>
        Side Container
      </div>
    </div>
  );
}
