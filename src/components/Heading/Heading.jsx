import styled from "styled-components";
import media from "../../breakpoints";

const Heading = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Heading;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;

  display: grid;
  place-items: center;
  border-bottom: 2px solid white;

  /* opacity: 0.4; */

  background-color: #274472;

  /* Breaking Point: max-width 319px */
  ${media.err`
  height: 20vh;
  `}

  /* Breaking Point: min-width 320px */
  ${media.xs`
  height: 20vh;
`}

  /* Breaking Point: min-width 768px */
  ${media.sm`
  height: 20vh;
  
  /* font-size: var(--fontsize_PageTitle600px); */
`}
`;
