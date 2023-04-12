import PropTypes from "prop-types";
import Icon from "../Icon";
import "./Button.css";

/**
 * This is a React component for rendering a button with optional icons and customizable styles.
 * @returns A React functional component named "Button" is being returned. It takes in several props
 * such as children, variant, size, startIcon, endIcon, disableShadow, and disabled. It renders a
 * button element with the appropriate class names based on the props passed in, and also renders
 * startIcon and endIcon if they are provided.
 */
export default function Button({
  label,
  variant,
  size,
  startIcon,
  endIcon,
  color,
  ...props
}) {
  const [buttonClassName, iconClassName] = createClassNames({
    variant,
    size,
    color,
  });

  const drawStartIcon = startIcon ? (
    <Icon additionalClaseName={iconClassName}>{startIcon}</Icon>
  ) : (
    ""
  );
  const drawEndIcon = endIcon ? (
    <Icon additionalClaseName={iconClassName}>{endIcon}</Icon>
  ) : (
    ""
  );

  return (
    <button className={buttonClassName} {...props}>
      {drawStartIcon}
      {label}
      {drawEndIcon}
    </button>
  );
}

/**
 * The function creates a list of class names based on input parameters for a button component in a
 * React application.
 * @returns An array containing two strings: `buttonClassName` and `iconClassName`.
 */
function createClassNames({ variant, size, color }) {
  const buttonClassNames = ["button"];
  const iconClassNames = [];

  buttonClassNames.push(`button--variant-${variant}`);

  buttonClassNames.push(`button--size-${size}`);

  buttonClassNames.push(`button--color-${color}`);
  iconClassNames.push(`icon--color-${color}`);

  const buttonClassName = buttonClassNames.join(" ");
  const iconClassName = iconClassNames.join(" ");

  return [buttonClassName, iconClassName];
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "text", "circule", "fullwidth"])
    .isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  color: PropTypes.oneOf(["default", "primary", "danger"]).isRequired,
};

Button.defaultProps = {
  label: "default",
  variant: "default",
  size: "md",
  color: "default",
};
