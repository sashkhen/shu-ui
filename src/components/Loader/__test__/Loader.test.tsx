import "@testing-library/jest-dom";

import React from "react";
import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";

import Loader from "../Loader";

describe("Loader component", () => {
  it("Loader should render correctly", () => {
    render(<Loader />);
    const el = screen.getByTestId("Loader");
    expect(el).toBeInTheDocument();
  });
});
