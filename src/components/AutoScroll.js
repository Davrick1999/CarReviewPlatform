import React from "react";
import "./Button.css";

const STYLES = ["btn-primary", "btn-outline", "btn--test"];

const SIZES = ["btn-medium", "btn-large"];

export const AutoScroll = ({
  children,
  href,
  type,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <a href={href} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};