const getCroppedImageURL = (url: string) => {
  const index = url.indexOf("media/") + "media/".length;
  const cropped = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return cropped;
};

export default getCroppedImageURL;
