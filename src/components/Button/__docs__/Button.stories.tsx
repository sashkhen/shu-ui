import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    children: "Primary",
    primary: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
