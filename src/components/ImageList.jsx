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
import Skeleton from "./Skeleton";
import PreviewModal from "./PreviewModal";

console.clear();

const ImageList = () => {
  const { response, isLoading } = useContext(ImageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <StyledUL>
        {isModalOpen && <PreviewModal />}
        {isLoading ? (
          <Skeleton item={10} />
        ) : (
          response.map((data, key) => (
            <StyledLI key={key}>
              <Image data={data} onClick={() => setIsModalOpen(true)} />
            </StyledLI>
          ))
        )}
      </StyledUL>
    </>
  );
};

export default ImageList;
