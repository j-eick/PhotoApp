// import {
//   StyledUL,
//   StyledLI,
//   StyledImg,
//   StyledModal,
//   CloseModal_Button,
//   ModalBackdrop,
// } from "../globalStyles";
// import { useState, useEffect } from "react";

// console.clear();

// const FetchedImages = () => {
//   const [defaultPicArray, setDefaultPicArray] = useState();
//   const [pageNumber, setPageNumber] = useState(1);
//   const [selectedPic, setSelectedPic] = useState("");
//   const [showPreviewModal, setShowPreviewModal] = useState(false);

//   useEffect(() => {
//     setDefaultPicArray(data);
//   }, [data]);

//   // console.log(data?.data);
//   // console.log(pageNumber);

//   // console.log("pics data:");
//   console.log(defaultPicArray);

//   // console.log("pics array:");
//   // console.log(defaultPicArray?.data);

//   /**
//    * Compares the altdescription of clicked img and finds the img
//    * with the same altdescription.
//    * (clicked img event doesn't provide the ID...)
//    *
//    * @param {e} event clickdata from img
//    */
//   const handleClickPreview = (event) => {
//     // compare clicked img.alt_descriptions
//     const clickedPic = event.target;
//     defaultPicArray.data.forEach((loopedPic) => {
//       if (loopedPic.alt_description === clickedPic.alt) {
//         setSelectedPic(loopedPic.urls.small);
//       }
//     });
//   };

//   return (
//     <>
//       <StyledUL onClick={handleClickPreview}>
//         {showPreviewModal ? (
//           <>
//             <ModalBackdrop onClick={() => setShowPreviewModal(false)} />
//             <StyledModal>
//               <CloseModal_Button onClick={() => setShowPreviewModal(false)}>
//                 Close
//               </CloseModal_Button>
//               <StyledImg src={selectedPic} alt="" />
//             </StyledModal>
//           </>
//         ) : null}

//         {data?.data.map((e) => (
//           <StyledLI key={e.id}>
//             <StyledImg
//               src={e.urls?.thumb}
//               alt={e.alt_description}
//               onClick={() => setShowPreviewModal(true)}
//             />
//           </StyledLI>
//         ))}
//       </StyledUL>
//       <button
//         onClick={() => {
//           setPageNumber((page) => page - 1);
//           console.log(pageNumber);
//         }}
//         disabled={pageNumber === 1}
//       >
//         Prev
//       </button>
//       <button
//         onClick={() => {
//           setPageNumber((page) => page + 1);
//           console.log(pageNumber);
//         }}
//       >
//         Next
//       </button>
//     </>
//   );
// };

// export default FetchedImages;
