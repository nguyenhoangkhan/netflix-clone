import PropTypes from "prop-types";
import "./GlobalStyles.scss";
const GlobalStyles = (props) => {
  return props.children;
};

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
