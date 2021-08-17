import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase";
import NavBarFront from "./NavBarFront";
import CollectionTileFront from "./CollectionTileFront";

export default function Gallery() {
  const [dataRegister, setDataRegister] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // LOAD COLLECTIONS
  useEffect(() => {
    const ref = projectFirestore.collection("00_admin").doc("register");
    ref.get().then((doc) => {
      if (doc.exists) {
        const dataArr = doc.data().collections.map((collection) => {
          const entry = JSON.parse(collection);
          return entry;
        });
        setDataRegister(dataArr.reverse());
        setLoaded(true);
      }
    });
  }, []);

  useEffect(() => {
    console.log(dataRegister);
  }, [dataRegister]);

  return (
    <div>
      <NavBarFront title='Your Name Here' />
      <div className='img-grid-front'>
        {loaded &&
          dataRegister.map((collection) => {
            return <CollectionTileFront collection={collection} />;
          })}
      </div>
    </div>
  );
}
