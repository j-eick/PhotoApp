import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      padding: 0%;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
      list-style: none;
  }
`;

export const StyledDialog = styled.dialog`
  transform: translate(0, -50%);
  top: 50%;
  margin: 0 auto;

  border: none;
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
export const InputField = styled.input`
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

  display: flex;
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
