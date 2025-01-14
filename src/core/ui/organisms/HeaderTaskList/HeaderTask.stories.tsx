import { Meta, StoryObj } from "@storybook/react";
import HeaderTaskList from "./HeaderTaskList";
import { fn } from "@storybook/test";

const meta = {
  title: "organisms/HeaderTaskList",
  component: HeaderTaskList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HeaderTaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "user",
    },
    logout: fn(),
  },
};
