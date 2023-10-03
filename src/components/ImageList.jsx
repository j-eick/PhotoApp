import { StyledUL, StyledLI } from "../globalStyles";
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
      console.log("click: ");
      console.log(clickedPic);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    isModalOpen,
    setIsModalOpen,
  };

  return (
    <PreviewModalContext.Provider value={value}>
      <StyledUL>
        {isModalOpen && (
          <PreviewModal
            onClick={() => setIsModalOpen(false)}
            clickedPic={clickedPic}
          >
            <CloseModal_Button onClick={() => setIsModalOpen(false)} />
          </PreviewModal>
        )}
        {response.map((data, id) => (
          <StyledLI key={id}>
            <Image data={data} onClick={handleImageClick} />
          </StyledLI>
        ))}
      </StyledUL>
    </PreviewModalContext.Provider>
  );
};

export default ImageList;
