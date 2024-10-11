import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageModalProps } from "./ImageModal.types";

Modal.setAppElement("#root");

export default function ImageModal({
  isOpen,
  onClose,
  image,
}: ImageModalProps) {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
    >
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
        <button className={css.btn} onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}
