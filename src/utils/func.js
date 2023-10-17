export const findPictureinArray = (clickedPicture, response, clickEvent) => {
  clickedPicture = response.find(
    (target) => target.alt_description === clickEvent.target?.alt
  );
  return clickedPicture;
};
