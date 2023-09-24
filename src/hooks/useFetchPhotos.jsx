import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchPhotos = () => {
  return useQuery({
    queryKey: ["mockData"],
    queryFn: () => {
      return axios({
        method: "get",
        url: "https://api.unsplash.com/photos?page=1",
        headers: {
          Authorization: `Client-ID ${
            import.meta.env.VITE_Unsplash_ACCESS_KEY
          }`,
        },
        responseType: "json",
      });
    },
  });
};

export default useFetchPhotos;
