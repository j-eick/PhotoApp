import styled from "styled-components";
import { useState, useContext, createContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import PreviewModal from "./PreviewModal";
import CloseModal_Button from "./Buttons/CloseModal_Button";

console.clear();

export const PreviewModalContext = createContext();

const ImageList = ({ onCLick }) => {
  const { response, isLoading } = useContext(ImageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPic, setClickedPic] = useState("");

  return (
    <>
      <StyledUL>
        {response.map((data, id) => (
          <StyledLI key={id}>
            <Image data={data} onClick={onCLick} />
          </StyledLI>
        ))}
      </StyledUL>
    </>
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
