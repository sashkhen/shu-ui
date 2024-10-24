import React, { FC } from "react";

import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  primary = true,
  size = "medium",
  children = "Button",
  ...props
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Button
          size={size}
          disabled={disabled}
          onClick={onClick}
          primary={primary}
          {...props}
        >
          {children}
        </Button>
      </div>
      <h2>Variations</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Button variant="solid">Solid</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="filled">Filled</Button>
        <Button variant="text">Text</Button>
        <Button variant="link">Link</Button>
      </div>
      <h2>Primary</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Button primary variant="solid">
          Solid
        </Button>
        <Button primary variant="outlined">
          Outlined
        </Button>
        <Button primary variant="filled">
          Filled
        </Button>
        <Button primary variant="text">
          Text
        </Button>
        <Button primary variant="link">
          Link
        </Button>
      </div>
      <h2>Danger</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Button danger variant="solid">
          Solid
        </Button>
        <Button danger variant="outlined">
          Outlined
        </Button>
        <Button danger variant="filled">
          Filled
        </Button>
        <Button danger variant="text">
          Text
        </Button>
        <Button danger variant="link">
          Link
        </Button>
      </div>
      <h2>Rounded</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Button shape="round" variant="solid">
          Solid
        </Button>
        <Button shape="round" variant="outlined">
          Outlined
        </Button>
        <Button shape="round" variant="filled">
          Filled
        </Button>
        <Button shape="round" variant="text">
          Text
        </Button>
        <Button shape="round" variant="link">
          Link
        </Button>
      </div>
    </>
  );
};

export default Example;
