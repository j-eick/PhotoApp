## PhotoApp via unsplash API

This app is a work in progress to showcase usage of the unsplash api.

### 0. TechStack

- Vite React
- Zustand
- Axios

### 1. Getting started

Clone the repo and start the server via `npm run dev`.

As soon as this project is deployed to vercel, a link to the live demo can be found in the top right.

### 2. Usage

Upon starting things up, users can enter terms of their liking and thereby make their photo request.
After entering their first search term, a continuous list of all entered search terms is displayed.

### 3. Most crucial parts

##### 1. Fetching from unsplash api

```javascript
const useFetchPhotos = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data.results);
    } catch (err) {
      setIsError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response,
    isLoading,
    isError,
    fetchData: (url) => fetchData(url),
  };
};
```

##### 2. Making fetched photos and search queries globally availabe

```javascript
const useGlobal = create((set) => {
  return {
    allSearchQueries: [],
    // storedPhotos: [],       yet to be implemented
    // clickedPicInStore: [],  yet to be implemented

    // isModalOpen: false,

    addToSearchQueries(newQuery) {
      set((state) => {
        return { allSearchQueries: [...state.allSearchQueries, newQuery] };
      });
    },
    // addPhotosToGlobalstore(fetchedPics) {
    //   set((state) => {
    //     return { storedPhotos: [...state.storedPhotos, fetchedPics] };
    //   });
    // },
  };
});
´´´
```

### 4. Screenshot

![](public/screen1.png)
