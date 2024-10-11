import { Image } from "../App/App.types";

export type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: Image;
};
