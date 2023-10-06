import { Footer, Footer_Container } from "../globalStyles";
import { PiCopyright } from "react-icons/pi";

const Footing = () => {
  const year = new Date().getFullYear();

  return (
    <Footer>
      <Footer_Container>
        <PiCopyright />
        {year}
      </Footer_Container>
    </Footer>
  );
};

export default Footing;
