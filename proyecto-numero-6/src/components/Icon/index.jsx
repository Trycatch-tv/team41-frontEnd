import PropTypes from "prop-types";
import "./Icon.css";

export default function Icon({ children, additionalClaseName, color }) {
  const className = `material-icons-round ${additionalClaseName} icon--color-${color}`;
  return <span className={className}>{children}</span>;
}

Icon.propTypes = {
  children: PropTypes.string.isRequired,
  additionalClaseName: PropTypes.string,
  color: PropTypes.oneOf(["default", "black"]).isRequired,
};

Icon.defaultProps = {
  color: "default",
};
