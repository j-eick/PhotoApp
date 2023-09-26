// import useFetchPhotos from "./hooks/useFetchPhotos";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import {
  Header,
  MainContent,
  Footer,
  SearchButton,
  InputField,
  StyledUL,
  StyledLI,
  StyledImg,
} from "./globalStyles";

console.clear();

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, data, isError } = useQuery({
    queryKey: ["mockData"],
    queryFn: () => {
      return axios({
        method: "get",
        url: `https://api.unsplash.com/photos?page=${pageNumber}`,
        headers: {
          Authorization: `Client-ID ${
            import.meta.env.VITE_Unsplash_ACCESS_KEY
          }`,
        },
        responseType: "json",
      });
    },
  });

  console.log(data?.data);
  console.log(pageNumber);

  return (
    <>
      <Header>
        <h1>PhotoApp</h1>
        <div>
          <InputField type="search" />
          <SearchButton>looky looky</SearchButton>
        </div>
      </Header>
      <MainContent>
        <StyledUL>
          {isLoading && <h1>Things happening</h1>}
          {data?.data.map((e) => (
            <StyledLI key={e.id}>
              <StyledImg src={e.urls?.thumb} alt="" />
            </StyledLI>
          ))}
        </StyledUL>
        <button
          onClick={() => {
            setPageNumber((page) => page - 1);
            console.log(pageNumber);
          }}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setPageNumber((page) => page + 1);
            console.log(pageNumber);
          }}
          // disabled={pageNumber === 1}
        >
          Next
        </button>
      </MainContent>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
