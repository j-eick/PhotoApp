import { useState } from "react";
import FetchedImages from "./components/FetchedImages";
import {
  Header,
  MainContent,
  Footer,
  SearchButton,
  InputField,
} from "./globalStyles";

console.clear();

function App() {
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
        <FetchedImages />
      </MainContent>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
