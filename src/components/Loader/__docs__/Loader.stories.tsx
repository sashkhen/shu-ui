import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Loader",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const MainStory: Story = {
  args: {
    size: "medium",
  },
};
