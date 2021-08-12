export default function deleteImageHandler({
  projectStorage,
  projectFirestore,
  collectionTitle,
  refString,
  id,
}) {
  // Delete actual image from file storage
  const storageRef = projectStorage.ref(refString);
  storageRef
    .delete()
    .then(() => {
      // Delete from FireStore database
      projectFirestore
        .collection(collectionTitle)
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document deleted");
        });
    })
    .catch((err) => {
      console.error("Error removing document: ", err);
    });
}
