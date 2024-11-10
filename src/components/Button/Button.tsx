import clsx from "clsx";
import React from "react";

import { Loader } from "../Loader";
import styles from "./Button.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "data-testid" | "ref"
>;

export type ButtonProps = BaseProps & {
  variant?: "solid" | "filled" | "outlined" | "text" | "link";
  size?: "small" | "medium" | "large";
  shape?: "default" | "circle" | "round";
  raised?: boolean;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  // icon?: ReactNode;
  // iconPosition?: 'start' | 'end';
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  disabled = false,
  block = false,
  shape = "default",
  variant = "solid",
  raised = false,
  loading = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      data-testid="Button"
      className={clsx(styles.root, className)}
      disabled={disabled}
      data-shu-variant={variant}
      data-shu-size={size}
      data-shu-shape={shape}
      data-shu-raised={raised}
      data-shu-loading={loading}
      data-shu-block={block}
      {...props}
    >
      {loading ? <Loader size="small" className={styles.loader} /> : null}
      <span className={styles.content}>{children}</span>
    </button>
  );
};

export default Button;
