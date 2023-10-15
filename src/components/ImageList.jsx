import styled from "styled-components";
import { useState, useContext, createContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import PreviewModal from "./PreviewModal";
import CloseModal_Button from "./Buttons/CloseModal_Button";

console.clear();

export const PreviewModalContext = createContext();

const ImageList = () => {
  const { response, isLoading } = useContext(ImageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPic, setClickedPic] = useState("");

  const handleImageClick = (clickEvent) => {
    try {
      setIsModalOpen(true);
      // find clicked Photo
      const clickedPic = response.find(
        (target) => target.alt_description === clickEvent.target?.alt
      );
      setClickedPic(clickedPic);
    } catch (err) {
      console.log(err);
    }
  };

  // const value = {
  //   isModalOpen,
  //   setIsModalOpen,
  // };

  return (
    // <PreviewModalContext.Provider value={value}>
    <>
      {/* {isModalOpen && (
        <PreviewModal
          onClick={() => setIsModalOpen(false)}
          clickedPic={clickedPic}
        >
          <CloseModal_Button onClick={() => setIsModalOpen(false)} />
        </PreviewModal>
      )} */}
      <StyledUL>
        {response.map((data, id) => (
          <StyledLI key={id}>
            <Image data={data} onClick={handleImageClick} />
          </StyledLI>
        ))}
      </StyledUL>
    </>
    // </PreviewModalContext.Provider>
  );
};

export default ImageList;

export const StyledUL = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;

  padding: 40px 20px 40px 20px;

  margin-top: 20vh;
  margin-bottom: 7vh;
`;
export const StyledLI = styled.li`
  display: grid;
  place-items: center;
`;
