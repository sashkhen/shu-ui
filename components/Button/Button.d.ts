import { default as React } from '../../../node_modules/react';
type BaseProps = Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "data-testid" | "ref">;
export type ButtonProps = BaseProps & {
    variant?: "solid" | "filled" | "outlined" | "text" | "link";
    size?: "small" | "medium" | "large";
    shape?: "default" | "circle" | "round";
    raised?: boolean;
    loading?: boolean;
    disabled?: boolean;
    block?: boolean;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
