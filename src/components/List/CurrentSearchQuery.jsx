import styled from "styled-components";
import List from "./";

const CurrentSearchQuery = () => {
  return (
    <Styled_CurrentSearchQuery_List>
      <ul>List of SearchQueries</ul>
    </Styled_CurrentSearchQuery_List>
  );
};

export default CurrentSearchQuery;

const Styled_CurrentSearchQuery_List = styled(List)``;
