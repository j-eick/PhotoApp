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

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: repeat(auto-fill, minmax(auto, 1fr)); */

  /* justify-content: center;
  flex-wrap: wrap; */
  gap: 20px;

  background-color: cyan;
`;
export const StyledLI = styled.li`
  display: grid;
  place-items: center;

  /* border: 1px solid black; */
`;
export const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

export default GlobalStyle;
