import styled, { keyframes } from "styled-components";

const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map(() => <StyledSkeletonDiv />);
};

export default Skeleton;

const pulsating = keyframes`
    0% {
      background-color: #d9d9d9;
    }
    50% {      
      background-color: #b4b4b4;
    }
    100% {
      background-color: #d9d9d9;

    }
`;
const StyledSkeletonDiv = styled.div`
  background-color: #c3c3c3;
  border-radius: 10px;
  height: 134px;
  width: 200px;
  animation: ${pulsating} 2s infinite;
`;
