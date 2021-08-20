import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase";
import { useSelector } from "react-redux";
import CollapsedTile from "./CollapsedTile";
import ExpandedTile from "./ExpandedTile";
import SellDialogue from "./SellDialogue";

export default function CollectionTile({ title, frontRef, description }) {
  // const { docs } = useFirestore(title);
  const [expanded, setExpanded] = useState(false);
  const [descriptionVal, setDescriptionVal] = useState("");
  const newCollection = useSelector((state) => state.newCollection);
  const [descriptionEditMode, setDescriptionEditMode] = useState(false);
  const [isSellDialogueActive, setIsSellDialogueActive] = useState(false);
  const collectionsModel = useSelector((state) => state.collectionsModel);
  const thisIndex = collectionsModel.findIndex(
    (collection) => collection.title === title
  );

  useEffect(() => {
    setDescriptionVal(description);
  }, [description]);

  const collectionViewHandler = (e) => {
    if (expanded === true) {
      setExpanded(false);
      setDescriptionVal(description);
      setDescriptionEditMode(false);
    } else {
      setExpanded(true);
    }
  };

  const handleSell = () => {
    setIsSellDialogueActive(!isSellDialogueActive);
  };

  const confirmSellingData = (sellData) => {
    console.log(sellData);
    //// 1. Make copy of global collectionsModel
    const collectionsModelCopy = [...collectionsModel];

    //// 2. Insert selling data
    collectionsModelCopy[thisIndex].sellData = sellData;
    console.log(collectionsModelCopy);

    //// 3. Stringify each array obj
    const collectionsStringified = collectionsModelCopy.map((collection) =>
      JSON.stringify(collection)
    );

    //// 4. Update database
    const register = projectFirestore.collection("00_admin").doc("register");
    register.update({ collections: collectionsStringified.reverse() });

    // Close dialogue
    handleSell();
  };

  const handleDiscontinue = () => {
    console.log("Discontinue");
    const collectionsModelCopy = [...collectionsModel];
    delete collectionsModelCopy[thisIndex].sellData;
    const collectionsStringified = collectionsModelCopy.map((collection) =>
      JSON.stringify(collection)
    );
    const register = projectFirestore.collection("00_admin").doc("register");
    register.update({ collections: collectionsStringified.reverse() });
  };

  return (
    <>
      {expanded ? (
        isSellDialogueActive ? (
          <SellDialogue
            title={title}
            handleSell={handleSell}
            confirmSellingData={confirmSellingData}
          />
        ) : (
          <ExpandedTile
            title={title}
            // newCollection={newCollection}
            // frontRef={frontRef}
            setExpanded={setExpanded}
            description={description}
            collectionViewHandler={collectionViewHandler}
            descriptionVal={descriptionVal}
            setDescriptionVal={setDescriptionVal}
            descriptionEditMode={descriptionEditMode}
            setDescriptionEditMode={setDescriptionEditMode}
            handleSell={handleSell}
            handleDiscontinue={handleDiscontinue}
          />
        )
      ) : (
        <CollapsedTile
          title={title}
          newCollection={newCollection}
          frontRef={frontRef}
          description={description}
          collectionViewHandler={collectionViewHandler}
        />
      )}
    </>
  );
}
