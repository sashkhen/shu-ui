import { default as React } from '../../../node_modules/react';
type BaseProps = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "data-testid" | "ref">;
export type LoaderProps = BaseProps & {
    size?: "small" | "medium" | "large";
    block?: boolean;
};
declare const Loader: React.FC<LoaderProps>;
export default Loader;
