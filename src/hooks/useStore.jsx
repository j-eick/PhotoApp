import { create } from "zustand";

const useGlobal = create((set) => {
  return {
    storedPhotos: [],
    allSearchQueries: [],
    // clickedPicInStore: [],

    isModalOpen: false,

    addToSearchQueries(newQuery) {
      set((state) => {
        return { allSearchQueries: [...state.allSearchQueries, newQuery] };
      });
    },
    addPhotosToGlobalstore(fetchedPics) {
      set((state) => {
        return { storedPhotos: [...state.storedPhotos, fetchedPics] };
      });
    },
  };
});

export default useGlobal;
