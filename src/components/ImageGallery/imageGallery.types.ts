import { Image } from "../App/App.types";

export type ImageGalleryProps = {
  images: Image[];
  handleClickOnImage: (image: Image) => void;
};
