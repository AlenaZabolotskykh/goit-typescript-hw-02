import axios from "axios";
import { Image } from "./components/App/App.types";

const KEY = "ed2sR4g0UcheyXSFHmZdb1MPIy4PjZh6mMedQmRfHO8";

export type Response = {
  results: Image[];
  total_pages: number;
};
export const getImage = async (
  query: string,
  page: number
): Promise<Response> => {
  const { data } = await axios.get<Response>(
    `https://api.unsplash.com/search/photos?client_id=${KEY}&page=${page}&per_page=12&orientation=landscape&query=${query}`
  );
  return data;
};
