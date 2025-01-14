import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import LoginTemplate from "./LoginTemplate";

const meta = {
  title: "templates/LoginTemplate",
  component: LoginTemplate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LoginTemplate>;

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
