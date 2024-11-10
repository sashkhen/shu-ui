import clsx from "clsx";
import React from "react";

import { Loader } from "../Loader";
import styles from "./Button.module.scss";
import theme from "./Theme.module.scss";

/**
 * todo:
 * - check icon/position
 * - clean up stories
 */

type BaseProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "data-testid" | "ref"
>;

export type ButtonProps = BaseProps & {
  size?: "small" | "medium" | "large";
  loading?: boolean; // todo: implement loader; replace children with loader
  // icon?: ReactNode;
  // iconPosition?: 'start' | 'end';
  variant?: "solid" | "filled" | "outlined" | "text" | "link";
  raised?: boolean;
  shape?: "default" | "circle" | "round"; // ??
  block?: boolean;
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
      className={clsx(styles.root, theme.vars, className)}
      disabled={disabled}
      data-shu-size={size}
      data-shu-shape={shape}
      data-shu-variant={variant}
      data-shu-raised={raised}
      data-shu-block={block}
      data-shu-loading={loading}
      {...props}
    >
      {loading ? <Loader size="small" className={styles.loader} /> : null}
      <span className={styles.content}>{children}</span>
    </button>
  );
};

export default Button;
