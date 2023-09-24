import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
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
  const { isLoading, data, isError } = useQuery({
    queryKey: ["mockData"],
    queryFn: () => {
      return axios({
        method: "get",
        url: "https://api.unsplash.com/photos?page=1",
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

  if (isLoading) {
    return <div>is Loading</div>;
  }

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
          {data.data.map((e) => (
            <StyledLI key={e.id}>
              <StyledImg src={e.urls?.thumb} alt="" />
            </StyledLI>
          ))}
        </StyledUL>
      </MainContent>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
