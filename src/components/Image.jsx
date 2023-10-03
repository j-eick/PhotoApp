import { StyledImg } from "../globalStyles";

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
