import styled from "styled-components";
import { PiCopyright } from "react-icons/pi";

const Footing = () => {
  const year = new Date().getFullYear();

  return (
    <Footer>
      <StyledUL>
        <li>
          <PiCopyright />
        </li>
        <li>
          <p>{year}</p>
        </li>
      </StyledUL>
    </Footer>
  );
};

export default Footing;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7vh;

  border-top: 2px solid white;

  /* opacity: 0.4; */

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  background-color: #41729f;
`;
const StyledUL = styled.ul`
  display: flex;

  padding-right: 2rem;
`;
