import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TaskList from "./TaskList";

const meta = {
  title: "organisms/TaskList",
  component: TaskList,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-h-screen p-4">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tasks: [
      {
        id: 1,
        text: "Task 1",
        status: "pending",
      },
      {
        id: 2,
        text: "Task 2",
        status: "completed",
      },
      {
        id: 3,
        text: "Task 3",
        status: "in-progress",
      },
    ],
    loading: false,
    toggleTask: fn(),
    handleSetTaskToUpdate: fn(),
    handleRemove: fn(),
    toggleTaskToInProgress: fn(),
  },
};
