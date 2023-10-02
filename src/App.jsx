import { createContext } from "react";
import { Header, MainContent, Footer } from "./globalStyles";
import useFetchPhotos from "./hooks/useFetchPhotos";
import ImageList from "./components/ImageList";
import InputSearch from "./components/InputSearch";

console.clear();

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
      <Header>
        <h1>PhotoApp</h1>
        <InputSearch />
      </Header>
      <MainContent>
        <ImageList />
      </MainContent>
      <Footer>Footer</Footer>
    </ImageContext.Provider>
  );
}

export default App;
