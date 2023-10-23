import { createContext, useState } from "react";
import { findPictureinArray } from "./utils/func";
import styled from "styled-components";
import useFetchPhotos from "./hooks/useFetchPhotos";

import Heading from "./components/Heading/Heading";
import ImageList from "./components/ImageList";
import InputSearch from "./components/Heading/InputSearch";
import Footing from "./components/Footing";
import Title from "./components/Heading/Title";
import PreviewModal from "./components/PreviewModal";
import CloseModal_Button from "./components/Buttons/CloseModal_Button";
import { FocusOn } from "react-focus-on";
import CurrentSearchQuery from "./components/List/CurrentSearchQuery";

export const ImageContext = createContext();

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPic, setClickedPic] = useState("");
  const [currentSearchQuery, setCurrentSearchQuery] = useState("");

  const { response, isLoading, isError, fetchData } = useFetchPhotos(
    `search/photos?page=1&query=office&client_id=${
      import.meta.env.VITE_Unsplash_ACCESS_KEY
    }`
  );

  const handleImageClick = (clickEvent) => {
    try {
      setIsModalOpen(true);
      // find clicked Photo
      // const clickedPicture = response.find(
      //   (target) => target.alt_description === clickEvent.target?.alt
      // );
      const clickedPicture = findPictureinArray(
        clickedPic,
        response,
        clickEvent
      );
      setClickedPic(clickedPicture);
      console.log(clickedPic);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    response,
    isLoading,
    isError,
    fetchData,
  };

  return (
    <ImageContext.Provider value={value}>
      <PageContainer>
        <Heading>
          <Title>Find your image</Title>
          <InputSearch />
          <CurrentSearchQuery />
        </Heading>
        {/* =====  PHOTO-MODAL  ===== */}
        {isModalOpen && (
          <FocusOn>
            <PreviewModal
              onClick={() => setIsModalOpen(false)}
              clickedPic={clickedPic}
            >
              <CloseModal_Button onClick={() => setIsModalOpen(false)} />
            </PreviewModal>
          </FocusOn>
        )}
        {/* =====  PHOTO-MODAL  ===== */}
        <ImageList onCLick={handleImageClick} />

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
