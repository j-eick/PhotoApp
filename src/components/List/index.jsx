import styled from "styled-components";

const List = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default List;

const StyledDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
