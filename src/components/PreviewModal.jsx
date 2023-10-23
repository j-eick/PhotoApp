import styled from "styled-components";
import media from "../breakpoints";
import CloseModal_Button from "./Buttons/CloseModal_Button";

const PreviewModal = ({ clickedPic, onClick }) => {
  // console.log(clickedPic);
  return (
    <StyledModalContainer onClick={onClick}>
      <CloseModal_Button />
      <StyledImg_Modal
        src={clickedPic.urls.small}
        alt={clickedPic.alt_description}
      />
    </StyledModalContainer>
  );
};

export default PreviewModal;

const StyledModalContainer = styled.div`
  position: absolute;
  top: 0px;

  display: grid;
  place-items: center;

  /* padding: 10px; */
  width: 100vw;
  min-height: 100vh;
  z-index: 100;

  display: grid;
  place-items: center;
  backdrop-filter: blur(5px);
  background-color: rgb(244, 244, 244, 0.85);
`;

const StyledImg_Modal = styled.img`
  object-fit: scale-down;

  ${media.xs`
    width: 80%;
  `}
`;
