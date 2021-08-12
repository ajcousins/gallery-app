import React from "react";
import useFirestore from "../hooks/useFirestore";
import ImageOverlay from "./ImageOverlay";
import { useSelector, useDispatch } from "react-redux";

export default function ImageGrid(props) {
  const { docs } = useFirestore(props.collection);
  // console.log(docs);
  // State should have a list of collections and images and which of those images are flagged as 'front'
  const collectonsModel = useSelector((state) => state.collectionsModel);

  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => {
          return (
            <div className='img-grid__wrap' key={doc.id}>
              <ImageOverlay
                refString={doc.refString}
                id={doc.id}
                collectionTitle={props.collection}
              />
              <img src={doc.url} alt='uploaded-pic' />
            </div>
          );
        })}
    </div>
  );
}
