import { ImageContext } from "../../App";
import { useContext, useState } from "react";
import styled from "styled-components";
import media from "../../breakpoints";

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData } = useContext(ImageContext);

  console.log(searchValue);

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
        placeholder="Search image"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleEnterSearch}
      />
      <SearchButton
        type="button"
        disabled={!searchValue}
        onClick={handleButtonSearch}
      >
        search
      </SearchButton>
    </StyledWrapper>
  );
};

export default InputSearch;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 ************  INPUT  *************
 */
export const StyledInput = styled.input`
  padding-left: 10px;
  height: 2.5em;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  background-color: #eeeeee;

  border: none;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: white;
    cursor: pointer;
  }

  /* SCREEN-SIZE__XS__min320px */
  ${media.xs`
  width: clamp(20vw, 30vw, 200px);

  padding-left: 10px;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  `}
`;

/**
 ************  SEARCH-BUTTON  *************
 */
export const SearchButton = styled.button`
  width: 20%;
  height: 2.5em;

  border: none;
  background-color: #3f8ed7;
  cursor: pointer;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  color: ${({ disabled }) => (!disabled == "" ? "#4771b4" : "#274472")};

  /* &:hover {
    outline: ${({ searchValue }) =>
    searchValue === "" ? `none` : `1px solid white`};
  } */

  ${media.xs`
    height: 2.5em;

    width: clamp(10vw, 15vw, 100px);
  `}
`;
