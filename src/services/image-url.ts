import noImage from "../assets/no-image-placeholder.jpg";

const getCroppedImageURL = (url: string) => {
  if (!url) return noImage;
  const index = url.indexOf("media/") + "media/".length;
  const cropped = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return cropped;
};

export default getCroppedImageURL;
