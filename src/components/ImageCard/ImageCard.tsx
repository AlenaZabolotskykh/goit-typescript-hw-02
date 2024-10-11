import { Image } from "../App/App.types";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCardProps.types";

export default function ImageCard({
  alt,
  src,
  handleClickOnImage,
}: ImageCardProps) {
  return (
    <div onClick={() => handleClickOnImage({ alt, src })} className={css.card}>
      <img className={css.image} alt={alt} src={src.small} />
    </div>
  );
}
