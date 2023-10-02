import { ImageContext } from "../App";
import { SearchButton, StyledInput } from "../globalStyles/";
import { useContext, useState } from "react";
import styled from "styled-components";

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData } = useContext(ImageContext);

  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${
        import.meta.env.VITE_Unsplash_ACCESS_KEY
      }`
    );
    setSearchValue("");
  };

  const handleEnterSearch = (e) => {
    if (e.key == "Enter" && searchValue != "") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${
          import.meta.env.VITE_Unsplash_ACCESS_KEY
        }`
      );
      setSearchValue("");
    }
  };

  return (
    <StyledWrapper>
      <StyledInput
        type="search"
        name="search"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleEnterSearch}
      />
      <SearchButton
        type="button"
        disabled={!searchValue}
        onClick={handleButtonSearch}
      >
        look!
      </SearchButton>
    </StyledWrapper>
  );
};

export default InputSearch;

const StyledWrapper = styled.div`
  width: 40%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;
