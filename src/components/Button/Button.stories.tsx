import type { Meta, StoryObj } from "@storybook/react";

import { FC, PropsWithChildren } from "react";

import Button from "./Button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

const BlockTemplate: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "50vw", textAlign: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export const Block: Story = {
  ...BlockTemplate,
  args: {
    children: "Button",
    block: true,
  },
};

const FlexRow: FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      marginBottom: 16,
      display: "flex",
      gap: 16,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

const Separator = () => (
  <span
    style={{
      width: 1,
      height: 16,
      backgroundColor: "rgba(0,0,0,.2)",
    }}
  />
);

const VariantTemplate: Story = {
  render: ({ variant, children, ...args }) => {
    return (
      <FlexRow>
        <Button variant="solid" {...args}>
          Solid
        </Button>
        <Button variant="outlined" {...args}>
          Outlined
        </Button>
        <Button variant="filled" {...args}>
          Filled
        </Button>
        <Button variant="text" {...args}>
          Text
        </Button>
        <Button variant="link" {...args}>
          Link
        </Button>
        <Separator />
        <Button variant={variant} {...args}>
          {children}
        </Button>
      </FlexRow>
    );
  },
};

export const Variant: Story = {
  ...VariantTemplate,
  args: {
    children: "Button",
  },
};

const SizeTemplate: Story = {
  render: ({ size, children, ...args }) => {
    return (
      <FlexRow>
        <Button size="small" {...args}>
          Small
        </Button>
        <Button size="medium" {...args}>
          Medium
        </Button>
        <Button size="large" {...args}>
          Large
        </Button>
        <Separator />
        <Button size={size} {...args}>
          {children}
        </Button>
      </FlexRow>
    );
  },
};

export const Size: Story = {
  ...SizeTemplate,
  args: {
    children: "Button",
  },
};

const ShapeTemplate: Story = {
  render: ({ shape, children, ...args }) => {
    return (
      <FlexRow>
        <Button shape="default" {...args}>
          Default
        </Button>
        <Button shape="round" {...args}>
          Rounded
        </Button>
        <Button shape="circle" {...args}>
          ++
        </Button>
        <Separator />
        <Button shape={shape} {...args}>
          {children}
        </Button>
      </FlexRow>
    );
  },
};

export const Shape: Story = {
  ...ShapeTemplate,
  args: {
    children: "Button",
  },
};

const RaisedTemplate: Story = {
  render: ({ raised, ...args }) => {
    return (
      <>
        <FlexRow>
          <Button raised={false} variant="solid" {...args}>
            Solid
          </Button>
          <Button raised={false} variant="outlined" {...args}>
            Outlined
          </Button>
          <Button raised={false} variant="filled" {...args}>
            Filled
          </Button>
          <Button raised={false} variant="text" {...args}>
            Text
          </Button>
          <Button raised={false} variant="link" {...args}>
            Link
          </Button>
        </FlexRow>
        <FlexRow>
          <Button raised={raised} variant="solid" {...args}>
            Solid
          </Button>
          <Button raised={raised} variant="outlined" {...args}>
            Outlined
          </Button>
          <Button raised={raised} variant="filled" {...args}>
            Filled
          </Button>
          <Button raised={raised} variant="text" {...args}>
            Text
          </Button>
          <Button raised={raised} variant="link" {...args}>
            Link
          </Button>
        </FlexRow>
      </>
    );
  },
};

export const Raised: Story = {
  ...RaisedTemplate,
  args: {
    raised: true,
  },
};

const LoadingTemplate: Story = {
  render: ({ loading, ...args }) => {
    return (
      <>
        <FlexRow>
          <Button loading={false} variant="solid" {...args}>
            Solid
          </Button>
          <Button loading={false} variant="outlined" {...args}>
            Outlined
          </Button>
          <Button loading={false} variant="filled" {...args}>
            Filled
          </Button>
          <Button loading={false} variant="text" {...args}>
            Text
          </Button>
          <Button loading={false} variant="link" {...args}>
            Link
          </Button>
        </FlexRow>
        <FlexRow>
          <Button loading={loading} variant="solid" {...args}>
            Solid
          </Button>
          <Button loading={loading} variant="outlined" {...args}>
            Outlined
          </Button>
          <Button loading={loading} variant="filled" {...args}>
            Filled
          </Button>
          <Button loading={loading} variant="text" {...args}>
            Text
          </Button>
          <Button loading={loading} variant="link" {...args}>
            Link
          </Button>
        </FlexRow>
      </>
    );
  },
};

export const Loading: Story = {
  ...LoadingTemplate,
  args: {
    loading: true,
  },
};

const DisabledTemplate: Story = {
  render: ({ disabled, ...args }) => {
    return (
      <>
        <FlexRow>
          <Button disabled={false} variant="solid" {...args}>
            Solid
          </Button>
          <Button disabled={false} variant="outlined" {...args}>
            Outlined
          </Button>
          <Button disabled={false} variant="filled" {...args}>
            Filled
          </Button>
          <Button disabled={false} variant="text" {...args}>
            Text
          </Button>
          <Button disabled={false} variant="link" {...args}>
            Link
          </Button>
        </FlexRow>
        <FlexRow>
          <Button disabled={disabled} variant="solid" {...args}>
            Solid
          </Button>
          <Button disabled={disabled} variant="outlined" {...args}>
            Outlined
          </Button>
          <Button disabled={disabled} variant="filled" {...args}>
            Filled
          </Button>
          <Button disabled={disabled} variant="text" {...args}>
            Text
          </Button>
          <Button disabled={disabled} variant="link" {...args}>
            Link
          </Button>
        </FlexRow>
      </>
    );
  },
};

export const Disabled: Story = {
  ...DisabledTemplate,
  args: {
    disabled: true,
  },
};
