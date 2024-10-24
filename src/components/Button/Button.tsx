import clsx from "clsx";
import React from "react";

import styles from "./Button.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  // "data-testid" | "ref"
  "ref"
>;

export type ButtonProps = BaseProps & {
  primary?: boolean;
  danger?: boolean;
  size?: "small" | "medium" | "large";
  loading?: boolean; // todo: implement loader; replace children with loader
  // icon?: ReactNode;
  // iconPosition?: 'start' | 'end';
  variant?: "solid" | "filled" | "outlined" | "text" | "link";
  shape?: "default" | "circle" | "round"; // ??
  block?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  primary,
  danger,
  disabled,
  block,
  shape = "default",
  variant = "solid",
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      data-testid="Button"
      className={clsx(styles.root, block && styles.block, className)}
      disabled={disabled}
      data-color={danger ? "danger" : primary ? "primary" : "default"}
      data-size={size}
      data-shape={shape}
      data-variant={variant}
      {...props}
    />
  );
};

export default Button;
