import { Meta, StoryObj } from "@storybook/react";
import FormInputTask from "./FormInputTask";
import { fn } from "@storybook/test";

const meta = {
  title: "organisms/FormInputTask",
  component: FormInputTask,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FormInputTask>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onSubmit: fn(),
    text: "Hello world!",
    onChange: fn(),
  },
};
