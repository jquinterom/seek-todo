import { Meta, StoryObj } from "@storybook/react";
import FormLogin from "./FormLogin";
import { fn } from "@storybook/test";

const meta = {
  title: "organisms/FormLogin",
  component: FormLogin,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FormLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    handleSubmit: fn(),
    loading: false,
    email: "john.doe@example.com",
    password: "password",
    setEmail: fn(),
    setPassword: fn(),
  },
};
