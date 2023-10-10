import { createContext } from "react";
import Heading from "./components/Heading/Heading";
import useFetchPhotos from "./hooks/useFetchPhotos";
import ImageList from "./components/ImageList";
import InputSearch from "./components/Heading/InputSearch";
import Main from "./components/Main";
import Footing from "./components/Footing";
import Title from "./components/Heading/Title";

export const ImageContext = createContext();

function App() {
  const { response, isLoading, isError, fetchData } = useFetchPhotos(
    `search/photos?page=1&query=office&client_id=${
      import.meta.env.VITE_Unsplash_ACCESS_KEY
    }`
  );

  console.log(response);

  const value = {
    response,
    isLoading,
    isError,
    fetchData,
  };

  return (
    <ImageContext.Provider value={value}>
      <Heading>
        <Title>Find your image</Title>
        <InputSearch />
      </Heading>
      <Main>
        <ImageList />
      </Main>
      <Footing />
    </ImageContext.Provider>
  );
}

export default App;
