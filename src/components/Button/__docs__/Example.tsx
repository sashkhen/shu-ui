import React, { FC } from "react";

import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          justifyItems: "center",
          alignItems: "center",
          gap: 16,
          marginBottom: 16,
        }}
      >
        <Button
          variant="solid"
          onClick={onClick}
          disabled={disabled}
          size="small"
          {...props}
        >
          {children || "Solid"}
        </Button>
        <Button
          variant="outlined"
          onClick={onClick}
          disabled={disabled}
          size="small"
          {...props}
        >
          {children || "Outlined"}
        </Button>
        <Button
          variant="filled"
          onClick={onClick}
          disabled={disabled}
          size="small"
          {...props}
        >
          {children || "Filled"}
        </Button>
        <Button
          variant="text"
          onClick={onClick}
          disabled={disabled}
          size="small"
          {...props}
        >
          {children || "Text"}
        </Button>
        <Button
          variant="link"
          onClick={onClick}
          disabled={disabled}
          size="small"
          {...props}
        >
          {children || "Link"}
        </Button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          justifyItems: "center",
          alignItems: "center",
          gap: 16,
          marginBottom: 16,
        }}
      >
        <Button
          variant="solid"
          onClick={onClick}
          disabled={disabled}
          size="medium"
          {...props}
        >
          {children || "Solid"}
        </Button>
        <Button
          variant="outlined"
          onClick={onClick}
          disabled={disabled}
          size="medium"
          {...props}
        >
          {children || "Outlined"}
        </Button>
        <Button
          variant="filled"
          onClick={onClick}
          disabled={disabled}
          size="medium"
          {...props}
        >
          {children || "Filled"}
        </Button>
        <Button
          variant="text"
          onClick={onClick}
          disabled={disabled}
          size="medium"
          {...props}
        >
          {children || "Text"}
        </Button>
        <Button
          variant="link"
          onClick={onClick}
          disabled={disabled}
          size="medium"
          {...props}
        >
          {children || "Link"}
        </Button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          justifyItems: "center",
          alignItems: "center",
          gap: 16,
          marginBottom: 16,
        }}
      >
        <Button
          variant="solid"
          onClick={onClick}
          disabled={disabled}
          size="large"
          {...props}
        >
          {children || "Solid"}
        </Button>
        <Button
          variant="outlined"
          onClick={onClick}
          disabled={disabled}
          size="large"
          {...props}
        >
          {children || "Outlined"}
        </Button>
        <Button
          variant="filled"
          onClick={onClick}
          disabled={disabled}
          size="large"
          {...props}
        >
          {children || "Filled"}
        </Button>
        <Button
          variant="text"
          onClick={onClick}
          disabled={disabled}
          size="large"
          {...props}
        >
          {children || "Text"}
        </Button>
        <Button
          variant="link"
          onClick={onClick}
          disabled={disabled}
          size="large"
          {...props}
        >
          {children || "Link"}
        </Button>
      </div>
    </>
  );
};

export default Example;
