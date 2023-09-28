// import useFetchPhotos from "./hooks/useFetchPhotos";
import {
  StyledUL,
  StyledLI,
  StyledImg,
  StyledDialog,
  CloseDialogButton,
} from "../globalStyles";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

console.clear();

const FetchedImages = () => {
  const [picArray, setPicArray] = useState();
  const [selectedPic, setSelectedPic] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const dialogModal = useRef();

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

  useEffect(() => {
    setPicArray(data);
  }, [data]);

  // console.log(data?.data);
  // console.log(pageNumber);

  // console.log("pics data:");
  console.log(picArray);

  // console.log("pics array:");
  // console.log(picArray?.data);

  /**
   * Compares the altdescription of clicked img and finds the img
   * with the same altdescription.
   * (clicked img event doesn't provide the ID...)
   *
   * @param {event} clickData
   */
  const handleClickPreview = (event) => {
    const clickedPic = event.target;
    // forEach thru picArray
    picArray.data.forEach((loopedPic) => {
      // console.log(loopedPic.alt_description);
      console.log(loopedPic);
      if (loopedPic.alt_description === clickedPic.alt) {
        setSelectedPic(loopedPic.urls.small);
      }
    });
  };

  /**
   * Dialog closes when user clicks outside dialog field.
   *
   * @param {e} clickEvent
   */
  const handleModalListener = (e) => {
    const dialogWindow = dialogModal.current.getBoundingClientRect();
    if (
      e.clientX < dialogWindow.left ||
      e.clientX > dialogWindow.right ||
      e.clientY < dialogWindow.top ||
      e.clientY > dialogWindow.bottom
    ) {
      dialogModal.current.close();
    }
  };

  return (
    <>
      <StyledUL onClick={handleClickPreview}>
        <StyledDialog ref={dialogModal} onClick={handleModalListener}>
          <StyledImg src={selectedPic} alt="" />
        </StyledDialog>
        {data?.data.map((e) => (
          <StyledLI key={e.id}>
            {/* {console.log(e.id)} */}
            <StyledImg
              src={e.urls?.thumb}
              alt={e.alt_description}
              onClick={() => dialogModal.current.showModal()}
            />
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
      >
        Next
      </button>
    </>
  );
};

export default FetchedImages;
