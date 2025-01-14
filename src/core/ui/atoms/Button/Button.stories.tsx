import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

const meta = {
  title: "atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    typeButton: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    typeButton: "secondary",
    children: "Secondary",
  },
};

export const Outline: Story = {
  args: {
    typeButton: "outline",
    children: "Outline",
  },
};

export const Danger: Story = {
  args: {
    typeButton: "danger",
    children: "Danger",
  },
};

export const Link: Story = {
  args: {
    typeButton: "link",
    children: "Link",
  },
};

export const Ghost: Story = {
  args: {
    typeButton: "ghost",
    children: "Ghost",
  },
};
