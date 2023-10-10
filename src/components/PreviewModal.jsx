import styled from "styled-components";
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
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  padding: 10px;

  display: grid;
  place-items: center;
  backdrop-filter: blur(10px);
  height: 80vh;
  width: 90vw;
  background-color: rgb(244, 244, 244, 0.8);
`;

const StyledImg_Modal = styled.img`
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;
