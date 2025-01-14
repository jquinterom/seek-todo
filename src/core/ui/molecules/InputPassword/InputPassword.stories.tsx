import { Meta, StoryObj } from "@storybook/react";
import { InputPassword } from "./InputPassword";
import { fn } from "@storybook/test";

const meta = {
  title: "molecules/InputPassword",
  component: InputPassword,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "Input",
    onChange: fn(),
    id: "password",
  },
};
