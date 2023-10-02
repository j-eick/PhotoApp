import styled from "styled-components";

const PreviewModal = ({ children }) => {
  return <StyledPreviewModal>{children}</StyledPreviewModal>;
};

export default PreviewModal;

const StyledPreviewModal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: aliceblue;
`;
