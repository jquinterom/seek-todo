import { Meta, StoryObj } from "@storybook/react";
import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";

const meta = {
  title: "molecules/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            This is a title on the Header
          </CardTitle>
        </CardHeader>

        <CardDescription className="text-center text-gray-500">
          This is a description
        </CardDescription>

        <CardContent> This is a content </CardContent>

        <CardFooter> This is a footer </CardFooter>
      </>
    ),
  },
  render: (args) => <Card {...args} className="w-full max-w-md max-h-screen" />,
};
