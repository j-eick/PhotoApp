import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --fontsize_CloseButton_PreviewModal: 1.5 em;
}

  * {
      box-sizing: border-box;
      padding: 0%;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
      list-style: none;
  }
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 120px;
`;
export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(240, 240, 240, 0.744);
  backdrop-filter: blur(10px);

  height: 100%;
  width: 100vw;
`;
export const CloseModal_Button = styled.button`
  position: absolute;
  top: -26.5px;
  right: 0px;

  padding: 5px 20px;
  border: 1px solid black;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  font-size: var(--fontsize_CloseButton_PreviewModal);
`;

export const Header = styled.header`
  height: 20vh;
  display: grid;
  place-items: center;

  background-color: lightcoral;
`;
export const MainContent = styled.main`
  background-color: lightcyan;
`;
export const Footer = styled.footer`
  height: 10vh;
  display: grid;
  place-items: center;

  background-color: burlywood;
`;
export const StyledInput = styled.input`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;
export const SearchButton = styled.button`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;
export const StyledUL = styled.ul`
  padding: 30px;
  height: 100%;

  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;

  background-color: cyan;
`;
export const StyledLI = styled.li`
  display: grid;
  place-items: center;
  flex-grow: 1;
`;
export const StyledImg = styled.img`
  object-fit: cover;

  &:hover {
    cursor: pointer;
  }
`;

export const CloseDialogButton = styled.button``;

export default GlobalStyle;
