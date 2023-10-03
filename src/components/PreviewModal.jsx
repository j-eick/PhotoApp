import styled from "styled-components";
import { StyledImg_Modal } from "../globalStyles";
import CloseModal_Button from "./Buttons/CloseModal_Button";

const PreviewModal = ({ clickedPic, onClick }) => {
  // console.log(clickedPic);
  return (
    <StyledPreviewModal onClick={onClick}>
      <CloseModal_Button />
      <StyledImg_Modal
        src={clickedPic.urls.small}
        alt={clickedPic.alt_description}
      />
    </StyledPreviewModal>
  );
};

export default PreviewModal;

const StyledPreviewModal = styled.div`
  position: absolute;

  display: grid;
  place-items: center;
  backdrop-filter: blur(10px);
  height: 100%;
  width: 100%;
  background-color: rgb(244, 244, 244, 0.8);
`;
