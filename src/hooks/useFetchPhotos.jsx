import { useState, useEffect } from "react";
import usePhotoStore from "./usePhotoStore";
import axios from "axios";

const useFetchPhotos = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  // USE-STORE HOOKS
  // const fetchPhotos = usePhotoStore((state) => state.fetchPhotos);
  // const allPhotos = usePhotoStore((state) => state.allPhotos);

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data.results);
      console.log(res.data.results);
    } catch (err) {
      setIsError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response,
    isLoading,
    isError,
    fetchData: (url) => fetchData(url),
  };
};

export default useFetchPhotos;
