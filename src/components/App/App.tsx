import { useEffect, useState } from "react";
import { getImage } from "../../getImage";
import SearchBar from "../SearchBar/SearchBar";

import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Image } from "./App.types";

import "./App.css";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  type Response = {
    results: Image[];
    total_pages: number
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const { results, total_pages }:Response = await getImage(query, page); // ??????
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const onHandleSubmit = (value: string) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsVisible(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function openModal(image: Image) {
    setModalImage(image);
    setModalOpen(true);
  }

  function closeModal() {
    setModalImage(null);
    setModalOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} handleClickOnImage={openModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalOpen && modalImage && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          image={modalImage}
        ></ImageModal>
      )}
    </>
  );
}
