import React from "react";
import { ReactComponent as ExpandSymbol } from "../svg/expand.svg";
import getFrontUrl from "../utils/getFrontUrl";
import useFirestore from "../hooks/useFirestore";

export default function CollapsedTile({
  title,
  newCollection,
  frontRef,
  description,
  collectionViewHandler,
}) {
  const { docs } = useFirestore(title);
  if (newCollection === title) {
    return null;
  } else
    return (
      <div className='collection-tile'>
        <div className='collection-tile__img-wrapper'>
          <img
            className='collection-tile__img'
            src={getFrontUrl(frontRef, docs)}
            alt={frontRef}
          />
        </div>
        <div className='collection-tile__info'>
          <h3 className='collection-tile__title'>{title} </h3>
          <div>{description}</div>
        </div>
        <div
          className='collection-tile__expand-btn'
          onClick={collectionViewHandler}
        >
          <ExpandSymbol />
        </div>
      </div>
    );
}
