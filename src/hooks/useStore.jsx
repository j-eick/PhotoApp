import { create } from "zustand";

const useGlobal = create((set) => {
  return {
    storedPhotos: [],
    allSearchQueries: [],
    clickedPicInStore: [],

    isModalOpen: false,

    addToSearchQuery(newQuery) {
      set((state) => {
        return { allSearchQueries: [...state.allSearchQueries, newQuery] };
      });
    },
    addPhotosToGlobalstore(fetchedPics) {
      set(() => {
        return { storedPhotos: fetchedPics };
      });
    },
  };
});

export default useGlobal;
