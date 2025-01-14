import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  beforeEach(() => {
    render(<IconButton icon={<div>Hello, world!</div>} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders an icon button", () => {
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });

  it("renders an icon button with a loading state", () => {
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-500");
  });
});
