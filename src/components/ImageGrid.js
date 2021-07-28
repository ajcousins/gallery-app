import React from "react";
import useFirestore from "../hooks/useFirestore";

export default function ImageGrid(props) {
  const { docs } = useFirestore(props.collection);
  // console.log(docs);
  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => {
          // console.log(doc.url);
          return (
            <div className='img-grid__wrap' key={doc.id}>
              <img src={doc.url} alt='uploaded-pic' />
            </div>
          );
        })}
    </div>
  );
}
