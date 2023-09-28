// import useFetchPhotos from "./hooks/useFetchPhotos";
import {
  StyledUL,
  StyledLI,
  StyledImg,
  StyledModal,
  CloseModal_Button,
  ModalBackdrop,
} from "../globalStyles";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";

console.clear();

const FetchedImages = () => {
  const [picArray, setPicArray] = useState();
  const [selectedPic, setSelectedPic] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

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
   * @param {e} event clickdata from img
   */
  const handleClickPreview = (event) => {
    // compare clicked img.alt_descriptions
    const clickedPic = event.target;
    picArray.data.forEach((loopedPic) => {
      if (loopedPic.alt_description === clickedPic.alt) {
        setSelectedPic(loopedPic.urls.small);
      }
    });
  };

  return (
    <>
      <StyledUL onClick={handleClickPreview}>
        {showPreviewModal ? (
          <>
            <ModalBackdrop onClick={() => setShowPreviewModal(false)} />
            <StyledModal>
              <CloseModal_Button onClick={() => setShowPreviewModal(false)}>
                Close
              </CloseModal_Button>
              <StyledImg src={selectedPic} alt="" />
            </StyledModal>
          </>
        ) : null}

        {data?.data.map((e) => (
          <StyledLI key={e.id}>
            <StyledImg
              src={e.urls?.thumb}
              alt={e.alt_description}
              onClick={() => setShowPreviewModal(true)}
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
