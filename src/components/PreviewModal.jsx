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
  padding: 10px;
  /* height: 100vh; */
  width: 100%;
  height: calc(100vh-20vh-7vh);
  z-index: 100;

  display: grid;
  place-items: center;
  backdrop-filter: blur(10px);
  background-color: rgb(244, 244, 244, 0.8);
`;

const StyledImg_Modal = styled.img`
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  ${media.xs`
    width: 80%;
  `}
`;
