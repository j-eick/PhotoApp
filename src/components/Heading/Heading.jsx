import styled from "styled-components";

const Heading = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Heading;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 20vh;
  z-index: 50;

  display: grid;
  place-items: center;
  border-bottom: 2px solid white;

  /* opacity: 0.4; */

  background-color: #274472;
`;
