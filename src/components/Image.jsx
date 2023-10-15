import styled from "styled-components";
import media from "../breakpoints";

const Image = ({ data, onClick }) => {
  return (
    <StyledImg
      src={data.urls.thumb}
      alt={data.alt_description}
      onClick={onClick}
    />
  );
};

export default Image;

export const StyledImg = styled.img`
  height: 10rem;
  width: 15rem;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 0.75px solid white;

  flex-grow: 1;

  &:hover {
    cursor: pointer;
  }
`;
