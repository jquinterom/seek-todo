import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner", () => {
  it("renders a loading spinner", () => {
    render(<LoadingSpinner />);

    const spinner = screen.getByRole("progressbar");
    expect(spinner).toBeInTheDocument();
  });

  it("renders a loading spinner with a size", () => {
    render(<LoadingSpinner size={50} />);

    const spinner = screen.getByRole("progressbar");
    expect(spinner).toHaveStyle("width: 50px; height: 50px;");
  });

  it("renders a loading spinner with a color", () => {
    render(<LoadingSpinner color="border-red-500" />);

    const spinner = screen.getByRole("progressbar");
    expect(spinner).toHaveClass("border-red-500");
  });
});
