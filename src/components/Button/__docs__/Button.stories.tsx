import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {},
};

export const Raised: Story = {
  args: {
    raised: true,
  },
};

export const Disabled: Story = {
  args: {
    raised: true,
    disabled: true,
  },
};

export const Rounded: Story = {
  args: {
    shape: "round",
  },
};

export const Circle: Story = {
  args: {
    shape: "circle",
    children: "++",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
