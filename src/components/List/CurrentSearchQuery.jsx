import styled from "styled-components";
import { nanoid } from "nanoid";
import List from "./";
import useGlobal from "../../hooks/useStore";

const CurrentSearchQuery = () => {
  const allSearchQueries = useGlobal((state) => state.allSearchQueries);
  const storedPhotos = useGlobal((state) => state.storedPhotos);

  // console.log(storedPhotos);

  return (
    <Styled_CurrentSearchQuery_List>
      {allSearchQueries.length !== 0 ? (
        <StyledP>previous queries</StyledP>
      ) : null}
      <StyledUL>
        {allSearchQueries.map((query) => (
          <StyledLI key={nanoid()} onClick={null}>
            {query}
          </StyledLI>
        ))}
      </StyledUL>
    </Styled_CurrentSearchQuery_List>
  );
};

export default CurrentSearchQuery;

const Styled_CurrentSearchQuery_List = styled(List)`
  background-color: grey;
`;
const StyledUL = styled.ul`
  padding-bottom: 10px;

  display: flex;
  gap: 10px;
`;
const StyledLI = styled.li`
  padding: 2px 7px;

  border-radius: 5px;

  background: #feffff;
  font-size: var(--fontsize_smallFontw320px);
  color: #7296b8;

  &:hover {
    cursor: pointer;
  }
`;
const StyledP = styled.p`
  padding-bottom: 5px;

  font-size: 1rem;
  color: #3f8ed7;
`;
