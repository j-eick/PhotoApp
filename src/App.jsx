import { createContext, useState } from "react";
import styled from "styled-components";
import useFetchPhotos from "./hooks/useFetchPhotos";

import Heading from "./components/Heading/Heading";
import ImageList from "./components/ImageList";
import InputSearch from "./components/Heading/InputSearch";
import Footing from "./components/Footing";
import Title from "./components/Heading/Title";
import PreviewModal from "./components/PreviewModal";
import CloseModal_Button from "./components/Buttons/CloseModal_Button";

export const ImageContext = createContext();

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPic, setClickedPic] = useState("");

  const { response, isLoading, isError, fetchData } = useFetchPhotos(
    `search/photos?page=1&query=office&client_id=${
      import.meta.env.VITE_Unsplash_ACCESS_KEY
    }`
  );

  const value = {
    response,
    isLoading,
    isError,
    fetchData,
  };
  console.log(isModalOpen);

  return (
    <ImageContext.Provider value={value}>
      <PageContainer>
        <Heading>
          <Title>Find your image</Title>
          <InputSearch />
        </Heading>

        <ImageList />

        <Footing />
      </PageContainer>
    </ImageContext.Provider>
  );
}

export default App;

const PageContainer = styled.div`
  min-height: 100%;
  position: relative;

  background-color: #7097bb;
`;
