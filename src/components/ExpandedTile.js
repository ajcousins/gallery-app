import React, { useState, useEffect } from "react";
import ImageGrid from "./ImageGrid";
import UploadForm from "./UploadForm";
import { ReactComponent as Pencil } from "../svg/pencil2.svg";
import { projectStorage, projectFirestore } from "../firebase";
import deleteImageHandler from "../utils/deleteImageHandler";

import SellPanel from "./SellPanel";
import { useSelector } from "react-redux";

export default function ExpandedTile({
  title,
  description,
  descriptionVal,
  descriptionEditMode,
  collectionViewHandler,
  setDescriptionVal,
  setDescriptionEditMode,
  setExpanded,
  handleSell,
  handleDiscontinue,
}) {
  const collectionsModel = useSelector((state) => state.collectionsModel);
  const thisIndex = collectionsModel.findIndex(
    (collection) => collection.title === title
  );

  const editDescription = () => {
    setDescriptionEditMode(!descriptionEditMode);
    setDescriptionVal(description);
  };

  const descriptionChangeHandler = (e) => {
    setDescriptionVal(e.target.value);
  };

  const collectionSaveEdits = (e) => {
    collectionViewHandler(e);

    //// 1. Make copy of global collectionsModel
    const collectionsModelCopy = [...collectionsModel];

    //// 2. Insert updated description
    collectionsModelCopy[thisIndex].description = descriptionVal;

    //// 3. Stringify each array obj
    const collectionsStringified = collectionsModelCopy.map((collection) =>
      JSON.stringify(collection)
    );

    //// 4. Update database
    const register = projectFirestore.collection("00_admin").doc("register");
    register.update({ collections: collectionsStringified.reverse() });
  };

  const deleteCollectionHandler = () => {
    setExpanded(false);

    // Delete actual images from storage.
    projectFirestore
      .collection(title)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          deleteImageHandler({
            projectStorage,
            projectFirestore,
            collectionTitle: title,
            refString: doc.data().refString,
            id: doc.id,
          });
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });

    // Delete from database and 00_admin document.
    const register = projectFirestore.collection("00_admin").doc("register");
    register.get().then((doc) => {
      const wholeArray = [...doc.data().collections];
      const thisTileIndex = doc
        .data()
        .collections.findIndex(
          (collection) => JSON.parse(collection).title === title
        );
      // Delete the collection entry in firestore: 00_admin/register
      wholeArray.splice(thisTileIndex, 1);
      projectFirestore
        .collection("00_admin")
        .doc("register")
        .set({ collections: wholeArray }, { merge: true });
    });
  };

  return (
    <div className='collection-tile__expanded'>
      <div className='collection-tile__expanded__left'>
        <ImageGrid collection={title} />
        <UploadForm collection={title} style={{ marginBottom: "0" }} />
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
        <div className='collection-tile__sell-panel'>
          {collectionsModel[thisIndex].sellData ? (
            <SellPanel
              sellData={collectionsModel[thisIndex].sellData}
              handleSell={handleSell}
              handleDiscontinue={handleDiscontinue}
            />
          ) : (
            <button
              className='collection-tile__sell-panel__btn'
              onClick={handleSell}
            >
              Sell Collection
            </button>
          )}
        </div>
        <div className='collection-tile__btn-panel'>
          <button
            className='new-collection__start-btn collection-tile__btn btn-danger'
            onClick={deleteCollectionHandler}
            style={{ marginLeft: "0", marginRight: "auto" }}
          >
            Delete Collection
          </button>
          <button
            className='new-collection__start-btn collection-tile__btn'
            onClick={collectionSaveEdits}
          >
            Save
          </button>
          <button
            className='new-collection__start-btn collection-tile__btn'
            onClick={collectionViewHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
