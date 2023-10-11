import styled from "styled-components";
import { PiCopyright } from "react-icons/pi";

const Footing = () => {
  const year = new Date().getFullYear();

  return (
    <Footer>
      <FooterContainer>
        <PiCopyright />
        <p>{year}</p>
      </FooterContainer>
    </Footer>
  );
};

export default Footing;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7vh;

  border-top: 2px solid white;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  background-color: #41729f;
`;

export const FooterContainer = styled.div`
  position: relative;
  display: flex;
  gap: 5px;

  padding: 1.5rem;
`;
