const getFrontUrl = (frontRef, docs) => {
  if (!frontRef && !docs) return;
  const index = docs.findIndex((image) => {
    return image.refString === frontRef;
  });
  if (index === -1) return null;
  return docs[index].url;
};

export default getFrontUrl;
