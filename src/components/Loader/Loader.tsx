import clsx from "clsx";
import React from "react";

import styles from "./Loader.module.scss";
import theme from "./Theme.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >,
  "data-testid" | "ref"
>;

export type LoaderProps = BaseProps & {
  size?: "small" | "medium" | "large";
  block?: boolean;
};

const Loader: React.FC<LoaderProps> = ({
  size = "medium",
  block = false,
  className,
  ...props
}) => {
  return (
    <span
      data-testid="Loader"
      className={clsx(styles.root, theme.vars, className)}
      data-shu-size={size}
      data-shu-block={block}
      {...props}
    >
      {Array.from(Array(3)).map((_, i) => (
        <span key={i} className={styles.dot} />
      ))}
    </span>
  );
};

export default Loader;
