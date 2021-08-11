import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import ImageGrid from "./ImageGrid";
import UploadForm from "./UploadForm";
import { ReactComponent as Pencil } from "../svg/pencil2.svg";

export default function CollectionTile({ title, frontRef, description }) {
  const { docs } = useFirestore(title);
  const [expanded, setExpanded] = useState(false);

  const getFrontUrl = (frontRef) => {
    if (!frontRef && !docs) return;
    const index = docs.findIndex((image) => {
      return image.refString === frontRef;
    });
    if (index === -1) return null;
    return docs[index].url;
  };

  const collectionViewHandler = (e) => {
    if (expanded === true) setExpanded(false);
    else setExpanded(true);
  };

  return (
    <div>
      {expanded ? (
        <div className='collection-tile__expanded'>
          <div className='collection-tile__expanded__left'>
            <ImageGrid collection={title} />
            <UploadForm collection={title} />
          </div>
          <div className='collection-tile__expanded__right'>
            <h2 className='collection-tile__title'>{title} </h2>
            <div className='collection-tile__edit-btn'>
              <Pencil style={{ height: "20px", width: "20px" }} />
            </div>
            <div>{description}</div>
            <div className='collection-tile__edit-btn'>
              <Pencil style={{ height: "20px", width: "20px" }} />
            </div>
            <div className='collection-tile__btn-panel'>
              <button
                className='new-collection__start-btn collection-tile__btn btn-danger'
                //   onClick={collectionViewHandler}
              >
                Delete Collection
              </button>
              <button
                className='new-collection__start-btn collection-tile__btn'
                onClick={collectionViewHandler}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='collection-tile' onClick={collectionViewHandler}>
          <div className='collection-tile__img-wrapper'>
            <img
              className='collection-tile__img'
              src={getFrontUrl(frontRef)}
              alt={frontRef}
            />
          </div>
          <div className='collection-tile__info'>
            <h3 className='collection-tile__title'>{title} </h3>
            <div>{description}</div>
          </div>
        </div>
      )}
    </div>
  );
}
