import { createGlobalStyle, styled } from "styled-components";
// Supports weights 300-700
import "@fontsource-variable/quicksand";
// Supports weights 100-900
import "@fontsource-variable/montserrat";

const GlobalStyle = createGlobalStyle`
:root {
  /* FONT-SIZES */

  /* min-with 320px */
  --fontsize_PageTitle320px: clamp(1.5rem, 6.5vw, 2.25rem );

  /* min-with 600px */
  --fontsize_PageTitle600px: 2rem;
  --fontsize_CloseButton_PreviewModal: 1.75rem;

  /* FONTS */
  --font_quicksand300: 300;
  --font_quicksand400: 400;
  --font_quicksand500: 500;
}

  * {
      box-sizing: border-box;
      padding: 0%;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
      list-style: none;
  }

  html {
    font-size: 16px;
  }

  body {
    min-height: 100vh;
  }
`;

/*********************************************************
 * HEADING, MAIN, Footer
 */

export const StyledMain = styled.main`
  padding: 20px;
  margin: 2px 0;

  background-color: #3677b3;
`;
export const Footer = styled.footer`
  height: calc(100% - 73vh - 20vh);

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  background-color: #41729f;
`;

export const Footer_Container = styled.div`
  padding: 2rem;

  display: flex;
  gap: 5px;
`;

/*********************************************************
 * MODALS, BACKDROP
 */
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
 * INPUTs, BUTTONS
 */

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
  height: 100%;

  /* width: 80vw; */

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
  height: 10rem;
  width: 15rem;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 0.75px solid white;

  &:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
