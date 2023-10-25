import styled from "styled-components";

const CloseModal_Button = ({ onClick }) => {
  return (
    <Styled_CloseModal_Button onClick={onClick}>close</Styled_CloseModal_Button>
  );
};

export default CloseModal_Button;

const Styled_CloseModal_Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  border: none;
  outline: none;
  background: none;

  padding: 5px 20px;

  font-size: var(--fontsize_CloseButton_PreviewModal);

  &:hover {
    cursor: pointer;
  }
`;
