import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import ImageGrid from "./ImageGrid";
import UploadForm from "./UploadForm";
import { ReactComponent as Pencil } from "../svg/pencil2.svg";

export default function CollectionTile({ title, frontRef }) {
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
            <div>
              Placeholder description text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </div>
            <div className='collection-tile__edit-btn'>
              <Pencil style={{ height: "20px", width: "20px" }} />
            </div>
            <div className='collection-tile__btn-panel'>
              <button
                className='new-collection__start-btn collection-tile__btn'
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
            <div>
              Placeholder description text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
