import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("renders a checkbox", () => {
    render(
      <Checkbox
        id="checkbox"
        text="Hello, world!"
        checked={false}
        onChange={() => {}}
      />
    );

    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("renders a checkbox with a label", () => {
    render(
      <Checkbox
        id="checkbox"
        text="Hello, world!"
        checked={false}
        onChange={() => {}}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();

    const label = screen.getByText("Hello, world!");
    expect(label).toBeInTheDocument();
  });

  it("renders a checkbox with a checked state", () => {
    render(
      <Checkbox
        id="checkbox"
        text="Hello, world!"
        checked
        onChange={() => {}}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });
});
