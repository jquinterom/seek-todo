import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { FiLogOut } from "react-icons/fi";

const meta = {
  title: "atoms/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: <FiLogOut size={20} />,
    typeButton: "primary",
  },
};

export const Secondary: Story = {
  args: {
    icon: <FiLogOut size={20} />,
    typeButton: "secondary",
  },
};

export const Outline: Story = {
  args: {
    icon: <FiLogOut size={20} />,
    typeButton: "outline",
  },
};

export const Danger: Story = {
  args: {
    icon: <FiLogOut size={20} />,
    typeButton: "danger",
  },
};

export const Link: Story = {
  args: {
    icon: <FiLogOut size={20} />,
    typeButton: "link",
  },
};

export const Ghost: Story = {
  args: {
    icon: <FiLogOut size={20} />,
    typeButton: "ghost",
  },
};
