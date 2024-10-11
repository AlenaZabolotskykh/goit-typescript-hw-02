import { Image } from "../App/App.types";

export type ImageCardProps = {
  alt: string;
  src: Image["urls"];
//   handleClickOnImage: (image: Image) => void;
handleClickOnImage: (image: { alt: string; src: { small: string } }) => void;
};
