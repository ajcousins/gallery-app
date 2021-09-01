import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import ImageExpand from "./ImageExpand";

export default function CollectionTileFront({ collection }) {
  const { docs } = useFirestore(collection.title);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getFrontUrl = (frontRef) => {
    if (!frontRef && !docs) return;
    const index = docs.findIndex((image) => {
      return image.refString === frontRef;
    });
    if (index === -1) return null;
    return docs[index].url;
  };

  const expandHandler = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  const handleLoad = () => {
    console.log("Loaded");
    setIsLoaded(true);
  };

  return (
    <div>
      <div className='img-grid-front__img-wrapper' onClick={expandHandler}>
        {!isLoaded && <div className='img-grid-front__img-placeholder' />}
        <img
          className={"img-grid-front__img"}
          src={getFrontUrl(collection.front)}
          alt={collection.front}
          onLoad={handleLoad}
        />
      </div>
      {isImageExpanded && (
        <ImageExpand
          expandHandler={expandHandler}
          docs={docs}
          collection={collection}
          frontUrl={getFrontUrl(collection.front)}
        />
      )}
    </div>
  );
}
