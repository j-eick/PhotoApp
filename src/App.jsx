import {
  Header,
  MainContent,
  Footer,
  SearchButton,
  InputField,
} from "./globalStyles";
import useFetchPhotos from "./hooks/useFetchPhotos";

console.clear();

function App() {
  const { response, isLoading, isError, fetchData } = useFetchPhotos(
    `search/photos?page=1&query=office&client_id=${
      import.meta.VITE_Unsplash_ACCESS_KEY
    }`
  );
  console.log(response);

  return (
    <>
      <Header>
        <h1>PhotoApp</h1>
        <div>
          <InputField type="search" />
          <SearchButton>looky looky</SearchButton>
        </div>
      </Header>
      <MainContent>{/* <FetchedImages /> */}</MainContent>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
