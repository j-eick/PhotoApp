import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import mockdata from "./lib/mockdata.json";
import axios from "axios";
import {
  Header,
  MainContent,
  Footer,
  SearchButton,
  InputField,
  StyledUL,
  StyledLI,
} from "./globalStyles";

console.clear();

function App() {
  const { isLoading, data, error } = useQuery({
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

  // const mock = [
  //   {
  //     id: "1",
  //     title: "The Secret Garden",
  //     author: "Eleanor Green",
  //     tags: ["gardening", "mystery", "magic"],
  //   },
  //   {
  //     id: "2",
  //     title: "Lost in Time",
  //     author: "Samuel Turner",
  //     tags: ["time travel", "adventure", "historical"],
  //   },
  // ];

  // const postsQuery = useQuery({
  //   queryKey: ["mockdata"],
  //   queryFn: () => wait(1000).then(() => [...mock]),
  // });

  // if (postsQuery.isLoading) return <h1>is loading...</h1>;
  // if (postsQuery.isError)
  //   return <pre>{JSON.stringify(postsQuery.isError)}</pre>;

  // const wait = (duration) => {
  //   return new Promise((resolve) => setTimeout(resolve, duration));
  // };

  // axios({
  //   method: "get",
  //   url: "https://rickandmortyapi.com/api/location",
  //   responseType: "json",
  // }).then((res) => {
  //   const names = res.data.results;
  //   console.log(names.names);
  // });

  // useEffect(() => {
  //   try {
  //     fetchPics();
  //     console.log(img.data?.links?.http);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

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
              <div>{e.id}</div>
              <img src={e.urls?.thumb} alt="" />
            </StyledLI>
          ))}
          {/* {postsQuery.data.map((data) => (
            <StyledLI key={data.id}>
              <ul>
                <li>{data.title}</li>
                <li>{data.author}</li>
                <li>{data.tags}</li>
              </ul>
            </StyledLI>
          ))} */}
        </StyledUL>
      </MainContent>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
