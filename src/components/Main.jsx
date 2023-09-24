import PropTypes from "prop-types";

const Main = ({ children }) => {
  return <div>{children}</div>;
};

Main.propTypes = {
  children: PropTypes.object,
};

export default Main;
