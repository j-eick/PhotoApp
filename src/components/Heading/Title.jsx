import styled from "styled-components";
import media from "../../breakpoints";

const Title = () => {
  return <StyledH1>Find your image</StyledH1>;
};

export default Title;

export const StyledH1 = styled.h1`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  font-family: "Montserrat Variable";
  font-weight: 300;
  font-size: var(--fontsize_PageTitle320px);
  color: #3f8ed7;

  ${media.xs`
  font-size: var(--fontsize_PageTitle320px);
  `}
`;
