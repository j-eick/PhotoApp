import { ImageContext } from "../App";
import { SearchButton, StyledInput } from "../globalStyles/";
import { useContext, useState } from "react";

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
    if (e.key == "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${
          import.meta.env.VITE_Unsplash_ACCESS_KEY
        }`
      );
      setSearchValue("");
    }
  };

  return (
    <>
      <label htmlFor="search">What are you looking for?</label>
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
        looky looky
      </SearchButton>
    </>
  );
};

export default InputSearch;
