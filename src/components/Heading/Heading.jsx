import styled from "styled-components";
import media from "../../breakpoints";

const Heading = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Heading;

export const StyledHeader = styled.header`
  /* Breaking Point: min-width 320px */
  ${media.xs`
  height: 20vh;
  width: 100%;
  display: grid;
  place-items: center;

  background-color: #274472;
`}

  /* Breaking Point: min-width 600px */
  ${media.sm`
  height: 20vh;
  width: 100%;
  display: grid;
  place-items: center;
  
  /* font-size: var(--fontsize_PageTitle600px); */
  background-color: red;
`}
`;
