import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import { fn } from "@storybook/test";

const meta = {
  title: "atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    id: "checkbox",
    text: "Checkbox",
    checked: true,
    onChange: fn(),
    classNameLabel: "",
  },
};

export const Unchecked: Story = {
  args: {
    id: "checkbox",
    text: "Checkbox",
    checked: false,
    onChange: fn(),
    classNameLabel: "",
  },
};
