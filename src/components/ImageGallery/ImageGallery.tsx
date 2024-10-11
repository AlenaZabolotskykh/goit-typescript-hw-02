import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "./imageGallery.types";
export default function ImageGallery({
  images,
  handleClickOnImage,
}: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {images.map(({ alt_description, id, urls }) => (
        <li className={css.item} key={id}>
          <ImageCard
            alt={alt_description}
            src={urls}
            handleClickOnImage={() =>
              handleClickOnImage({ alt_description, id, urls })
            }
          />
        </li>
      ))}
    </ul>
  );
}
