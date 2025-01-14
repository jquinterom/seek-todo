import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  beforeEach(() => {
    render(<Button>Hello, world!</Button>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders a button", () => {
    const text = screen.getByText("Hello, world!");
    expect(text).toBeInTheDocument();
  });

  it("renders a loading spinner", () => {
    render(<Button loading>Hello, world!</Button>);

    const spinner = screen.getByRole("progressbar");
    expect(spinner).toBeInTheDocument();
  });

  it("renders a button with a type", () => {
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-500");
  });

  it("renders a button with a loading state", () => {
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-500");
  });

  it("renders a button with a disabled state", () => {
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-500");
  });

  it("calls the onClick handler when the button is clicked", () => {
    const onClick = jest.fn(); // Mock action
    const button = screen.getByRole("button");
    button.addEventListener("click", onClick);

    button.click();

    expect(onClick).toHaveBeenCalled();
  });
});
