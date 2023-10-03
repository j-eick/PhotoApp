import { createGlobalStyle, styled } from "styled-components";
import keyframes from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --fontsize_CloseButton_PreviewModal: 1.75em;
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

/*********************************************************
 * HEADING, MAIN, Footer
 */
export const Heading = styled.header`
  height: 20vh;
  display: grid;
  place-items: center;

  background-color: #274472;
`;
export const StyledMain = styled.main`
  min-height: 70vh;

  margin: 2px 0;

  background-color: #3677b3;
`;
export const Footer = styled.footer`
  height: 10vh;
  display: grid;
  place-items: center;

  background-color: #41729f;
`;

/*********************************************************
 * INPUTs, BUTTONS
 */
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
`;

export const Styled_CloseModal_Button = styled.button`
  position: absolute;
  top: 50px;
  right: 50px;

  border: none;
  background: none;

  padding: 5px 20px;

  font-size: var(--fontsize_CloseButton_PreviewModal);

  &:hover {
    cursor: pointer;
  }
`;

/*********************************************************
 * LISTS
 */
export const StyledUL = styled.ul`
  padding: 50px;

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
  border-radius: 15px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    cursor: pointer;
  }
`;
export const StyledImg_Modal = styled.img`
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export default GlobalStyle;
