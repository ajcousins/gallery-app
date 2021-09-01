import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import NavBarFront from "./NavBarFront";
import CollectionTileFront from "./CollectionTileFront";

export default function Gallery() {
  const [dataRegister, setDataRegister] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const basket = useSelector((state) => state.basket);

  // LOAD COLLECTIONS
  useEffect(() => {
    // Load collections
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

    // Initialise basket
  }, []);

  useEffect(() => {
    console.log(dataRegister);
  }, [dataRegister]);

  return (
    <>
      <NavBarFront title='Artist Gallery & Shop' />
      <div className='img-grid-front'>
        {loaded &&
          dataRegister.map((collection) => {
            return <CollectionTileFront collection={collection} />;
          })}
      </div>
    </>
  );
}
