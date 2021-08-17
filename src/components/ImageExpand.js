import React, { useState, useEffect } from "react";
import { ReactComponent as Exit } from "../svg/exit-white.svg";

export default function ImageExpand({ expandHandler, docs, front }) {
  const [imgArray, setImgArray] = useState([]);
  const [loaded, setLoaded] = useState(false);

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

  return (
    <div className='img-expand-wrapper-front'>
      <div className='img-expand-wrapper-front__left-container'>
        <div
          className='img-expand-wrapper-front__exit-symbol'
          onClick={expandHandler}
        >
          <Exit />
        </div>
        <div className='img-expand-wrapper-front__img-container'>
          {loaded && (
            <img
              className='img-expand-wrapper-front__img'
              src={imgArray[0].url}
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
