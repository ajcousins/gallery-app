import React, { useState, useEffect } from "react";
import useFirestore from "../hooks/useFirestore";
import ImageGrid from "./ImageGrid";
import UploadForm from "./UploadForm";
import { ReactComponent as Pencil } from "../svg/pencil2.svg";
import { projectFirestore } from "../firebase";

export default function CollectionTile({
  title,
  frontRef,
  description,
  setLoadCollections,
}) {
  const { docs } = useFirestore(title);
  const [expanded, setExpanded] = useState(false);
  const [descriptionEditMode, setDescriptionEditMode] = useState(false);
  const [descriptionVal, setDescriptionVal] = useState("");

  useEffect(() => {
    setDescriptionVal(description);
  }, [description]);

  const getFrontUrl = (frontRef) => {
    if (!frontRef && !docs) return;
    const index = docs.findIndex((image) => {
      return image.refString === frontRef;
    });
    if (index === -1) return null;
    return docs[index].url;
  };

  const collectionViewHandler = (e) => {
    if (expanded === true) {
      setExpanded(false);
      setDescriptionVal(description);
      setDescriptionEditMode(false);
    } else setExpanded(true);
  };

  const editDescription = () => {
    setDescriptionEditMode(!descriptionEditMode);
    setDescriptionVal(description);
  };

  const descriptionChangeHandler = (e) => {
    setDescriptionVal(e.target.value);
  };

  const collectionSaveEdits = (e) => {
    collectionViewHandler(e);
    const register = projectFirestore.collection("00_admin").doc("register");
    register
      .get()
      .then((doc) => {
        const wholeArray = [...doc.data().collections];
        const thisTileIndex = doc
          .data()
          .collections.findIndex(
            (collection) => JSON.parse(collection).title === title
          );

        // Create updated array element
        const thisArrayElement = JSON.parse(wholeArray[thisTileIndex]);
        thisArrayElement.description = descriptionVal;

        wholeArray[thisTileIndex] = JSON.stringify(thisArrayElement);
        register.update({ collections: wholeArray });
        setLoadCollections(true);
      })

      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const deleteCollectionHandler = () => {
    console.log("Delete collection handler");
    const register = projectFirestore.collection("00_admin").doc("register");
    register.get().then((doc) => {
      const wholeArray = [...doc.data().collections];
      const thisTileIndex = doc
        .data()
        .collections.findIndex(
          (collection) => JSON.parse(collection).title === title
        );
      console.log("Whole array: ", wholeArray, "thisIndex: ", thisTileIndex);
    });

    // Get references to all images in collection.

    // Delete those images in firestore.

    // Delete the collection entry in firestore: 00_admin/register

    // Delete the collection in firestore
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

            <div className='collection-tile__edit-btn'></div>
            {descriptionEditMode ? (
              <textarea
                type='text'
                id='description'
                value={descriptionVal}
                required
                style={{ marginBottom: "1em" }}
                rows='4'
                cols='50'
                onChange={descriptionChangeHandler}
              />
            ) : (
              <div>{description}</div>
            )}
            <div className='collection-tile__edit-btn'>
              <Pencil
                style={{ height: "20px", width: "20px" }}
                onClick={editDescription}
              />
            </div>
            <div className='collection-tile__btn-panel'>
              <button
                className='new-collection__start-btn collection-tile__btn btn-danger'
                onClick={deleteCollectionHandler}
              >
                Delete Collection
              </button>
              <button
                className='new-collection__start-btn collection-tile__btn'
                onClick={collectionViewHandler}
              >
                Cancel
              </button>
              <button
                className='new-collection__start-btn collection-tile__btn'
                onClick={collectionSaveEdits}
              >
                Save
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
