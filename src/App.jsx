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
import useFetchPhotos from "./hooks/useFetchPhotos";

console.clear();

function App() {
  const { isLoading, data, isError } = useFetchPhotos();

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
