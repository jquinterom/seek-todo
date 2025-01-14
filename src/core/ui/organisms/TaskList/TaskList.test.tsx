import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";
import { TaskModel } from "@/core/models/TaskModel";
import userEvent from "@testing-library/user-event";

const tasks: TaskModel[] = [
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
];

const toggleTask = jest.fn();
const handleSetTaskToUpdate = jest.fn();
const handleRemove = jest.fn();
const toggleTaskToInProgress = jest.fn();

const user = userEvent.setup();

describe("TaskList Component", () => {
  beforeEach(() => {
    render(
      <TaskList
        tasks={tasks}
        loading={true}
        toggleTask={toggleTask}
        handleSetTaskToUpdate={handleSetTaskToUpdate}
        handleRemove={handleRemove}
        toggleTaskToInProgress={toggleTaskToInProgress}
      />
    );
  });

  it("should render the TaskList component", () => {
    const list = screen.getByTestId("task-list");
    expect(list).toBeInTheDocument();

    const task1 = screen.getByText("Task 1");
    const task2 = screen.getByText("Task 2");
    const task3 = screen.getByText("Task 3");

    expect(task1).toBeInTheDocument();
    expect(task2).toBeInTheDocument();
    expect(task3).toBeInTheDocument();
  });

  it("should render the TaskList component with loading", () => {
    const list = screen.getByTestId("task-list");
    expect(list).toBeInTheDocument();

    const task1 = screen.getByText("Task 1");
    const progress = screen.getByRole("progressbar");

    expect(task1).toBeInTheDocument();
    expect(progress).toBeInTheDocument();
  });

  it("should render the TaskList component with checkbox", () => {
    const list = screen.getByTestId("task-list");
    expect(list).toBeInTheDocument();

    const checkboxes = screen.getAllByTestId("checkbox");

    expect(checkboxes).toHaveLength(3);
  });

  it("should render the TaskList component with update button", async () => {
    const list = screen.getByTestId("task-list");
    expect(list).toBeInTheDocument();

    const button = screen.getAllByTestId("update-button");

    await user.click(button[1]);

    expect(handleSetTaskToUpdate).toHaveBeenCalled();
  });

  it("should render the TaskList component with delete button", async () => {
    const list = screen.getByTestId("task-list");
    expect(list).toBeInTheDocument();

    const button = screen.getAllByTestId("delete-button");
    expect(button).toHaveLength(3);

    await user.click(button[2]);

    expect(handleRemove).toHaveBeenCalled();
  });

  it("should render the TaskList component with play button", async () => {
    const list = screen.getByTestId("task-list");

    expect(list).toBeInTheDocument();

    const button = screen.getAllByTestId("play-button");
    expect(button).toHaveLength(1);

    await user.click(button[0]);

    expect(toggleTaskToInProgress).toHaveBeenCalled();
  });

  it("should render the TaskList component clicking on the checkbox", async () => {
    const list = screen.getByTestId("task-list");
    const user = userEvent.setup();

    expect(list).toBeInTheDocument();

    const checkbox = screen.getAllByTestId("checkbox");
    expect(checkbox).toHaveLength(3);

    await user.click(checkbox[1]);

    expect(toggleTask).toHaveBeenCalled();
  });
});
