import {
  StyledUL,
  StyledLI,
  StyledModal,
  CloseModal_Button,
  ModalBackdrop,
} from "../globalStyles";
import { useState, useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import PreviewModal from "./PreviewModal";

console.clear();

const ImageList = () => {
  const { response, isLoading } = useContext(ImageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <StyledUL>
        {isModalOpen && <PreviewModal />}
        {response.map((data, id) => (
          <StyledLI key={id}>
            <Image data={data} onClick={() => setIsModalOpen(true)} />
          </StyledLI>
        ))}
      </StyledUL>
    </>
  );
};

export default ImageList;
