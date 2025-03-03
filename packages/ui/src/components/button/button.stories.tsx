import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    ghost: {
      type: "boolean",
    },
    size: {
      type: "select",
      options: [2, 3, 4],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>Edit Profile</Button>,
};
