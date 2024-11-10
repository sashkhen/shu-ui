import React, { FC } from "react";

import Loader, { LoaderProps } from "../Loader";

const Example: FC<LoaderProps> = ({ size, block, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Loader size={size} block={block} {...props} />
    </div>
  );
};

export default Example;
