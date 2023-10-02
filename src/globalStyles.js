import { createGlobalStyle, styled } from "styled-components";
import keyframes from "styled-components";

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

export const Heading = styled.header`
  height: 20vh;
  display: grid;
  place-items: center;

  background-color: #274472;
`;
export const StyledMain = styled.main`
  min-height: 70vh;

  background-color: #5885af;
`;
export const Footer = styled.footer`
  height: 10vh;
  display: grid;
  place-items: center;

  background-color: #41729f;
`;
export const StyledInput = styled.input`
  height: 3.5em;
  width: 60%;

  padding-left: 10px;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const glowing_button = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

export const SearchButton = styled.button`
  width: 30%;
  height: 3.5em;

  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing_button} 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  /* border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px; */
`;
export const StyledUL = styled.ul`
  padding: 30px;
  /* height: 100%; */

  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
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
