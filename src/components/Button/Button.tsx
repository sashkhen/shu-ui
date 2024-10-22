import React, { MouseEventHandler } from "react";

import styles from "./Button.module.scss";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <button
      className={styles.root}
      type="button"
      onClick={onClick}
      data-primary={primary}
      disabled={disabled}
      data-size={size}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
